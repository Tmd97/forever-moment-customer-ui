
import service1 from "@/assets/images/services/service1.webp";
import service2 from "@/assets/images/services/service2.webp";
import service3 from "@/assets/images/services/service3.webp";
import service4 from "@/assets/images/services/service4.webp";
import service5 from "@/assets/images/services/service5.webp";
import service6 from "@/assets/images/services/service6.webp";
import service7 from "@/assets/images/services/service7.webp";
import service8 from "@/assets/images/services/service8.webp";
import service9 from "@/assets/images/services/service9.webp";
import service10 from "@/assets/images/services/service10.webp";

const services = [
  { name: "Love Theme", image: service1 },
  { name: "Birthday Setup", image: service2 },
  { name: "Haldi & Mehndi", image: service3 },
  { name: "Anniversary Event", image: service4 },
  { name: "Wedding Decor", image: service5 },
  { name: "Corporate Event", image: service6 },
  { name: "Kids Party", image: service7 },
  { name: "Graduation Party", image: service8 },
  { name: "Baby Shower", image: service9 },
  { name: "Engagement Party", image: service10 },
];

export default function ProductCatalog() {
  return (
    <section className="py-[var(--section-padding-y)] bg-white">
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black">
          Our Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card cursor-pointer group flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="
                    w-full
                    h-40 sm:h-48 md:h-40 lg:h-44
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Name */}
              <div className="text-center py-3 px-2">
                <p className="
                  text-sm sm:text-base
                  font-medium
                  text-black
                  group-hover:text-[var(--primary)]
                  transition-colors duration-300
                ">
                  {service.name}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}