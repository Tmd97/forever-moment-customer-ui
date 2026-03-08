import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

interface Category {
  id: number;
  name: string;
  image?: string;
  description?: string;
}

interface EventThemesPreviewProps {
  categories?: Category[];
}

const staticThemes = [
  {
    id: 1,
    name: "Royal Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
    description: "Luxury royal palace style wedding decoration",
  },
  {
    id: 2,
    name: "Romantic Anniversary",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600",
    description: "Romantic candlelight anniversary decoration",
  },
  {
    id: 3,
    name: "Birthday Bash",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600",
    description: "Colorful birthday party setup",
  },
  {
    id: 4,
    name: "Corporate Luxury",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600",
    description: "Premium corporate event decoration",
  },
];

export default function EventThemesPreview({ categories }: EventThemesPreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayThemes = categories && categories.length > 0
    ? categories.slice(0, 4).map((cat, idx) => ({
      id: cat.id,
      name: cat.name,
      image: cat.image || staticThemes[idx % staticThemes.length].image,
      description: cat.description || "Premium decoration concept"
    }))
    : staticThemes;

  const active = displayThemes[activeIndex] || displayThemes[0];
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [activeIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayThemes.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  /* ================= SWIPE SUPPORT ================= */
  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) {
      setActiveIndex((prev) => (prev + 1) % displayThemes.length);
    }
    if (info.offset.x > 100) {
      setActiveIndex((prev) =>
        prev === 0 ? displayThemes.length - 1 : prev - 1
      );
    }
  };

  /* ================= 3D TILT ================= */
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  /* ================= RIPPLE EFFECT ================= */
  const createRipple = (e: any) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <section className="py-[var(--section-padding-y)] bg-[var(--bg-light)] overflow-hidden">

      <div className="max-w-[var(--container-width)] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2
            className="section-title"
          >
            Explore Event <em>Themes</em>
          </h2>

          <div className="mt-4 h-[2px] w-28 mx-auto bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"></div>

          <p className="mt-4 text-[var(--text-muted)]">
            Experience premium decoration concepts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* PREVIEW */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative h-[360px] md:h-[450px] rounded-3xl overflow-hidden
              shadow-[var(--shadow-soft)]
              border border-white/10"
            >

              <img
                src={active.image}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 
              bg-white/10 backdrop-blur-md 
              border border-white/20 
              rounded-2xl p-5 text-white">

                <h3
                  className="text-2xl font-semibold mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {active.name}
                </h3>

                <p className="text-sm opacity-90">
                  {active.description}
                </p>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* SELECTOR */}
          <div className="grid grid-cols-2 gap-6">

            {displayThemes.map((theme, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={theme.id}
                  whileHover={{ y: -6 }}
                  onClick={(e) => {
                    createRipple(e);
                    setActiveIndex(index);
                  }}
                  className={`relative overflow-hidden cursor-pointer p-5 rounded-2xl border transition-all duration-300
                  ${isActive
                      ? "border-[var(--primary)] bg-[var(--primary-light)]/20 shadow-[var(--shadow-gold)]"
                      : "border-[var(--border-light)] bg-[var(--bg-white)] hover:border-[var(--primary)]"
                    }`}
                >
                  <h4
                    className={`font-semibold ${isActive
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-main)]"
                      }`}
                  >
                    {theme.name}
                  </h4>

                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    Click to preview
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Ripple Style */}
      <style>
        {`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 600ms linear;
          background-color: rgba(212,175,55,0.4);
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        `}
      </style>

    </section>
  );
}