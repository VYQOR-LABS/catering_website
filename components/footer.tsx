import Link from "next/link";
import { Camera, Images, Mail, MapPin, MessageCircle, Music2, PhoneCall } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, contactLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[var(--brand-stroke)] bg-[var(--brand-footer)] text-[var(--brand-on-dark)]">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr] lg:gap-12 lg:px-10">
        <div className="space-y-5">
          <BrandLogo />
          <p className="max-w-xs text-xs leading-6 text-[var(--brand-muted)]">
            Thoughtful celebrations, exceptional food and warm hospitality for every occasion.
          </p>
          <div className="flex gap-2">
            <a href="https://instagram.com/buzziteventsandcatering" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-muted)] transition hover:border-[var(--brand-highlight)] hover:text-[var(--brand-on-dark)]"><Camera size={15} /></a>
            <Link href="/gallery" aria-label="Gallery" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-muted)] transition hover:border-[var(--brand-highlight)] hover:text-[var(--brand-on-dark)]"><Images size={15} /></Link>
            <a href="https://www.tiktok.com/@buzziteventsandcatering" target="_blank" rel="noreferrer" aria-label="TikTok" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-muted)] transition hover:border-[var(--brand-highlight)] hover:text-[var(--brand-on-dark)]"><Music2 size={15} /></a>
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-muted)] transition hover:border-[var(--brand-highlight)] hover:text-[var(--brand-on-dark)]"><MessageCircle size={15} /></a>
            <a href={`mailto:${contactLinks.email}`} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-muted)] transition hover:border-[var(--brand-highlight)] hover:text-[var(--brand-on-dark)]"><Mail size={15} /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-highlight)]">Navigation</h3>
          <ul className="grid gap-3 text-xs text-[var(--brand-muted)]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[var(--brand-on-dark)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-highlight)]">Support</h3>
          <ul className="grid gap-3 text-xs text-[var(--brand-muted)]">
            {[{ label: "Book an Event", href: "/book" }, { label: "Contact Us", href: "/contact" }, { label: "Our Services", href: "/services" }].map((item) => (
              <li key={item.href}><Link href={item.href} className="transition hover:text-[var(--brand-on-dark)]">{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-highlight)]">Contact</h3>
          <ul className="space-y-3 text-xs text-[var(--brand-muted)]">
            <li className="flex items-center gap-2">
              <PhoneCall size={14} className="shrink-0" />
              <a href="tel:+254741520272" className="transition hover:text-[var(--brand-on-dark)]">{contactLinks.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0" />
              <a href={`mailto:${contactLinks.email}`} className="transition hover:text-[var(--brand-on-dark)]">{contactLinks.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0" />
              <span>Mombasa, Kenya</span>
            </li>
          </ul>
          <Link href="/book" className="mt-5 flex w-full justify-center rounded-full bg-[var(--brand-accent)] px-4 py-2.5 text-xs font-medium text-[var(--brand-on-dark)] transition hover:bg-[#246b59]">Plan Your Event</Link>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-4 border-t border-[var(--brand-stroke)] px-4 py-4 pb-[calc(5rem+env(safe-area-inset-bottom))] text-center text-[11px] text-[var(--brand-muted)] sm:flex-row sm:pb-4 sm:text-left md:px-6 lg:px-10">
        <p>© 2026 Buzzit Event &amp; Catering. All rights reserved.</p>
        <ThemeToggle className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-on-dark)] transition hover:border-[var(--brand-highlight)] hover:text-[var(--brand-highlight)]" />
        <p>Powered by <span className="text-[var(--brand-on-dark)]">VYQOR LABS</span></p>
      </div>
    </footer>
  );
}
