"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";

export default function ListingCard({ listing }) {
  return (
    <div className="group block">
      <div className="relative aspect-[4/3.2] overflow-hidden rounded-2xl bg-surface">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label="Save listing"
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 rounded-full p-1.5 text-white transition hover:scale-110"
        >
          <Heart className="h-5 w-5 fill-black/30 stroke-white stroke-[1.8]" />
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <p className="truncate text-[15px] font-semibold text-foreground">
          {listing.title}
        </p>
        <span className="flex shrink-0 items-center gap-1 text-[13px] text-foreground">
          <Star className="h-3.5 w-3.5 fill-foreground" />
          {listing.rating.toFixed(2)}
        </span>
      </div>
      <p className="text-[13px] text-ink-soft">{listing.town}</p>
      <p className="mt-1 text-[15px] font-semibold text-foreground">
        ₹{listing.price.toLocaleString("en-IN")}{" "}
        <span className="font-normal text-ink-soft">/ 5 nights</span>
      </p>
    </div>
  );
}
