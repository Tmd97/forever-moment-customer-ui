import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const transformations = [
  {
    id: 1,
    title: "Royal Wedding Setup",
    before:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600",
    after:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
  },
  {
    id: 2,
    title: "Romantic Anniversary Decor",
    before:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600",
    after:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600",
  },
];

export default function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const active = transformations[activeIndex];

  // ✅ Auto slide transformation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === transformations.length - 1 ? 0 : prev + 1
      );
      setSliderPosition(50);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Drag logic
  const handleMove = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section
      className="relative"
      style={{
        background: "var(--bg-main)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div
        className="mx-auto px-4"
        style={{ maxWidth: "var(--container-width)" }}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold"
            style={{ color: "var(--text-main)" }}
          >
            Before & After Transformation
          </h2>
          <p className="mt-3" style={{ color: "var(--text-light)" }}>
            See how we turn ordinary spaces into golden celebrations ✨
          </p>
        </div>

        {/* Slider Container */}
        <motion.div
          ref={containerRef}
          className="relative w-full h-[300px] md:h-[450px] overflow-hidden cursor-ew-resize group"
          style={{
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-gold)",
            border: "2px solid var(--primary)",
          }}
          whileHover={{ scale: 1.02 }}
          onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* Before Image */}
          <img
            src={active.before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* After Image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={active.after}
              alt="After"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              className="w-1 h-full"
              style={{ background: "var(--primary)" }}
            />
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: "var(--primary)",
                color: "#fff",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                top: "50%",
                left: "50%",
              }}
            >
              ⇆
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 text-sm rounded">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 text-sm rounded">
            After
          </div>
        </motion.div>

        {/* Transformation Selector */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {transformations.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIndex(index);
                setSliderPosition(50);
              }}
              className="px-6 py-2 transition-all duration-300"
              style={{
                borderRadius: "var(--radius-md)",
                background:
                  activeIndex === index
                    ? "var(--primary)"
                    : "var(--bg-white)",
                color:
                  activeIndex === index
                    ? "#fff"
                    : "var(--text-main)",
                boxShadow:
                  activeIndex === index
                    ? "var(--shadow-gold)"
                    : "var(--shadow-soft)",
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
