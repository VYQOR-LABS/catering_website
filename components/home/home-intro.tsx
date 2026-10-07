import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { contactLinks } from "@/data/navigation";

export function HomeIntro() {
  return (
    <>
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden bg-[#100c08]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Catering and event setup"
          width={2000}
          height={1200}
          priority
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-[#100c08]/50" />

        <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2">
          <div className="rounded-[1.5rem] border border-[var(--brand-highlight)]/60 bg-[var(--brand-header)]/95 px-6 py-3 text-[var(--brand-on-dark)] shadow-[0_12px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black italic tracking-[-0.12em]">BUZZIT</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--brand-highlight)] bg-[var(--brand-highlight)] text-xs font-black text-[var(--brand-header)]">B</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-32 text-center md:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-highlight)]">We cater. We create. We celebrate.</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold text-white md:text-6xl lg:text-7xl">
            Exceptional Food. Unforgettable Events.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/90 md:text-xl">
            From intimate celebrations to weddings, corporate gatherings and large events, Buzzit brings delicious food, thoughtful planning and unforgettable experiences to every occasion.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book" className="rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-on-dark)]">
              Book Your Event
            </Link>
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-highlight)]/70 bg-[var(--brand-header)]/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              <MessageCircle size={16} /> WhatsApp Buzzit
            </a>
          </div>
        </div>
      </section>

      <SectionReveal className="w-full border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto grid w-full gap-3 px-4 py-6 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] md:grid-cols-5 md:px-6 lg:px-10">
          {['Weddings', 'Corporate', 'Birthdays', 'Private Events', 'Outdoor Events'].map((item) => (
            <div key={item} className="py-2">{item}</div>
          ))}
        </div>
      </SectionReveal>

      <section className="w-full py-20">
        <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
          <SectionReveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Made for moments</p>
              <h2 className="max-w-xl text-4xl font-semibold text-[var(--foreground)] md:text-5xl">More Than Catering. We Create Experiences.</h2>
              <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
                Buzzit handles both catering and event planning, blending beautifully presented food with elevated coordination and thoughtful guest experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book" className="rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-5 py-3 font-medium text-[var(--brand-on-dark)]">Tell us about your event</Link>
                <Link href="/about" className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 font-medium text-[var(--foreground)]">Learn about us</Link>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] sm:translate-y-16">
                <Image src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80" alt="Plated food" width={900} height={1200} className="h-[420px] w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)]">
                <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80" alt="Event setup" width={900} height={1200} className="h-[420px] w-full object-cover" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
