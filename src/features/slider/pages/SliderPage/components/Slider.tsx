import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Luxury Decoration for Every Occasion",
    subtitle:
      "Transform your moments into unforgettable memories",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
  },
  {
    id: 2,
    title: "Beautiful Birthday Surprise Setups",
    subtitle:
      "Premium decoration & photography services",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
  },
  {
    id: 3,
    title: "Romantic Anniversary Decorations",
    subtitle:
      "Create magical romantic experiences",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070",
  },
  {
    id: 4,
    title: "Corporate Event Specialists",
    subtitle:
      "Professional setups for modern businesses",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2070",
  },
];

export default function PremiumHeroSlider() {

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (hovered) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [index, hovered]);

  const next = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  const prev = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  return (

    <section
      className="relative min-h-[85vh] w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <AnimatePresence>
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >

          <img
            src={slides[index].image}
            className="w-full h-full object-cover"
          />

          {/* Golden Overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-r
from-black/70
via-black/55
to-black/30
          " />

          <div className="
            absolute inset-0
            flex items-center
            max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8
          ">

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                backdrop-blur-md
bg-white/10
p-8 sm:p-10
rounded-2xl
max-w-xl
border border-[var(--primary-light)]/40
shadow-[var(--shadow-soft)]
              "
            >

              {/* Counter */}
              <div className="text-[var(--primary-light)] mb-2 text-sm font-medium">
                {index + 1} / {slides.length}
              </div>

              <h1 className="
                text-4xl md:text-6xl
                font-bold text-white mb-4
              ">
                {slides[index].title}
              </h1>

              <p className="
                text-white/90
                mb-6 text-lg
              ">
                {slides[index].subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mt-6">

                <button className="btn-primary">
                  <Calendar size={18} />
                  Book Now
                </button>

                <button className="btn-secondary !text-white !border-white/40 hover:!bg-white/20 hover:!text-white hover:!border-white transition-all duration-300">
                  Explore
                </button>

              </div>

            </motion.div>

          </div>

        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="
          absolute left-6 top-1/2
          -translate-y-1/2
          bg-[var(--primary)]/20
hover:bg-[var(--primary)]/40
          backdrop-blur-md
          p-3 rounded-full
          transition-all
        "
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="
          absolute right-6 top-1/2
          -translate-y-1/2
          bg-[var(--primary)]/20
hover:bg-[var(--primary)]/40
          backdrop-blur-md
          p-3 rounded-full
          transition-all
        "
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Progress Bar */}
      <div className="
        absolute bottom-0 left-0
        w-full h-1 bg-white/20
      ">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5 }}
          className="h-full bg-[var(--primary)]"
        />
      </div>

      {/* Dots */}
      <div className="
        absolute bottom-6 left-1/2
        -translate-x-1/2
        flex gap-3
      ">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition-all duration-300
              ${i === index
                ? "bg-[var(--primary)] scale-125"
                : "bg-white/50"}
            `}
          />
        ))}
      </div>

    </section>
  );
}