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

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Featured Packages
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">

          {packages.map((pkg) => (

            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.08 }}
              className="min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >

              <div className="h-[200px] overflow-hidden">

                <img
                  src={pkg.image}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-4">

                <h3 className="font-bold text-lg">
                  {pkg.name}
                </h3>

                <p className="text-orange-600 font-semibold">
                  {pkg.price}
                </p>

                <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
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
