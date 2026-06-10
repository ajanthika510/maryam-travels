import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaCar,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="pt-28 bg-gradient-to-b from-sky-50 via-white to-white">

        {/* Hero */}
        <div className="relative">

          <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-10"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-20">

            <div className="text-center max-w-4xl mx-auto">

              <span className="bg-sky-100 text-sky-600 px-5 py-2 rounded-full text-sm font-semibold">
                ABOUT MARYAM TOURS
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Discover Sri Lanka
                <span className="block text-sky-500">
                  With Trusted Local Experts
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Maryam Tours Nilaveli is a trusted tourism and transportation
                service provider offering airport transfers, taxi services,
                safari tours, scooter rentals and custom travel experiences
                across Sri Lanka.
              </p>

            </div>
          </div>
        </div>

        {/* Owner Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div>
              <img
                src="/owner.png"
                alt="Maryam Tours"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>

              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                <FaAward />
                SLTDA Approved Tourist Driver
              </div>

              <h2 className="text-4xl font-black mt-6 text-slate-900">
                Fareesdeen Ahamed Imzam
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                With years of experience in Sri Lanka’s tourism industry,
                we provide safe, comfortable and reliable transportation
                services for travelers from around the world.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Whether you need airport transfers, cultural tours,
                wildlife safaris or private transportation, we ensure
                every journey is smooth, memorable and affordable.
              </p>

            </div>

          </div>
        </div>

        {/* Statistics */}
        <div className="bg-slate-900 py-20">

          <div className="max-w-6xl mx-auto px-6">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="text-center">
                <FaUsers className="mx-auto text-sky-400 text-4xl mb-4" />
                <h3 className="text-white text-4xl font-black">1000+</h3>
                <p className="text-slate-300">Happy Travelers</p>
              </div>

              <div className="text-center">
                <FaCar className="mx-auto text-sky-400 text-4xl mb-4" />
                <h3 className="text-white text-4xl font-black">24/7</h3>
                <p className="text-slate-300">Transport Service</p>
              </div>

              <div className="text-center">
                <FaGlobeAsia className="mx-auto text-sky-400 text-4xl mb-4" />
                <h3 className="text-white text-4xl font-black">Islandwide</h3>
                <p className="text-slate-300">Coverage</p>
              </div>

              <div className="text-center">
                <FaAward className="mx-auto text-sky-400 text-4xl mb-4" />
                <h3 className="text-white text-4xl font-black">SLTDA</h3>
                <p className="text-slate-300">Approved Driver</p>
              </div>

            </div>

          </div>
        </div>

        {/* Contact Cards */}
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-black text-slate-900">
              Get In Touch
            </h2>

            <p className="text-slate-600 mt-4">
              We're available 24/7 to assist with your travel needs.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-sky-500 text-2xl" />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Location
              </h3>

              <p className="text-slate-600 mt-3">
                Ward No 01, Nilaveli, Sri Lanka
              </p>

            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <FaWhatsapp className="text-green-500 text-2xl" />
              </div>

              <h3 className="font-bold text-xl mt-5">
                WhatsApp
              </h3>

              <p className="text-slate-600 mt-3">
                +94 76 168 6957
              </p>

            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                <FaEnvelope className="text-red-500 text-2xl" />
              </div>

              <h3 className="font-bold text-xl mt-5">
                Email
              </h3>

              <p className="text-slate-600 mt-3 break-all">
                f.imzam7788@gmail.com
              </p>

            </div>

          </div>

        </div>

      </section>

      <WhatsAppButton />  

      <Footer />
    </>
  );
}