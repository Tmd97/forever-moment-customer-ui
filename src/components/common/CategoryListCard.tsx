import { Link } from "react-router-dom";

import service1 from "@/assets/images/services/service1.webp";
import service2 from "@/assets/images/services/service2.webp";
import service3 from "@/assets/images/services/service3.webp";
import service4 from "@/assets/images/services/service4.webp";
import service5 from "@/assets/images/services/service5.webp";
import service6 from "@/assets/images/services/service6.webp";
import service7 from "@/assets/images/services/service7.webp";
import service8 from "@/assets/images/services/service8.webp";
import service9 from "@/assets/images/services/service9.webp";
import service10 from "@/assets/images/services/service10.webp";

// Static image pool — cycles through when categories exceed the count
const imagePool = [
  service1, service2, service3, service4, service5,
  service6, service7, service8, service9, service10,
];

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface CategoryListCardProps {
  category: Category;
  imageIndex: number;
}

export default function CategoryListCard({ category, imageIndex }: CategoryListCardProps) {
  return (
    <Link
      to={`/category/${category.slug || category.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="relative rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.03]"
      style={{ height: 160 }}
    >
      {/* Image (static pool, cycled by index) */}
      <img
        src={imagePool[imageIndex % imagePool.length]}
        alt={category.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75"
        style={{
          background:
            "linear-gradient(to top, rgba(90,30,41,0.85), rgba(90,30,41,0.2))",
        }}
      />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.15rem",
            fontWeight: 500,
          }}
        >
          {category.name}
        </div>
        <div
          style={{
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.7)",
            marginTop: 2,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          View experiences
        </div>
      </div>
    </Link>
  );
}
