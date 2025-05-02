
import SectionHeader from '@/components/ui/section-header';

/**
 * Process step interface
 */
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/**
 * Process step component for displaying individual steps
 */
const ProcessStepCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  return (
    <div key={index} className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
      <div className={`md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2 md:text-left'}`}>
        <div className={`flex items-center mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
          <div className="w-10 h-10 rounded-full bg-warm-700 text-white flex items-center justify-center text-lg font-bold relative z-10">
            {index + 1}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 border border-warm-100">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
            <span className="text-warm-500 font-serif font-medium">{step.number}</span>
            <span>{step.title}</span>
          </h3>
          <p className="text-foreground/70">{step.description}</p>
        </div>
      </div>
      <div className={index % 2 === 0 ? 'md:col-start-2' : 'hidden md:block'}></div>
    </div>
  );
};

/**
 * Process data containing our product launch steps
 */
const processSteps: ProcessStep[] = [
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
  }
];

/**
 * Process section showing the framework for product launches
 */
const Process = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Our Process"
          description="A proven framework for successful global product launches"
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Process line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-warm-200 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24 relative">
            {processSteps.map((step, index) => (
              <ProcessStepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
