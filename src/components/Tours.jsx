import { useState, useEffect } from "react";
import { tours } from "../data/tours";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Tours() {
  const navigate = useNavigate();

  const [activeTour, setActiveTour] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTour((prev) => (prev + 1) % tours.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="tours"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sky-500 font-semibold uppercase tracking-widest">
            Explore Sri Lanka
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
            Popular Tour Packages
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Handpicked journeys designed to help you experience the beauty,
            culture, wildlife, and hidden gems of Sri Lanka.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Featured Tour Slider */}
          <div className="lg:col-span-2 relative h-[350px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTour}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => navigate("/tours")}
              >
                <motion.img
                  src={tours[activeTour].img}
                  alt={tours[activeTour].name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-6 md:p-8 text-white">

                  <span className="bg-amber-500 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                    Featured Tour
                  </span>

                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mt-4">
                    {tours[activeTour].name}
                  </h3>

                  <p className="mt-3 max-w-xl text-white/80 text-sm md:text-base">
                    {tours[activeTour].desc}
                  </p>

                  <button
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      bg-white
                      text-slate-900
                      px-5
                      md:px-6
                      py-3
                      rounded-full
                      font-semibold
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    Explore Tour
                    <FaArrowRight />
                  </button>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-8 right-8 flex gap-2 z-20">
              {tours.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTour(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeTour === index
                      ? "w-8 h-3 bg-white"
                      : "w-3 h-3 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Side Tours */}
          <div className="space-y-6">

            {tours
              .filter((_, i) => i !== activeTour)
              .slice(0, 3)
              .map((tour, i) => (
                <motion.div
                  key={tour.name}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                  }}
                  className="
                    group
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:-translate-y-1
                  "
                  onClick={() => navigate("/tours")}
                >
                  <div className="flex">

                    <div className="w-28 md:w-32 h-28 md:h-32 overflow-hidden flex-shrink-0">
                      <img
                        src={tour.img}
                        alt={tour.name}
                        className="
                          w-full
                          h-full
                          object-cover
                          group-hover:scale-110
                          transition
                          duration-700
                        "
                      />
                    </div>

                    <div className="p-4 flex-1">

                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        {tour.name}
                      </h3>

                      <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                        {tour.desc}
                      </p>

                    </div>

                  </div>
                </motion.div>
              ))}

          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mt-14"
        >
          <button
            onClick={() => navigate("/tours")}
            className="
              bg-sky-500
              hover:bg-sky-600
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            View All Tour Packages
          </button>
        </motion.div>

      </div>
    </section>
  );
}