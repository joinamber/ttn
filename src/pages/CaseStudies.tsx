
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  // Sample case study data - in a real app, this might come from an API
  const caseStudies = [
    {
      id: 1,
      title: "Skin & Glow Co.",
      category: "Beauty",
      description: "Helped launch a clean skincare brand across 5 Asian markets with localized marketing strategies.",
      achievements: "Achieved 300% growth in first year, secured partnerships with 3 major retailers.",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Wellness Capsule",
      category: "Wellness",
      description: "Developed manufacturing and distribution strategy for a supplement brand entering Europe.",
      achievements: "Cut production costs by 40%, established presence in 8 countries within 18 months.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Techno Wearables",
      category: "Electronics",
      description: "Managed global market entry for an innovative smartwatch brand from concept to shelf.",
      achievements: "Secured $2.5M in pre-orders, developed partnerships with major tech retailers.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Modern Living Co.",
      category: "Lifestyle",
      description: "Developed and executed omnichannel retail strategy for home goods brand expansion.",
      achievements: "Increased online sales by 250%, reduced customer acquisition costs by 30%.",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to homepage
    window.location.href = '/';
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-warm-800">Case Studies</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Explore how we've helped DTC brands scale globally and achieve remarkable results
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-serif">{study.title}</CardTitle>
                    <span className="text-xs uppercase font-medium text-warm-600 bg-warm-100 px-2 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <CardDescription className="text-foreground/70 mt-2">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-1">
                    <h4 className="font-medium text-sm text-warm-700 mb-1">Key Achievements:</h4>
                    <p className="text-sm text-foreground/70">{study.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-warm-100 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-warm-800">
            Ready to become our next success story?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your brand reach new markets and achieve exceptional growth.
          </p>
          <Button 
            onClick={handleContactClick}
            className="bg-warm-700 hover:bg-warm-800 text-white font-medium px-8 py-3 rounded-full shadow-sm transition-all"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
