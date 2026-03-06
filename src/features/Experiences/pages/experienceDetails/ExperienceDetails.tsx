import { useState } from "react";

import Gallery from "./components/Gallery";
import BookingCard from "./components/BookingCard";
import Reviews from "./components/Reviews";
import Inclusion from "./components/Inclusion";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import RelatedExperiences from "./components/RelatedExperiences";
import GiftSlider from "@/components/GiftSlider/GiftSlider";

export default function ExperienceDetails() {

  const basePrice = 4999;

  const [activeTab,setActiveTab] = useState("inclusion")

  const [addons,setAddons] = useState([
    {id:1,name:"Rose Pathway",price:499,added:false},
    {id:2,name:"LED Name Board",price:699,added:false},
    {id:3,name:"Extra Balloons",price:399,added:false},
    {id:4,name:"Cake Table Setup",price:599,added:false},
  ]);

  const toggleAddon = (id:number)=>{
    setAddons(prev =>
      prev.map(a =>
        a.id===id ? {...a,added:!a.added} : a
      )
    )
  }

  const addonsPrice = addons
    .filter(a=>a.added)
    .reduce((acc,a)=>acc+a.price,0)

  const totalPrice = basePrice + addonsPrice

  return(

    <div className="bg-[var(--bg-main)] py-[var(--section-padding-y)]">

      {/* TOP SECTION */}

      <div className="max-w-[var(--container-width)] mx-auto px-4 grid lg:grid-cols-2 gap-10">

        <Gallery/>

        <BookingCard
          basePrice={basePrice}
          addons={addons}
          toggleAddon={toggleAddon}
          totalPrice={totalPrice}
        />

      </div>


      {/* DETAILS SECTION */}

      <div className="max-w-[var(--container-width)] mx-auto mt-16 px-4 space-y-10">


        {/* TABS */}

        <div className="border-b flex gap-8 overflow-x-auto">

          <button
            onClick={()=>setActiveTab("inclusion")}
            className={`pb-3 font-medium ${
              activeTab==="inclusion"
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-gray-500"
            }`}
          >
            Inclusions
          </button>

          <button
            onClick={()=>setActiveTab("reviews")}
            className={`pb-3 font-medium ${
              activeTab==="reviews"
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-gray-500"
            }`}
          >
            Reviews
          </button>

          <button
            onClick={()=>setActiveTab("faq")}
            className={`pb-3 font-medium ${
              activeTab==="faq"
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-gray-500"
            }`}
          >
            FAQ
          </button>
             <button
            onClick={()=>setActiveTab("WhyUs")}
            className={`pb-3 font-medium ${
              activeTab==="WhyUs"
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-gray-500"
            }`}
          >
            WhyUs
          </button>

        </div>


        {/* TAB CONTENT */}

        <div>

          {activeTab==="inclusion" && <Inclusion/>}

          {activeTab==="reviews" && <Reviews/>}

          {activeTab==="faq" && <FAQ/>}
          {activeTab==="WhyUs" && <WhyUs/>}

        </div>


        {/* WHY US */}

        {/* <WhyUs/> */}


        {/* RELATED EXPERIENCES */}

        <RelatedExperiences/>
        <GiftSlider/>

      </div>

    </div>

  )

}