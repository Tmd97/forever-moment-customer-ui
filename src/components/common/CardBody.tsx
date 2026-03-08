import React from 'react';
import { MapPin } from "lucide-react";

interface CardBodyProps {
  category: string;
  title: string;
  city: string;
  rating: number;
  reviews: number;
}

const CardBody: React.FC<CardBodyProps> = ({
  category,
  title,
  city,
  rating,
  reviews
}) => {
  return (
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      {/* Category */}
      <div
        className="mb-2 sm:mb-3"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontWeight: 700,
          fontFamily: "'Jost', sans-serif",
        }}
      >
        {category}
      </div>

      {/* Title */}
      <h3
        className="mb-3 sm:mb-4 group-hover:text-[var(--burgundy)] transition-colors line-clamp-2 min-h-[3.2em] flex-1"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.3rem",
          fontWeight: 600,
          lineHeight: 1.25,
          color: "var(--charcoal)",
        }}
      >
        {title}
      </h3>

      {/* Meta Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--mid)" }}>
          <MapPin size={15} style={{ color: "var(--gold)" }} />
          {city}
        </div>
        <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--mid)" }}>
          <span className="text-[#f5b843]">★</span>
          <span className="font-semibold text-[var(--charcoal)]">{rating}</span>
          <span>({reviews})</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-5 h-[1px]" style={{ background: "linear-gradient(to right, var(--border-light), transparent)" }} />
    </div>
  );
};

export default CardBody;
