"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, Heart, Share, X } from "lucide-react";

export default function PhotoTourModal({
  rooms,
  onClose,
}) {
  const sectionRefs = useRef({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function scrollTo(id) {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-soft bg-white px-4 py-4 sm:px-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back"
          className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <h2 className="text-base flex gap-2 font-semibold text-foreground">
          Photo tour
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo tour"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface"
          >
            <Share className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo tour"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-8">
        <div
          className="flex gap-6 overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {rooms.map((room) => (
            <button
              key={room.id}
              type="button"
              onClick={() => scrollTo(room.id)}
              className="flex shrink-0 flex-col items-center gap-2 text-center"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-border-soft sm:h-28 sm:w-28">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>

              <span className="w-24 text-xs text-foreground sm:w-28">
                {room.name}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-16">
          {rooms.map((room) => (
            <section
              key={room.id}
              ref={(el) => {
                sectionRefs.current[room.id] = el;
              }}
              className="grid gap-6 lg:grid-cols-[260px_1fr]"
            >
              <div className="lg:sticky lg:top-24 lg:self-start">
                <h3 className="text-2xl font-semibold text-foreground">
                  {room.name}
                </h3>
                {room.tags.length > 0 && (
                  <p className="mt-2 text-sm text-ink-soft">
                    {room.tags.join(" · ")}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {room.images.map((src, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-xl ${
                      i === 0 ? "col-span-2 h-72 sm:h-96" : "h-48"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${room.name} photo ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
