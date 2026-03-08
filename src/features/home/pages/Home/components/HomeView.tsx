import Slider from "@/features/slider/pages/Slider";
import WhyChooseUs from "@/features/whyChooseUs/pages/WhyChooseUs";
import FeaturedExperience from "@/features/experiences/pages/FeaturedExperience";
import { useEffect } from "react";
import FeaturedPackagesCarousel from "@/features/packages/pages/Package";
import CategoryList from "@/features/category/pages/CategoryList";
import Testimonials from "@/features/testimonials/pages/Testimonials";
import EventThemesPreview from "@/features/balloonDecor/pages/BalloonDecor/components/EventThemesPreview";
import BeforeAfterSlider from "@/features/beforeAfterSlide/pages/BeforeAfter";
import QuickHighlights from "@/components/QuickHighlight/QuickHighlight";
import GiftSlider from "@/components/GiftSlider/GiftSlider";
import StatsBar from "@/components/StatsBar/StatsBar";
import FeaturedBanner from "@/components/FeaturedBanner/FeaturedBanner";
import PopularSearchesSlider from "@/components/PopularSearch";

interface HomeProps {
  loading: boolean;
  error: string | null;
  getFeaturedExperiences: () => void;
  getLocations: () => void;
}

const Home = ({ loading, error, getFeaturedExperiences, getLocations }: HomeProps) => {

  useEffect(() => {
    getFeaturedExperiences();
    getLocations();
  }, []);

  // Only show full page loader if we have NO data yet for anything
  // Otherwise let components show their own loading/skeletons
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--cream)" }}>
        <p style={{ color: "var(--mid)" }}>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--cream)" }}>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <Slider />
      <StatsBar />
      {/* <PopularSearchesSlider /> */}
      {/* <QuickHighlights /> */}

      <FeaturedExperience limit={3} />
      <FeaturedBanner />

      {/* <EventThemesPreview /> */}
      <CategoryList />

      {/* <BeforeAfterSlider /> */}
      {/* <FeaturedPackagesCarousel /> */}
      {/* <GiftSlider /> */}

      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
