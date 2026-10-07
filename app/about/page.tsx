import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarHeart, Sparkles, UtensilsCrossed } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export default function AboutPage() {
  return (
    <main className="w-full bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
        <SectionReveal>
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">About Buzzit</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">More Than Catering. We Create Experiences.</h1>
          </div>
        </SectionReveal>

        <SectionReveal className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] sm:h-[420px] lg:h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
            alt="Buzzit team preparing for an event"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-[var(--foreground)]">
            Buzzit Event & Catering blends premium hospitality, flawless event coordination and flavour-forward cuisine to create celebrations that feel as special as they look.
          </p>
          <p className="text-base leading-8 text-[var(--muted)]">
            Whether it&apos;s a wedding, private celebration, or a large corporate gathering, we bring thoughtful planning, warm service and memorable food experiences that keep guests talking long after the event ends.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/book" className="rounded-full bg-[var(--brand-accent)] px-5 py-3 font-medium text-[var(--brand-on-dark)]">
              Book Your Event
            </Link>
            <Link href="/services" className="rounded-full border border-[var(--line)] bg-[var(--surface-card)] px-5 py-3 font-medium text-[var(--foreground)]">
              Explore Services
            </Link>
          </div>
        </div>
        </SectionReveal>

      <section className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {[
          { icon: UtensilsCrossed, title: "Catering", text: "Menu concept, prep, serving and elegant presentation for every type of event." },
          { icon: CalendarHeart, title: "Event Planning", text: "Structure, flow and aesthetics that feel polished from start to finish." },
          { icon: Sparkles, title: "Moments that Last", text: "We design guest experiences that are warm, joyful and genuinely memorable." },
        ].map(({ icon: Icon, title, text }) => (
          <SectionReveal key={title} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)] p-6 sm:p-7">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-accent)] text-[var(--brand-on-dark)]">
              <Icon size={20} />
            </div>
            <h2 className="mb-3 text-2xl font-semibold text-[var(--foreground)]">{title}</h2>
            <p className="text-base leading-7 text-[var(--muted)]">{text}</p>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal className="mt-16 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 sm:mt-20 sm:p-8 md:p-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Our approach</p>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">Beautiful food. Thoughtful planning. Effortless hosting.</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-[var(--muted)]">
            <p>We believe exceptional events are shaped by the details people notice and remember: the aroma of a well-crafted menu, the ease of guest flow, the warmth of service and the overall feeling that everything was taken care of.</p>
            <p>That is the standard we bring to every gathering.</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-16 flex items-center justify-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-on-dark)]">
          Talk to Buzzit <ArrowRight size={16} />
        </Link>
      </SectionReveal>
      </div>
    </main>
  );
}
