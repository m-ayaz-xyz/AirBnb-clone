"use client";

import { useState } from "react";
import Image from "next/image";
import { Grid3x3 } from "lucide-react";
import PhotoTourModal from "./PhotoTourModal";

export default function PhotoGallery({
  images,
  title,
  photoTour,
}) {
  const [tourOpen, setTourOpen] = useState(false);
  const [main, ...rest] = images;

  return (
    <>
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl">
        <button
          type="button"
          onClick={() => setTourOpen(true)}
          className="relative col-span-4 row-span-2 h-[280px] cursor-pointer sm:col-span-2 sm:h-[420px]"
        >
          <Image src={main} alt={title} fill priority sizes="50vw" className="object-cover" />
        </button>
        {rest.slice(0, 4).map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setTourOpen(true)}
            className="relative hidden h-[206px] cursor-pointer sm:block"
          >
            <Image src={src} alt={`${title} photo ${i + 2}`} fill sizes="25vw" className="object-cover" />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setTourOpen(true)}
          className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full border border-foreground bg-white px-4 py-2 text-sm font-semibold shadow-sm sm:flex"
        >
          <Grid3x3 className="h-4 w-4" />
          Show all photos
        </button>
      </div>

      {tourOpen && <PhotoTourModal rooms={photoTour} onClose={() => setTourOpen(false)} />}
    </>
  );
}