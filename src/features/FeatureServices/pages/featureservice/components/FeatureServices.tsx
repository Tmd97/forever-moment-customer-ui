import { Link } from "react-router-dom";
import { Star, MapPin, Heart } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Romantic Anniversary Decoration",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200",
    price: 2999,
    rating: 4.8,
    city: "Mumbai",
  },
  {
    id: 2,
    title: "Birthday Balloon Decoration",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200",
    price: 1999,
    rating: 4.6,
    city: "Delhi",
  },
  {
    id: 3,
    title: "Candlelight Dinner Setup",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200",
    price: 4999,
    rating: 4.9,
    city: "Bangalore",
  },
  {
    id: 4,
    title: "Haldi Decoration Setup",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200",
    price: 5999,
    rating: 4.7,
    city: "Jaipur",
  },
  {
    id: 5,
    title: "Baby Shower Decoration",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200",
    price: 3499,
    rating: 4.5,
    city: "Pune",
  },
  {
    id: 6,
    title: "Wedding Room Decoration",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
    price: 7999,
    rating: 4.9,
    city: "Hyderabad",
  },
];

export default function FeaturedServices() {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((i) => i !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-semibold">
            Featured Services
          </h2>

          <p className="text-gray-500 text-sm">
            Most popular decoration services
          </p>
        </div>

        <Link
          to="/services"
          className="text-orange-600 text-sm font-medium hover:underline"
        >
          View All
        </Link>

      </div>


      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service) => (

          <div
            key={service.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
          >

            {/* Image */}
            <div className="relative h-[220px] overflow-hidden">

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Like Button */}
              <div
                onClick={() => toggleLike(service.id)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer"
              >
                <Heart
                  size={18}
                  className={
                    liked.includes(service.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-600"
                  }
                />
              </div>

            </div>


            {/* Content */}
            <div className="p-4">

              {/* Title */}
              <h3 className="font-medium text-sm mb-2">
                {service.title}
              </h3>

              {/* City */}
              <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">

                <MapPin size={14} />

                {service.city}

              </div>


              {/* Rating + Price */}
              <div className="flex justify-between items-center">

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm">

                  <Star size={14} className="text-yellow-500 fill-yellow-500" />

                  {service.rating}

                </div>

                {/* Price */}
                <div className="text-orange-600 font-semibold">

                  ₹{service.price}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
