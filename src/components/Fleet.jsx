import { vehicles } from "../data/vehicles";
import { FaWhatsapp, FaUsers, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Fleet() {
  const navigate = useNavigate();

  return (
    <section
      id="fleet"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-sky-100 text-sky-600 font-semibold text-sm">
            PREMIUM FLEET
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
            Travel in Luxury
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-lg">
            Choose from our carefully maintained fleet of vehicles.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {vehicles.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border shadow-lg hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute top-4 left-4 bg-white/90 text-sky-600 px-4 py-1 rounded-full text-xs font-bold">
                  {v.type}
                </span>

                {v.seats && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    <FaUsers />
                    {v.seats}
                  </div>
                )}

                <div className="absolute bottom-4 left-5">
                  <h3 className="text-2xl font-bold text-white">
                    {v.name}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed min-h-[70px]">
                  {v.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}