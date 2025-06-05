
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

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Rate limiting storage
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (identifier: string, maxRequests = 3, windowMs = 300000): boolean => {
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

const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
};

const validateContactForm = (data: any): ContactFormData | null => {
  if (!data || typeof data !== 'object') return null;
  
  const { name, email, company, message } = data;
  
  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length === 0) return null;
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!message || typeof message !== 'string' || message.trim().length < 10) return null;
  
  // Validate lengths
  if (name.length > 100 || email.length > 254 || message.length > 2000) return null;
  if (company && (typeof company !== 'string' || company.length > 100)) return null;
  
  // Validate patterns
  if (!/^[a-zA-Z\s\-']+$/.test(name)) return null;
  if (company && !/^[a-zA-Z0-9\s\-'&.]+$/.test(company)) return null;
  
  return {
    name: sanitizeInput(name),
    email: email.trim().toLowerCase(),
    company: company ? sanitizeInput(company) : undefined,
    message: sanitizeInput(message)
  };
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
    const formData = validateContactForm(rawData);

    if (!formData) {
      return new Response(
        JSON.stringify({ error: "Invalid form data" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, company, message } = formData;

    // Send notification email to site owner
    const notificationResponse = await resend.emails.send({
      from: "Trailblazer <info@gotrailblazer.cc>",
      to: ["info@gotrailblazer.cc"], 
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to the person who submitted the form
    const confirmationResponse = await resend.emails.send({
      from: "Trailblazer <info@gotrailblazer.cc>",
      to: [email],
      subject: "Thank You for Contacting Us",
      html: `
        <h1>Thank You for Reaching Out!</h1>
        <p>Dear ${name},</p>
        <p>Thank you for contacting us. We've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>The Trailblazer Team</p>
      `,
    });

    console.log("Email sent successfully:", { notificationResponse, confirmationResponse });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-email function:", error);
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
