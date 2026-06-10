import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTripadvisor,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.webp"
                alt="Maryam Tours"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold">
                  Maryam
                  <span className="text-amber-400"> Tours</span>
                </h3>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Trusted travel partner in Nilaveli & Trincomalee.
              Airport transfers, island tours, safari adventures,
              scooter rentals and private transportation across Sri Lanka.
            </p>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-lg font-semibold mb-5 text-amber-400">
              Services
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/#services" className="hover:text-amber-400 transition">
                  Airport Pickup & Drop
                </Link>
              </li>

              <li>
                <Link to="/#services" className="hover:text-amber-400 transition">
                  All Island Tours
                </Link>
              </li>

              <li>
                <Link to="/#services" className="hover:text-amber-400 transition">
                  Safari Packages
                </Link>
              </li>

              <li>
                <Link to="/#services" className="hover:text-amber-400 transition">
                  Trincomalee City Tours
                </Link>
              </li>

              <li>
                <Link to="/#services" className="hover:text-amber-400 transition">
                  Scooter Rental
                </Link>
              </li>

              <li>
                <Link to="/#services" className="hover:text-amber-400 transition">
                  Tuk Tuk Rental
                </Link>
              </li>
            </ul>

          </div>

          {/* Popular Tours */}
          <div>

            <h4 className="text-lg font-semibold mb-5 text-amber-400">
              Popular Destinations
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/tours" className="hover:text-amber-400 transition">
                  Sigiriya
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-amber-400 transition">
                  Kandy
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-amber-400 transition">
                  Dambulla    
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-amber-400 transition">
                  Anuradhapura
                </Link>
              </li>   

              <li>
                <Link to="/tours" className="hover:text-amber-400 transition">
                  Polonnaruwa
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-amber-400 transition">
                  Nilaveli Beach
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h4 className="text-lg font-semibold mb-5 text-amber-400">
              Contact Us
            </h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-400" />
                <span>
                  Ward No 01,
                  <br />
                  Nilaveli, Trincomalee
                </span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-amber-400" />
                <span>+94 76 168 6957</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-amber-400" />
                <span>F.imzam7788@gmail.com</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">


          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.facebook.com/share/1DZm453DkH/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/maryam_tours_nilaveli"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tripadvisor.com/Attraction_Review-g424963-d27511689-Reviews-Maryam_Tours_Nilaveli-Trincomalee_Eastern_Province.html"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center hover:scale-110 transition"
            >
              <FaTripadvisor />
            </a>

          </div>

        </div>

      {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-400 text-center">

          {/* LEFT */}
          <p>
            © Maryam Tours Nilaveli.
            All Rights Reserved.
          </p>

          {/* RIGHT */}
          <p>

            Designed and Developed by{" "}

            <a
              href="https://www.neirahtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
            >
              Neirahtech
            </a>

          </p>

        </div>

      </div>

    </footer>
  );
}