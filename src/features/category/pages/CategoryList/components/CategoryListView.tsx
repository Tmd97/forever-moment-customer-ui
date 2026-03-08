import { Link } from "react-router-dom";
import CategoryListCard from "@/components/common/CategoryListCard";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  displayOrder: number;
  isActive: boolean;
}

interface CategoryListViewProps {
  categories: Category[];
}

export default function CategoryListView({ categories }: CategoryListViewProps) {
  const activeCategories = categories
    .filter((cat) => cat.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  // Don't render the section if there are no categories yet
  if (activeCategories.length === 0) return null;

  return (
    <section className="py-16" style={{ background: "var(--cream)" }}>
      <div className="max-w-[var(--container-width)] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="section-eyebrow">Every Occasion</div>
            <h2 className="section-title">
              Browse by <em>Category</em>
            </h2>
          </div>
          <Link to="/categories" className="see-all">
            All Categories →
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activeCategories.map((cat, index) => (
            <CategoryListCard key={cat.id} category={cat} imageIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}