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
    <section className="py-[var(--section-padding-y)] bg-gray-50">
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-black">
            Why Choose Forever Moment
          </h2>

          <p className="text-gray-600 text-sm">
            We make your special moments unforgettable
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  p-8
                  border border-[var(--primary-light)]/10
                  shadow-[var(--shadow-soft)]
                  hover:shadow-[var(--shadow-gold)]
                  transition-all duration-300
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    flex items-center justify-center
                    rounded-xl
                    bg-[var(--primary-light)]/10
                    text-[var(--primary)]
                    mb-5
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-black mb-3 text-base">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
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