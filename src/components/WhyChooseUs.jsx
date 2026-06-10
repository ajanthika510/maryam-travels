import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUsers,
  FaMapMarkedAlt,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

const points = [
  "Trusted local travel provider in Nilaveli",
  "Affordable pricing with no hidden charges",
  "Clean & comfortable vehicles",
  "24/7 WhatsApp booking support",
  "Experienced local drivers",
  "Islandwide service coverage",
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 font-medium">
              Why Travelers Choose Us
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              More Than Just
              <span className="text-sky-500"> Transportation</span>
            </h2>

            <p className="mt-6 text-slate-600 text-lg">
              Maryam Tours provides memorable travel experiences
              across Sri Lanka with reliable transport, local
              expertise, and personalized service.
            </p>

            {/* Points */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">

              {points.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition"
                >
                  <FaCheckCircle className="text-green-500 mt-1" />

                  <span className="text-slate-700 text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* CTA */}
            <a
              href="#BookingForm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              <FaWhatsapp />
              Book Your Trip
            </a>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Image */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">

              <img
                src="/fleet.webp"
                alt="Maryam Tours"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-4 md:top-10 -left-2 md:-left-8 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-500">
                  <FaUsers />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    1000+
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Happy Travelers
                  </p>
                </div>

              </div>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-4 md:bottom-10 -right-2 md:-right-8 bg-white rounded-2xl shadow-xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-500">
                  <FaStar />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    5.0 Rating
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Trusted Service
                  </p>
                </div>

              </div>

            </div>

            {/* Floating Card 3 */}
            <div className="hidden md:flex absolute top-1/2 right-6 bg-white rounded-2xl shadow-xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-500">
                  <FaMapMarkedAlt />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Islandwide
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Coverage
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}