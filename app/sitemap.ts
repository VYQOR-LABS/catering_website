import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/menu",
    "/events",
    "/gallery",
    "/book",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://buzziteventsandcatering.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
