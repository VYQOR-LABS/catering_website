"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SectionReveal } from "@/components/section-reveal";
import type { EventItem } from "@/data/events";

const filters = ["All", "Upcoming", "Past", "Weddings", "Corporate", "Private"];

export function EventBrowser({ events }: { events: EventItem[] }) {
  const [filter, setFilter] = useState("All");
  const [today, setToday] = useState("");
  const filteredEvents = events.filter((event) => {
    if (filter === "Upcoming") return event.date >= today;
    if (filter === "Past") return event.date < today;
    if (filter === "Weddings") return event.category.toLowerCase().includes("wedding");
    if (filter === "Corporate") return event.category.toLowerCase().includes("corporate");
    if (filter === "Private") return ["wedding", "birthday", "private"].some((type) => event.category.toLowerCase().includes(type));
    return true;
  });

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filter events">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => {
              if (item === "Upcoming" || item === "Past") setToday(new Date().toISOString().slice(0, 10));
              setFilter(item);
            }}
            className={filter === item
              ? "rounded-full bg-[var(--brand-accent)] px-4 py-2 text-xs font-medium text-[var(--brand-on-dark)]"
              : "rounded-full border border-[var(--line)] bg-[var(--surface-card)] px-4 py-2 text-xs font-medium text-[var(--foreground)] transition hover:border-[var(--brand-accent)]"}
          >
            {item}
          </button>
        ))}
      </div>

      {filteredEvents.length ? (
        <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <SectionReveal key={event.slug} className="min-w-0 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)]">
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image src={event.image} alt={event.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
                <div className="absolute left-5 top-5 rounded-full bg-black/75 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">{event.category}</div>
                <div className="absolute bottom-4 left-4 rounded-xl bg-[var(--surface-card)]/95 px-3 py-2 text-center text-[var(--foreground)] shadow-sm">
                  <span className="block text-xl font-semibold leading-none">{new Date(`${event.date}T00:00:00`).getDate()}</span>
                  <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-accent)]">{new Date(`${event.date}T00:00:00`).toLocaleDateString("en-GB", { month: "short" })}</span>
                </div>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{event.location} <span className="mx-1">·</span> {event.category} · Catering</p>
                <h2 className="text-2xl font-semibold text-[var(--foreground)]">{event.title}</h2>
                <p className="text-sm leading-7 text-[var(--muted)]">{event.description}</p>
                <Link href={`/events/${event.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-accent)]">
                  View Event <ArrowRight size={16} />
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-[var(--muted)]">No events in this category right now. Check back soon.</p>
      )}
    </>
  );
}
