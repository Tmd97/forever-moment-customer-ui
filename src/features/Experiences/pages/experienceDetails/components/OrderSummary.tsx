export default function OrderSummary({basePrice,addons}:any){

  const addonsPrice = addons
    .filter((a:any)=>a.added)
    .reduce((acc:number,a:any)=>acc+a.price,0)

  const total = basePrice + addonsPrice

  return(

    <div className="bg-white p-5 rounded-xl shadow-[var(--shadow-soft)]">

      <h3 className="font-semibold mb-4">
        Order Summary
      </h3>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Base Price</span>
          <span>₹{basePrice}</span>
        </div>

        {addons.filter((a:any)=>a.added).map((a:any)=>(
          <div key={a.id} className="flex justify-between">
            <span>{a.name}</span>
            <span>₹{a.price}</span>
          </div>
        ))}

        <div className="border-t pt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

    </div>

  )
}