"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./services.css";

const SERVICES = [
  {
    name: "Mechanical Works",
    tagline: "Precision. Power. Performance.",
    description: "Complete mechanical solutions for engines, transmission systems, suspension, and braking — ensuring peak performance and reliability.",
    hero: "/services/mechanicalworks.png",
    link: "/service?category=mechanical"
  },
  {
    name: "Electrical Works",
    tagline: "Advanced Auto Electronics",
    description: "Expert diagnosis and repair of modern automotive electrical and electronic systems using advanced tools.",
    hero: "/services/elctric.png",
    link: "/service?category=electrical"
  },
  {
    name: "Maintenance Services",
    tagline: "Care That Extends Vehicle Life",
    description: "Scheduled maintenance services designed to prevent breakdowns and extend the life of your vehicle.",
    hero: "/services/maintenance-hero.png",
    link: "/service?category=maintenance"
  },
  {
    name: "Car A/C Works",
    tagline: "Comfort in Every Drive",
    description: "Professional A/C diagnostics and repairs to ensure efficient cooling even in extreme conditions.",
    hero: "/services/ac-hero.png",
    link: "/service?category=ac"
  },
  {
    name: "General Check Up",
    tagline: "Know Your Car's Health",
    description: "Complete vehicle health check using modern diagnostic scanners and road tests.",
    hero: "/services/general-check-hero.png",
    link: "/service?category=general-check"
  },
  {
    name: "General Services",
    tagline: "Everyday Essential Care",
    description: "Reliable general services that keep your vehicle safe, smooth, and road-ready.",
    hero: "/services/general-hero.png",
    link: "/service?category=general"
  },
];

const SPECIAL_SERVICES = [
  "Automatic Gear Box Repairing",
  "ECM / ECU Repairing",
  "Key Programming & Making", 
  "ABS & Airbag Systems",
  "Central Locking Systems",
  "Advanced Diagnostics & Coding",
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - UNCHANGED */}
      <section className="relative bg-gray-900 text-white py-32 md:py-40 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6 font-light animate-slide-down">
              Premium Services
            </p>
            <h1 className="text-5xl uppercase md:text-7xl lg:text-7xl font-light mb-8 leading-tight animate-fade-in-up delay-100" style={{ fontFamily: 'Georgia, serif' }}>
              Automotive Car Care
              <br />
              <em className="text-amber-400">Services</em>
            </h1>
            <div className="w-20 h-px bg-gray-600 mx-auto mb-10 animate-scale-in delay-200"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-300">
              Professional automotive care solutions tailored to keep your vehicle in perfect condition
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section - MODIFIED WITH NEW SERVICES DATA */}
      <section className="py-28 bg-white" data-animate id="services-main">
        <div className="w-full px-6 lg:px-24 xl:px-40">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-6 font-light">
              Complete Service Range
            </p>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our <em className="text-gray-700">Services</em>
            </h2>
            <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
              Explore our comprehensive range of automotive services
            </p>
          </div>

          {/* Services Grid - NEW CONTENT FROM SERVICE PAGE */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-10 border border-gray-200/50 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-3 rounded-2xl"
              >
                {/* Hero Image as Featured Image */}
                <div 
                  className="w-32 h-32 mx-auto mb-8 rounded-2xl overflow-hidden shadow-xl group-hover:scale-110 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${service.hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <h3
                  className="text-2xl md:text-3xl font-light mb-4 text-center group-hover:text-green-600 transition-all duration-300"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {service.name}
                </h3>
                
                <div className="text-center mb-6">
                  <p className="text-green-600 font-semibold text-lg mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white text-sm tracking-[0.2em] uppercase font-light rounded-full hover:bg-green-600 hover:shadow-lg transition-all duration-300 group/service"
                >
                  Explore Service
                  <svg
                    className="w-4 h-4 transform group-hover/service:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services Section - MODIFIED */}
      <section className="py-28 bg-gradient-to-b from-gray-900 to-black text-white" data-animate id="special-services">
        <div className="w-full px-6 lg:px-24 xl:px-40">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <p className="text-xs tracking-[0.35em] uppercase text-red-400 mb-6 font-light">
              Advanced Expertise
            </p>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Special <em className="text-red-500">Services</em>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto">
              Cutting-edge solutions for complex automotive challenges
            </p>
          </div>

          {/* Special Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SPECIAL_SERVICES.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl p-10 border border-white/20 hover:border-red-500 hover:bg-white/15 rounded-2xl transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-2xl"
              >
                <div className="text-4xl mb-6 opacity-75">⚡</div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 group-hover:text-red-400 transition-all duration-300 leading-tight">
                  {service}
                </h3>
                <p className="text-gray-300 font-light leading-relaxed mb-8 opacity-90">
                  Expert-level precision for your vehicle's most complex systems.
                </p>
                <Link
                  href="/special-services"
                  className="inline-flex items-center gap-2 text-sm tracking-[0.25em] uppercase text-red-400 hover:text-red-300 border border-red-400/50 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-red-500/10 transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - ENHANCED */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white" data-animate id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6 font-light animate-slide-down">
              Why Choose Us
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 animate-fade-in-up delay-100" style={{ fontFamily: 'Georgia, serif' }}>
              Why Automotive Car Care?
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-gray-400 to-gray-300 mx-auto mb-12 animate-scale-in delay-200"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👨‍🔧', title: 'Certified Experts', desc: 'Factory-trained technicians with specialized certifications', delay: '100' },
              { icon: '⚡', title: 'Fast Turnaround', desc: 'Most services completed within 24-48 hours', delay: '200' },
              { icon: '🔧', title: 'OEM Quality Parts', desc: 'Genuine components with lifetime warranty', delay: '300' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees - detailed quotes upfront', delay: '400' },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-10 bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-700 transform hover:-translate-y-4 group rounded-2xl border border-gray-100/50 animate-fade-in-up"
                style={{ animationDelay: `${item.delay}ms`, opacity: 0 }}
              >
                <div className="text-6xl mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - ENHANCED */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900/95 to-black/90 backdrop-blur-xl p-16 md:p-24 text-center relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.15),transparent_50%)] animate-pulse"></div>
            <div className="relative z-10">
              <p className="text-sm tracking-[0.4em] uppercase text-green-400 mb-8 font-light animate-slide-down">
                Ready For Perfect Service?
              </p>
              <h2 className="text-5xl md:text-7xl font-light text-white mb-12 animate-fade-in-up delay-100" style={{ fontFamily: 'Georgia, serif' }}>
                Book Your Service Today
              </h2>
              <div className="w-28 h-px bg-gradient-to-r from-green-400 to-green-500 mx-auto mb-12 animate-scale-in delay-200"></div>
              <p className="text-2xl md:text-3xl text-gray-300 mb-16 font-light max-w-3xl mx-auto animate-fade-in-up delay-300">
                Professional automotive care with guaranteed results
              </p>
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <Link
                  href="/booking"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-6 text-lg tracking-[0.15em] uppercase font-light rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10">📅 Book Appointment</span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-12 py-6 text-lg tracking-[0.15em] uppercase font-light rounded-2xl overflow-hidden hover:border-green-400 hover:bg-green-500/10 transition-all duration-500 transform hover:-translate-y-1"
                >
                  <span className="absolute inset-0 bg-green-500/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 -skew-x-12"></span>
                  <span className="relative z-10">💬 Get Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
