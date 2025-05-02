
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SubscriptionData {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: SubscriptionData = await req.json();
    const { email } = formData;

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to the subscriber
    const confirmationResponse = await resend.emails.send({
      from: "Trailblazer <info@gotrailblazer.cc>",
      to: [email],
      subject: "Newsletter Subscription Confirmation",
      html: `
        <h1>Thank You for Subscribing!</h1>
        <p>You're now subscribed to The Trailblazer Network newsletter.</p>
        <p>We'll keep you updated with our latest insights on global market trends.</p>
        <p>Best regards,<br>The Trailblazer Team</p>
      `,
    });

    // Send notification email to site owner
    const notificationResponse = await resend.emails.send({
      from: "Trailblazer <info@gotrailblazer.cc>",
      to: ["info@gotrailblazer.cc"],
      subject: "New Newsletter Subscription",
      html: `
        <h1>New Newsletter Subscription</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p>A new user has subscribed to the newsletter.</p>
      `,
    });

    console.log("Emails sent successfully:", { confirmationResponse, notificationResponse });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in subscription-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
