import { ShieldCheck, Clock, Star, HeartHandshake } from "lucide-react";

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
    <section className="py-16" style={{ background: "var(--cream)" }}>
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="section-eyebrow" style={{ display: "inline-block" }}>
            Why Us
          </div>
          <h2 className="section-title">
            Why Choose <em>Forever Moment</em>
          </h2>
          <p className="mt-3" style={{ color: "var(--mid)", fontSize: "0.88rem" }}>
            We make your special moments unforgettable
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="card group p-8 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--rose-light)",
                    color: "var(--burgundy)",
                  }}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3
                  className="font-semibold mb-3"
                  style={{
                    color: "var(--charcoal)",
                    fontSize: "1rem",
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--mid)" }}
                >
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