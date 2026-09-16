
const img = (seed, w = 1200) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${w}&q=80`;

export const listings = [
  {
    id: "candolim-jacuzzi-1bhk",
    title: "Jacuzzi 1BHK Retreat, Candolim",
    type: "Entire serviced apartment",
    town: "Candolim",
    region: "Goa",
    country: "India",
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    pricePerStay: 28499,
    nights: 5,
    currency: "₹",
    rating: 4.95,
    reviewCount: 19,
    isGuestFavourite: true,
    images: [
      "photo-1560448204-e02f11c3d0e2",
      "photo-1586023492125-27b2c045efd7",
      "photo-1571003123894-1f0594d2b5d9",
      "photo-1522708323590-d24dbb6b0267",
      "photo-1512918728675-ed5a9ecdebfd",
    ].map((s) => img(s)),
        photoTour: [
      {
        id: "living-room-1",
        name: "Living room 1",
        tags: ["Sofa", "Air conditioning", "Ceiling fan", "TV"],
        images: [
          img("photo-1493809842364-78817add7ffb"),
          img("photo-1567538096630-e0c55bd6374c"),
          img("photo-1524758631624-e2822e304c36"),
        ],
      },
      {
        id: "living-room-2",
        name: "Living room 2",
        tags: ["Ceiling fan", "Hot tub"],
        images: [
          img("photo-1586023492125-27b2c045efd7"),
          img("photo-1522708323590-d24dbb6b0267"),
          img("photo-1600607687920-4e2a09cf159d"),
        ],
      },
      {
        id: "full-kitchen",
        name: "Full kitchen",
        tags: ["Refrigerator", "Microwave", "Stovetop"],
        images: [img("photo-1556911220-e15b29be8c8f"), img("photo-1556909114-f6e7ad7d3136")],
      },
      {
        id: "bedroom",
        name: "Bedroom",
        tags: ["Queen bed", "Air conditioning", "Wardrobe"],
        images: [img("photo-1616594039964-ae9021a400a0"), img("photo-1505693416388-ac5ce068fe85")],
      },
      {
        id: "full-bathroom",
        name: "Full bathroom",
        tags: ["Jacuzzi", "Hot water", "Towels"],
        images: [img("photo-1571003123894-1f0594d2b5d9"), img("photo-1600566752355-35792bedcfea")],
      },
      {
        id: "gym",
        name: "Gym",
        tags: ["Free weights", "Cardio machines"],
        images: [img("photo-1534438327276-14e5300c3a48")],
      },
      {
        id: "exterior",
        name: "Exterior",
        tags: ["Building view"],
        images: [img("photo-1512917774080-9991f1c4c750")],
      },
      {
        id: "pool",
        name: "Pool",
        tags: ["Shared pool"],
        images: [img("photo-1571003123894-1f0594d2b5d9")],
      },
      {
        id: "additional-photos",
        name: "Additional photos",
        tags: [],
        images: [img("photo-1522708323590-d24dbb6b0267")],
      },
    ],
    highlights: [
      {
        icon: "waves",
        title: "Outdoor entertainment",
        body: "The rooftop deck and open-air seating are ideal for a slow evening.",
      },
      {
        icon: "fan",
        title: "Designed for staying cool",
        body: "Split A/C in the bedroom plus a ceiling fan in the living room.",
      },
      {
        icon: "door-open",
        title: "Self check-in",
        body: "Skip the wait — the building caretaker hands off the keys anytime.",
      },
    ],
    description:
      "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
    sleepingArrangements: [
      {
        room: "Bedroom",
        detail: "1 queen bed",
        image: img("photo-1616594039964-ae9021a400a0"),
      },
      {
        room: "Living room",
        detail: "1 sofa",
        image: img("photo-1493809842364-78817add7ffb"),
      },
    ],
    amenities: [
      { icon: "utensils", label: "Kitchen" },
      { icon: "wifi", label: "Wifi" },
      { icon: "briefcase", label: "Dedicated workspace" },
      { icon: "car", label: "Free parking on premises" },
      { icon: "waves", label: "Plunge pool" },
      { icon: "bath", label: "Private jacuzzi" },
      { icon: "paw-print", label: "Pets allowed" },
      { icon: "camera", label: "Exterior security cameras" },
      { icon: "flame", label: "Carbon monoxide alarm", unavailable: true },
      { icon: "siren", label: "Smoke alarm", unavailable: true },
    ],
    amenityCount: 48,
    ratingBreakdown: {
      cleanliness: 5.0,
      accuracy: 5.0,
      checkIn: 5.0,
      communication: 5.0,
      location: 4.8,
      value: 4.8,
    },
    reviewTags: [
      { label: "Comfort", count: 6 },
      { label: "Accuracy", count: 5 },
      { label: "Jacuzzi", count: 5 },
      { label: "Upkeep", count: 4 },
      { label: "Hospitality", count: 8 },
      { label: "Cleanliness", count: 4 },
    ],
    reviews: [
      {
        id: "r1",
        name: "Priyanka",
        tenure: "2 months on Stayfinder",
        rating: 5,
        date: "1 week ago",
        body: "Quiet, tidy, and the caretaker answered every message within minutes. Would book again for a weekend reset.",
      },
      {
        id: "r2",
        name: "Rohan",
        tenure: "3 years on Stayfinder",
        rating: 5,
        date: "2 weeks ago",
        body: "Photos undersell it a little — the jacuzzi corner is bigger in person. Everything matched the listing and check-in was smooth from start to finish.",
      },
      {
        id: "r3",
        name: "Kavya",
        tenure: "8 months on Stayfinder",
        rating: 5,
        date: "May 2026",
        body: "The building staff went out of their way to help with late check-in.",
      },
      {
        id: "r4",
        name: "Devansh",
        tenure: "4 years on Stayfinder",
        rating: 5,
        date: "May 2026",
        body: "Spotless place, well-maintained top to bottom, and the neighbourhood is calmer than most of Candolim's main strip.",
      },
      {
        id: "r5",
        name: "Meher",
        tenure: "3 years on Stayfinder",
        rating: 5,
        date: "May 2026",
        body: "Great value for the location — walked to the beach twice a day without breaking a sweat.",
      },
      {
        id: "r6",
        name: "Farhan",
        tenure: "5 years on Stayfinder",
        rating: 5,
        date: "May 2026",
        body: "Exactly as described, no surprises, and a genuinely comfortable bed.",
      },
    ],
    host: {
      name: "Mirashya Homes",
      isSuperhost: true,
      reviews: 1463,
      rating: 4.68,
      yearsHosting: 2,
      responseRate: 100,
      respondsWithin: "an hour",
      bornDecade: "the 80s",
      school: "NICMAR Goa",
      coHosts: ["Ishaan", "Devika", "Priyanka", "Tanmay", "Rhea", "Aisha"],
    },
    neighbourhoodSummary:
      "Set in the heart of Candolim, this stretch offers a peaceful base with easy access to beaches, cafés, and the town's better-known attractions.",
    cancellationPolicy:
      "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
    houseRules: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
    safety: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
];

export const relatedListings = [
  {
    id: "r-1",
    title: "Studio with a hillside view",
    town: "Candolim, Goa",
    price: 23600,
    rating: 4.91,
    image: img("photo-1505691938895-1758d7feb511"),
  },
  {
    id: "r-2",
    title: "1BHK with a private pool",
    town: "Candolim, Goa",
    price: 42218,
    rating: 4.95,
    image: img("photo-1502672260266-1c1ef2d93688"),
  },
  {
    id: "r-3",
    title: "Loft flat with a plunge pool",
    town: "Calangute, Goa",
    price: 44506,
    rating: 4.94,
    image: img("photo-1560184897-ae75f418493e"),
  },
  {
    id: "r-4",
    title: "Studio, 5 minutes to the beach",
    town: "Calangute, Goa",
    price: 22824,
    rating: 4.96,
    image: img("photo-1522771739844-6a9f6d5f14af"),
  },
  {
    id: "r-5",
    title: "1BHK with a plunge pool",
    town: "Calangute, Goa",
    price: 39942,
    rating: 4.95,
    image: img("photo-1484154218962-a197022b5858"),
  },
];

export const featuredListings = [
  {
    id: "candolim-jacuzzi-1bhk",
    title: "Jacuzzi 1BHK Retreat, Candolim",
    town: "Candolim, Goa",
    price: 28499,
    rating: 4.95,
    image: img("photo-1560448204-e02f11c3d0e2"),
  },
  ...relatedListings,
  {
    id: "r-6",
    title: "Treehouse cabin by the paddy fields",
    town: "Saligao, Goa",
    price: 18750,
    rating: 4.89,
    image: img("photo-1449158743715-0a90ebb6d2d8"),
  },
  {
    id: "r-7",
    title: "Sea-facing penthouse with a plunge deck",
    town: "Morjim, Goa",
    price: 51230,
    rating: 4.97,
    image: img("photo-1512917774080-9991f1c4c750"),
  },
];

export function getListing(id) {
  return listings.find((l) => l.id === id);
}
