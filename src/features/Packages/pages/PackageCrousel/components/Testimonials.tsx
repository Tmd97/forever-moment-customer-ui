import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Amazing decoration service. Everything was perfect and on time. Highly recommended!",
  },
  {
    name: "Priya Verma",
    city: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "My anniversary decoration was beautiful. Thank you Forever Moment team!",
  },
  {
    name: "Amit Patel",
    city: "Ahmedabad",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4,
    review:
      "Very professional and affordable service. Will book again.",
  },
  {
    name: "Sneha Kapoor",
    city: "Bangalore",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "Loved the decoration. Everyone appreciated it. Great work!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[var(--section-padding-y)]  bg-gray-50">
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-black">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 text-sm">
            Real experiences from our happy customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                p-8
                rounded-2xl
                border border-[var(--primary-light)]/10
                shadow-[var(--shadow-soft)]
                hover:shadow-[var(--shadow-gold)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Top */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-12 h-12
                    rounded-full
                    object-cover
                    border-2 border-[var(--primary-light)]/40
                  "
                />

                <div>
                  <h4 className="font-semibold text-sm text-black">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {item.city}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--primary-light)] text-[var(--primary-light)]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}