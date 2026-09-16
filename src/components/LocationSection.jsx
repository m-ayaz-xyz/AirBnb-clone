"use client";

import { useState } from "react";
import { Home, Minus, Plus, Search } from "lucide-react";

export default function LocationSection({ listing }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="location" className="border-b border-border-soft py-10">
      <h2 className="text-xl font-semibold text-foreground">
        {listing.town}, {listing.region}, {listing.country}
      </h2>

      <div className="relative mt-5 h-80 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#cfe6e5,transparent_45%),radial-gradient(circle_at_75%_60%,#e5e0d3,transparent_40%),linear-gradient(120deg,#dcefe7_0%,#f4f1ea_60%)]">
        <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white shadow">
          <Search className="h-4 w-4 text-foreground" />
        </div>
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-full bg-white shadow">
          <button className="p-2" aria-label="Zoom in">
            <Plus className="h-4 w-4" />
          </button>
          <button className="p-2" aria-label="Zoom out">
            <Minus className="h-4 w-4" />
          </button>
        </div>
        <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-foreground text-white shadow-lg">
          <Home className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-3 text-sm text-ink-soft">Exact location will be provided after booking.</p>

      <h3 className="mt-8 text-lg font-semibold text-foreground">Neighbourhood highlights</h3>
      <p className={`mt-2 max-w-2xl text-sm text-foreground ${expanded ? "" : "line-clamp-3"}`}>
        {listing.neighbourhoodSummary} Mornings are best spent at the beach before the sun climbs
        high, and the walk back winds past small bakeries and family-run cafés that open early for
        filter coffee and fresh bread.
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 text-sm font-medium underline underline-offset-2"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </section>
  );
}
