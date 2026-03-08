import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ExperienceCard from "@/components/common/ExperienceCard";

export interface SubCategoryExperienceViewProps {
  experiences?: any[];
  loading?: boolean;
  getSubCategoryExperiences: (id: string) => void;
}

export default function SubCategoryExperienceView({ 
  experiences, 
  loading,
  getSubCategoryExperiences
}: SubCategoryExperienceViewProps) {
  const [liked, setLiked] = useState<number[]>([]);
  const { subCategoryId } = useParams<{ subCategoryId: string }>();

  useEffect(() => {
    if (subCategoryId) {
      getSubCategoryExperiences(subCategoryId);
    }
  }, [subCategoryId, getSubCategoryExperiences]);

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
      <section className="py-16 min-h-[60vh] flex items-center justify-center" style={{ background: "var(--cream)" }}>
        <div className="text-center text-[var(--mid)]">
          <div className="w-12 h-12 border-4 border-[var(--gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Finding the perfect experiences for you...</p>
        </div>
      </section>
    );
  }

  const displayExperiences = experiences || [];
  const subCategoryName = displayExperiences.length > 0 ? displayExperiences[0].subCategoryName : "Experiences";

  return (
    <section className="py-16" style={{ background: "var(--cream)" }}>
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="section-eyebrow">Explore Category</div>
          <h2 className="section-title">
            {subCategoryName} <em>Experiences</em>
          </h2>
          <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-[var(--burgundy)] to-transparent"></div>
        </div>

        {/* Grid */}
        {displayExperiences.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayExperiences.map((service, idx) => {
              const images = [
                "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80",
                "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80",
                "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80",
                "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=700&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80",
              ];
              
              const image = service.media && service.media.length > 0 ? service.media[0].url : images[idx % images.length];
              const price = service.basePrice || 0;
              const title = service.name;
              const category = service.categoryName || "Experience";
              const id = service.id;

              return (
                <ExperienceCard
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  category={category}
                  price={price}
                  priceLabel="Starting Price"
                  isLiked={liked.includes(Number(id))}
                  onToggleLike={toggleLike}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-[var(--border-light)]">
            <p className="text-xl font-medium text-[var(--mid)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              No experiences found in this category yet.
            </p>
            <Link to="/" className="mt-4 inline-block text-[var(--burgundy)] font-semibold hover:underline">
              Browse other categories →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
