
import SectionHeader from '@/components/ui/section-header';

/**
 * Testimonial interface
 */
interface Testimonial {
  quote: string;
  author: string;
  title: string;
  image: string;
}

/**
 * Testimonial card component
 */
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md relative">
      <div className="absolute top-6 right-8 text-7xl text-warm-200 font-serif">"</div>
      <div className="flex flex-col h-full">
        <blockquote className="flex-grow mb-8 relative z-10">
          <p className="italic text-foreground/80">"{testimonial.quote}"</p>
        </blockquote>
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.author} 
            className="w-12 h-12 rounded-full mr-4 border-2 border-warm-100"
          />
          <div>
            <div className="font-medium">{testimonial.author}</div>
            <div className="text-sm text-foreground/70">{testimonial.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Testimonials data containing client success stories
 */
const testimonials: Testimonial[] = [
  {
    quote: "TTN is helping us navigate the complex ASEAN markets and launch our brands in Singapore and the Philippines.",
    author: "Sarah C.",
    title: "Jewelry Founder, Nox & Oro",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "Working with TTN transformed our approach to sourcing suppliers. Their expertise in supply chain and market entry strategy is invaluable.",
    author: "David Miller",
    title: "CEO, Perrito & Co.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The TTN team feels like an extension of our own. They handle our launch flawlessly from compliance to distribution.",
    author: "Elena Rodriguez",
    title: "COO, FitTech Wearables",
    image: "https://i.pravatar.cc/150?img=29"
  }
];

/**
 * Testimonials section showcasing client success stories
 */
const Testimonials = () => {
  return (
    <section className="py-24 bg-warm-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Client Success Stories"
          description="Hear from brands that have successfully launched globally with TTN"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
