
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-background to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Launch Your Brand <span className="text-gradient">Globally</span> With Confidence
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              We help DTC brands develop exceptional products and launch them in global markets with our end-to-end solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="text-base">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Learn More
              </Button>
            </div>
            <div className="pt-10 flex items-center gap-x-6 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">50+</span> brands launched successfully
              </p>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -z-10 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
            <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Global brand launch" 
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary rounded-full animate-float z-0" style={{ opacity: 0.1 }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
