
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-primary/5 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="TTN Team" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/10 z-0"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold">About TTN</h2>
              <p className="text-lg text-foreground/80">
                TTN is a team of product development and global expansion experts with a mission to help innovative DTC brands launch and scale internationally.
              </p>
              <p className="text-foreground/70">
                Founded in 2018, we've successfully helped over 50 brands enter new markets across Asia, Europe, and the Americas. Our team combines product expertise with deep market knowledge to create tailored strategies for sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-foreground/70">Brands Launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-foreground/70">Global Markets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-foreground/70">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$100M+</div>
                  <div className="text-sm text-foreground/70">Revenue Generated</div>
                </div>
              </div>
              <Button className="mt-6">Learn Our Story</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
