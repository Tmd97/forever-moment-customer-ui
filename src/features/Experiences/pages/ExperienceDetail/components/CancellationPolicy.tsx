export default function CancellationPolicy({ policies }: { policies?: any[] }) {

  const defaultPolicies = [
    "No cancellation fees up to 24 hours before the event.",
    "50% charge for cancellations within 12-24 hours.",
    "No refund for cancellations within 12 hours of the event.",
    "Rescheduling is subject to availability and may incur extra charges."
  ];

  const displayPolicies = policies && policies.length > 0 
    ? policies.map(p => (typeof p === 'string' ? p : p.description)) 
    : defaultPolicies;

  return (
    <div className="bg-white p-6 rounded-xl shadow-[var(--shadow-soft)]">
      <ul className="space-y-4 text-sm text-gray-600">
        {displayPolicies.map((policy, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[var(--primary)] mt-1">•</span>
            <span className="leading-relaxed">{policy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
