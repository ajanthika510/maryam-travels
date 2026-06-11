import {
  FaCertificate,
  FaShieldAlt,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GovernmentApproval() {
  const { scrollYProgress } = useScroll();

  // safer parallax (reduced effect for mobile)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const cards = [
    {
      icon: <FaCertificate className="text-3xl sm:text-4xl text-sky-500" />,
      title: "SLTDA Registered",
      desc: "Officially registered under Sri Lanka Tourism Development Authority.",
    },
    {
      icon: <FaShieldAlt className="text-3xl sm:text-4xl text-green-500" />,
      title: "Government Approved",
      desc: "Authorized tourist transport provider for local and international travelers.",
    },
    {
      icon: <FaCheckCircle className="text-3xl sm:text-4xl text-amber-500" />,
      title: "All Island Service",
      desc: "Licensed tourist driver covering the entire island of Sri Lanka.",
    },
  ];

  return (
    <section className="relative py-14 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">

      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-sky-300/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-200/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
            <FaAward />
            Government Approved
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Travel With Confidence
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Maryam Tours is operated by an officially registered SLTDA Tourist Driver,
            providing safe, reliable and professional transport services throughout Sri Lanka.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-5">

            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-lg"
              >
                {item.icon}

                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

              <div className="bg-white rounded-2xl p-4 shadow text-center">
                <h3 className="text-xl font-black text-sky-600">SLTDA</h3>
                <p className="text-xs text-gray-500">Registered</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow text-center">
                <h3 className="text-xl font-black text-green-600">24/7</h3>
                <p className="text-xs text-gray-500">Support</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow text-center">
                <h3 className="text-xl font-black text-amber-500">Islandwide</h3>
                <p className="text-xs text-gray-500">Coverage</p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            style={{ y: imageY }}
            className="relative mt-6 lg:mt-0"
          >
            <div className="absolute inset-0 bg-sky-300/20 blur-3xl rounded-full" />

            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-2xl">

              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/owner.webp"
                  alt="SLTDA Tourist Driver"
                  className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900">
                  Licensed Tourist Driver
                </h3>
                <p className="text-slate-500 mt-2 text-sm sm:text-base">
                  Officially registered and approved by the Sri Lanka Tourism Development Authority.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden lg:flex absolute top-5 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-2xl shadow-xl items-center gap-3"
            >
              <FaCheckCircle className="text-green-600 text-xl" />
              <div>
                <p className="font-bold text-sm">Government Approved</p>
                <p className="text-xs text-gray-500">Trusted Transport</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}