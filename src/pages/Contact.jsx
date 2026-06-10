import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden py-24">
<Navbar />
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-sm">
            Contact Maryam Tours
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Let's Plan Your
            <span className="text-amber-400"> Sri Lanka Adventure</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            Airport Transfers, Safari Adventures, Scooter Rentals,
            Day Tours and All Island Tours.
          </p>

        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8"
          >

            <h2 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Phone / WhatsApp
                  </h4>

                  <p className="text-gray-400">
                    +94 76 168 6957
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400 break-all">
                    F.imzam7788@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-400">
                    Ward No 01,
                    <br />
                    Nilaveli,
                    <br />
                    Trincomalee,
                    Sri Lanka
                  </p>
                </div>
              </div>

            </div>

            {/* Owner */}
            <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10">

              <p className="text-gray-400 text-sm">
                Founder
              </p>

              <h3 className="text-xl font-bold text-amber-400 mt-1">
                Fareesdeen Ahamed Imzam
              </h3>

            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/94761686957"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Reviews */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">

              <h2 className="text-2xl font-bold text-white mb-6">
                Reviews & Ratings
              </h2>

              <div className="space-y-4">

                <a
                  href="https://maps.app.goo.gl/Lk26HS4QXgVRhePT6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
                >
                  <FaGoogle className="text-2xl text-blue-400" />
                  <span className="text-white">
                    Maryam Tours Google Reviews
                  </span>
                </a>

                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g424963-d27511689-Reviews-Maryam_Tours_Nilaveli-Trincomalee_Eastern_Province.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
                >
                  <SiTripadvisor className="text-2xl text-green-400" />
                  <span className="text-white">
                    Maryam Tours TripAdvisor
                  </span>
                </a>

              </div>

            </div>

            {/* Social Media */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">

              <h2 className="text-2xl font-bold text-white mb-6">
                Follow Us
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">

                <a
                  href="https://www.facebook.com/share/1DZm453DkH/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl text-white bg-white/5 hover:bg-blue-600 transition"
                >
                  <FaFacebookF />
                  Maryam Tours
                </a>

                <a
                  href="https://www.instagram.com/maryam_tours_nilaveli"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl text-white bg-white/5 hover:bg-pink-600 transition"
                >
                  <FaInstagram />
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/share/1CZSvrDGfe/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl text-white bg-white/5 hover:bg-blue-600 transition"
                >
                  <FaFacebookF />
                  Scooter Rental
                </a>

                <a
                  href="https://maps.app.goo.gl/6dxUVre5LQRbAMED9?g_st=ac"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl text-white bg-white/5 hover:bg-amber-500 transition"
                >
                  <FaGoogle />
                  Scooter Reviews
                </a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white">
              Ready to Explore Sri Lanka?
            </h2>

            <p className="text-gray-400 mt-3">
              Airport Transfers • Safari • Rentals • Tours
            </p>

            <a
              href="https://wa.me/94761686957"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-6 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-white font-semibold transition"
            >
              <FaWhatsapp />
              Book Your Trip
            </a>

          </div>

        </div>
        <WhatsAppButton />  
<Footer/>
      </div>

    </section>
  );
}