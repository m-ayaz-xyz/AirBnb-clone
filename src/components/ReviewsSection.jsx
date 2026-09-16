"use client";

import { useState } from "react";
import { Sparkles,
  CheckCircle,
  LogIn,
  MessageCircle,
  MapPin,
  BadgeDollarSign, Star } from "lucide-react";
import Image from "next/image";

export default function ReviewsSection({ listing }) {
  const [showAll, setShowAll] = useState(false);
  const [activeTag, setActiveTag] = useState(null);

  const visibleReviews = showAll
    ? listing.reviews
    : listing.reviews.slice(0, 4);
  const distribution = [92, 6, 1, 1, 0];

  return (
    <section id="reviews" className="border-b border-border-soft py-10">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3 text-foreground">
          {/* <Award className="h-7 w-7" strokeWidth={1.4} /> */}
            <Image
              // className="h-7 w-7 -scale-x-100"
              src="/assets/ui/laurel-left.png"
              alt="laurel left"
              width={70}
              height={70}
            />
          <span className="font-display text-8xl font-semibold">
            {listing.rating.toFixed(2)}
          </span>
          <Image
            // className="h-7 w-7 -scale-x-100"
            src="/assets/ui/laurel-right.png"
            alt="laurel right"
            width={70}
            height={70}
          />
          {/* <Award  strokeWidth={1.4} /> */}
        </div>
        <h2 className="mt-3 text-xl font-semibold text-foreground">
          Guest favourite
        </h2>
        <p className="mt-1 max-w-md text-sm text-ink-soft">
          This home is a guest favourite based on ratings, reviews and reliability.
        </p>
        <a href="#" className="text-sm font-medium text-foreground underline">
          How reviews work
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        <div>
          <p className="text-sm font-medium text-foreground">Overall rating</p>
          <div className="mt-2 space-y-1">
            {distribution.map((pct, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-ink-soft"
              >
                <span className="w-2">{5 - i}</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-border-soft">
                  <div
                    className="h-full bg-foreground"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {(
          [
            ["cleanliness", "Cleanliness", Sparkles],
            ["accuracy", "Accuracy", CheckCircle],
            ["checkIn", "Check-in", LogIn],
            ["communication", "Communication", MessageCircle],
            ["location", "Location", MapPin],
            ["value", "Value", BadgeDollarSign],
          ]
        ).map(([key, label, Icon]) => (
          
          <div className="flex flex-row gap-5 items-center text-center" key={key}>
            <aside className="border-r border-border-soft py-11"/>
            <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="mt-2 text-sm text-foreground">
              {listing.ratingBreakdown[key].toFixed(1)}
            </p>
            <Icon className="h-7 w-7 text-foreground" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {listing.reviewTags.map((tag) => (
          <button
            key={tag.label}
            onClick={() =>
              setActiveTag(activeTag === tag.label ? null : tag.label)
            }
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeTag === tag.label
                ? "border-foreground bg-foreground text-white"
                : "border-border-soft text-foreground hover:border-foreground"
            }`}
          >
            {tag.label} {tag.count}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {visibleReviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-surface text-sm font-semibold text-foreground">
                {review.name[0]}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-ink-soft">{review.tenure}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-ink-soft">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-foreground stroke-none" />
              ))}
              <span className="ml-1">· {review.date}</span>
            </div>
            <p className="mt-2 line-clamp-3 text-sm text-foreground">
              {review.body}
            </p>
          </div>
        ))}
      </div>

      {!showAll && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-8 rounded-lg border border-foreground px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface"
        >
          Show all {listing.reviewCount} reviews
        </button>
      )}
    </section>
  );
}
