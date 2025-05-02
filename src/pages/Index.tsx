
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

/**
 * Main Index page component
 * Contains all sections of the homepage
 */
const Index = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const href = this.getAttribute('href');
          if (!href) return;
          
          const target = document.querySelector(href);
          if (!target) return;
          
          window.scrollTo({
            top: target.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        });
      });
    };

    setupSmoothScrolling();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
