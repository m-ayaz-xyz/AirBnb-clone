# Airbnb Clone – Playpower Labs Assignment

A frontend implementation of an Airbnb-style property listing page built using Next.js and React.

The project focuses on recreating the Airbnb property detail experience with reusable components, responsive layouts, interactive photo galleries, reservation UI, reviews, amenities, host information and related listings.

---

## Tech Stack

- Next.js 16
- Tailwind CSS 4
- Lucide React
- date-fns
- JavaScript / JSX

---

## Features

### Property Details

- Property title and location
- Property type
- Guest capacity
- Bedrooms and beds
- Bathroom information
- Property description

### Photo Gallery

- Multiple property images
- Responsive gallery layout
- Photo tour modal
- Image navigation
- Full-screen image viewing
- Share and save actions

### Guest Favourite

- Guest favourite badge
- Property rating
- Review count
- Star rating display

### Host Section

- Host profile image
- Host name
- Hosting experience
- Host rating
- Response information
- Superhost information

### Amenities

- Kitchen
- WiFi
- Dedicated workspace
- Parking
- Pool
- Jacuzzi
- Pets allowed
- Security cameras
- Safety information

### Reviews

- Overall rating
- Rating breakdown
- Review tags
- Guest reviews
- Review navigation

### Location

- Property location
- Interactive-style map UI
- Location description
- Nearby information

### Reservation Card

- Price information
- Check-in date
- Checkout date
- Guest count
- Interactive calendar
- Cancellation information
- Reserve button

### Related Listings

- Related property cards
- Property images
- Property locations
- Prices
- Ratings
- Horizontal navigation

---

## Project Structure

```text
playpower_airbnb_clone/
│
├── public/
│   └── assets/
│       └── logo/
│           └── AirBnb-Logo.jpg
│       └── ui/
│           ├── host.jpeg
│           ├── laurel-left.png
│           └── laurel-right.png
│
├── src/
│   │
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.jsx
│   │
│   ├── components/
│   │   ├── AmenitiesSection.jsx
│   │   ├── Calendar.jsx
│   │   ├── CategoryStrip.jsx
│   │   ├── HostSection.jsx
│   │   ├── ListingCard.jsx
│   │   ├── LocationSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── OfferCard.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── PhotoTourModal.jsx
│   │   ├── RelatedListings.jsx
│   │   ├── ReserveCard.jsx
│   │   ├── ReviewsSection.jsx
│   │   └── ThingsToKnow.jsx
│   │
│   └── data/
│       └── listings.js
│
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json
├── package.json
└── README.md

---

## Some AI prompts Used in At the Time of Development

Prompt 1:
Analyze the Airbnb reference page and identify all
visible sections and interactions.

Prompt 2:
Create the desktop listing page structure using Next.js.

Prompt 3:
Implement the image gallery interaction.

Prompt 4:
Implement the full-screen photo tour.

Prompt 5:
Implement lightbox with keyboard navigation.

Prompt 6:
Compare the implementation against the reference
and identify visual mismatches.

Prompt 7:
Fix spacing, typography and responsive behavior