import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Rentals", path: "/rentals" },
    { name: "Safari", path: "/safari" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔥 Scroll to booking section after navigation
  const goToBooking = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.webp"
              alt="Maryam Tours"
              className="h-12 w-12 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-black text-white">
                Maryam <span className="text-amber-400">Tours</span>
              </h1>

              <p className="text-xs text-gray-400 hidden sm:block">
                Nilaveli • Trincomalee
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-amber-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Book Button (FIXED) */}
          <button
            onClick={goToBooking}
            className="hidden lg:flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold px-5 py-3 rounded-full"
          >
            <FaWhatsapp />
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-950 border-t border-white/10">

          <ul className="flex flex-col p-6 gap-5 text-white">

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-amber-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

          {/* Mobile Book Button (FIXED) */}
          <div className="px-6 pb-6">
            <button
              onClick={goToBooking}
              className="w-full flex justify-center items-center gap-2 bg-green-500 text-white py-3 rounded-xl"
            >
              <FaWhatsapp />
              Book Now
            </button>
          </div>

        </div>
      </div>

    </nav>
  );
}