"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { GalleryItem } from "@/data/gallery";

const categories = ["All", "Food", "Weddings", "Birthdays", "Corporate", "Outdoor", "Decorations", "Behind the Scenes"];

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [category, setCategory] = useState("All");
  const filteredItems = category === "All" ? items : items.filter((item) => item.category === category);
  const activeItem = activeIndex === null ? null : filteredItems[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + filteredItems.length) % filteredItems.length));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % filteredItems.length));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredItems.length]);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filter gallery by category">
        {categories.map((itemCategory) => (
          <button
            key={itemCategory}
            type="button"
            aria-pressed={category === itemCategory}
            onClick={() => {
              setCategory(itemCategory);
              setActiveIndex(null);
            }}
            className={category === itemCategory
              ? "rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-4 py-2 text-xs font-medium text-[var(--brand-on-dark)]"
              : "rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--foreground)] transition hover:border-[var(--brand-accent)]"}
          >
            {itemCategory}
          </button>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:240px]">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={[
              "group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)] text-left",
              index % 3 === 0 ? "sm:row-span-2" : "",
            ].join(" ")}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={900}
              height={900}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--gold-soft)]">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{item.title}</h2>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div role="dialog" aria-modal="true" aria-label={`${activeItem.title} gallery image`} className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[2rem] border border-[var(--line)] bg-[var(--surface-card)] shadow-[0_30px_120px_rgba(0,0,0,0.7)]">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/70 text-white"
              aria-label="Close gallery image"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/70 text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/70 text-white sm:right-12"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            <Image src={activeItem.image} alt={activeItem.title} width={1600} height={1200} className="max-h-[70vh] w-full object-contain" sizes="(max-width: 768px) 100vw, 80vw" />
            <div className="p-6 text-[var(--foreground)]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">{activeItem.category}</p>
              <h3 className="mt-2 text-2xl font-semibold">{activeItem.title}</h3>
              {activeItem.description && <p className="mt-3 text-base text-[var(--muted)]">{activeItem.description}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
