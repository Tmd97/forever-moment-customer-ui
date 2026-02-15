import React from "react";

const popularSearches = [
  {
    id: 1,
    title: "Bridal Wear in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg",
  },
  {
    id: 2,
    title: "Bridal Makeup Artists in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg",
  },
  {
    id: 3,
    title: "Photographers in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/4/cards.jpg",
  },
  {
    id: 4,
    title: "Invitations in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/7/mehndi.jpg",
  },
  {
    id: 5,
    title: "Catering Services in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
  },
  {
    id: 3,
    title: "Photographers in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/4/cards.jpg",
  },
  {
    id: 4,
    title: "Invitations in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/7/mehndi.jpg",
  },
  {
    id: 5,
    title: "Catering Services in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg",
  },
];

const PopularSearchesSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Popular Searches</h2>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
          {popularSearches.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px]"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <div className="h-[360px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSearchesSlider;
