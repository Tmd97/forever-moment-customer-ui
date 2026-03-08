import { useState } from "react";

export default function PincodeChecker(){

  const [pincode,setPincode] = useState("")
  const [available,setAvailable] = useState<boolean | null>(null)

  const checkPincode = ()=>{

    if(pincode === "110001" || pincode === "110059"){
      setAvailable(true)
    }else{
      setAvailable(false)
    }

  }

  return(

    <div className="space-y-2">

      <div className="flex gap-2">

        <input
          value={pincode}
          onChange={(e)=>setPincode(e.target.value)}
          placeholder="Enter Pincode"
          className="border border-gray-200 rounded-xl px-3 py-2.5 flex-1 text-sm
          focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          hover:border-[var(--primary)] transition shadow-sm"
        />

        <button
          onClick={checkPincode}
          className="bg-[var(--primary)] text-white px-5 rounded-xl text-sm font-medium
          shadow hover:shadow-md hover:scale-[1.03] active:scale-95 transition"
        >
          Check
        </button>

      </div>

      {available===true && (
        <p className="text-green-600 text-sm font-medium">
          ✓ Service available in your area
        </p>
      )}

      {available===false && (
        <p className="text-red-500 text-sm font-medium">
          ✕ Sorry service not available
        </p>
      )}

    </div>

  )
}