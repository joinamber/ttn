
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { EventHero, EventDescription, EventServices, EventCTA } from "@/components/event";

const Event = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EventHero />
      <EventDescription />
      <EventServices />
      <EventCTA />
      <Footer />
    </div>
  );
};

export default Event;
