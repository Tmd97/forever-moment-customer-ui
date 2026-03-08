export default function Inclusion({ items }: { items?: any[] }) {

  const defaultItems = [
    "Premium balloons decoration",
    "LED lights arrangement",
    "Table decoration",
    "Romantic candles",
    "Setup by expert team",
    "2 hour decoration support",
    "Cleanup after event"
  ];

  const displayItems = items && items.length > 0 
    ? items.map(item => (typeof item === 'string' ? item : item.description)) 
    : defaultItems;

  return (

    <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-soft)]">

      <ul className="space-y-3 text-sm text-gray-600">

        {displayItems.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✔</span>
            <span>{item}</span>
          </li>
        ))}

      </ul>

    </div>
  )
}