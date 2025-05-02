
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-warm-700 flex items-center justify-center text-white">
              <Globe className="h-5 w-5" />
            </div>
            <span className="font-serif font-medium text-xl">TTN</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-warm-700 transition underline-animation">Services</a>
            <a href="#process" className="text-foreground/80 hover:text-warm-700 transition underline-animation">Process</a>
            <a href="#about" className="text-foreground/80 hover:text-warm-700 transition underline-animation">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-warm-700 transition underline-animation">Contact</a>
          </nav>
          
          <Button className="hidden md:inline-flex bg-warm-700 hover:bg-warm-800 text-white rounded-full px-6">
            Get Started
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#process" 
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#about" 
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-warm-700 hover:bg-warm-800 text-white mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
