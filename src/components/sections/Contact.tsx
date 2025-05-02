
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from '@/components/ui/sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      
      // Replace these with your actual EmailJS service, template, and user IDs
      // You'll need to sign up at emailjs.com and create these
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      const formData = new FormData(formRef.current);
      const templateParams = {
        from_name: formData.get('name'),
        reply_to: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
        to_email: 'info@gotrailblazer.cc'
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Message sent successfully! We'll be in touch soon.");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 relative inline-block">
              Let's Talk
              <div className="absolute -bottom-3 left-0 w-full">
                <svg className="w-full h-2" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5C40 -1 150 -1 199 5" stroke="#bfa094" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="max-w-md">
                <p className="text-lg text-foreground/70 mb-8">
                  Ready to launch your brand globally? Contact us to discuss how we can help you succeed in new markets.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-warm-700 mt-1" />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-foreground/70">info@gotrailblazer.cc</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-warm-700 mt-1" />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-foreground/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Globe className="w-5 h-5 text-warm-700 mt-1" />
                    <div>
                      <h3 className="font-medium">Locations</h3>
                      <p className="text-foreground/70">New York • London • Singapore • Tokyo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-warm-50 p-8 rounded-lg shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      className="border-warm-200 focus:border-warm-400" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="Your email" 
                      className="border-warm-200 focus:border-warm-400" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <Input 
                    id="company" 
                    name="company"
                    placeholder="Your company" 
                    className="border-warm-200 focus:border-warm-400" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="How can we help you?" 
                    className="min-h-[120px] border-warm-200 focus:border-warm-400" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-warm-700 hover:bg-warm-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
