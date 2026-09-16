import Image from "next/image";
import { Share, Heart, Star, Flag } from "lucide-react";
import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import ReserveCard from "@/components/ReserveCard";
import AmenitiesSection from "@/components/AmenitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import HostSection from "@/components/HostSection";
import LocationSection from "@/components/LocationSection";
import ThingsToKnow from "@/components/ThingsToKnow";
import RelatedListings from "@/components/RelatedListings";
import OfferCard from "@/components/OfferCard";
import { listings, relatedListings } from "@/data/listings";

export default function Home() {
  const listing = listings[0];

  if (!listing) {
    return <main className="grid min-h-screen place-items-center p-8">No listing available.</main>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-10">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold text-foreground sm:text-[28px]">
            {listing.title}
          </h1>
          <div className="flex shrink-0 gap-4 text-sm font-semibold text-foreground">
            <button
              type="button"
              className="flex items-center gap-1.5 underline-offset-2 hover:underline"
            >
              <Share className="h-4 w-4" /> Share
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 underline-offset-2 hover:underline"
            >
              <Heart className="h-4 w-4" /> Save
            </button>
          </div>
        </div>

        <div className="mt-5">
          <PhotoGallery images={listing.images} title={listing.title} photoTour={listing.photoTour} />
          {/* <PhotoGallery images={listing.images} title={listing.title} /> */}
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <div className=" border-border-soft pb-8">
              <h2 className="text-xl font-semibold text-foreground">
                {listing.type} in {listing.town}, {listing.country}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">
                {listing.guests} guests · {listing.bedrooms} bedroom ·{" "}
                {listing.beds} bed · {listing.bathrooms} bathroom
              </p>
            </div>

            {listing.isGuestFavourite && (
              <div className="flex flex-col items-start gap-4 border-b border-border-soft py-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/ui/laurel-left.png"
                    alt="laurel left"
                    width={40}
                    height={40}
                  />
                  <p className="flex flex-col justify-center items-center font-semibold text-foreground">
                    <span>Guest</span>
                    <span>favourite</span>
                  </p>
                  <Image
                    src="/assets/ui/laurel-right.png"
                    alt="laurel right"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-sm text-foreground">
                      One of the most loved homes on Airbnb, according to guests
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="flex flex-col items-center gap-1 font-semibold text-foreground">
                    <p className="text-2xl">{listing.rating.toFixed(2)}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-foreground" />
                      <Star className="h-3 w-3 fill-foreground" />
                      <Star className="h-3 w-3 fill-foreground" />
                      <Star className="h-3 w-3 fill-foreground" />
                      <Star className="h-3 w-3 fill-foreground" />
                    </div>
                  </span>
                  <span className="h-8 w-px bg-border-soft" />
                  <a
                    href="#reviews"
                    className="flex flex-col items-center justify-center gap-1 font-semibold text-foreground"
                  >
                    <p className="text-2xl">{listing.reviewCount}</p>
                    Reviews
                  </a>
                </div>
                {/* // </div> */}
              </div>
            )}

            <div className="flex items-center gap-4 border-b border-border-soft py-6">
              {/* <span className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 font-display text-sm font-semibold text-brand"> */}
                {/* {listing.host.name[0]} */}
                <Image
                className="rounded-full grid h-12 w-12"
                  src="/assets/ui/host.jpeg"
                  alt="Host"
                  width={40}
                  height={40}
                />
              {/* </span> */}
              <div>
                <p className="font-semibold text-foreground">
                  Hosted by {listing.host.name}
                </p>
                <p className="text-sm text-ink-soft">
                  {listing.host.yearsHosting} years hosting
                </p>
              </div>
            </div>

            <div className="space-y-6 border-b border-border-soft py-8">
              {listing.highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <div className="text-2xl">✦</div>
                  <div>
                    <p className="font-semibold text-foreground">{h.title}</p>
                    <p className="text-sm text-ink-soft">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-b border-border-soft py-8">
              <p className="text-sm leading-relaxed text-foreground">
                {listing.description}
              </p>
            </div>

            <div className="border-b border-border-soft py-8">
              <h2 className="text-xl font-semibold text-foreground">
                Where you&apos;ll sleep
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {listing.sleepingArrangements.map((room) => (
                  <div key={room.room}>
                    <div className="relative h-52 overflow-hidden rounded-xl">
                      <Image
                        src={room.image}
                        alt={room.room}
                        fill
                        sizes="45vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-2 font-medium text-foreground">
                      {room.room}
                    </p>
                    <p className="text-sm text-ink-soft">{room.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <AmenitiesSection listing={listing} />
            <ReviewsSection listing={listing} />
            <LocationSection listing={listing} />
            <HostSection listing={listing} />
            <ThingsToKnow listing={listing} />
          </div>

          <div className="relative">
            <div className="lg:sticky lg:top-24 flex flex-col gap-3.5">
              <OfferCard />
              <ReserveCard listing={listing} />

              <a
                href="#"
                className="mt-4 flex flex-row justify-center gap-2 text-center text-xs font-medium text-ink-soft underline"
              >
                <Flag height={16} width={16} /> Report this listing
              </a>
            </div>
          </div>
        </div>

        <RelatedListings items={relatedListings} />
      </main>
    </div>
  );
}
