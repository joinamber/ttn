
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const Hero = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Create animation for the globe
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 8;
      const y = (clientY / window.innerHeight - 0.5) * 8;
      
      globe.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${x * 2}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-warm-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
            Launch <span className="italic">Smarter</span>
            <div className="relative inline-block">
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C40 -1.5 150 -1.5 199 5.5" stroke="#a18072" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="block mt-6">
              <span className="text-warm-700">Grow Global</span>
              
              <div 
                ref={globeRef}
                className="inline-flex relative ml-4 items-center justify-center transition-transform duration-300 ease-out"
              >
                <div className="absolute w-14 h-14 rounded-full bg-warm-100 animate-pulse opacity-40"></div>
                <Globe 
                  className="h-12 w-12 text-warm-700 animate-float" 
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12">
            We help DTC brands scale across Asia Pacific and Europe—seamlessly. From sourcing and development to local launch and logistics, our platform handles the heavy lifting so you can focus on growth.
          </p>
          <div className="mt-12">
            <Button size="lg" className="bg-warm-700 hover:bg-warm-800 text-white rounded-full px-8 py-6 text-lg">
              Let's Talk
              <svg className="ml-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 circle-decoration from-warm-200 to-warm-50 -z-10"></div>
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 circle-decoration from-warm-300 to-warm-100 -z-10"></div>
    </section>
  );
};

export default Hero;
