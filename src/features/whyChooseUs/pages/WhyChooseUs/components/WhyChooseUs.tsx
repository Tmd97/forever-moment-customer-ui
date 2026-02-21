import {
  ShieldCheck,
  Clock,
  Star,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    desc: "Verified decorators with quality service guarantee",
  },
  {
    icon: Clock,
    title: "On Time Setup",
    desc: "Always punctual and ready before your event starts",
  },
  {
    icon: Star,
    title: "Top Rated Services",
    desc: "Highly rated by thousands of happy customers",
  },
  {
    icon: HeartHandshake,
    title: "Affordable Pricing",
    desc: "Best decoration services at reasonable prices",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-orange-50 py-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Why Choose Forever Moment
          </h2>

          <p className="text-gray-600 text-sm">
            We make your special moments unforgettable
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition group cursor-pointer"
              >

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-4 group-hover:scale-110 transition">

                  <Icon size={24} />

                </div>


                {/* Title */}
                <h3 className="font-semibold mb-2">
                  {feature.title}
                </h3>


                {/* Description */}
                <p className="text-gray-500 text-sm">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
