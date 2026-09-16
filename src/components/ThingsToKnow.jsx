import { CalendarX, KeyRound, ShieldCheck } from "lucide-react";

export default function ThingsToKnow({ listing }) {
  return (
    <section className="border-b border-border-soft py-10">
      <h2 className="text-xl font-semibold text-foreground">Things to know</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        <div>
          <CalendarX className="h-5 w-5 text-foreground" strokeWidth={1.6} />
          <h3 className="mt-3 font-semibold text-foreground">Cancellation policy</h3>
          <p className="mt-2 text-sm text-foreground">{listing.cancellationPolicy}</p>
          <a href="#" className="mt-1 inline-block text-sm font-medium underline">
            Learn more
          </a>
        </div>
        <div>
          <KeyRound className="h-5 w-5 text-foreground" strokeWidth={1.6} />
          <h3 className="mt-3 font-semibold text-foreground">House rules</h3>
          <ul className="mt-2 space-y-1 text-sm text-foreground">
            {listing.houseRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <a href="#" className="mt-1 inline-block text-sm font-medium underline">
            Learn more
          </a>
        </div>
        <div>
          <ShieldCheck className="h-5 w-5 text-foreground" strokeWidth={1.6} />
          <h3 className="mt-3 font-semibold text-foreground">Safety &amp; property</h3>
          <ul className="mt-2 space-y-1 text-sm text-foreground">
            {listing.safety.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#" className="mt-1 inline-block text-sm font-medium underline">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
