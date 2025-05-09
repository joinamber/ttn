
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Users } from "lucide-react";

const EventDescription = () => {
  return (
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
  );
};

export default EventDescription;
