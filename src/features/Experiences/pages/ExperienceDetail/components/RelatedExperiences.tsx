export default function RelatedExperiences(){

  const related = [

    {
      title:"Candlelight Terrace Dinner",
      price:5999,
      img:"https://images.unsplash.com/photo-1559339352-11d035aa65de"
    },

    {
      title:"Birthday Surprise Setup",
      price:2999,
      img:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d"
    },

    {
      title:"Wedding Decoration",
      price:14499,
      img:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
    },
     {
      title:"Anniversary Decoration",
      price:4499,
      img:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
    },
    


  ];

  return(

    <div className="max-w-[var(--container-width)] mx-auto mt-16 px-4">

      <h2 className="text-2xl font-bold mb-6">
        Related Experiences
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">

        {related.map((item,i)=>(
          <div
            key={i}
            className="min-w-[260px] bg-white rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-gold)] transition"
          >

            <img
              src={item.img}
              className="h-40 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">

              <h4 className="font-semibold mb-2">
                {item.title}
              </h4>

              <div className="text-[var(--primary)] font-bold">
                ₹{item.price}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  )
}