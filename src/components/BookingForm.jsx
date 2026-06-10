import { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const today = new Date().toISOString().split("T")[0];
  const selectedVehicle = location.state?.selectedVehicle || "";

  const [form, setForm] = useState({
    experience: "",
    pickup: "",
    destination: "",
    travellers: "",
    vehicle: selectedVehicle,
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const experiences = [
    { icon: "✈️", title: "Airport Transfer" },
    { icon: "🦁", title: "Safari Adventure" },
    { icon: "🛵", title: "Scooter Rental" },
    { icon: "🏖️", title: "Beach Escape" },
    { icon: "🏛️", title: "Cultural Tour" },
    { icon: "🚕", title: "Private Transport" },
  ];

  const travellerTypes = ["Solo", "Couple", "Family", "Group"];
  const vehicles = ["Mini Car", "Sedan", "Van", "High Roof"];

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const isStep1Valid = form.experience !== "";

  const isStep2Valid =
    form.pickup.trim() &&
    form.destination.trim() &&
    form.date &&
    form.time;

  const isStep3Valid = form.travellers !== "";
  const isStep4Valid = form.vehicle !== "";

  const isStep5Valid =
    form.name.trim() !== "" && form.phone.trim().length >= 7;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendWhatsApp = () => {
    if (!isStep5Valid) return;

    const message = `Maryam Tours Booking Request

Experience: ${form.experience || "-"}
Pickup: ${form.pickup || "-"}
Destination: ${form.destination || "-"}

Travellers: ${form.travellers || "-"}
Vehicle: ${form.vehicle || "-"}

Date: ${form.date || "-"}
Time: ${form.time || "-"}

Name: ${form.name || "-"}
Phone: ${form.phone || "-"}`;

    window.open(
      `https://wa.me/94761686957?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-10 md:py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4">

        <motion.div
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[32px] p-5 md:p-10 flex flex-col">

            {/* HEADER */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-5xl font-black text-white">
                Plan Your Journey
              </h2>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Tell us your travel preferences
              </p>

              {/* PROGRESS */}
              <div className="mt-6">
                <div className="flex justify-between text-xs md:text-sm text-gray-400">
                  <span>Progress</span>
                  <span>{step}/5</span>
                </div>

                <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all"
                    style={{ width: `${(step / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* BODY CONTENT */}
            <div className="flex-1">

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <h3 className="text-xl text-white mb-4">
                    Select Experience
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {experiences.map((item) => (
                      <button
                        key={item.title}
                        onClick={() =>
                          setForm((p) => ({ ...p, experience: item.title }))
                        }
                        className={`p-4 rounded-2xl transition ${
                          form.experience === item.title
                            ? "bg-amber-400 text-black"
                            : "bg-white/5 text-white"
                        }`}
                      >
                        <div className="text-3xl">{item.icon}</div>
                        <p className="mt-2 text-sm">{item.title}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <h3 className="text-xl text-white mb-4">
                    Travel Details
                  </h3>

                  <input
                    name="pickup"
                    value={form.pickup}
                    onChange={handleChange}
                    placeholder="Pickup Location"
                    className="w-full p-4 rounded-xl bg-white/5 text-white mb-3"
                  />

                  <input
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    placeholder="Destination"
                    className="w-full p-4 rounded-xl bg-white/5 text-white mb-3"
                  />

                  <input
                    type="date"
                    name="date"
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-white/5 text-white"
                  />

                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-white/5 text-white mt-3"
                  />
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <h3 className="text-xl text-white mb-4">
                    Travellers
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {travellerTypes.map((t) => (
                      <button
                        key={t}
                        onClick={() =>
                          setForm((p) => ({ ...p, travellers: t }))
                        }
                        className={`p-4 rounded-xl ${
                          form.travellers === t
                            ? "bg-amber-400 text-black"
                            : "bg-white/5 text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <>
                  <h3 className="text-xl text-white mb-4">
                    Choose Vehicle
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {vehicles.map((v) => (
                      <button
                        key={v}
                        onClick={() =>
                          setForm((p) => ({ ...p, vehicle: v }))
                        }
                        className={`p-4 rounded-xl ${
                          form.vehicle === v
                            ? "bg-amber-400 text-black"
                            : "bg-white/5 text-white"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <>
                  <h3 className="text-xl text-white mb-4">
                    Your Details
                  </h3>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white/5 text-white mb-3"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-xl bg-white/5 text-white"
                  />
                </>
              )}
            </div>

            {/* FIXED RESPONSIVE FOOTER ACTION BAR */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 border-t border-white/10 pt-5">

              {/* BACK */}
              <button
                onClick={back}
                disabled={step === 1}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition ${
                  step === 1
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <FaArrowLeft />
                Back
              </button>

              {/* CONTINUE / FINAL */}
              {step < 5 ? (
                <button
                  onClick={next}
                  disabled={
                    (step === 1 && !isStep1Valid) ||
                    (step === 2 && !isStep2Valid) ||
                    (step === 3 && !isStep3Valid) ||
                    (step === 4 && !isStep4Valid)
                  }
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
                    (step === 1 && isStep1Valid) ||
                    (step === 2 && isStep2Valid) ||
                    (step === 3 && isStep3Valid) ||
                    (step === 4 && isStep4Valid)
                      ? "bg-amber-400 text-black"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue <FaArrowRight />
                </button>
              ) : (
                <button
                  onClick={sendWhatsApp}
                  disabled={!isStep5Valid}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
                    isStep5Valid
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <FaWhatsapp />
                  Send WhatsApp
                </button>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}