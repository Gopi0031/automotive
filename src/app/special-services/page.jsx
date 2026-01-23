"use client";

import { useState } from "react";

const DEFAULT_HERO = "/services/special/hero.jpg";

const SPECIAL_SERVICES = [
  {
    name: "Automatic Gear Box Repairing",
    tagline: "Smooth Shifting. Zero Compromise.",
    description:
      "Expert automatic transmission diagnostics, repair, and recalibration ensuring smooth gear transitions and long-term reliability.",
    hero: "/services/special/gearbox-hero.png",
    image: "/services/special/gearbox.png",
    content:
      "Our automatic gearbox service includes complete transmission diagnostics, valve body repair, torque converter servicing, and TCM programming. We restore smooth shifting performance using advanced tools and manufacturer-approved procedures.",
  },
  {
    name: "ECM / ECU Repairing",
    tagline: "The Brain of Your Vehicle",
    description:
      "Advanced ECU and ECM repairs including chip-level correction, firmware reflashing, and immobilizer recovery.",
    hero: "/services/special/ecu-hero.png",
    image: "/services/special/ecu.png",
    content:
      "We specialize in ECU and ECM repairs including firmware reflashing, chip-level soldering, immobilizer recovery, and performance optimization. Our lab-grade equipment ensures accurate and reliable electronic repairs.",
  },
  {
    name: "Key Makings",
    tagline: "Precision Cut. Secure Access.",
    description:
      "Professional key cutting and duplication services for traditional, transponder, and smart keys.",
    hero: "/services/special/key-hero.png",
    image: "/services/special/key.png",
    content:
      "Our key making services include laser cutting, transponder programming, smart key cloning, and remote repair. We ensure secure access and seamless compatibility with your vehicle’s immobilizer system.",
  },
  {
    name: "Sensor Checking",
    tagline: "Accuracy at Every Signal",
    description:
      "Complete sensor diagnostics using live data and oscilloscopes to ensure precise engine and system performance.",
    hero: "/services/special/sensor-hero.png",
    image: "/services/special/sensor.png",
    content:
      "We perform advanced sensor diagnostics using live data streams and oscilloscopes. Our service includes oxygen sensors, crank and cam sensors, MAF testing, and CAN bus signal verification.",
  },
  {
    name: "Key Programming",
    tagline: "Secure Starts, Guaranteed",
    description:
      "Advanced programming for encrypted keys, push-button start systems, and immobilizer pairing.",
    hero: "/services/special/key-programming-hero.png",
    image: "/services/special/key-programming.png",
    content:
      "We provide encrypted key programming, proximity key pairing, immobilizer synchronization, and emergency key solutions using OEM-level diagnostic tools.",
  },
  {
    name: "ABS (Anti Braking System)",
    tagline: "Control When It Matters Most",
    description:
      "Complete ABS diagnostics, module repair, and wheel sensor calibration for maximum braking safety.",
    hero: "/services/special/abs-hero.png",
    image: "/services/special/abs.png",
    content:
      "Our ABS service includes module repair, sensor calibration, hydraulic bleeding, and brake pressure testing to ensure maximum vehicle stability and safety.",
  },
  {
    name: "Air Bags",
    tagline: "Safety You Can Trust",
    description:
      "Professional airbag system diagnostics, crash data clearing, and module resetting.",
    hero: "/services/special/airbag-hero.png",
    image: "/services/special/airbag.png",
    content:
      "We diagnose and repair SRS airbag systems, clear crash data, reset airbag modules, and service seatbelt pretensioners to restore factory-level safety.",
  },
  {
    name: "Central Locking System",
    tagline: "Convenience Meets Security",
    description:
      "Repair and programming of central locking modules, actuators, and remote synchronization.",
    hero: "/services/special/locking-hero.jpg",
    image: "/services/special/locking.png",
    content:
      "Our central locking services include actuator replacement, remote synchronization, comfort access repair, and lock module programming for reliable vehicle security.",
  },
  {
    name: "Electronic Control Units",
    tagline: "Total Vehicle Intelligence",
    description:
      "Complete vehicle ECU network diagnostics, CAN bus repair, and multi-module synchronization.",
    hero: "/services/special/ecu-network-hero.png",
    image: "/services/special/ecu-network.png",
    content:
      "We provide complete ECU network diagnostics including CAN bus repair, gateway programming, and multi-module synchronization to eliminate communication faults.",
  },
];


export default function SpecialServicesPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeService =
    activeIndex !== null ? SPECIAL_SERVICES[activeIndex] : null;

  return (
    <div className="bg-white text-gray-900">

      {/* FULL HERO */}
      <section
        className="h-150 flex items-center bg-gray-900 text-white justify-center text-white relative transition-all duration-700"
        style={{
          backgroundImage: `url(${
            activeService ? activeService.hero : DEFAULT_HERO
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 " />

        <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in-up">
          <p className="text-sm tracking-[1.35em] uppercase text-red-400 mb-6">
            AutoMotive-Car-Care
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            {activeService ? activeService.name : "Special Services"}
          </h1>

          {activeService && (
            <>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                {activeService.tagline}
              </p>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                {activeService.description}
              </p>
            </>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-8xl mx-auto px-9 py-28 grid lg:grid-cols-5 gap-15">

        {/* LEFT MENU */}
        <aside className="lg:col-span-2  top-28 h-fit">
          <h2 className="text-3xl text-red-900 text-center mb-6 font-bold tracking-wide">
            Special Services
          </h2>
          <ul className="border-none border-blue-900 shadow-sm">
            {SPECIAL_SERVICES.map((item, i) => (
              <li key={i}>
                <button
                    onClick={() => {
                    setActiveIndex(i);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    }}


                  className={`w-full bg-gray-900 px-6 py-8 text-xl rounded-3xl text-left text-white border-b-3 transition-all duration-300 ${
                    activeIndex === i
                      ? "bg-green-600 text-red-900 font-bold text-lg"
                      : "hover:bg-gray-900 hover:pl-8"
                  }`}
                >
                  ★ {item.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT CONTENT */}
        {activeService && (
          <div
            key={activeIndex}
            className="lg:col-span-3 animate-fade-in-up"
          >
            <img
              src={activeService.image}
              alt={activeService.name}
              className="w-full mb-10 rounded-xl shadow-2xl transition-transform duration-700 hover:scale-105"
            />

            <h2 className="text-4xl font-light mb-8 text-red-600">
              {activeService.name}
            </h2>

         <p className="text-lg md:text-xl leading-relaxed text-gray-700 animate-fade-in-up">
  {activeService.content}
</p>

          </div>
        )}
      </div>

      {/* FOOTER STRIP */}
      <div className="bg-gray-900 border-b-20 text-white text-center py-9 text-md font-semi tracking-wide">
        ALL TYPES OF VEHICLE RELATED WORKS
      </div>
    </div>
  );
}
