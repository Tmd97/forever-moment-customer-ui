import { useEffect } from "react";
import Slider from "@/features/slider/pages/SliderPage";
import WhyChooseUs from "@/features/whyChooseUs/pages/WhyChooseUs/components/WhyChooseUs";
// import PackageCrousel from '@/features/Packages/pages/PackageCrousel';
import FeaturedServices from "@/features/FeatureServices/pages/featureservice/components/FeatureServices";
// import BallonDecorPage from '@/features/BalloonDecor/pages/BallonDecorPage';
import FeaturedPackagesCarousel from "@/features/Packages copy/pages/PackageCrousel/components/PackageCrousel";
import ProductCatalog from "@/features/PremiumEventDecoration/Pages/components/PremiumEventDecor";
import Testimonials from "@/features/Packages/pages/PackageCrousel/components/Testimonials";
import EventThemesPreview from "@/features/BalloonDecor/pages/BallonDecorPage/components/EventThemesPreview";
import BeforeAfterSlider from "@/features/BeforeAfterSlide/pages/components/BeforeAfterSlide";
import QuickHighlights from "@/components/QuickHighlight/QuickHighlight";
import ExperienceDetails from "@/features/Experiences/pages/experienceDetails/ExperienceDetails";
import GiftSlider from "@/components/GiftSlider/GiftSlider";


interface HomeProps {
  data: any;
  loading: boolean;
  error: string | null;
  getHomeData: () => void;
}

const Home = ({ data, loading, error, getHomeData }: HomeProps) => {
  useEffect(() => {
    getHomeData();
  }, [getHomeData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <ExperienceDetails/>
      <Slider />
      
      <QuickHighlights/>
      <BeforeAfterSlider/>
      <FeaturedPackagesCarousel />
      <FeaturedServices />

      <EventThemesPreview/>

      <ProductCatalog />
      <GiftSlider/>
      <WhyChooseUs />
      <Testimonials />
      {/* <PackageCrousel/> */}
    </div>
  );
};

export default Home;
