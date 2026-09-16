import { BadgeCheck, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

export default function HostSection({ listing }) {
  const { host } = listing;

  return (
    <section className="border-b border-border-soft py-10">
      <h2 className="text-xl font-semibold text-foreground">Meet your host</h2>

      <div className="mt-6 grid gap-8 lg:grid-cols-[280px_1fr]">
        <div className="rounded-2xl border border-border-soft p-6 text-center">
          <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand/10 font-display text-lg font-semibold text-brand">
            {/* {host.name
              .split(" ")
              .map((w) => w[0])
              .join("")} */}
            <Image
                            className="rounded-full grid h-20 w-20"
                              src="/assets/ui/host.jpeg"
                              alt="Host"
                              width={40}
                              height={40}
                            />
            {host.isSuperhost && (
              <span className="absolute -bottom-1 right-0 grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
                <BadgeCheck className="h-4 w-4" />
              </span>
            )}
            
          </div>
          <p className="mt-4 font-display text-lg font-semibold text-foreground">
            {host.name}
          </p>
          <p className="text-sm text-ink-soft">Host</p>

          <div className="mt-5 grid grid-cols-3 divide-x divide-border-soft border-y border-border-soft py-4 text-center">
            <div>
              <p className="text-lg font-semibold text-foreground">
                {host.reviews.toLocaleString("en-IN")}
              </p>
              <p className="text-xs text-ink-soft">Reviews</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">{host.rating}★</p>
              <p className="text-xs text-ink-soft">Rating</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">{host.yearsHosting}</p>
              <p className="text-xs text-ink-soft">Years hosting</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Co-hosts</h3>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {host.coHosts.map((name) => (
              <div key={name} className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-surface text-xs font-semibold text-foreground">
                  {name[0]}
                </span>
                <span className="text-sm text-foreground">{name}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-semibold text-foreground">Host details</h3>
          <p className="mt-2 text-sm text-foreground">Response rate: {host.responseRate}%</p>
          <p className="text-sm text-foreground">Responds within {host.respondsWithin}</p>

          <div className="mt-4 space-y-2 text-sm text-foreground">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-ink-soft" /> Born in {host.bornDecade}
            </p>
            <p className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-ink-soft" /> Where I went to school: {host.school}
            </p>
          </div>

          <button
            type="button"
            className="mt-6 rounded-lg border border-foreground px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface"
          >
            Message host
          </button>
        </div>
      </div>
    </section>
  );
}
