interface Review {
  name: string;
  rating: number;
  text: string;
  img: string;
}

const ReviewSection = () => {

  const reviews: Review[] = [

    {
      name: "Rohit Sharma",
      rating: 5,
      text: "Decoration was amazing!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },

    {
      name: "Priya",
      rating: 5,
      text: "Very professional team.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },

  ];

  return (

    <div className="max-w-[1200px] mx-auto px-4 py-16">

      <h2 className="text-2xl font-bold mb-8">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {reviews.map((r, i) => (

          <div key={i} className="bg-white p-6 rounded-lg shadow">

            <div className="flex items-center gap-4">

              <img src={r.img} className="w-12 h-12 rounded-full" />

              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>

            </div>

            <p className="mt-4 text-gray-600">
              {r.text}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ReviewSection;