
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const EventCTA = () => {
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
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Ready to Create an Unforgettable Event?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let TTN elevate your next market introduction with seamless execution and creative excellence.
          </p>
          <Button 
            onClick={handleContactClick}
            className="bg-warm-700 hover:bg-warm-800 text-white rounded-full px-8 py-6 text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventCTA;
