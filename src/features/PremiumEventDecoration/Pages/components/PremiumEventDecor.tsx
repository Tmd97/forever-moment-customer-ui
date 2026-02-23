import React from "react";
import service1 from "@/assets/services/service1.webp";
import service2 from "@/assets/services/service2.webp";
import service3 from "@/assets/services/service3.webp";
import service4 from "@/assets/services/service4.webp";
import service5 from "@/assets/services/service5.webp";
import service6 from "@/assets/services/service6.webp";
import service7 from "@/assets/services/service7.webp";
import service8 from "@/assets/services/service8.webp";
import service9 from "@/assets/services/service9.webp";
import service10 from "@/assets/services/service10.webp";
// You can add more images up to 20

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
    <div className="max-w-[1400px] mx-auto px-4 py-10 container">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Services</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 sm:h-48 md:h-40 lg:h-44 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="text-center py-2 px-1">
              <p className="text-sm sm:text-base font-sans font-medium">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
