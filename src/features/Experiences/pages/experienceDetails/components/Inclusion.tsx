export default function Inclusion(){

  const items = [
    "Premium balloons decoration",
    "LED lights arrangement",
    "Table decoration",
    "Romantic candles",
    "Setup by expert team",
    "2 hour decoration support",
    "Cleanup after event"
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