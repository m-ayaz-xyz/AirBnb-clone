"use client";

import { useState } from "react";
import {
  Utensils,
  Wifi,
  Briefcase,
  Car,
  Waves,
  Bath,
  PawPrint,
  Camera,
  Flame,
  Siren,
} from "lucide-react";

const ICONS = {
  utensils: Utensils,
  wifi: Wifi,
  briefcase: Briefcase,
  car: Car,
  waves: Waves,
  bath: Bath,
  "paw-print": PawPrint,
  camera: Camera,
  flame: Flame,
  siren: Siren,
};

export default function AmenitiesSection({ listing }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? listing.amenities : listing.amenities.slice(0, 6);

  return (
    <section className="border-b border-border-soft py-8">
      <h2 className="text-xl font-semibold text-foreground">What this place offers</h2>
      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {visible.map((item) => {
          const Icon = ICONS[item.icon] ?? Wifi;
          return (
            <div key={item.label} className="flex items-center gap-4">
              <Icon className="h-5 w-5 text-foreground" strokeWidth={1.6} />
              <span
                className={
                  item.unavailable ? "text-sm text-ink-soft line-through" : "text-sm text-foreground"
                }
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => setShowAll((v) => !v)}
        className="mt-6 rounded-lg border border-foreground px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface"
      >
        {showAll ? "Show less" : `Show all ${listing.amenityCount} amenities`}
      </button>
    </section>
  );
}
