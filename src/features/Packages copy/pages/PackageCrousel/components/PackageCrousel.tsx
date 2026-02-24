import { motion } from "framer-motion";

const packages = [
  {
    id: 1,
    name: "Silver Package",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600",
  },
  {
    id: 2,
    name: "Gold Package",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600",
  },
  {
    id: 3,
    name: "Platinum Package",
    price: "₹39,999",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600",
  },
  {
    id: 4,
    name: "Royal Package",
    price: "₹59,999",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1600",
  },
  {
    id: 5,
    name: "Luxury Package",
    price: "₹89,999",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600",
  },
];

export default function FeaturedPackagesCarousel() {
  return (
    <section className="py-[var(--section-padding-y)] bg-white">
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Featured Packages
        </h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="
                min-w-[280px] md:min-w-[300px]
                bg-white
                rounded-2xl
                border border-[var(--primary-light)]/20
                shadow-[var(--shadow-soft)]
                hover:shadow-[var(--shadow-gold)]
                overflow-hidden
                cursor-pointer
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="h-[200px] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-black mb-2">
                  {pkg.name}
                </h3>

                <p className="text-[var(--primary)] font-semibold mb-4">
                  {pkg.price}
                </p>

                <button
                  className="
                    w-full
                    bg-[var(--primary)]
                    hover:bg-[var(--primary-dark)]
                    text-white
                    py-2.5
                    rounded-lg
                    transition-all duration-300
                    shadow-[var(--shadow-soft)]
                  "
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}