import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    event: "Anniversary · Mumbai",
    initial: "R",
    text: "They transformed our living room into something out of a fairytale. My wife was in tears — the good kind.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Menon",
    event: "Birthday · Bangalore",
    initial: "P",
    text: "Booked the candlelight dinner at 2am and by evening it was perfectly set up. Absolutely magical experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Aditya Nair",
    event: "Proposal · Goa",
    initial: "A",
    text: "She said yes! The proposal setup was beyond stunning. Every detail was perfect, from the flowers to the lighting.",
    rating: 5,
  },
];

export default function TestimonialsView() {
  return (
    <section
      className="py-16 px-4 sm:px-8"
      style={{
        background: "linear-gradient(135deg, var(--burgundy-dark), var(--burgundy))",
      }}
    >
      <div className="max-w-[var(--container-width)] mx-auto">
        {/* Header */}
        <div className="section-eyebrow" style={{ color: "var(--gold-light)" }}>
          Real Stories
        </div>
        <h2 className="section-title mb-10" style={{ color: "white" }}>
          What Our <em style={{ color: "var(--gold-light)" }}>Celebrants</em> Say
        </h2>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl transition-colors duration-300 hover:bg-white/[0.11]"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Stars */}
              <div className="mb-4" style={{ color: "var(--gold-light)", fontSize: "0.9rem" }}>
                {"★".repeat(item.rating)}
              </div>

              {/* Quote */}
              <p
                className="mb-5 leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.6,
                }}
              >
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{
                    background: "linear-gradient(135deg, var(--gold), var(--rose))",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                  }}
                >
                  {item.initial}
                </div>
                <div>
                  <div
                    className="font-medium"
                    style={{ fontSize: "0.83rem", color: "white", fontFamily: "'Jost', sans-serif" }}
                  >
                    {item.name}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)" }}>
                    {item.event}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
