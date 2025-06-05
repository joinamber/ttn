
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
};

interface SubscriptionData {
  email: string;
}

// Rate limiting storage
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (identifier: string, maxRequests = 2, windowMs = 300000): boolean => {
  const now = Date.now();
  const current = rateLimitStore.get(identifier);
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
};

const validateEmail = (email: any): string | null => {
  if (!email || typeof email !== 'string') return null;
  
  const trimmedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 254) {
    return null;
  }
  
  return trimmedEmail;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded" }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const rawData = await req.json();
    const email = validateEmail(rawData?.email);

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
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
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
