import Booking from "@/components/Booking";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="xl:pt-10">
        <Services />
      </div>
      <div>
        <Destinations />
      </div>
      <div>
        <Booking />
      </div>
      <div className="pt-10">
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
