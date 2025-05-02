
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Start Your Global Journey</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Ready to launch your brand globally? Contact us to discuss how we can help you succeed in new markets.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-foreground/70">hello@ttn-global.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Locations</h3>
                    <p className="text-foreground/70">New York • London • Singapore • Tokyo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company</label>
                <Input id="company" placeholder="Your company" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
