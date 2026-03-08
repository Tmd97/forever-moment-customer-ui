export default function StatsBar() {
  const stats = [
    { num: "12,000+", label: "Happy Couples" },
    { num: "350+", label: "Curated Experiences" },
    { num: "48", label: "Cities Covered" },
    { num: "4.9 ★", label: "Average Rating" },
  ];

  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="stat-item">
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
