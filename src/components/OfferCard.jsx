import Image from 'next/image'
import React from 'react'

const OfferCard = () => {
  return (
    <aside className="rounded-2xl border border-border-soft p-4">
          <div className=" flex items-center gap-2 rounded-xl text-sm">
            {/* <Tag className="h-4 w-4 shrink-0 text-brand" /> */}
            <Image
              src="/assets/ui/discount.svg"
              alt="Airbnb Logo"
              width={30}
              height={30}
            />
            <p className="flex-1 text-foreground">
              Get 10% off your next stay. <br />
              <a href="#" className="underline font-medium">
                Terms apply
              </a>
            </p>
            <button type="button" className="font-semibold bg-surface py-2 px-3.5 rounded-xl">
              Claim
            </button>
          </div>
    </aside>
  )
}

export default OfferCard