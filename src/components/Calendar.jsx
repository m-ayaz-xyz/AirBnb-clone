"use client";

import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isBefore,
  isSameDay,
  isWithinInterval,
  startOfDay,
  startOfMonth,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function MonthGrid({
  monthDate,
  range,
  today,
  onSelect,
}) {
  const start = startOfMonth(monthDate);
  const end = endOfMonth(monthDate);
  const days = eachDayOfInterval({ start, end });
  const leadingBlanks = getDay(start);

  return (
    <div>
      <p className="mb-3 text-center text-sm font-semibold text-foreground">
        {format(monthDate, "MMMM yyyy")}
      </p>
      <div className="grid grid-cols-7 gap-y-1 text-center text-xs text-ink-soft">
        {WEEKDAYS.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        {Array.from({ length: leadingBlanks }).map((_, i) => (
          <span key={`b${i}`} />
        ))}
        {days.map((day) => {
          const disabled = isBefore(day, today);
          const isStart = range.start && isSameDay(day, range.start);
          const isEnd = range.end && isSameDay(day, range.end);
          const inRange =
            range.start &&
            range.end &&
            isWithinInterval(day, { start: range.start, end: range.end });

          return (
            <button
              key={day.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(day)}
              className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[13px] transition ${
                disabled
                  ? "cursor-not-allowed text-border-soft"
                  : isStart || isEnd
                  ? "bg-foreground font-semibold text-white"
                  : inRange
                  ? "bg-surface text-foreground"
                  : "text-foreground hover:bg-surface"
              }`}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Calendar({
  checkIn,
  checkOut,
  onChange,
}) {
  const today = startOfDay(new Date());
  const [cursor, setCursor] = useState(startOfMonth(checkIn));
  const [range, setRange] = useState({ start: checkIn, end: checkOut });

  function handleSelect(day) {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null });
      return;
    }
    if (isBefore(day, range.start)) {
      setRange({ start: day, end: null });
      return;
    }
    setRange({ start: range.start, end: day });
    onChange(range.start, day);
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() => setCursor(addMonths(cursor, -1))}
          className="rounded-full border border-border-soft p-1.5 hover:bg-surface"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setRange({ start: null, end: null })}
          className="text-sm font-medium underline underline-offset-2"
        >
          Clear dates
        </button>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setCursor(addMonths(cursor, 1))}
          className="rounded-full border border-border-soft p-1.5 hover:bg-surface"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <MonthGrid monthDate={cursor} range={range} today={today} onSelect={handleSelect} />
        <MonthGrid
          monthDate={addMonths(cursor, 1)}
          range={range}
          today={today}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}
