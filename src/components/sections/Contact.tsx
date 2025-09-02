import { Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
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
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-foreground/70 mb-12">
              Ready to launch your brand globally? Contact us to discuss how we can help you succeed in new markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto">
              <div className="flex flex-col items-center gap-4 p-6">
                <Mail className="w-6 h-6 text-warm-700" />
                <div className="text-center">
                  <h3 className="font-medium mb-2">Email Us</h3>
                  <p className="text-foreground/70">info@gotrailblazer.cc</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-6">
                <Globe className="w-6 h-6 text-warm-700" />
                <div className="text-center">
                  <h3 className="font-medium mb-2">Locations</h3>
                  <p className="text-foreground/70">Singapore • Manila<br />Hong Kong • London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;