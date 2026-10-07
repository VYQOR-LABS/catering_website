export type MenuCategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  dishes: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "rice-grains",
    name: "Rice & Grains",
    description: "Comforting classics and fragrant grains for a generous shared table.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A bowl of colourful rice prepared for a shared meal",
    dishes: ["Pilau", "Biryani", "Coconut rice", "Vegetable rice", "Fried rice", "Herbed rice"],
  },
  {
    slug: "chicken",
    name: "Chicken",
    description: "A range of familiar favourites, from gently spiced to flame-grilled.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Golden roast chicken served with fresh herbs",
    dishes: ["Grilled chicken", "Roast chicken", "Chicken curry", "Chicken tikka", "BBQ chicken", "Lemon & herb chicken"],
  },
  {
    slug: "beef",
    name: "Beef",
    description: "Slow-cooked, grilled and richly seasoned options for the centre of the table.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A generous platter of grilled meat and vegetables",
    dishes: ["Beef stew", "Beef curry", "Roast beef", "BBQ beef", "Beef skewers", "Beef in coconut sauce"],
  },
  {
    slug: "fish-seafood",
    name: "Fish & Seafood",
    description: "Coastal-inspired seafood choices that bring a fresh note to your menu.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fresh grilled fish with lemon and herbs",
    dishes: ["Grilled fish", "Fish fillet", "Coconut fish", "Fish curry", "Fish tikka", "Prawns"],
  },
  {
    slug: "kenyan-favourites",
    name: "Kenyan & African Favourites",
    description: "A taste of home, with much-loved dishes for a table made to be shared.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A colourful African-inspired buffet spread",
    dishes: ["Kenyan pilau", "Chapati", "Mukimo", "Matoke", "Ugali", "Nyama choma", "Kachumbari", "Samosas"],
  },
  {
    slug: "sides-salads",
    name: "Sides & Salads",
    description: "Fresh, crisp and comforting accompaniments to bring every plate together.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A fresh salad with colourful seasonal vegetables",
    dishes: ["Garden salad", "Kachumbari", "Coleslaw", "Garlic potatoes", "Roasted potatoes", "Seasonal vegetables"],
  },
  {
    slug: "breakfast-brunch",
    name: "Breakfast & Brunch",
    description: "An easy, welcoming start for meetings, celebrations and weekend gatherings.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A breakfast table with fruit, pastries and coffee",
    dishes: ["Tea & coffee", "Fresh juice", "Mandazi", "Pancakes", "Eggs & omelettes", "Fresh fruit", "Yogurt & granola"],
  },
  {
    slug: "finger-foods",
    name: "Canapés & Finger Foods",
    description: "Small bites for mingling, welcome drinks and relaxed event moments.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A selection of small bites arranged for guests",
    dishes: ["Samosas", "Spring rolls", "Chicken wings", "Chicken skewers", "Mini sandwiches", "Meatballs", "Stuffed pastries"],
  },
  {
    slug: "desserts",
    name: "Desserts & Sweet Treats",
    description: "A memorable finish, from celebration cakes to fresh and lighter choices.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A selection of colourful desserts ready to serve",
    dishes: ["Chocolate cake", "Vanilla cake", "Red velvet cake", "Doughnuts", "Muffins", "Brownies", "Fresh fruit platter"],
  },
  {
    slug: "drinks",
    name: "Drinks & Beverages",
    description: "Refreshing pours and warm favourites to complement the occasion.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Fresh tropical drinks with citrus and mint",
    dishes: ["Mango juice", "Passion juice", "Pineapple juice", "Fresh lemonade", "Iced tea", "Tea & coffee", "Mocktails"],
  },
];

export const menuPackages = [
  {
    name: "The Classic",
    occasion: "Family gatherings",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1000&q=80",
    items: ["Rice", "Chicken", "Beef", "Vegetables", "Salad", "Dessert & juice"],
  },
  {
    name: "The Celebration",
    occasion: "Weddings & milestones",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    items: ["Pilau", "Grilled chicken", "Beef stew", "Fish", "Salads & sides", "Dessert selection"],
  },
  {
    name: "The Executive",
    occasion: "Meetings & conferences",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    items: ["Breakfast", "Tea & coffee", "Finger foods", "Main course", "Fresh salads", "Dessert"],
  },
  {
    name: "The Coastal Table",
    occasion: "Coastal-inspired occasions",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80",
    items: ["Coconut rice", "Pilau", "Grilled fish", "Chicken", "Coconut vegetables", "Tropical fruit"],
  },
];