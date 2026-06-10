import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import {
  FaUser,
  FaGlobe,
  FaWhatsapp,
  FaEnvelope,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaStar,
  FaHeadset,
} from "react-icons/fa";

export default function Rentals() {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    vehicle: "Scooter",
    pickupDate: "",
    dropDate: "",
    travelers: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    const required = [
      "name",
      "country",
      "phone",
      "email",
      "pickupDate",
      "dropDate",
      "travelers",
      "license",
    ];

    required.forEach((key) => {
      if (!form[key]?.toString().trim()) {
        newErrors[key] = "Required";
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (
      form.pickupDate &&
      form.dropDate &&
      new Date(form.dropDate) < new Date(form.pickupDate)
    ) {
      newErrors.dropDate = "Invalid date range";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const text = `MARYAM TOURS RENTAL BOOKING

Name: ${form.name}
Country: ${form.country}
Phone: ${form.phone}
Email: ${form.email}

Vehicle: ${form.vehicle}

Pickup Date: ${form.pickupDate}
Drop Date: ${form.dropDate}

Travelers: ${form.travelers}
License: ${form.license}

Special Requests:
${form.message || "None"}
`;

    window.open(
      `https://wa.me/94761686957?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const Input = ({
  icon,
  name,
  type = "text",
  placeholder,
  min,
}) => (
  <div>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 z-10">
        {icon}
      </div>

      <input
        name={name}
        type={type}
        min={min}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="
        w-full
        h-12
        md:h-14
        pl-12
        pr-4
        text-sm
        md:text-base
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        backdrop-blur-sm
        shadow-sm
        focus:ring-4
        focus:ring-sky-200
        focus:border-sky-500
        outline-none
        transition-all
        duration-300
        hover:border-sky-300
        "
      />
    </div>

    {errors[name] && (
      <p className="text-red-500 text-xs mt-1">
        {errors[name]}
      </p>
    )}
  </div>
);

 const Select = ({
  name,
  options,
  placeholder,
}) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-slate-700">
      {placeholder}
    </label>

    <select
      name={name}
      value={form[name]}
      onChange={handleChange}
      className="
      w-full
      h-12
      md:h-14
      px-4
      text-sm
      md:text-base
      rounded-2xl
      border
      border-slate-200
      bg-white
      focus:ring-4
      focus:ring-sky-200
      focus:border-sky-500
      outline-none
      "
    >
      <option value="">Select</option>

      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>

    {errors[name] && (
      <p className="text-red-500 text-xs mt-1">
        {errors[name]}
      </p>
    )}
  </div>
);

  return (
    <>
      <Navbar />   

        <section className="relative min-h-[70vh] md:h-[75vh] overflow-hidden flex items-center justify-center">        
          <img
          src="/rental.png"
          alt=""
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-110
          animate-slowZoom
          "
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
          >

          <span className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-sky-500/20
          backdrop-blur-md
          border
          border-sky-400/30
          text-sky-300
          text-sm
          font-semibold
          mb-5
          ">
            PREMIUM RENTALS
          </span>

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-7xl
            font-black
            text-white
            leading-tight
            ">
            Explore Sri Lanka
            <span className="block text-sky-400">
              Your Freedom Starts Here
            </span>
          </h1>

          <p className="
            mt-6
            text-white/80
            text-base
            md:text-lg
            max-w-2xl
            mx-auto
            px-2
            ">
            Premium scooters and tuk tuks for unforgettable adventures.
          </p>
        </motion.div>

      </section>      
      
      <section className="max-w-7xl mx-auto px-4 sm:px-5 py-14 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <h2 className="
            text-3xl
            md:text-4xl
            font-black
            text-center
            mb-10
            ">
            Choose Your Ride
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -10 }}
            className="
            bg-white
            rounded-[30px]
            overflow-hidden
            shadow-xl
            "
          >
            <div className="overflow-hidden">
              <img
                src="/scooter.webp"
                alt=""
                className="
                h-56 sm:h-64 md:h-80
                w-full
                object-cover
                hover:scale-110
                transition
                duration-700
                "
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                Scooter Rental
              </h3>

              <p className="mt-3 text-slate-600">
                Perfect for solo travelers and couples.
              </p>

              <div className="mt-5 space-y-3">
                <p>✓ Automatic</p>
                <p>✓ Fuel Efficient</p>
                <p>✓ Easy Parking</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="
            bg-white
            rounded-[30px]
            overflow-hidden
            shadow-xl
            "
          >
            <div className="overflow-hidden">
              <img
                src="/tuktuk.webp"
                alt=""
                className="
                h-56 sm:h-64 md:h-80
                w-full
                object-cover
                hover:scale-110
                transition
                duration-700
                "
              />
            </div>

            <div className="p-5 md:p-8">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-sky-600">
                Tuk Tuk Rental
              </h3>

              <p className="mt-3 text-slate-600">
                Experience Sri Lanka like a local.
              </p>

              <div className="mt-5 space-y-3">
                <p>✓ Spacious</p>
                <p>✓ Adventure Ready</p>
                <p>✓ Most Popular Choice</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>      
      
      <section className="py-12 md:py-16 bg-gradient-to-r from-sky-50 to-blue-50">

        <div className="max-w-6xl mx-auto px-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-black text-sky-600">
                500+
              </h3>

              <p className="mt-2 text-slate-600">
                Happy Travelers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .1 }}
              className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-black text-sky-600">
                24/7
              </h3>

              <p className="mt-2 text-slate-600">
                Support
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .2 }}
              className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-black text-sky-600">
                100%
              </h3>

              <p className="mt-2 text-slate-600">
                Licensed Vehicles
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .3 }}
              className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-black text-sky-600">
                5★
              </h3>

              <p className="mt-2 text-slate-600">
                Customer Rating
              </p>
            </motion.div>

          </div>

        </div>

      </section>      
      
      <section className="py-12">

        <div className="max-w-6xl mx-auto px-5">

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

            <div className="bg-white rounded-full px-5 py-3 shadow-lg flex items-center gap-3 text-sm md:text-base">
              <FaShieldAlt className="text-sky-600" />
              <span>Fully Insured</span>
            </div>

            <div className="bg-white rounded-full px-5 py-3 shadow-lg flex items-center gap-3 text-sm md:text-base">
              <FaCheckCircle className="text-green-500" />
              <span>Tourist Friendly</span>
            </div>

            <div className="bg-white rounded-full px-5 py-3 shadow-lg flex items-center gap-3 text-sm md:text-base">
              <FaHeadset className="text-purple-500" />
              <span>24/7 Assistance</span>
            </div>

            <div className="bg-white rounded-full px-5 py-3 shadow-lg flex items-center gap-3 text-sm md:text-base">
              <FaStar className="text-yellow-500" />
              <span>Top Rated Service</span>
            </div>

          </div>

        </div>

      </section>      
      
      <section className="relative py-16 md:py-28 overflow-hidden">

  {/* 🌊 Background Glow (Improved Palette) */}
  <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

  {/* soft overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/30" />

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-[40px]
        bg-white/70
        backdrop-blur-2xl
        border border-white/40
        p-6 md:p-12
        shadow-[0_25px_90px_rgba(0,0,0,0.15)]
      "
    >

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900">
          Book Your Ride
        </h2>

        <p className="text-slate-500 mt-2 text-sm md:text-base">
          Fast WhatsApp booking • No hidden charges • Instant response
        </p>
      </div>

      {/* FORM GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

  <Input icon={<FaUser />} name="name" placeholder="Full Name" />
  <Input icon={<FaGlobe />} name="country" placeholder="Country" />
  <Input icon={<FaWhatsapp />} name="phone" placeholder="WhatsApp Number" />
  <Input icon={<FaEnvelope />} name="email" placeholder="Email Address" />

  <Select
    name="vehicle"
    placeholder="Vehicle Type"
    options={["Scooter", "Tuk Tuk"]}
  />

  <Input
    icon={<FaUsers />}
    type="number"
    name="travelers"
    placeholder="Number of Travelers"
  />

  {/* ✅ RENTAL PERIOD FULL WIDTH */}
  <div className="md:col-span-2">

    <h3 className="text-sm font-semibold text-slate-700 mb-4">
      Rental Period
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* PICKUP */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Pickup Date
        </label>

        <div className="relative mt-1">
          <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500" />

          <input
            type="date"
            name="pickupDate"
            value={form.pickupDate}
            min={today}
            onChange={handleChange}
            className="
              w-full pl-10 py-3 rounded-xl border bg-white
              shadow-sm focus:ring-2 focus:ring-sky-300 outline-none
            "
          />
        </div>

        {errors.pickupDate && (
          <p className="text-xs text-red-500">{errors.pickupDate}</p>
        )}
      </div>

      {/* DROPOFF */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Drop-off Date
        </label>

        <div className="relative mt-1">
          <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" />

          <input
            type="date"
            name="dropDate"
            value={form.dropDate}
            min={form.pickupDate || today}
            onChange={handleChange}
            className="
              w-full pl-10 py-3 rounded-xl border bg-white
              shadow-sm focus:ring-2 focus:ring-emerald-300 outline-none
            "
          />
        </div>

        {errors.dropDate && (
          <p className="text-xs text-red-500">{errors.dropDate}</p>
        )}
      </div>

    </div>
  </div>

        {/* LICENSE FULL WIDTH */}
      <div className="md:col-span-2">
        <Select
          name="license"
          placeholder="Do you have a driving license?"
          options={["Yes", "No"]}
        />
      </div>

    </div> {/* END GRID */}

    {/* BUTTON */}
    <motion.button
      onClick={sendWhatsApp}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="
        mt-8
        w-full
        py-4
        rounded-2xl
        text-white
        font-bold
        bg-gradient-to-r from-emerald-500 to-green-600
      "
    >
      Send Booking via WhatsApp
    </motion.button>

  </motion.div> {/* ✅ THIS CLOSES motion.div */}

</div>
</section>

<WhatsAppButton />
<Footer />
</>
);
}
