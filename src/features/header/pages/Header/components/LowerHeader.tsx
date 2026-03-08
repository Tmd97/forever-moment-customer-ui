import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronIcon } from "./HeaderIcons";
import { iconMap, defaultIcon } from "./HeaderData";
import { X } from "lucide-react";

interface SubCategory {
  id: number;
  name: string;
  description: string;
  displayOrder: number;
  isActive: boolean;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  displayOrder: number;
  isActive: boolean;
  subCategories: SubCategory[];
}

interface LowerHeaderProps {
  categories: Category[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

// Emoji icons for subcategories (fallback mapping)
const subIcons: Record<string, string> = {};
const getSubIcon = (name: string) => subIcons[name] || "✨";

const LowerHeader = ({
  categories,
  mobileMenuOpen,
  setMobileMenuOpen,
}: LowerHeaderProps) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (catId: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(catId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const activeCategories = categories
    .filter((cat) => cat.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <>
      {/* ════════════ DESKTOP: wrapper for cat bar + mega ════════════ */}
      <div className="hidden md:block relative">
        {/* Category pill bar */}
        <div
          className="flex items-center justify-center gap-0.5 px-6"
          style={{
            background: "rgba(255,251,245,0.98)",
            borderBottom: "1px solid var(--border-light)",
            height: 52,
          }}
        >
          {activeCategories.map((cat) => {
            const isOpen = activeDropdown === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Pill */}
                <div
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm cursor-pointer transition-all duration-200 select-none"
                  style={{
                    color: isOpen ? "var(--burgundy)" : "var(--mid)",
                    background: isOpen ? "var(--rose-light)" : "transparent",
                    border: `1.5px solid ${isOpen ? "rgba(212,131,122,0.3)" : "transparent"}`,
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: isOpen ? 600 : 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span className="[&>svg]:!w-[14px] [&>svg]:!h-[14px]">
                    {iconMap[cat.name] || defaultIcon}
                  </span>
                  {cat.name}
                  {(cat.subCategories || []).length > 0 && (
                    <span
                      className="text-[0.5rem] opacity-50 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    >
                      ▾
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ════════════ MEGA PANELS (outside backdrop-filter) ════════════ */}
        {activeCategories.map((cat) => {
          const isOpen = activeDropdown === cat.id;
          const subs = (cat.subCategories || [])
            .filter((s) => s.isActive)
            .sort((a, b) => a.displayOrder - b.displayOrder);

          if (subs.length === 0) return null;

          return (
            <div
              key={`mega-${cat.id}`}
              className="absolute left-0 right-0 z-[298] transition-all duration-200"
              style={{
                top: 52, // flush below the 52px pill bar
                background: "white",
                borderBottom: "2px solid var(--border-light)",
                boxShadow: "0 20px 60px rgba(44,36,32,0.1)",
                padding: "0 3rem 1.8rem",
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "all" : "none",
              }}
              onMouseEnter={() => handleMouseEnter(cat.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mega Header */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderBottom: "1px solid var(--border-light)", marginBottom: "1.4rem" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--burgundy), var(--rose))",
                      color: "white",
                      fontSize: "1.1rem",
                    }}
                  >
                    <span className="[&>svg]:!w-[18px] [&>svg]:!h-[18px] [&>svg]:!text-white">
                      {iconMap[cat.name] || defaultIcon}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        color: "var(--charcoal)",
                      }}
                    >
                      {cat.name} Experiences
                    </div>
                    <div style={{ fontSize: "0.73rem", color: "var(--mid)", marginTop: 1 }}>
                      {cat.description || `Explore ${cat.name.toLowerCase()} experiences`}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/category/${cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setActiveDropdown(null)}
                  className="btn-primary !py-2 !px-5 !text-xs !uppercase !tracking-wider !font-semibold flex-shrink-0"
                >
                  View All →
                </Link>
              </div>

              {/* 5-Column Sub-Tile Grid */}
              <div
                className="grid gap-2.5"
                style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
              >
                {subs.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/subcategory/${sub.id}`}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                    style={{
                      background: "var(--cream)",
                      border: "1.5px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "var(--rose-light)";
                      el.style.borderColor = "rgba(212,131,122,0.3)";
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 6px 18px rgba(124,45,59,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "var(--cream)";
                      el.style.borderColor = "transparent";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-9 h-9 rounded-[10px] flex-shrink-0 flex items-center justify-center text-base transition-transform duration-200 group-hover:scale-110"
                      style={{
                        background: "white",
                        boxShadow: "0 2px 8px rgba(44,36,32,0.08)",
                      }}
                    >
                      {getSubIcon(sub.name)}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--charcoal)",
                          fontFamily: "'Jost', sans-serif",
                        }}
                      >
                        {sub.name}
                      </div>
                      <div style={{ fontSize: "0.68rem", color: "var(--mid)", marginTop: 1 }}>
                        {sub.description || "View experiences"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ════════════ MOBILE MENU ════════════ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden" style={{ background: "rgba(0,0,0,0.4)" }}>
          <div
            className="absolute right-0 top-0 h-full w-[85%] max-w-[380px] overflow-y-auto p-5"
            style={{ background: "white" }}
          >
            {/* Header */}
            <div
              className="flex justify-between items-center mb-6 pb-3"
              style={{ borderBottom: "1px solid var(--border-light)" }}
            >
              <h2
                className="text-lg font-bold"
                style={{ color: "var(--burgundy)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                All Categories
              </h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="btn-icon !w-8 !h-8"
              >
                <X size={18} />
              </button>
            </div>

            {/* Category List */}
            <div className="flex flex-col gap-1">
              {activeCategories.map((cat) => {
                const subcategories = (cat.subCategories || [])
                  .filter((sub) => sub.isActive)
                  .sort((a, b) => a.displayOrder - b.displayOrder);

                const isActive = mobileActive === cat.id;

                return (
                  <div
                    key={cat.id}
                    style={{ borderBottom: "1px solid var(--border-light)" }}
                    className="pb-2"
                  >
                    <button
                      onClick={() => setMobileActive(isActive ? null : cat.id)}
                      className="w-full flex justify-between items-center py-3 text-left"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 600,
                        color: isActive ? "var(--burgundy)" : "var(--charcoal)",
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="[&>svg]:!w-[16px] [&>svg]:!h-[16px]">
                          {iconMap[cat.name] || defaultIcon}
                        </span>
                        {cat.name}
                      </span>
                      {subcategories.length > 0 && (
                        <span
                          className="transition-transform duration-300"
                          style={{ transform: isActive ? "rotate(180deg)" : "none" }}
                        >
                          <ChevronIcon />
                        </span>
                      )}
                    </button>

                    {isActive && subcategories.length > 0 && (
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            to={`/subcategory/${sub.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-all hover:bg-[var(--rose-light)]"
                            style={{ color: "var(--charcoal)", fontFamily: "'Jost', sans-serif" }}
                          >
                            <span className="text-xs">{getSubIcon(sub.name)}</span>
                            {sub.name}
                          </Link>
                        ))}

                        {/* View All link */}
                        <Link
                          to={`/category/${cat.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="mt-1 btn-primary !py-2 !text-xs w-full"
                        >
                          View All {cat.name}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LowerHeader;
