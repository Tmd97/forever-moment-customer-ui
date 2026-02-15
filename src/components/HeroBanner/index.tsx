import React from "react";

const categories = [
  { id: 1, title: "Love Theme", image: "https://cdn.togetherv.com/Balloon-Decorations-icon_1674212365.webp" },
  { id: 2, title: "Canopy Setup", image: "https://cdn.togetherv.com/candlelight-dinner-icon_1711537369.webp" },
  { id: 3, title: "Birthday Setup", image: "https://cdn.togetherv.com/birthday-decoration-icon_1711431738.webp" },
  { id: 4, title: "Kids Setup", image: "https://cdn.togetherv.com/kids-theme_1711524698.webp" },
 
  { id: 7, title: "Anniversary Setup", image: "https://cdn.togetherv.com/romantic-stays-icon_1711637474.webp" },
  { id: 8, title: "Just Married", image: "https://haplun.in/uploads/2025/08/ring-setup-decoration-799448047_square.webp" },

 
];

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="aspect-square overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-3 text-center">
              <p className="text-sm font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
