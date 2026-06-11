import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Rentals from "./pages/Rentals";
import Safari from "./pages/Safari";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;