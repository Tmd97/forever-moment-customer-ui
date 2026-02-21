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
    <section className="bg-white py-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 text-sm">
            Real experiences from our happy customers
          </p>

        </div>


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 p-6 rounded-xl hover:shadow-lg transition cursor-pointer"
            >

              {/* Top */}
              <div className="flex items-center gap-3 mb-3">

                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>

                  <h4 className="font-medium text-sm">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    {item.city}
                  </p>

                </div>

              </div>


              {/* Stars */}
              <div className="flex gap-1 mb-3">

                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}

              </div>


              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.review}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
