"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ListingCard from "./ListingCard";

export default function RelatedListings({ items }) {
  const scrollerRef = useRef(null);

  function scroll(dir) {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">More stays nearby</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="grid h-9 w-9 place-items-center rounded-full border border-border-soft hover:bg-surface"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="grid h-9 w-9 place-items-center rounded-full border border-border-soft hover:bg-surface"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      {/* <div className=""> */}
      <div
        ref={scrollerRef}
        className="mt-5 flex gap-5 pb-2 overflow-x-hidden scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div key={item.id} className="w-60 shrink-0">
            <ListingCard listing={item} />
          </div>
        ))}
      {/* </div> */}
      </div>
    </section>
  );
}
