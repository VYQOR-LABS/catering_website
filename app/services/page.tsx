import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="w-full bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
        <SectionReveal className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Catering &amp; Event Services</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Services Made for Every Occasion</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">Explore our catering options and request a tailored menu and event plan.</p>
        </SectionReveal>

        <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <SectionReveal key={service.id} className="group min-w-0 overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)] transition hover:-translate-y-1 hover:border-[var(--brand-accent)]">
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{service.eyebrow}</p>
                <h2 className="mb-3 text-2xl font-semibold">{service.title}</h2>
                <p className="mb-5 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
                <ul className="mb-6 grid gap-2 border-t border-[var(--line)] pt-4 text-sm text-[var(--foreground)]">
                  {service.includes.map((item) => <li key={item} className="flex items-start gap-2"><span className="text-[var(--gold)]">•</span>{item}</li>)}
                </ul>
                <Link href={`/book?service=${encodeURIComponent(service.title)}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-[var(--brand-on-dark)] transition hover:brightness-110">
                  Request Catering <ArrowRight size={16} />
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
