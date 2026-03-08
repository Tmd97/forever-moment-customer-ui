interface Review {
  name: string;
  rating: number;
  text: string;
  img: string;
}

const Reviews = () => {

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
    }

  ];

  return (

    <div
      id="reviews-section"
      className="max-w-[1200px] mx-auto px-4 py-0 scroll-mt-28"
    >

      <h2 className="text-2xl font-bold mb-6">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {reviews.map((r, i) => (

          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >

            <div className="flex items-center gap-4">

              <img
                src={r.img}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>

                <p className="font-semibold">
                  {r.name}
                </p>

                <p className="text-yellow-500">
                  {"★".repeat(r.rating)}
                </p>

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

export default Reviews;