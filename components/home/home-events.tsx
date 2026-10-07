import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarRange, ChefHat, Star, Users } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { events } from "@/data/events";

export function HomeEvents() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[var(--surface-strong)] py-20">
        <div className="absolute inset-0">
          <video className="h-full w-full object-cover opacity-25" autoPlay muted loop playsInline>
            <source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[var(--media-overlay)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Behind the scenes</p>
          <h2 className="text-4xl font-semibold text-[var(--media-foreground)] md:text-6xl">See Buzzit in Action</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--media-foreground)]/80 md:text-lg">From thoughtful preparation to a beautifully coordinated celebration, see how the details come together.</p>
          <Link href="/book" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-6 py-3.5 font-semibold uppercase tracking-[0.14em] text-[var(--brand-on-dark)]">
            Plan Your Event <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="w-full bg-[var(--background)] py-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Upcoming</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">What&apos;s Happening Next</h2>
          </SectionReveal>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <SectionReveal key={event.slug} className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-card)]">
                <div className="relative overflow-hidden">
                  <Image src={event.image} alt={event.title} width={900} height={700} className="h-72 w-full object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute left-5 top-5 rounded-full border border-[var(--gold)]/40 bg-[var(--surface)]/90 px-3 py-2 text-center text-[var(--gold)]">
                    <div className="text-lg font-semibold">{new Date(event.date).getDate()}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em]">{new Date(event.date).toLocaleDateString("en-GB", { month: "short" })}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">{event.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">{event.location}</p>
                  <Link href={`/events/${event.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--gold)]">
                    View Event <ArrowRight size={16} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--surface-strong)] py-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Why Buzzit</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">Why Buzzit?</h2>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: ChefHat, title: "Delicious Food", text: "Thoughtfully prepared menus designed around your event." },
              { icon: CalendarRange, title: "Reliable Service", text: "Professional coordination from planning to serving." },
              { icon: Users, title: "Flexible Events", text: "From intimate home gatherings to large celebrations." },
              { icon: Star, title: "Memorable Experiences", text: "We focus on moments guests will remember." },
            ].map(({ icon: Icon, title, text }) => (
              <SectionReveal key={title} className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface-card)] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-accent)] text-[#d9aa2d]"><Icon size={22} /></div>
                <h3 className="mb-3 text-2xl font-semibold text-[var(--foreground)]">{title}</h3>
                <p className="text-base leading-7 text-[var(--muted)]">{text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
