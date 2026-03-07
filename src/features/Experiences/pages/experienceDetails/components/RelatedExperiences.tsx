export default function RelatedExperiences() {
  const related = [
    {
      title: "Candlelight Terrace Dinner",
      price: 5999,
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    },
    {
      title: "Birthday Surprise Setup",
      price: 2999,
      img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    },
    {
      title: "Wedding Decoration",
      price: 14499,
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    },
    {
      title: "Anniversary Decoration",
      price: 4499,
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    },
  ];

  return (
    <div className="max-w-[var(--container-width)] mx-auto mt-16 px-4">
      <h2 className="text-2xl font-bold mb-8">Related Experiences</h2>

      <div className="flex gap-6 overflow-x-auto pb-6">
        {related.map((item, i) => (
          <div
            key={i}
            className="min-w-[260px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                className="h-48 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
              />
            </div>

            <div className="p-4 space-y-2">
              <h4 className="font-semibold">{item.title}</h4>

              <div className="text-[var(--primary)] font-bold">
                ₹{item.price}
              </div>

              <button className="w-full mt-2 bg-[var(--primary)] text-white py-2 rounded-lg text-sm font-medium hover:scale-[1.03] active:scale-95 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
