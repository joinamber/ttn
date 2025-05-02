
const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your product, market opportunity, and business goals to create a strategic roadmap."
  },
  {
    number: "02",
    title: "Development",
    description: "Our team works on product development, branding, and preparing for market entry."
  },
  {
    number: "03",
    title: "Launch",
    description: "We execute market entry with local partnerships, compliance, and logistics support."
  },
  {
    number: "04",
    title: "Scale",
    description: "Continuous optimization and expansion to new markets based on performance data."
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-foreground/70">
            A proven framework for successful global product launches
          </p>
        </div>
        
        <div className="relative">
          {/* Process line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className={`md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2 md:text-left'}`}>
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold relative z-10">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <span className="text-primary/70 font-mono">{step.number}</span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'hidden md:block'}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
