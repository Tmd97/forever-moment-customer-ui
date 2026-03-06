import { Crown, Clock, Palette, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function QuickHighlightsPremium() {
  const containerRef = useRef(null);

  const items = [
    { icon: Crown, title: "Premium Themes" },
    { icon: Clock, title: "On-Time Setup" },
    { icon: Palette, title: "Custom Designs" },
    { icon: Sparkles, title: "Affordable Luxury" },
  ];

  // Auto Slide Effect
  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (!container) return;

      scrollAmount += 0.5;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
      requestAnimationFrame(slide);
    };

    slide();
  }, []);

  return (
    <section
      style={{
        background: "var(--bg-white)",
        padding: "36px 0",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div
        ref={containerRef}
        className="flex gap-16 overflow-x-hidden whitespace-nowrap justify-center items-center"
        style={{
          maxWidth: "var(--container-width)",
          margin: "0 auto",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer min-w-max"
          >
            {/* Icon with shimmer */}
            <div className="relative shimmer-icon mb-3 flex items-center justify-center">
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, var(--primary), var(--primary-light))",
                  boxShadow: "var(--shadow-gold)",
                }}
                className="flex items-center justify-center"
              >
                <item.icon size={20} color="#1a1a1a" />
              </div>
            </div>

            {/* Text */}
            <span
              className="font-medium text-sm md:text-base"
              style={{ color: "var(--text-main)" }}
            >
              {item.title}
            </span>

            {/* Animated Gradient Underline */}
            <div className="gradient-underline mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
}