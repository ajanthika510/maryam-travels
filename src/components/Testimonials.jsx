import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import testimonialImages from "../data/testimonialImages";  
export default function Testimonials() {
  const [active, setActive] = useState(0);

  // 👉 IMAGE DRIVES THE SLIDER (49 images)
  const total = testimonialImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(interval);
  }, [total]);

  // 👉 SAFE MAPPING (testimonials + images)
  const t = {
    ...testimonials[active % testimonials.length],
    img: testimonialImages[active],
  };

  return (
    <section className="relative py-14 sm:py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-52 sm:w-72 h-52 sm:h-72 bg-amber-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-52 sm:w-72 h-52 sm:h-72 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">
            Travelers <span className="text-amber-400">Love Us</span>
          </h2>

          <p className="text-gray-400 mt-3 text-xs sm:text-sm md:text-base">
            Real journeys. Real emotions. Real experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

          {/* LEFT CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl"
            >

              {/* Quote */}
              <div className="text-4xl sm:text-6xl text-amber-400/30 absolute top-3 sm:top-4 left-4 sm:left-6">
                “
              </div>

              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed italic relative z-10">
                {t.text}
              </p>

              <div className="mt-6 sm:mt-8">
                <h4 className="text-white font-bold text-base sm:text-lg">
                  {t.name}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {t.country}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mt-5 sm:mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
                />
              </div>

              {/* DOTS (FIXED → based on images, NOT testimonials) */}
              <div className="flex gap-2 mt-5 sm:mt-6 flex-wrap">
                {testimonialImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all rounded-full ${
                      active === i
                        ? "w-6 sm:w-8 h-2 bg-amber-400"
                        : "w-2 h-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

            </motion.div>
          </AnimatePresence>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md h-[260px] sm:h-[340px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10">

              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={t.img}
                  alt={t.name}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs">
                ⭐ Verified Traveler
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}