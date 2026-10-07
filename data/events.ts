export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  description: string;
  services: string[];
  gallery: string[];
};

export const events: EventItem[] = [
  {
    slug: "wedding-celebration-mombasa",
    title: "Wedding Celebration",
    date: "2026-10-25",
    location: "Mombasa",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    description:
      "An elegant coastal wedding with curated menus, warm hospitality, and seamless guest flow from ceremony to reception.",
    services: ["Catering", "Tablescapes", "Guest coordination"],
    gallery: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "sunset-birthday-garden",
    title: "Sunset Birthday Gathering",
    date: "2026-11-14",
    location: "Nairobi",
    category: "Birthday",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    description:
      "A relaxed, vibrant celebration featuring grazing tables, signature cocktails and a magical evening atmosphere.",
    services: ["Food styling", "Decor support", "On-site setup"],
    gallery: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "corporate-retreat-lounge",
    title: "Corporate Retreat Lounge",
    date: "2026-12-06",
    location: "Nairobi",
    category: "Corporate Event",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    description:
      "A polished business gathering designed to impress guests with premium menus and seamless hospitality from arrival to close.",
    services: ["Catering", "Event planning", "Coordination"],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
