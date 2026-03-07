import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Wedding Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "They transformed our simple venue into a royal palace. Absolutely magical experience!",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Anniversary Celebration",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The decoration was beyond expectations. Every detail felt luxurious and elegant.",
    rating: 5,
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Corporate Event",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Professional team and stunning setup. Highly recommended for premium events.",
    rating: 5,
  },
];

export default function LuxuryTestimonials() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-main)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      {/* 🎞 Golden Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              width: Math.random() * 6 + 4 + "px",
              height: Math.random() * 6 + 4 + "px",
              background: "var(--primary)",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div
        className="relative mx-auto px-4"
        style={{ maxWidth: "var(--container-width)" }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold"
            style={{ color: "var(--text-main)" }}
          >
            Client Experiences ✨
          </h2>
          <p className="mt-3" style={{ color: "var(--text-light)" }}>
            Celebrating unforgettable golden moments
          </p>
        </div>

        {/* 📸 Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-8 backdrop-blur-lg"
              style={{
                background: "rgba(255,255,255,0.6)",
                borderRadius: "var(--radius-lg)",
                boxShadow: item.featured
                  ? "var(--shadow-gold)"
                  : "var(--shadow-soft)",
                border: item.featured
                  ? "2px solid var(--primary)"
                  : "1px solid var(--primary-light)",
              }}
            >
              {/* 🏆 Featured Ribbon */}
              {item.featured && (
                <div
                  className="absolute -top-3 -right-3 px-4 py-1 text-xs font-semibold"
                  style={{
                    background: "var(--primary)",
                    color: "#fff",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  ⭐ Featured
                </div>
              )}

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2"
                  style={{ borderColor: "var(--primary)" }}
                />
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {item.name}
                  </h4>
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-light)" }}
                  >
                    {item.role}
                  </span>
                </div>
              </div>

              {/* ⭐ Star Rating Animation */}
              <div className="flex mb-4 gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    style={{ color: "var(--primary)" }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Text */}
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-main)" }}
              >
                “{item.text}”
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}