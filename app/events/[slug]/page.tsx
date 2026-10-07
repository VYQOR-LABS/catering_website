import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((entry) => entry.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="w-full bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
        <div className="relative h-[300px] w-full overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] sm:h-[420px] lg:h-[520px]">
          <Image src={event.image} alt={event.title} fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{event.category}</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">{event.title}</h1>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)] sm:gap-5">
            <span>{new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>•</span>
            <span>{event.location}</span>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{event.description}</p>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Services provided</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {event.services.map((service) => (
                <li key={service} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-card)] p-4 text-[var(--foreground)]">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {event.gallery.map((image) => (
              <div key={image} className="relative h-56 min-w-0 overflow-hidden rounded-[1.5rem] bg-[var(--surface-strong)]">
                <Image src={image} alt={`${event.title} event detail`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Plan a similar event</p>
          <h2 className="mt-4 text-3xl font-semibold">Ready to make it unforgettable?</h2>
          <Link href="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-3 font-medium text-[var(--brand-on-dark)]">
            Plan This Event <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
      </div>
    </main>
  );
}
