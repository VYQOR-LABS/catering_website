export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  eyebrow: string;
  includes: string[];
};

export const services: ServiceItem[] = [
  {
    id: "weddings",
    title: "Weddings",
    eyebrow: "Signature celebrations",
    description:
      "From elegant receptions to intimate ceremonies, we provide beautifully presented food and seamless event support for your special day.",
    includes: ["Custom menu planning", "Food presentation", "Event setup coordination"],
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "birthdays",
    title: "Birthdays",
    eyebrow: "Joyful moments",
    description:
      "Create memorable birthday celebrations with food, setup and event support tailored to your occasion.",
    includes: ["Flexible menu options", "Buffet and finger-food planning", "Event setup support"],
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate",
    title: "Corporate Catering",
    eyebrow: "Professional hospitality",
    description:
      "Professional catering for meetings, conferences, corporate gatherings and business functions.",
    includes: ["Guest-count planning", "Menu consultation", "On-site catering coordination"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "private-events",
    title: "Private Events",
    eyebrow: "Personal celebrations",
    description:
      "Thoughtful catering for anniversaries, family celebrations and private parties, planned around your guests and setting.",
    includes: ["Personalised menu planning", "Food presentation", "Service and setup planning"],
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "outdoor",
    title: "Outdoor Catering",
    eyebrow: "On-site experience",
    description:
      "Catering planned for garden parties, outdoor celebrations and open-air gatherings at your chosen venue.",
    includes: ["Venue-aware menu planning", "Serving setup coordination", "Guest-count planning"],
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "home-events",
    title: "Home Events",
    eyebrow: "At your place",
    description:
      "Bring people together at home with catering planned for your space, guest list and occasion.",
    includes: ["Home event menu planning", "Guest-count planning", "Setup coordination"],
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "launches",
    title: "Product Launches",
    eyebrow: "Brand moments",
    description:
      "Catering and event support for product launches, openings and brand gatherings that deserve a thoughtful touch.",
    includes: ["Event-specific menu planning", "Guest flow planning", "Catering setup coordination"],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "companies",
    title: "Company & Shop Events",
    eyebrow: "Business hospitality",
    description:
      "Catering solutions for staff events, customer events, and special occasions that bring people together.",
    includes: ["Staff and guest menu planning", "Flexible guest-count planning", "Service coordination"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
];
