
import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email must be less than 254 characters'),
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s\-'&.]+$/, 'Company name contains invalid characters')
    .optional(),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
});

// Newsletter subscription validation schema
export const newsletterSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email must be less than 254 characters')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
