import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { services } from "@/data/services";
import { gallery } from "@/data/gallery";

const menuGroups = [
  { title: "Main dishes", items: ["Rice", "Chicken", "Beef", "Fish"] },
  { title: "Sides", items: ["Vegetables", "Potatoes", "Salads"] },
  { title: "Desserts", items: ["Cakes", "Pastries", "Fresh fruit"] },
];

const planningSteps = [
  "Tell Us Your Idea",
  "Plan Your Event",
  "Choose Your Catering",
  "Setup & Coordination",
  "Enjoy Your Celebration",
];

const eventTypes = ["Weddings", "Birthdays", "Corporate Events", "Private Parties", "Outdoor Events", "Product Launches", "Home Events"];

export function HomeServices() {
  return (
    <>
      <section className="w-full pb-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Our services</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">Services Made for Every Occasion</h2>
          </SectionReveal>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <SectionReveal key={service.id} className="group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-card)] transition hover:-translate-y-2 hover:border-[var(--gold)]/60">
                <div className="relative overflow-hidden">
                  <Image src={service.image} alt={service.title} width={900} height={700} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,13,11,0.72)] via-[rgba(18,13,11,0.08)] to-transparent" />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{service.eyebrow}</p>
                  <h3 className="mb-3 text-2xl font-semibold text-[var(--foreground)]">{service.title}</h3>
                  <p className="mb-5 text-base leading-7 text-[var(--muted)]">{service.description}</p>
                  <div className="mb-6 border-t border-[var(--line)] pt-4">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Typical inclusions</p>
                    <ul className="grid gap-2 text-sm text-[var(--foreground)]">
                      {service.includes.map((item) => <li key={item} className="flex items-start gap-2"><span className="text-[var(--gold)]">•</span>{item}</li>)}
                    </ul>
                  </div>
                  <Link href="/book" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--gold)]">
                    Request Catering <ArrowRight size={16} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--background)] py-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">A taste of the menu</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">Made for Your Table</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">Choose a direction, then we&apos;ll shape the menu around your guests, event and budget.</p>
          </SectionReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {menuGroups.map((group) => (
              <SectionReveal key={group.title} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-card)] p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{group.title}</h3>
                <ul className="mt-5 grid gap-3 text-[var(--muted)]">
                  {group.items.map((item) => <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />{item}</li>)}
                </ul>
              </SectionReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/book?service=Custom%20Menu" className="inline-flex rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-on-dark)]">Request a Custom Menu</Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--surface-strong)] py-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Food showcase</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">Food Worth Gathering For</h2>
          </SectionReveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:260px]">
            {gallery.map((item, index) => (
              <SectionReveal key={item.id} className={[
                "group relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-card)]",
                index % 3 === 0 ? "md:row-span-2" : "",
              ].join(" ")}>
                <Image src={item.image} alt={item.title} width={900} height={1100} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,8,8,0.68)] via-[rgba(9,8,8,0.12)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold-soft)]">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/90">View Gallery</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Planning process</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">Your Event. Our Expertise.</h2>
          </SectionReveal>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {planningSteps.map((step, index) => (
              <SectionReveal key={step} delay={index * 0.08} className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-card)] p-6 text-center">
                <div className="mb-4 text-4xl font-semibold text-[var(--gold)]">0{index + 1}</div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{step}</h3>
              </SectionReveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {eventTypes.map((eventType) => (
              <Link key={eventType} href={`/book?service=${encodeURIComponent(eventType)}`} className="rounded-full border border-[var(--line)] bg-[var(--surface-card)] px-4 py-2.5 text-sm text-[var(--foreground)] transition hover:border-[var(--brand-accent)] hover:text-[var(--gold)]">
                Plan a {eventType.replace(/s$/, "")}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
