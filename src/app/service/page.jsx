"use client";

import { useState } from "react";

const DEFAULT_HERO = "/services/services-hero.jpg";

const SERVICES = [
  {
    name: "Mechanical Works",
    tagline: "Precision. Power. Performance.",
    description:
      "Complete mechanical solutions for engines, transmission systems, suspension, and braking — ensuring peak performance and reliability.",
    hero: "/services/mechanicalworks.png",
    image: "/services/mechanical/mechanica.png",
    content:
      "Our mechanical works cover complete engine diagnostics, gearbox repairs, suspension tuning, steering corrections, braking systems, and drivetrain services. Using advanced tools and experienced technicians, we ensure your vehicle performs at its best with long-term reliability.",
  },
  {
    name: "Electrical Works",
    tagline: "Advanced Auto Electronics",
    description:
      "Expert diagnosis and repair of modern automotive electrical and electronic systems using advanced tools.",
    hero: "/services/elctric.png",
    image: "/services/electrical/electrical.png",
    content:
      "We specialize in automotive electrical systems including ECM, BCM, TCM repairs, wiring diagnostics, ABS modules, airbag systems, and charging circuits. Our experts use OEM-level scanners and testing equipment for accurate fault resolution.",
  },
  {
    name: "Maintenance Services",
    tagline: "Care That Extends Vehicle Life",
    description:
      "Scheduled maintenance services designed to prevent breakdowns and extend the life of your vehicle.",
    hero: "/services/maintenance-hero.png",
    image: "/services/maintenance/maintanance.png",
    content:
      "Regular maintenance is essential for vehicle longevity. Our services include oil changes, fluid replacements, inspections, and preventive care schedules designed to reduce wear, improve fuel efficiency, and avoid costly repairs.",
  },
  {
    name: "Car A/C Works",
    tagline: "Comfort in Every Drive",
    description:
      "Professional A/C diagnostics and repairs to ensure efficient cooling even in extreme conditions.",
    hero: "/services/ac-hero.png",
    image: "/services/ac/content.png",
    content:
      "We provide complete car A/C solutions including gas leak detection, cooling efficiency checks, compressor repair, and electrical diagnostics. Our services ensure optimal cooling performance and cabin comfort.",
  },
  {
    name: "General Check Up",
    tagline: "Know Your Car’s Health",
    description:
      "Complete vehicle health check using modern diagnostic scanners and road tests.",
    hero: "/services/general-check-hero.png",
    image: "/services/general-check/General Check Up.png",
    content:
      "Our general check-up service includes full vehicle scanning, sensor analysis, warning light diagnosis, and road testing. You receive a detailed health report so you know exactly where your vehicle stands.",
  },
  {
    name: "General Services",
    tagline: "Everyday Essential Care",
    description:
      "Reliable general services that keep your vehicle safe, smooth, and road-ready.",
    hero: "/services/general-hero.png",
    image: "/services/general/content.png",
    content:
      "Our general services include basic service packages, safety inspections, minor mechanical adjustments, and routine checks that keep your vehicle reliable for everyday driving.",
  },
];



export default function ServicePage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeService =
    activeIndex !== null ? SERVICES[activeIndex] : null;

  return (
    <div className="bg-white text-gray-900">

      {/* FULL WIDTH HERO */}
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
        <div className="absolute inset-0" />

        <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in-up">
           <p className="text-sm tracking-[1.35em] uppercase text-red-400 mb-6">
           AutoMotive-Car-Care
          </p>

          <h1 className="text-6xl md:text-7xl  lg:text-8xl font-bold mb-6 leading-tight">
            {activeService ? activeService.name : "Our Services"}
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
        <aside className="lg:col-span-2  top-28 h-full">
          <h2 className="text-4xl text-center mb-6  font-light tracking-wide">
            Our Services
          </h2>
          <ul className=" border-none rounded-4xl shadow-sm">
            {SERVICES.map((item, i) => (
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
                    : "hover:bg-gray-900 hover:cursor-mouse hover:pl-8"
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
              className="w-full mb-10 rounded-xl shadow-2xl transform transition duration-700 hover:scale-105"
            />

            <h2 className="text-4xl font-light mb-8 text-green-600">
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
