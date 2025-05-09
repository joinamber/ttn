
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const EventHero = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-warm-100/50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              Memorable <span className="text-warm-700">Event Management</span> Services
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              TTN's Event Management Services deliver end-to-end offline activations designed to introduce your brand to new markets and spark lasting connections.
            </p>
            <Button 
              onClick={handleContactClick}
              className="bg-warm-700 hover:bg-warm-800 text-white rounded-full px-8"
            >
              Request a Consultation
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] bg-warm-50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/dad94552-a22a-4e6a-b3f5-a78c88e4dcc0.png" 
                alt="Modern workspace with keyboard, gold pens, glasses, and notepad" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-warm-500/20"></div>
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-warm-700/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
