
import { CalendarDays, Users, MapPin, ClipboardCheck, Users2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Event = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-warm-100/50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                Memorable <span className="text-warm-700">Event Management</span> Services
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                TTN's Event Management Services deliver end-to-end offline activations designed to introduce your brand to new markets and spark lasting connections.
              </p>
              <Button className="bg-warm-700 hover:bg-warm-800 text-white rounded-full px-8">
                Request a Consultation
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/3] bg-warm-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Event Management Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-warm-500/20"></div>
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-warm-700/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Description Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <SectionHeader
            title="Comprehensive Event Management"
            description="We handle every detail, including venue scouting, full-service logistics, creative design, on-site staffing, and post-event analytics, ensuring a seamless experience that drives awareness and consumer action."
            underline={true}
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-warm-100 flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-warm-700" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Brand Launch Parties</h3>
                <p className="text-foreground/70">
                  We create launch events that embody your brand's core values and generate buzz through immersive experiences, live demonstrations, and personalized guest interactions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-warm-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-warm-700" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Roadshows</h3>
                <p className="text-foreground/70">
                  Bring your products directly to target audiences across multiple high-footfall locations. We manage route planning, pop-up installation, modular display units, and local permit applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-warm-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-warm-700" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Community Engagement</h3>
                <p className="text-foreground/70">
                  TTN designs grassroots initiatives and workshops that foster authentic brand relationships within local communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-warm-50/50">
        <div className="container px-4 mx-auto">
          <SectionHeader 
            title="Key Service Offerings" 
            description="Each activation is meticulously designed to align with your launch objectives, maximize reach, and create meaningful customer interactions."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-warm-700" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Project & Event Management</h3>
                <p className="text-foreground/70 text-sm">Comprehensive planning, budget control, and vendor negotiation</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-warm-700" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Venue Sourcing & Permits</h3>
                <p className="text-foreground/70 text-sm">Site evaluation, contract negotiations, and license applications</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-warm-700" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Creative Content & Collateral</h3>
                <p className="text-foreground/70 text-sm">Branded signage, lookbooks, digital assets, and photo-op installations</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-warm-700" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">On-Site Staffing & Training</h3>
                <p className="text-foreground/70 text-sm">Professional brand ambassadors, demo specialists, and MCs</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-warm-700" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Logistics & Production</h3>
                <p className="text-foreground/70 text-sm">TOL arrangements, power activation, furniture rental, and technical setup</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-warm-700" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Data Capture & Analytics</h3>
                <p className="text-foreground/70 text-sm">QR-coded lead gen, post-event reporting, and ROI measurement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Ready to Create an Unforgettable Event?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let TTN elevate your next market introduction with seamless execution and creative excellence.
            </p>
            <Button className="bg-warm-700 hover:bg-warm-800 text-white rounded-full px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Event;
