import { useEffect } from "react";
import Slider from "@/features/slider/pages/SliderPage";
import WhyChooseUs from "@/features/whyChooseUs/pages/WhyChooseUs/components/WhyChooseUs";
// import PackageCrousel from '@/features/Packages/pages/PackageCrousel';
import FeaturedServices from "@/features/featureServices/pages/FeatureServicePage/components/FeatureServices";
// import BalloonDecorPage from '@/features/balloonDecor/pages/BalloonDecorPage';
import FeaturedPackagesCarousel from "@/features/packages/pages/PackagePage";
import ProductCatalog from "@/features/premiumEventDecoration/pages/PremiumEventPage/components/PremiumEventDecor";
import Testimonials from "@/features/packages/pages/PackagePage/components/Testimonials";
import EventThemesPreview from "@/features/balloonDecor/pages/BalloonDecorPage/components/EventThemesPreview";
import BeforeAfterSlider from "@/features/beforeAfterSlide/pages/BeforeAfterPage";
import QuickHighlights from "@/components/QuickHighlight/QuickHighlight";

import GiftSlider from "@/components/GiftSlider/GiftSlider";


interface HomeProps {
  data: any;
  loading: boolean;
  error: string | null;
  getHomeData: () => void;
}

const Home = ({ loading, error, getHomeData }: HomeProps) => {
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
