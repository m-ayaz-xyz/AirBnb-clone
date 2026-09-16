import Link from "next/link";
import { Menu, CircleUserRound, Search, Globe } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-soft bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand font-display text-base font-semibold text-white"> */}
            <Image src="/assets/logo/AirBnb-Logo.jpg" alt="Airbnb Logo" width={30} height={30} />
          {/* </span> */}
          <span className="font-display text-xl font-semibold tracking-tight text-red-500">
            airbnb
          </span>
        </Link>

        <form
          role="search"
          aria-label="Search stays"
          className="hidden flex-1 max-w-md items-center justify-between rounded-full border border-border-soft bg-white py-1.5 pl-5 pr-1.5 shadow-sm shadow-black/[0.03] md:flex"
        >
          <button type="button" className="text-sm font-semibold text-foreground flex justify-center items-center">
            <Image src="/assets/ui/searchbar-house.png" alt="Search Icon" width={48} height={48} className="mr-2" />
            Anywhere
          </button>
          <span className="h-5 w-px bg-border-soft" aria-hidden />
          <button type="button" className="text-sm font-semibold text-ink-soft">
            Any week
          </button>
          <span className="h-5 w-px bg-border-soft" aria-hidden />
          <button type="button" className="pr-2 text-sm text-ink-soft">
            Add guests
          </button>
          <button
            type="submit"
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-surface sm:block"
          >
            Become a host
          </Link>
          <button
            type="button"
            className="flex items-center gap-3 rounded-full border border-border-soft pl-3 pr-3 py-2 transition hover:shadow-sm"
            aria-label="Open menu"
          >
            <Globe className="h-5 w-5 text-foreground" />
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-full border border-border-soft pl-3 pr-3 py-2 transition hover:shadow-sm"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
