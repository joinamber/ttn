
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

/**
 * Newsletter subscription form component
 * Handles email submission to Supabase function
 */
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) return;
    
    try {
      setIsSubmitting(true);
      
      const { data, error } = await supabase.functions.invoke('subscription-email', {
        body: { email }
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
      console.error("Failed to subscribe:", error);
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
    <form onSubmit={handleSubscribe} className="flex">
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-gray-800 rounded-l-md px-4 py-2 text-white focus:outline-none"
        required
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md transition"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default NewsletterForm;
