import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Anniversary",
    columns: [
      {
        title: "CANDLELIGHT DINNERS",
        items: [
          "Private Couple Experiences",
          "Rooftop Dinners",
          "Poolside Candlelight Dinners",
          "Private Dinner & Movie",
          "Lunch Special Dining",
          "Couple Activities",
        ],
      },
      {
        title: "DECORATIONS",
        items: [
          "Anniversary Party Decors",
          "Hotel Room Decoration",
          "1st Anniversary Decors",
          "25th Anniversary Decors",
          "50th Anniversary Decors",
          "Canopy Decorations at Home",
          "Wedding Night Decorations",
        ],
      },
      {
        title: "ANNIVERSARY GIFTS",
        items: [
          "Bubble Balloon Buckets",
          "Photo Frames",
          "Balloon Box Surprise",
          "Digital Surprises",
          "Cake & Bouquet Combos",
          "Photo Gifts",
          "Heart Shape Cakes",
          "Bouquets",
        ],
      },
    ],
    topSellers: [
      {
        title: "Pastle Purple Flower Bucket",
        img: "https://via.placeholder.com/150",
      },
      {
        title: "Fountain Dining by Umrao",
        img: "https://via.placeholder.com/150",
      },
      {
        title: "Boho Canopy Decoration",
        img: "https://via.placeholder.com/150",
      },
      {
        title: "Personalised Couple Cushion",
        img: "https://via.placeholder.com/150",
      },
    ],
  },
  { name: "Birthdays" },
  { name: "Gifts" },
  { name: "Candlelight Dinners" },
  { name: "Decorations" },
  { name: "Festivals" },
  { name: "Kid's Celebrations" },
  { name: "Corporate Events" },
];

export default function LowerNavbar() {
  return (
    <div className="hidden lg:block border-t bg-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <ul className="flex gap-8 py-4 text-sm font-medium">
          {categories.map((cat) => (
            <li key={cat.name} className="group relative">
              <button className="flex items-center gap-1 hover:text-purple-600">
                {cat.name}
                {cat.columns && <ChevronDown className="h-4 w-4" />}
              </button>

              {/* Mega Dropdown */}
              {cat.columns && (
                <div className="absolute left-0 top-full z-50 hidden w-[1100px] rounded-md border bg-white p-8 shadow-xl group-hover:block">
                  <div className="grid grid-cols-4 gap-8">
                    {cat.columns.map((col) => (
                      <div key={col.title}>
                        <h4 className="mb-4 font-semibold uppercase">
                          {col.title}
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {col.items.map((item) => (
                            <li
                              key={item}
                              className="cursor-pointer hover:text-purple-600"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Top Sellers */}
                    <div>
                      <h4 className="mb-4 font-semibold uppercase">
                        Top Sellers
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {cat.topSellers.map((p) => (
                          <div key={p.title} className="text-xs">
                            <img
                              src={p.img}
                              alt={p.title}
                              className="h-24 w-full rounded object-cover"
                            />
                            <p className="mt-1 font-medium">{p.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
