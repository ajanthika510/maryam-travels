import { FaCar, FaShuttleVan, FaTaxi } from "react-icons/fa";

export const vehicles = [
  {
    name: "Mini Car",
    type: "Budget Travel",
    desc: "Ideal for solo travelers & couples. Fuel efficient & comfortable.",
    icon: FaCar,
    img: "/mini.webp",
  },
  {
    name: "Sedan Car",
    type: "Comfort Travel",
    desc: "Perfect for families with smooth long-distance travel.",
    icon: FaTaxi,
    img: "/sedan.webp",
  },
  {
    name: "Van",
    type: "Group Travel",
    desc: "Best for small groups and airport transfers.",
    icon: FaShuttleVan,
    img: "/van.webp",
  },
  {
    name: "High Roof Van",
    type: "Tour Groups",
    desc: "Spacious vehicle for large groups & tours.",
    icon: FaShuttleVan,
    img: "/highroof.webp",
  },
];