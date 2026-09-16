"use client";

import { useState } from "react";
import { Waves, TentTree, Mountain, Castle, Snowflake, Trees, Building2, Sparkles } from "lucide-react";

const categories = [
  { label: "Beachfront", icon: Waves },
  { label: "Cabins", icon: TentTree },
  { label: "Hillside", icon: Mountain },
  { label: "Heritage homes", icon: Castle },
  { label: "Ski-in", icon: Snowflake },
  { label: "Nature retreats", icon: Trees },
  { label: "City stays", icon: Building2 },
  { label: "Guest favourites", icon: Sparkles },
];

export default function CategoryStrip() {
  const [active, setActive] = useState("Beachfront");

  return (
    <nav
      aria-label="Categories"
      className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-4 py-5 sm:px-6 lg:px-10"
    >
      {categories.map(({ label, icon: Icon }) => {
        const isActive = active === label;
        return (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex shrink-0 flex-col items-center gap-2 border-b-2 pb-2 text-xs font-medium transition ${
              isActive
                ? "border-foreground text-foreground"
                : "border-transparent text-ink-soft hover:border-border-soft hover:text-foreground"
            }`}
          >
            <Icon className={`h-5 w-5 ${isActive ? "text-foreground" : "text-ink-soft"}`} strokeWidth={1.6} />
            {label}
          </button>
        );
      })}
    </nav>
  );
}
