import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

export interface ExperienceCardProps {
  id: string | number;
  image: string;
  title: string;
  category: string;
  city?: string;
  rating?: number;
  reviews?: number;
  price: number;
  priceLabel?: string;
  showBadge?: boolean;
  badgeText?: string;
  badgeVariant?: 'pop' | 'default';
  isLiked?: boolean;
  onToggleLike?: (id: string | number) => void;
  className?: string;
}

export default function ExperienceCard({
  id,
  image,
  title,
  category,
  city = "India",
  rating = 4.8,
  reviews = 120,
  price,
  priceLabel = "per setup",
  showBadge = false,
  badgeText = "Bestseller",
  badgeVariant = 'pop',
  isLiked = false,
  onToggleLike,
  className = "",
}: ExperienceCardProps) {
  
  return (
    <Link to={`/experience/${id}`} className={`block ${className}`}>
      <div className="card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        <CardImage 
          id={id}
          image={image}
          title={title}
          showBadge={showBadge}
          badgeText={badgeText}
          badgeVariant={badgeVariant}
          isLiked={isLiked}
          onToggleLike={onToggleLike}
        />

        <CardBody 
          category={category}
          title={title}
          city={city}
          rating={rating}
          reviews={reviews}
        />

        <CardFooter 
          price={price}
          priceLabel={priceLabel}
        />
      </div>
    </Link>
  );
}
