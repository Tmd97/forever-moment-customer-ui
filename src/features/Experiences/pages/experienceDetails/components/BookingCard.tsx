import { useState } from "react";
import { Star } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Addons from "./AddOns";
import PincodeChecker from "./PincodeChecker";
import OrderSummary from "./OrderSummary";

export default function BookingCard({
  basePrice,
  addons,
  toggleAddon,
  totalPrice
}: any) {

  const [date,setDate] = useState<Date | null>(null)
  const [slot,setSlot] = useState("Evening")
  const [coupon,setCoupon] = useState("")
  const [addonOpen,setAddonOpen] = useState(false)

  const originalPrice = 6000

  const scrollToReviews = () => {
    const section = document.getElementById("reviews-section")
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }

  return(

    <div className="flex flex-col space-y-6 bg-white p-6 lg:p-7 rounded-2xl shadow-lg border border-gray-100">

      {/* TITLE */}

      <h1 className="text-2xl lg:text-3xl font-bold text-[var(--text-main)] leading-snug">
        Premium Birthday Decoration
      </h1>


      {/* ⭐ RATING */}

      <div
        onClick={scrollToReviews}
        className="flex items-center gap-2 cursor-pointer w-fit group"
      >

        <div className="flex text-yellow-400">

          <Star size={18} fill="currentColor"/>
          <Star size={18} fill="currentColor"/>
          <Star size={18} fill="currentColor"/>
          <Star size={18} fill="currentColor"/>
          <Star size={18} fill="currentColor"/>

        </div>

        <span className="text-sm text-gray-600 underline group-hover:text-[var(--primary)] transition">
          4.8 (124 Reviews)
        </span>

      </div>


      {/* PRICE */}

      <div className="flex items-center gap-3 flex-wrap">

        <span className="text-3xl font-bold text-[var(--primary)]">
          ₹{totalPrice}
        </span>

        <span className="line-through text-gray-400">
          ₹{originalPrice}
        </span>

        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-medium">
          15% OFF
        </span>

      </div>


      {/* BOOKING SECTION */}

      <div className="grid grid-cols-2 gap-3">

        {/* DATE PICKER */}

        <DatePicker
          selected={date}
          onChange={(d)=>setDate(d)}
          placeholderText="Select Date"
          minDate={new Date()}
          dateFormat="dd MMM yyyy"
          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm
          focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          hover:border-[var(--primary)] transition shadow-sm"
        />


        {/* SLOT SELECTOR */}

        <div className="flex bg-gray-100 rounded-xl p-1">

          <button
            onClick={()=>setSlot("Morning")}
            className={`flex-1 py-2 text-sm rounded-lg transition
            ${slot==="Morning"
              ? "bg-white shadow text-[var(--primary)] font-medium"
              : "text-gray-600 hover:text-black"
            }`}
          >
            Morning
          </button>

          <button
            onClick={()=>setSlot("Afternoon")}
            className={`flex-1 py-2 text-sm rounded-lg transition
            ${slot==="Afternoon"
              ? "bg-white shadow text-[var(--primary)] font-medium"
              : "text-gray-600 hover:text-black"
            }`}
          >
            Afternoon
          </button>

          <button
            onClick={()=>setSlot("Evening")}
            className={`flex-1 py-2 text-sm rounded-lg transition
            ${slot==="Evening"
              ? "bg-white shadow text-[var(--primary)] font-medium"
              : "text-gray-600 hover:text-black"
            }`}
          >
            Evening
          </button>

        </div>

      </div>


      {/* PINCODE */}

      <PincodeChecker/>


      {/* COUPON */}

      <div className="flex gap-2">

        <input
          placeholder="Coupon code"
          value={coupon}
          onChange={(e)=>setCoupon(e.target.value)}
          className="border border-gray-200 rounded-xl px-3 py-2.5 flex-1 text-sm
          focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
        />

        <button className="bg-[var(--primary)] text-white px-5 rounded-xl text-sm font-medium shadow hover:shadow-md hover:scale-[1.03] active:scale-95 transition">
          Apply
        </button>

      </div>


      {/* ADDON BUTTON */}

      <button
        onClick={()=>setAddonOpen(true)}
        className="border border-gray-200 rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 hover:shadow-sm transition"
      >
        View Add-ons ({addons.length})
      </button>


      {/* ORDER SUMMARY */}

      <OrderSummary basePrice={basePrice} addons={addons}/>


      {/* BOOK BUTTON */}

      <button className="w-full bg-[var(--primary)] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition">
        Book Now
      </button>


      {/* ADDON POPUP */}

      {addonOpen && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">

            <h3 className="font-semibold text-lg mb-4">
              Add-ons
            </h3>

            <Addons addons={addons} toggleAddon={toggleAddon}/>

            <button
              onClick={()=>setAddonOpen(false)}
              className="mt-6 w-full bg-[var(--primary)] text-white py-2.5 rounded-xl font-medium hover:shadow-md hover:scale-[1.02] transition"
            >
              Done
            </button>

          </div>

        </div>

      )}

    </div>

  )

}