import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery({ media }: { media?: any[] }) {

  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const defaultImages = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d"
  ];

  const gallery = media && media.length > 0 
    ? media.map(m => m.url) 
    : defaultImages;

  return (

    <div className="lg:sticky top-24 h-fit">

      <img
        src={gallery[selected]}
        onClick={() => setLightbox(gallery[selected])}
        className="rounded-2xl w-full h-[420px] object-cover shadow-[var(--shadow-soft)] cursor-pointer hover:scale-[1.02] transition"
      />

      <div className="grid grid-cols-4 gap-3 mt-4">

        {gallery.slice(0, 8).map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(i)}
            className={`h-24 object-cover rounded-xl cursor-pointer hover:scale-105 transition
            ${selected === i && "ring-2 ring-[var(--primary)]"}
            `}
          />
        ))}

      </div>


      {lightbox && (

        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-10"
          onClick={() => setLightbox(null)}
        >

          <button className="absolute top-6 right-6 text-white">
            <X size={28} />
          </button>

          <img
            src={lightbox}
            className="max-h-[85vh] rounded-xl shadow-2xl"
          />

        </div>

      )}

    </div>

  );
}