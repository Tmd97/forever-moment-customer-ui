export default function FeaturedBanner() {
  return (
    <div
      className="mx-4 sm:mx-8 lg:mx-12 my-8 rounded-3xl overflow-hidden relative flex items-center"
      style={{
        height: 280,
        background: `linear-gradient(90deg, rgba(90,30,41,0.92) 0%, rgba(90,30,41,0.65) 55%, transparent 100%),
                     url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80') center/cover no-repeat`,
      }}
    >
      <div className="p-8 sm:p-12 max-w-lg">
        <span
          className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white mb-4"
          style={{ background: "var(--gold)", letterSpacing: "0.12em" }}
        >
          Limited Offer
        </span>

        <h3
          className="text-3xl sm:text-4xl font-light text-white leading-tight mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Plan Your Dream
          <br />
          <em style={{ color: "var(--gold-light)" }}>Wedding This Season</em>
        </h3>

        <p className="text-white/75 text-sm font-light mb-6">
          Exclusive packages starting at ₹49,999. End-to-end management.
        </p>

        <button
          className="rounded-full px-7 py-3 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "white",
            color: "var(--burgundy)",
            fontFamily: "'Jost', sans-serif",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          Explore Wedding Packages
        </button>
      </div>
    </div>
  );
}
