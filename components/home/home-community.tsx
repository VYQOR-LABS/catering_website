import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { gallery } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";
import { contactLinks } from "@/data/navigation";

export function HomeCommunity() {
  return (
    <>
      <section className="w-full bg-[var(--background)] py-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Testimonials</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">Loved by Our Clients</h2>
          </SectionReveal>
          {testimonials.length ? (
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <SectionReveal key={testimonial.name} className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface-card)] p-7">
                  <div className="mb-4 flex gap-1 text-[var(--gold)]">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg leading-8 text-[var(--foreground)]">“{testimonial.quote}”</p>
                  <div className="mt-6 border-t border-[var(--line)] pt-4">
                    <p className="font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                    <p className="text-sm text-[var(--muted)]">{testimonial.eventType}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-[var(--muted)]">
              Client stories will appear here once Buzzit has approved reviews to share.
            </p>
          )}
        </div>
      </section>

      <section className="w-full bg-[var(--surface-strong)] py-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Follow the buzz</p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">@buzziteventsandcatering</h2>
          </SectionReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.slice(0, 4).map((item) => (
              <SectionReveal key={item.id} className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)]">
                <Image src={item.image} alt={item.title} width={800} height={800} className="h-72 w-full object-cover" />
              </SectionReveal>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://instagram.com/buzziteventsandcatering" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-6 py-3 font-medium text-[var(--brand-on-dark)]">Follow on Instagram</a>
            <a href="https://www.tiktok.com/@buzziteventcatering" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-medium text-[var(--foreground)]">Follow on TikTok</a>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--background)] pb-20 pt-10">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
          <SectionReveal className="overflow-hidden rounded-[2.5rem] border border-[var(--line)] bg-[var(--surface-card)] p-8 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Ready when you are</p>
                <h2 className="mt-4 text-4xl font-semibold text-[var(--foreground)] md:text-5xl">Ready to Make Your Next Event Unforgettable?</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
                  Tell us what you&apos;re planning. We&apos;ll help bring it to life with food, atmosphere and seamless support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="/book" className="rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-6 py-3.5 text-center font-semibold text-[var(--brand-on-dark)]">Book Your Event</a>
                <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3.5 font-semibold text-[var(--foreground)]">
                  <MessageCircle size={18} /> WhatsApp Buzzit
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
