export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "jollof-chicken",
    title: "Jollof & Grilled Chicken",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    description: "A warm, vibrant spread made for memorable gatherings.",
  },
  {
    id: "table-setting",
    title: "Elegant Table Setting",
    category: "Decorations",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    description: "Curated detailing designed to make every guest feel celebrated.",
  },
  {
    id: "dessert-board",
    title: "Signature Desserts",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    description: "A rich finish for every occasion.",
  },
  {
    id: "outdoor-dinner",
    title: "Outdoor Dining Setup",
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    description: "Dining that feels elevated from first impression to last bite.",
  },
  {
    id: "wedding-details",
    title: "Wedding Details",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    description: "Every detail tailored to the moment.",
  },
  {
    id: "buffet-arrangement",
    title: "Buffet Display",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    description: "A dynamic display built for easy serving and generous hospitality.",
  },
  {
    id: "corporate-gathering",
    title: "Business Gathering",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    description: "Thoughtful hospitality for professional moments.",
  },
  {
    id: "chef-prep",
    title: "Chef Preparation",
    category: "Behind the Scenes",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    description: "Precision, care and flavour in every plated detail.",
  },
  {
    id: "birthday-celebration",
    title: "Birthday Celebration",
    category: "Birthdays",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    description: "A joyful table and menu made for celebrating together.",
  },
];
