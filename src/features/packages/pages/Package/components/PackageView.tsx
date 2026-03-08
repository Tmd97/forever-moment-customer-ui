import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function PackageView() {
  return (
    <section className="py-16 bg-white border-t border-[var(--border-light)]">
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="section-title mb-10">
          Featured <em>Packages</em>
        </h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6">
          {packages.map((pkg) => (
            <Link key={pkg.id} to={`/experience/${pkg.id}`} className="group">
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
                className="
                  min-w-[280px] md:min-w-[300px]
                  card h-full
                "
              >
                {/* Image */}
                <div className="h-[200px] overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 
                    className="font-medium text-xl mb-2 group-hover:text-[var(--burgundy)] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--charcoal)" }}
                  >
                    {pkg.name}
                  </h3>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          color: "var(--burgundy)",
                        }}
                      >
                        {pkg.price}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "var(--mid)" }}>all inclusive</div>
                    </div>
                    <button className="btn-gold">View Details</button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
