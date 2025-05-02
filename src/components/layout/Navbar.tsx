
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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

  const getNavHref = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-warm-700 flex items-center justify-center text-white">
              <Globe className="h-5 w-5" />
            </div>
            <span className="font-serif font-medium text-xl">TTN</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={getNavHref('services')} className="text-foreground/80 hover:text-warm-700 transition underline-animation">Services</Link>
            <Link to={getNavHref('process')} className="text-foreground/80 hover:text-warm-700 transition underline-animation">Process</Link>
            <Link to={getNavHref('about')} className="text-foreground/80 hover:text-warm-700 transition underline-animation">About</Link>
            <Link to={getNavHref('contact')} className="text-foreground/80 hover:text-warm-700 transition underline-animation">Contact</Link>
          </nav>
          
          <Link to={getNavHref('contact')}>
            <Button className="hidden md:inline-flex bg-warm-700 hover:bg-warm-800 text-white rounded-full px-6">
              Get Started
            </Button>
          </Link>
          
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
              <Link 
                to={getNavHref('services')}
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to={getNavHref('process')}
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </Link>
              <Link 
                to={getNavHref('about')}
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to={getNavHref('contact')}
                className="py-2 text-foreground/80 hover:text-warm-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to={getNavHref('contact')}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button 
                  className="bg-warm-700 hover:bg-warm-800 text-white mt-2"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
