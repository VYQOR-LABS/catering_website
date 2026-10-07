import Link from "next/link";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { contactLinks } from "@/data/navigation";

export function FloatingContact() {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 hidden flex-col gap-3 md:flex md:bottom-6 md:right-6">
        <Link href={contactLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Buzzit" className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--brand-accent)] bg-[var(--surface)] text-[var(--brand-accent)] shadow-lg shadow-[var(--shadow)] transition hover:scale-105">
          <MessageCircle size={18} />
        </Link>
        <Link href="tel:+254741520272" aria-label="Call Buzzit" className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-accent)] text-white shadow-lg shadow-[var(--shadow)] transition hover:scale-105">
          <Phone size={18} />
        </Link>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[var(--line)] bg-[var(--surface)]/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_var(--shadow)] backdrop-blur md:hidden">
        <Link href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-3 text-sm font-semibold text-white">
          <MessageCircle size={17} /> WhatsApp
        </Link>
        <Link href="/book" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-3 text-sm font-semibold text-white">
          <CalendarDays size={17} /> Book an Event
        </Link>
      </div>
    </>
  );
}
