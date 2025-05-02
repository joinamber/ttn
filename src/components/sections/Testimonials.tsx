
const testimonials = [
  {
    quote: "TTN helped us navigate the complex Asian markets and launch our beauty products in Japan and South Korea with remarkable success.",
    author: "Sarah Chen",
    title: "Founder, Glow Beauty Co.",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "Working with TTN transformed our approach to global expansion. Their expertise in product localization and market entry strategy was invaluable.",
    author: "David Miller",
    title: "CEO, EcoHome",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The TTN team feels like an extension of our own. They handled our European launch flawlessly from compliance to distribution.",
    author: "Elena Rodriguez",
    title: "COO, FitTech Wearables",
    image: "https://i.pravatar.cc/150?img=29"
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-warm-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Client Success Stories</h2>
          <p className="text-lg text-foreground/70">
            Hear from brands that have successfully launched globally with TTN
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md relative">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
