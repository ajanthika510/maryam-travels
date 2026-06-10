import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { safaris } from "../data/safari";
import { FaArrowRight } from "react-icons/fa";

export default function SafariPreview() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % safaris.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const safari = safaris[active];

  return (
    <section
      id="safari"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-semibold tracking-wider uppercase">
            Wildlife Experience
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-3 text-slate-900">
            Safari Adventures
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-lg">
            Discover Sri Lanka's incredible wildlife through unforgettable safari
            experiences guided by local experts.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -100,
              }}
              transition={{
                duration: 0.8,
              }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >

              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  h-[280px]
                  sm:h-[350px]
                  md:h-[450px]
                  shadow-2xl
                "
              >
                <motion.img
                  src={safari.img}
                  alt={safari.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {active === 0 && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                <span className="text-amber-500 font-semibold uppercase tracking-wider">
                  Safari Experience
                </span>

                <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
                  {safari.name}
                </h3>

                <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                  {safari.desc}
                </p>

                {safari.price && (
                  <div className="mt-6 text-2xl font-bold text-amber-500">
                    {safari.price}
                  </div>
                )}

                <button
                  onClick={() =>
                    navigate("/safari", {
                      state: {
                        safari: safari.name,
                      },
                    })
                  }
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    bg-amber-500
                    hover:bg-amber-600
                    text-white
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    transition-all
                    duration-300
                    hover:shadow-xl
                    hover:-translate-y-1
                  "
                >
                  View Safari
                  <FaArrowRight />
                </button>
              </motion.div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {safaris.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  active === i
                    ? "w-10 h-3 bg-amber-500"
                    : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate("/safari")}
            className="
              bg-slate-900
              hover:bg-slate-800
              text-white
              px-10
              py-5
              rounded-full
              font-semibold
              text-lg
              transition-all
              duration-300
              hover:shadow-xl
              hover:-translate-y-1
            "
          >
            Explore All Safaris
          </button>
        </motion.div>

      </div>
    </section>
  );
}