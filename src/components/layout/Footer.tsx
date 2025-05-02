
import { Globe, Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">The Trailblazer Network</span>
            </div>
            <p className="text-gray-400 mb-6">
              Helping DTC brands develop products and launch globally.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ttn.collective" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://shorturl.at/ZdkF3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Rednote</span>
                <img 
                  src="/lovable-uploads/7a414524-66ea-4e1d-83bb-dc57e6caa890.png" 
                  alt="Rednote" 
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Product Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Global Market Entry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Growth Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Team Extension</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition">Case Studies</Link></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest insights on global market trends.</p>
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
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 TTN Global. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
