
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CaseStudies = () => {
  // Sample case study data - in a real app, this might come from an API
  const caseStudies = [
    {
      id: 1,
      title: "Outdoor Apparel Brand",
      category: "Sports",
      description: "Partnered with a mid-tier outdoor apparel brand to facilitate its entry into the Asia-Pacific market.",
      achievements: "Developing tailored go-to-market strategies, localized campaign assets, and regional partnership playbooks",
      image: "/lovable-uploads/7302d632-4044-46fc-985c-4d1e42d73820.png"
    },
    {
      id: 2,
      title: "Handbag Designer Brand",
      category: "Accessories",
      description: "Leveraging TTN's vetted supplier network to source reliable suppliers for high-quality prototyping.",
      achievements: "The development time and complexity were significantly reduced, allowing the designer to focus on product refinement and brand storytelling.",
      image: "/lovable-uploads/50930c45-e870-4122-bbd8-87408b1f6c22.png"
    },
    {
      id: 3,
      title: "Consumer Electronics Brand",
      category: "Electronics",
      description: "Assisting a growing consumer tech brand in scaling into new international markets by providing local insights, distributor connections, and tariff advisory.",
      achievements: "Minimize friction and accelerate cross-border readiness in both the EU and Southeast Asia.",
      image: "/lovable-uploads/444fd374-1c39-45e5-924b-057480a6750e.png"
    },
    {
      id: 4,
      title: "Boutique Wedding Designer",
      category: "Bridalwear",
      description: "Partnering with a luxury bridal brand to expand globally into ASEAN.",
      achievements: "Empower the brand to deliver custom, high-quality gowns tailored to local bridal preferences.",
      image: "/lovable-uploads/cf7b125b-e7d4-41c1-b51c-d4853f95aae8.png"
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
                <div className="h-64 overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </AspectRatio>
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
