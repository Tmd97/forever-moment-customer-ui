import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Gallery from "./Gallery";
import BookingCard from "./BookingCard";
import Reviews from "./Reviews";
import Inclusion from "./Inclusion";
import WhyUs from "./WhyUs";
import FAQ from "./FAQ";
import CancellationPolicy from "./CancellationPolicy";
import RelatedExperiences from "./RelatedExperiences";
import GiftSlider from "@/features/slider/pages/Slider/components/GiftSlider";

export interface ExperienceViewProps {
  experience: any;
  loading: boolean;
  error: string | null;
  getExperienceDetail: (id: string) => void;
}

export default function ExperienceDetails({
  experience,
  loading,
  error,
  getExperienceDetail
}: ExperienceViewProps) {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getExperienceDetail(id);
    }
  }, [id, getExperienceDetail]);

  const [activeTab, setActiveTab] = useState("inclusion")

  const [addons, setAddons] = useState([
    { id: 1, name: "Rose Pathway", price: 499, added: false },
    { id: 2, name: "LED Name Board", price: 699, added: false },
    { id: 3, name: "Extra Balloons", price: 399, added: false },
    { id: 4, name: "Cake Table Setup", price: 599, added: false },
  ]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[var(--gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--mid)] font-medium">Loading experience details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)]">
        <div className="text-center text-[var(--burgundy)] bg-[var(--burgundy)]/5 p-8 rounded-2xl border border-[var(--burgundy)]/10">
          <p className="text-xl font-semibold mb-2">Oops! Something went wrong</p>
          <p className="opacity-80">{error}</p>
        </div>
      </div>
    );
  }

  if (!experience) return null;

  const basePrice = experience.basePrice || 0;
  const name = experience.name || "Experience Detail";
  const originalPrice = experience.originalPrice || basePrice * 1.2;
  const discount = experience.originalPrice ? Math.round(((experience.originalPrice - basePrice) / experience.originalPrice) * 100) : 20;

  const toggleAddon = (id: number) => {
    setAddons(prev =>
      prev.map(a =>
        a.id === id ? { ...a, added: !a.added } : a
      )
    )
  }

  const addonsPrice = addons
    .filter(a => a.added)
    .reduce((acc, a) => acc + a.price, 0)

  const totalPrice = basePrice + addonsPrice

  return (

    <div className="bg-[var(--bg-main)] py-[var(--section-padding-y)]">

      {/* TOP SECTION */}

      <div className="max-w-[var(--container-width)] mx-auto px-4 grid lg:grid-cols-2 gap-10">

        <Gallery media={experience.media} />

        <BookingCard
          name={name}
          basePrice={basePrice}
          originalPrice={originalPrice}
          discount={discount}
          addons={addons}
          toggleAddon={toggleAddon}
          totalPrice={totalPrice}
        />

      </div>


      {/* DETAILS SECTION */}

      <div className="max-w-[var(--container-width)] mx-auto mt-16 px-4 space-y-10">


        {/* TABS */}

        <div className="border-b flex gap-8 overflow-x-auto">

          {experience.inclusions && experience.inclusions.length > 0 && (
            <button
              onClick={() => setActiveTab("inclusion")}
              className={`pb-3 font-medium whitespace-nowrap ${activeTab === "inclusion"
                ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                : "text-gray-500"
                }`}
            >
              Inclusions
            </button>
          )}

          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 font-medium whitespace-nowrap ${activeTab === "reviews"
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-gray-500"
              }`}
          >
            Reviews
          </button>

          {experience.faqs && experience.faqs.length > 0 && (
            <button
              onClick={() => setActiveTab("faq")}
              className={`pb-3 font-medium whitespace-nowrap ${activeTab === "faq"
                ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                : "text-gray-500"
                }`}
            >
              FAQ
            </button>
          )}

          <button
            onClick={() => setActiveTab("cancellation")}
            className={`pb-3 font-medium whitespace-nowrap ${activeTab === "cancellation"
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-gray-500"
              }`}
          >
            Cancellation Policy
          </button>

          <button
            onClick={() => setActiveTab("WhyUs")}
            className={`pb-3 font-medium whitespace-nowrap ${activeTab === "WhyUs"
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-gray-500"
              }`}
          >
            WhyUs
          </button>

        </div>


        {/* TAB CONTENT */}

        <div className="min-h-[200px]">

          {activeTab === "inclusion" && <Inclusion items={experience.inclusions} />}

          {activeTab === "reviews" && <Reviews />}

          {activeTab === "faq" && <FAQ items={experience.faqs} />}

          {activeTab === "cancellation" && (
            <CancellationPolicy policies={experience.cancellationPolicies} />
          )}

          {activeTab === "WhyUs" && <WhyUs />}

        </div>


        {/* RELATED EXPERIENCES */}

        <RelatedExperiences />
        <GiftSlider />

      </div>

    </div>

  )

}