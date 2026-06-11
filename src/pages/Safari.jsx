import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router-dom";
import { safaris } from "../data/safari";
import { FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SafariCatalog() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/safari.webp"
          alt="Safari"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-black">
              Safari Adventures
            </h1>

            <p className="mt-4 text-lg">
              Explore Sri Lanka's Incredible Wildlife
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {safaris.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {s.name}
                  </h3>

                  <p className="text-slate-600 mt-3">
                    {s.desc}
                  </p>

                  <div className="flex justify-between mt-5 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      {s.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaClock />
                      {s.duration}
                    </span>
                  </div>


                  <button
                    onClick={() =>
                      navigate("/", {
                        state: {
                          scrollTo: "booking",
                          safari: s.name,
                        },
                      })
                    }
                    className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp />
                    Book Safari
                  </button>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
   <WhatsAppButton/>
         <Footer />
       </>
     );
   }