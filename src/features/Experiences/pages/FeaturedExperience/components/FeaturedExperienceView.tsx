import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "@/components/common/ExperienceCard";

export interface FeaturedExperienceProps {
  experiences?: any[];
  loading?: boolean;
  getFeaturedExperiences?: () => void;
  limit?: number;
}

export default function FeaturedExperienceView({ 
  experiences, 
  loading, 
  getFeaturedExperiences,
  limit 
}: FeaturedExperienceProps) {
  const [liked, setLiked] = useState<number[]>([]);

  useEffect(() => {
    if (getFeaturedExperiences) {
      getFeaturedExperiences();
    }
  }, []);

  const toggleLike = (id: any) => {
    const numericId = Number(id);
    if (liked.includes(numericId)) {
      setLiked(liked.filter((i: number) => i !== numericId));
    } else {
      setLiked([...liked, numericId]);
    }
  };

  if (loading) {
    return (
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--mid)]">
          Loading experiences...
        </div>
      </section>
    );
  }

  const displayExperiences = experiences || [];
  const finalExperiences = limit ? displayExperiences.slice(0, limit) : displayExperiences;
  // Show "View All" if we are in limit mode (e.g. on Home page)
  const showViewAll = limit !== undefined;

  return (
    <section className="py-16" style={{ background: "var(--cream)" }}>
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="section-eyebrow">Handpicked For You</div>
            <h2 className="section-title">
              Most <em>Loved</em> Experiences
            </h2>
          </div>
          {showViewAll && (
            <Link to="/featured-experiences" className="see-all py-2 px-4 bg-[var(--primary-light)]/10 rounded-full border border-[var(--gold)]/20 shadow-sm">
              View All →
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {finalExperiences.map((service, idx) => {
            const images = [
              "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80",
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80",
              "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80",
              "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=700&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80",
            ];
            
            const image = service.media && service.media.length > 0 ? service.media[0].url : images[idx % images.length];
            const price = service.basePrice || service.pricing?.basePrice || 0;
            const title = service.name || service.title;
            const category = service.categoryName || service.category?.name || "Experience";
            const city = service.location?.name || "India";
            const id = service.id || idx;

            return (
              <ExperienceCard
                key={id}
                id={id}
                image={image}
                title={title}
                category={category}
                city={city}
                price={price}
                showBadge={idx === 0}
                isLiked={liked.includes(Number(id))}
                onToggleLike={toggleLike}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
