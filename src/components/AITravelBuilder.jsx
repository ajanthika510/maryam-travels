import { useState } from "react";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";

const travelers = ["Solo", "Couple", "Family", "Group"];
const fleets = ["Mini Car", "Sedan", "SUV", "Van", "Luxury"];

export default function AITravelBuilder() {
  const today = new Date().toISOString().split("T")[0];

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [traveler, setTraveler] = useState("Couple");
  const [fleet, setFleet] = useState("Sedan");

  const isValid =
    pickup.trim() &&
    destination.trim() &&
    date &&
    time &&
    traveler &&
    fleet;

  const message = `Hello Maryam Tours 👋

Booking Request:

Pickup: ${pickup}
Destination: ${destination}

Date: ${date}
Time: ${time}

Traveller: ${traveler}
Fleet: ${fleet}

Please share availability and price.`;

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="
      backdrop-blur-xl bg-white/10 border border-white/20
      rounded-2xl md:rounded-3xl
      p-4 sm:p-6 md:p-8
      shadow-2xl text-white
      w-full max-w-xl mx-auto
    ">

      {/* HEADER */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
        ✨ Quick Booking
      </h3>

      <p className="text-gray-300 text-xs sm:text-sm mt-1">
        Plan your ride in seconds
      </p>

      {/* INPUTS */}
      <div className="mt-5 grid gap-3">

        <input
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="📍 Pickup Location"
          className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none text-sm sm:text-base"
        />

        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="📍 Destination"
          className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none text-sm sm:text-base"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          {/* DATE - FIXED */}
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none text-sm sm:text-base"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none text-sm sm:text-base"
          />
        </div>
      </div>

      {/* TRAVELER */}
      <div className="mt-6">
        <p className="text-xs sm:text-sm font-medium mb-2">
          Traveller Type
        </p>

        <div className="flex flex-wrap gap-2">
          {travelers.map((t) => (
            <button
              key={t}
              onClick={() => setTraveler(t)}
              className={`
                px-3 py-2 rounded-full text-xs sm:text-sm transition
                ${traveler === t
                  ? "bg-amber-400 text-black"
                  : "bg-white/10 hover:bg-white/20"}
              `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* FLEET */}
      <div className="mt-6">
        <p className="text-xs sm:text-sm font-medium mb-2">
          Fleet
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {fleets.map((f) => (
            <button
              key={f}
              onClick={() => setFleet(f)}
              className={`
                p-2 rounded-xl text-xs sm:text-sm transition
                ${fleet === f
                  ? "bg-amber-400 text-black"
                  : "bg-white/10 hover:bg-white/20"}
              `}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="
        mt-6 p-3 sm:p-4
        rounded-2xl bg-white/10 border border-white/10
      ">
        <h4 className="text-amber-400 font-semibold text-sm sm:text-base">
          Trip Summary
        </h4>

        <p className="text-xs sm:text-sm text-gray-200 mt-2">
          {pickup || "Pickup"} → {destination || "Destination"}
        </p>

        <p className="text-[10px] sm:text-xs text-gray-300 mt-1">
          {date || "Date"} • {time || "Time"} • {traveler} • {fleet}
        </p>
      </div>

      {/* ACTIONS */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">

        <button
          onClick={scrollToBooking}
          className="
            flex-1 flex items-center justify-center gap-2
            bg-white/10 hover:bg-white/20
            py-3 rounded-xl transition
            text-sm sm:text-base
          "
        >
          <FaArrowDown />
          Full Booking Form
        </button>

        <a
          href={
            isValid
              ? `https://wa.me/94761686957?text=${encodeURIComponent(message)}`
              : "#"
          }
          target="_blank"
          rel="noreferrer"
          className={`
            flex-1 flex items-center justify-center gap-2
            py-3 rounded-xl font-semibold transition
            text-sm sm:text-base
            ${isValid
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"}
          `}
        >
          <FaWhatsapp />
          Get Quote
        </a>
      </div>
    </div>
  );
}