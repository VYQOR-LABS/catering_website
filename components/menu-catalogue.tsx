"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { menuCategories, menuPackages } from "@/data/menu";

const filters = [
  { label: "All", slug: "all" },
  ...menuCategories.map(({ name, slug }) => ({ label: name, slug })),
];

const eventOptions = ["Wedding", "Birthday", "Corporate Meeting", "Graduation", "Private Dinner", "Conference", "Party", "Other"];
const guestOptions = ["10–30", "30–50", "50–100", "100–250", "250+"];

export function MenuCatalogue() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [eventType, setEventType] = useState("Wedding");
  const [guests, setGuests] = useState("50–100");
  const [serviceType, setServiceType] = useState("Catering");

  const visibleCategories = activeFilter === "all"
    ? menuCategories
    : menuCategories.filter((category) => category.slug === activeFilter);

  const bookingHref = `/book?${new URLSearchParams({ event: eventType, guests, service: serviceType }).toString()}`;

  return (
    <>
      <section id="catalogue" className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">A considered selection</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Explore the menu</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">These menu ideas are a starting point. Tell us what you have in mind and we can discuss options for your event.</p>
        </div>

        <div className="-mx-4 mb-8 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-10 sm:px-0">
          <div className="flex w-max gap-2" role="group" aria-label="Filter menu categories">
            {filters.map((filter) => (
              <button
                key={filter.slug}
                type="button"
                aria-pressed={activeFilter === filter.slug}
                onClick={() => setActiveFilter(filter.slug)}
                className={`min-h-10 whitespace-nowrap rounded-full border px-4 text-xs font-medium transition ${
                  activeFilter === filter.slug
                    ? "border-[var(--brand-accent)] bg-[var(--brand-accent)] text-[var(--brand-on-dark)]"
                    : "border-[var(--line)] bg-[var(--surface-card)] text-[var(--muted)] hover:border-[var(--brand-accent)] hover:text-[var(--foreground)]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 lg:grid-cols-2 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category, index) => (
              <motion.article
                key={category.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, delay: index < 4 ? index * 0.035 : 0 }}
                className="group grid min-w-0 overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-card)] sm:grid-cols-[0.92fr_1.08fr]"
              >
                <div className="relative min-h-56 overflow-hidden sm:min-h-[330px]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/10" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-black/25 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")} / {String(menuCategories.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col p-5 sm:p-6 lg:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Menu inspiration</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-[1.7rem]">{category.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-[var(--line)] pt-5 text-sm text-[var(--foreground)]">
                    {category.dishes.map((dish) => (
                      <li key={dish} className="flex min-w-0 items-start gap-2 leading-5">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                        <span className="min-w-0">{dish}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/book?${new URLSearchParams({ service: "Catering", menu: category.name }).toString()}`}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-semibold text-[var(--brand-accent)] transition hover:gap-3"
                  >
                    Ask about this menu <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="bg-[var(--surface-strong)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mb-9 flex flex-col gap-3 sm:mb-11 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Ideas to get started</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A few ways to bring it together</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">Sample combinations only. Your menu, service and budget are discussed with the Buzzit team.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {menuPackages.map((menuPackage) => (
              <article key={menuPackage.name} className="group overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-card)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={menuPackage.image} alt={`${menuPackage.name} sample table`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{menuPackage.occasion}</p>
                  <h3 className="mt-2 text-xl font-semibold">{menuPackage.name}</h3>
                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{menuPackage.items.join(" · ")}</p>
                  <Link
                    href={`/book?${new URLSearchParams({ service: "Catering", menu: menuPackage.name }).toString()}`}
                    className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] transition hover:gap-3"
                  >
                    Customize this idea <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-9 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">A good meal, shared</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">Good food becomes part of the celebration.</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">From the first welcome to the final plate, the right menu makes room for people to gather, connect and enjoy the moment.</p>
          <Link href="/gallery" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] transition hover:gap-3">
            See moments from our events <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80" alt="An elegantly set dining table" fill sizes="(max-width: 640px) 45vw, 30vw" className="object-cover" />
          </div>
          <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-lg sm:mt-12">
            <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80" alt="A warmly lit celebration table" fill sizes="(max-width: 640px) 45vw, 30vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="build-menu" className="bg-[#102923] text-[#e5ece8]">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a9c7ba]">Your occasion, your menu</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">Let&apos;s create something delicious.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">Share a few details about your event. We&apos;ll use them to start a conversation about the right menu and service for your guests.</p>
            <p className="mt-6 flex items-center gap-2 text-xs text-white/60"><ArrowDown size={15} /> Begin with a few event details</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/[0.04] p-5 sm:p-7">
            <label className="grid gap-2 text-sm font-medium">
              What are you planning?
              <select value={eventType} onChange={(event) => setEventType(event.target.value)} className="min-h-12 w-full rounded-md border border-white/20 bg-[#102923] px-3 text-sm text-white outline-none focus:border-[#a9c7ba]">
                {eventOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <fieldset className="mt-6">
              <legend className="text-sm font-medium">How many guests?</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {guestOptions.map((option) => (
                  <button key={option} type="button" aria-pressed={guests === option} onClick={() => setGuests(option)} className={`min-h-11 rounded-md border px-3 text-xs font-medium transition ${guests === option ? "border-[#a9c7ba] bg-[#a9c7ba] text-[#102923]" : "border-white/20 text-white/75 hover:border-white/50"}`}>
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="mt-6 grid gap-2 text-sm font-medium">
              What would you like help with?
              <select value={serviceType} onChange={(event) => setServiceType(event.target.value)} className="min-h-12 w-full rounded-md border border-white/20 bg-[#102923] px-3 text-sm text-white outline-none focus:border-[#a9c7ba]">
                <option>Catering</option>
                <option>Event Planning</option>
                <option>Catering + Event Planning</option>
              </select>
            </label>
            <Link href={bookingHref} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#a9c7ba] px-5 text-sm font-semibold text-[#102923] transition hover:brightness-110">
              Request a custom menu <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}