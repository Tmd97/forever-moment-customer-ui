export default function WhyUs(){

  const items = [
    "Verified Decorators",
    "Original Photos",
    "Secure Payment",
    "Premium Decoration Quality",
    "Experienced Setup Team"
  ];

  return(

    <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-soft)]">

      <ul className="space-y-3 text-sm text-gray-600">

        {items.map((item,i)=>(
          <li key={i}>
            ✔ {item}
          </li>
        ))}

      </ul>

    </div>

  )
}