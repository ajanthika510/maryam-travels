import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Fleet from "../components/Fleet";
import Tours from "../components/Tours";
import Safari from "../components/Safari";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";
import BookingForm from "../components/BookingForm";
import GovernmentApproval from "../components/GovernmentApproval";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <GovernmentApproval />

      <div id="services">
        <Services />
      </div>

      <WhyChooseUs />

      <div id="fleet">
        <Fleet />
      </div>

      <div id="booking">
        <BookingForm />
      </div>

      <div id="tours">
        <Tours />
      </div>

      <div id="safari">
        <Safari />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <WhatsAppButton />
      <Footer />
    </>
  );
}