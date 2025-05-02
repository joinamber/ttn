
import { Package, Globe, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: "Product Development",
    description: "Design and develop innovative products that meet the demands of your target market with our end-to-end product development solutions."
  },
  {
    icon: Globe,
    title: "Global Market Entry",
    description: "Access new markets with confidence through our tailored market entry strategies and local expertise in multiple regions."
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Scale your business with data-driven growth strategies that optimize your customer acquisition and retention."
  },
  {
    icon: Users,
    title: "Team Extension",
    description: "Augment your team with our product experts, engineers, and international business specialists on demand."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70">
            Comprehensive solutions to help DTC brands succeed globally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md border border-warm-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-warm-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-warm-200 transition-colors">
                <service.icon className="h-7 w-7 text-warm-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
