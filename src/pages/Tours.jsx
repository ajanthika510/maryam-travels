import { useNavigate } from "react-router-dom";
import { tours } from "../data/tours";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ToursPage() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tours.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const tour = tours[active];

  const handleBook = () => {
    navigate("/#booking");
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* HERO SLIDER */}
      <div className="relative h-[85vh] sm:h-screen w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Image */}
            <motion.img
              src={tour.img}
              alt={tour.name}
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 12, repeat: Infinity }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-20">
              <div className="max-w-xl sm:max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block bg-amber-500 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                >
                  Featured Tour
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-5 leading-tight"
                >
                  {tour.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-white/80 text-sm sm:text-base md:text-lg"
                >
                  {tour.desc}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <button
                    onClick={handleBook}
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-5 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <FaWhatsapp />
                    Book Now
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {tours.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                active === i
                  ? "w-8 sm:w-10 h-2 sm:h-3 bg-white"
                  : "w-2 sm:w-3 h-2 sm:h-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MORE DESTINATIONS */}
      <div className="bg-white text-black py-12 sm:py-16 px-4 sm:px-10 md:px-20">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          More Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tours.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                active === i ? "ring-4 ring-amber-400" : ""
              }`}
            >
              <img
                src={t.img}
                alt={t.name}
                className="h-40 sm:h-48 w-full object-cover"
              />

              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-sm sm:text-base">
                  {t.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}