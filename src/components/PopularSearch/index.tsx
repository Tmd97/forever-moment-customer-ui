import { Link } from "react-router-dom";

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
    id: 6,
    title: "Decorators in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/5/venue.jpg",
  },
  {
    id: 7,
    title: "Mehndi Artists in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/6/makeup.jpg",
  },
  {
    id: 8,
    title: "Wedding Venues in Delhi NCR",
    image: "https://image.wedmegood.com/resized/300X/uploads/banner_image/8/decorator.jpg",
  },
];

const PopularSearchesSlider = () => {
  return (
    <section className="py-16 bg-white border-t border-[var(--border-light)]">
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-10">Popular <em>Searches</em></h2>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
            {popularSearches.map((item) => (
              <Link 
                key={item.id} 
                to={`/search?query=${encodeURIComponent(item.title)}`}
                className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] group"
              >
                <div className="card h-full">
                  <div className="h-[360px] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 text-center">
                    <p 
                      className="font-medium group-hover:text-[var(--burgundy)] transition-colors line-clamp-2"
                      style={{ 
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.25rem",
                        color: "var(--charcoal)"
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSearchesSlider;
