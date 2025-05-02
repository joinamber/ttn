
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on homepage, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to homepage first, then scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <section id="about" className="py-24 bg-warm-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-warm-800">
            We are trusted by forward-thinking<br />DTC brands
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl">
            We partner with beauty, wellness, fashion, electronic, and lifestyle brands that are ready to scale internationally. Whether you're launching your first product or expanding across borders, we've got you covered.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-20">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 -z-10 bg-warm-200 rounded-full blur-xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="TTN Team" 
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-warm-700">15+</div>
                    <div className="text-sm text-foreground/70">Brands Launched</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-warm-700">10+</div>
                    <div className="text-sm text-foreground/70">Global Markets</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-warm-700">95%</div>
                    <div className="text-sm text-foreground/70">Success Rate</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-warm-700">$300K+</div>
                    <div className="text-sm text-foreground/70">Cost Saved</div>
                  </div>
                </div>
                <Button 
                  className="bg-warm-700 hover:bg-warm-800 text-white rounded-full px-6"
                  onClick={(e) => handleNavigation(e, 'contact')}
                >
                  Learn Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
