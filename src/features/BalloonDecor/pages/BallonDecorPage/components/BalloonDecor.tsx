import React, { useEffect, useRef } from "react";

const categories = [
  {
    id: 1,
    title: "Birthday Decoration",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
  },
  {
    id: 2,
    title: "Kids Decoration",
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
  },
  {
    id: 3,
    title: "Newborn Welcome",
    image:
      "https://images.unsplash.com/photo-1581579185169-2b1d8d5a8bde",
  },
  {
    id: 4,
    title: "Anniversary Decoration",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  },
  {
    id: 5,
    title: "Baby Shower",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6",
  },
  {
    id: 6,
    title: "First Night",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
];

export default function BalloonDecor() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ Mobile Auto Slide
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const slide = setInterval(() => {
      if (container.scrollWidth - container.clientWidth <= scrollAmount) {
        scrollAmount = 0;
      } else {
        scrollAmount += 180;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(slide);
  }, []);

  return (
    <section className="py-14 bg-orange-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Top Balloon Decoration Categories
          </h2>
          <p className="text-gray-500 mt-3">
            Trusted Decorators for All Events
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">

          {categories.map((item) => (
            <div
              key={item.id}
              className="group text-center cursor-pointer"
            >
              {/* Gradient Border */}
              <div className="p-[3px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e7b5] to-[#d4af37]">

                {/* Glass Card */}
                <div className="w-40 h-40 rounded-full overflow-hidden backdrop-blur-md bg-white/40 border border-white/30 shadow-lg group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition duration-500 group-hover:scale-105">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-[#d4af37] transition">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-6 overflow-x-auto pb-4 scroll-smooth"
        >
          {categories.map((item) => (
            <div
              key={item.id}
              className="min-w-[170px] flex-shrink-0 text-center"
            >
              <div className="p-[3px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e7b5] to-[#d4af37]">

                <div className="w-36 h-36 rounded-full overflow-hidden backdrop-blur-md bg-white/40 border border-white/30 shadow-md">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              <h3 className="mt-3 text-sm font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}