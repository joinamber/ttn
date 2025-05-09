
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

  // Function to navigate to sections with proper behavior based on current page
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
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
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

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
            <a href={getNavHref('services')} 
               onClick={(e) => handleNavigation(e, 'services')}
               className="text-foreground/80 hover:text-warm-700 transition underline-animation">
              Services
            </a>
            <Link to="/event" 
                  className="text-foreground/80 hover:text-warm-700 transition underline-animation">
              Event
            </Link>
            <a href={getNavHref('process')} 
               onClick={(e) => handleNavigation(e, 'process')}
               className="text-foreground/80 hover:text-warm-700 transition underline-animation">
              Process
            </a>
            <a href={getNavHref('about')} 
               onClick={(e) => handleNavigation(e, 'about')}
               className="text-foreground/80 hover:text-warm-700 transition underline-animation">
              About
            </a>
            <a href={getNavHref('contact')} 
               onClick={(e) => handleNavigation(e, 'contact')}
               className="text-foreground/80 hover:text-warm-700 transition underline-animation">
              Contact
            </a>
          </nav>
          
          <a href={getNavHref('contact')} onClick={(e) => handleNavigation(e, 'contact')}>
            <Button className="hidden md:inline-flex bg-warm-700 hover:bg-warm-800 text-white rounded-full px-6">
              Get Started
            </Button>
          </a>
          
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
                href={getNavHref('services')}
                onClick={(e) => handleNavigation(e, 'services')}
                className="py-2 text-foreground/80 hover:text-warm-700"
              >
                Services
              </a>
              <Link 
                to="/event"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-foreground/80 hover:text-warm-700"
              >
                Event
              </Link>
              <a 
                href={getNavHref('process')}
                onClick={(e) => handleNavigation(e, 'process')}
                className="py-2 text-foreground/80 hover:text-warm-700"
              >
                Process
              </a>
              <a 
                href={getNavHref('about')}
                onClick={(e) => handleNavigation(e, 'about')}
                className="py-2 text-foreground/80 hover:text-warm-700"
              >
                About
              </a>
              <a 
                href={getNavHref('contact')}
                onClick={(e) => handleNavigation(e, 'contact')}
                className="py-2 text-foreground/80 hover:text-warm-700"
              >
                Contact
              </a>
              <a 
                href={getNavHref('contact')}
                onClick={(e) => handleNavigation(e, 'contact')}
              >
                <Button 
                  className="bg-warm-700 hover:bg-warm-800 text-white mt-2"
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
