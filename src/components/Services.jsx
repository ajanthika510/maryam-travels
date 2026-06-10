import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm">
            ✨ Travel Experiences
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Choose Your
            <span className="text-amber-400"> Journey</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover unforgettable adventures across Sri Lanka.
            From airport transfers to safari experiences and
            island-wide tours.
          </p>
        </motion.div>

        {/* Services Grid */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative"
              >

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-sky-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Card */}
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-amber-400 to-orange-500 text-white text-3xl shadow-lg float-animation">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mt-6">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Hover Button */}
                  <div className="mt-6">

                    <button className="group/btn flex items-center gap-2 text-amber-400 font-medium">

                      Explore

                      <span className="transition-transform group-hover/btn:translate-x-2">
                        →
                      </span>

                    </button>

                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-400/10 rounded-full" />

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}