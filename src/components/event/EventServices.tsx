
import SectionHeader from "@/components/ui/section-header";
import { CalendarDays, ClipboardCheck, FileText, MapPin, Users2 } from "lucide-react";

const EventServices = () => {
  return (
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
  );
};

export default EventServices;
