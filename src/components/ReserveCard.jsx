"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ChevronDown, Tag } from "lucide-react";
import Calendar from "./Calendar";
import Image from "next/image";

export default function ReserveCard({ listing }) {
  const [checkIn, setCheckIn] = useState(new Date(2026, 9, 18));
  const [checkOut, setCheckOut] = useState(new Date(2026, 9, 23));
  const [guests, setGuests] = useState(2);
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <aside className="rounded-2xl border border-border-soft p-6 shadow-lg shadow-black/4">
      <p className="text-lg">
        <span className="font-semibold text-foreground">
          {listing.currency}
          {listing.pricePerStay.toLocaleString("en-IN")}
        </span>{" "}
        <span className="text-ink-soft">for {listing.nights} nights</span>
      </p>

      <div className="relative mt-3">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border-soft">
          <button
            type="button"
            onClick={() => setCalendarOpen((v) => !v)}
            className="border-r border-border-soft p-3 text-left hover:bg-surface"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
              Check-in
            </p>
            <p className="text-sm text-foreground">
              {format(checkIn, "MM/dd/yyyy")}
            </p>
          </button>
          <button
            type="button"
            onClick={() => setCalendarOpen((v) => !v)}
            className="p-3 text-left hover:bg-surface"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
              Checkout
            </p>
            <p className="text-sm text-foreground">
              {format(checkOut, "MM/dd/yyyy")}
            </p>
          </button>
        </div>

        {calendarOpen && (
          <div className="absolute left-0 right-0 top-full z-20 mt-2 w-[520px] max-w-[92vw] rounded-2xl border border-border-soft bg-white p-5 shadow-xl">
            <Calendar
              checkIn={checkIn}
              checkOut={checkOut}
              onChange={(ci, co) => {
                setCheckIn(ci);
                setCheckOut(co);
                setCalendarOpen(false);
              }}
            />
          </div>
        )}

        <div className="mt-2 rounded-xl border border-border-soft p-3">
          <label className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
            Guests
          </label>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm text-foreground">{guests} guests</span>
            <div className="flex items-center gap-3">
              <ChevronDown className="h-4 w-4 text-ink-soft" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-foreground bg-taupe-100 p-2 rounded-md">
        Free cancellation before{" "}
        <span className="font-semibold">17 October</span>
      </p>

      <button
        type="button"
        className="mt-3 w-full rounded-full bg-brand py-3.5 text-center text-base font-semibold text-white transition hover:bg-brand-dark"
      >
        Reserve
      </button>
      <p className="mt-2 text-center text-xs text-ink-soft">
        You won&apos;t be charged yet
      </p>
    </aside>
  );
}
