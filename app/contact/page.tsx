import Link from "next/link";
import { ArrowRight, Camera, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { ContactForm } from "@/components/contact-form";
import { contactLinks } from "@/data/navigation";

export default function ContactPage() {
  return (
    <main className="w-full bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
        <SectionReveal className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Let&apos;s Plan Something Special</h1>
        </SectionReveal>

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionReveal>
            <p className="text-sm leading-7 text-[var(--muted)]">For a quick answer, reach us directly. For a general question, send a message and we&apos;ll get back to you.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href="tel:+254741520272" className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-card)] p-4 transition hover:border-[var(--brand-accent)]">
                <PhoneCall className="shrink-0 text-[var(--brand-accent)]" size={19} />
                <span className="min-w-0"><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Call Buzzit</span><span className="mt-1 block truncate text-sm font-semibold">{contactLinks.phone}</span></span>
              </a>
              <a href={`mailto:${contactLinks.email}`} className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-card)] p-4 transition hover:border-[var(--brand-accent)]">
                <Mail className="shrink-0 text-[var(--brand-accent)]" size={19} />
                <span className="min-w-0"><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Email</span><span className="mt-1 block truncate text-sm font-semibold">{contactLinks.email}</span></span>
              </a>
              <a href="https://instagram.com/buzziteventsandcatering" target="_blank" rel="noreferrer" className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-card)] p-4 transition hover:border-[var(--brand-accent)]">
                <Camera className="shrink-0 text-[var(--brand-accent)]" size={19} />
                <span><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Instagram</span><span className="mt-1 block text-sm font-semibold">{contactLinks.instagram}</span></span>
              </a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-card)] p-4 transition hover:border-[var(--brand-accent)]">
                <MessageCircle className="shrink-0 text-[var(--brand-accent)]" size={19} />
                <span><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">WhatsApp</span><span className="mt-1 block text-sm font-semibold">Chat with Buzzit</span></span>
              </a>
            </div>
            <div className="mt-5 flex items-start gap-3 text-sm text-[var(--muted)]">
              <MapPin className="mt-0.5 shrink-0 text-[var(--brand-accent)]" size={17} />
              <p>Based in Mombasa. Contact us to discuss your event location.</p>
            </div>
            <Link href="/book" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] hover:underline">
              Make a booking enquiry <ArrowRight size={16} />
            </Link>
          </SectionReveal>

          <SectionReveal className="w-full rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] p-4 sm:p-6">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">General enquiry</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Send us a message</h2>
            </div>
            <ContactForm />
          </SectionReveal>
        </div>
      </div>
    </main>
  );
}
