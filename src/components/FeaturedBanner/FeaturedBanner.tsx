export default function FeaturedBanner() {
  return (
    <div className="section-padding bg-white">
      <div className="max-w-[1380px] mx-auto px-6">
        <div
          className="rounded-3xl overflow-hidden relative flex items-center shadow-[0_8px_30px_rgba(26,18,8,0.12)]"
          style={{
            height: 380,
            background: `linear-gradient(90deg, rgba(26,18,8,0.92) 0%, rgba(26,18,8,0.7) 60%, transparent 100%),
                         url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80') center/cover no-repeat`,
          }}
        >
          <div className="p-8 sm:p-14 max-w-xl relative z-10">
            <span
              style={{ fontFamily: "'Jost', sans-serif" }}
              className="inline-block rounded-full px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] mb-6 border border-[#C9A84C]/30 text-[#C9A84C]"
            >
              Exclusive Package
            </span>

            <h3
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[2.2rem] sm:text-[3rem] text-white leading-[1.1] mb-5 font-semibold"
            >
              Plan Your Dream
              <br />
              <em className="text-[#C9A84C] font-style-italic font-medium">Wedding This Season</em>
            </h3>

            <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-white/70 text-[0.95rem] mb-8 max-w-md leading-relaxed">
              Curated luxury setups, elite vendor management, and end-to-end coordination starting at ₹2,49,999.
            </p>

            <button
              style={{ fontFamily: "'Jost', sans-serif" }}
              className="bg-[#C9A84C] hover:bg-[#E8C97A] text-[#1A1208] px-8 py-3.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
            >
              Explore Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
