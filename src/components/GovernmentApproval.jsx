import {
  FaCertificate,
  FaShieldAlt,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function GovernmentApproval() {
  const { scrollYProgress } = useScroll();

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const cards = [
    {
      icon: <FaCertificate className="text-4xl text-sky-500" />,
      title: "SLTDA Registered",
      desc: "Officially registered under Sri Lanka Tourism Development Authority.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-500" />,
      title: "Government Approved",
      desc: "Authorized tourist transport provider for local and international travelers.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-amber-500" />,
      title: "All Island Service",
      desc: "Licensed tourist driver covering the entire island of Sri Lanka.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            <FaAward />
            Government Approved
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900">
            Travel With Confidence
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Maryam Tours is operated by an officially registered SLTDA Tourist
            Driver, providing safe, reliable and professional transport
            services throughout Sri Lanka.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div>
            <div className="space-y-5">
              {cards.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -40,
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    backdrop-blur-xl
                    bg-white/80
                    border border-white
                    rounded-3xl
                    p-6
                    shadow-xl
                    flex gap-5
                  "
                >
                  {item.icon}

                  <div>
                    <h3 className="font-bold text-xl text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
            >
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg text-center">
                  <h3 className="text-xl sm:text-2xl font-black text-sky-600">
                    SLTDA
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Registered
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg text-center">
                  <h3 className="text-xl sm:text-2xl font-black text-green-600">
                    24/7
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Support
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg text-center">
                  <h3 className="text-xl sm:text-2xl font-black text-amber-500">
                    Islandwide
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Coverage
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-sky-300/20 blur-3xl rounded-full" />

            <div className="relative bg-white p-4 rounded-[32px] shadow-2xl">
              
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/owner.webp"
                  alt="SLTDA Tourist Driver"
                  className="w-full h-[500px] object-cover"
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 shine-effect" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-2xl text-slate-900">
                  Licensed Tourist Driver
                </h3>

                <p className="text-slate-500 mt-2">
                  Officially registered and approved by the Sri Lanka Tourism
                  Development Authority.
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                hidden md:flex
                absolute
                top-6
                left-1/2
                -translate-x-1/2
                bg-white
                px-6
                py-4
                rounded-2xl
                shadow-xl
                items-center
                gap-4
              "
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>

              <div>
                <p className="font-bold">
                  Government Approved
                </p>

                <p className="text-sm text-slate-500">
                  Trusted Tourist Transport
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}