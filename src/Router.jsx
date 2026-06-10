import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Rentals from "./pages/Rentals";
import Safari from "./pages/Safari";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/safari" element={<Safari />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;