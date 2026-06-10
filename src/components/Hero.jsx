import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import AITravelBuilder from "../components/AITravelBuilder";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden" id="home">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero.webp"
            alt="Maryam Tours"
            className="w-full h-full object-cover scale-110 md:scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-24">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

            {/* LEFT CONTENT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs sm:text-sm">
                  ⭐ Trusted by Travelers
                </span>

                {/* Status badges */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm">
                    ✓ SLTDA Approved
                  </span>

                  <span className="bg-sky-500/20 border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full text-sm">
                    ✓ Government Registered
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-6">
                  Nilaveli
                </h2>

                <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  <span className="block text-amber-400">
                    Maryam Tours
                  </span>
                </h1>

                <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-amber-400 mt-4">
                  Your Gateway to Paradise
                </h2>

                <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl">
                  Airport Transfers, Safari Adventures, Scooter Rentals,
                  Tuk Tuk Rentals and Guided Tours across Sri Lanka.
                  Travel safely with a trusted local guide from Nilaveli.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                  <a
                    href="#services"
                    className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full text-white transition text-center"
                  >
                    Explore Services
                  </a>

                  <a
                    href="https://wa.me/94761686957"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <FaWhatsapp />
                    Book via WhatsApp
                  </a>

                </div>
              </motion.div>
            </div>

            {/* RIGHT CONTENT (AI BUILDER) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
            >
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                <AITravelBuilder />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-20 -mt-12 md:-mt-16 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {[
              ["500+", "Tours Completed"],
              ["1000+", "Happy Travelers"],
              ["5.0★", "Top Rating"],
              ["24/7", "Support"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="backdrop-blur-md bg-white border border-white/10 rounded-2xl p-5 text-center shadow-xl"
              >
                <div className="text-2xl md:text-3xl font-bold text-sky-500">
                  {number}
                </div>

                <div className="text-gray-600 text-xs md:text-sm mt-2">
                  {label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </>
  );
}