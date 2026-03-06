// import { useState } from "react";
// import { Plus } from "lucide-react";

export default function Addons({addons,toggleAddon}:any){

  return(

    <div className="bg-white p-5 rounded-xl shadow-[var(--shadow-soft)]">

      <h3 className="font-semibold mb-4">
        Add-ons
      </h3>

      <div className="space-y-3">

        {addons.map((addon:any)=>(

          <div
            key={addon.id}
            className="flex justify-between items-center border p-3 rounded-lg"
          >

            <div>

              <p className="font-medium">
                {addon.name}
              </p>

              <p className="text-sm text-gray-500">
                ₹{addon.price}
              </p>

            </div>

            <button
              onClick={()=>toggleAddon(addon.id)}
              className={`px-4 py-1 rounded-full text-sm ${
                addon.added
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >

              {addon.added ? "Added" : "Add"}

            </button>

          </div>

        ))}

      </div>

    </div>

  )
}