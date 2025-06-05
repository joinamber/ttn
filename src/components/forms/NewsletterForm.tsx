
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { newsletterSchema } from '@/lib/validation';
import { checkRateLimit } from '@/lib/security';

/**
 * Newsletter subscription form component with enhanced security
 */
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    try {
      newsletterSchema.parse({ email });
      setError('');
      return true;
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Invalid email');
      return false;
    }
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    if (!email || !validateEmail(email)) {
      return;
    }

    // Rate limiting check
    const userSession = 'newsletter-session'; // In production, use actual user session or IP
    if (!checkRateLimit(userSession, 2, 300000)) { // 2 requests per 5 minutes
      toast({
        title: "Too many requests",
        description: "Please wait before subscribing again.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const { data, error } = await supabase.functions.invoke('subscription-email', {
        body: { email: email.trim().toLowerCase() }
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
      toast({
        title: "Subscription failed",
        description: "Could not process your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
      <div className="flex">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          className={`w-full bg-gray-800 rounded-l-md px-4 py-2 text-white focus:outline-none ${
            error ? 'border border-red-500' : ''
          }`}
          required
          maxLength={254}
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md transition disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Subscribe'}
        </button>
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
};

export default NewsletterForm;
