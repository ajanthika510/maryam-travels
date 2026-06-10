import { FaCar, FaPlane, FaMapMarkedAlt, FaMotorcycle } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { GiIsland } from "react-icons/gi";

export const services = [
  {
    title: "Airport Transfers",
    desc: "Reliable pickup & drop-off from Bandaranaike Airport to Trincomalee & all island.",
    icon: FaPlane,
  },
  {
    title: "Scooter & Tuk Tuk Rental",
    desc: "Affordable daily rentals with flexible pickup options in Nilaveli & Trincomalee.",
    icon: FaMotorcycle,
  },
  {
    title: "All Island Taxi Service",
    desc: "Travel anywhere in Sri Lanka with comfortable cars, vans & high-roof vehicles.",
    icon: FaCar,
  },
  {
    title: "Day Tours",
    desc: "Sigiriya, Kandy, Dambulla, Polonnaruwa, Anuradhapura guided tours.",
    icon: MdTour,
  },
  {
    title: "Trincomalee Tours",
    desc: "Explore Nilaveli, Kanniya Hot Wells, temples, beaches & hidden gems.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Safari Trips",
    desc: "Minneriya, Kaudulla, Wilpattu & Hurulu Eco Park jeep safari adventures.",
    icon: GiIsland,
  },
];