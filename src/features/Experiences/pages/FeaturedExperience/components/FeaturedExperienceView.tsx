import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "@/components/common/ExperienceCard";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

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
      <section className="section-padding bg-[#FDFAF4]">
        <div className="max-w-[1380px] mx-auto px-6 text-center text-[#9E8A6A]">
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
    <section className="section-padding bg-[#FDFAF4]">
      <div className="max-w-[1380px] mx-auto px-6">

        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <p style={{ fontFamily: "'Jost', sans-serif" }} className="text-[0.7rem] text-[#9E8A6A] tracking-[0.25em] uppercase mb-2">
                Handpicked For You
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[2rem] md:text-[2.6rem] text-[#1A1208] font-semibold leading-tight">
                Most <em>Loved</em> Experiences
              </h2>
            </div>
            {showViewAll && (
              <Link 
                to="/featured-experiences" 
                style={{ fontFamily: "'Jost', sans-serif" }} 
                className="text-[#C9A84C] text-[0.85rem] font-medium uppercase tracking-[0.1em] hover:text-[#1A1208] transition-colors flex items-center gap-2 group"
              >
                View All 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <StaggerItem key={id}>
                <ExperienceCard
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
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
