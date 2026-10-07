import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { MenuCatalogue } from "@/components/menu-catalogue";

export const metadata = {
  title: "Our Menu | Buzzit Event & Catering",
  description: "Explore menu inspiration for weddings, private celebrations and corporate events with Buzzit Event & Catering.",
};

export default function MenuPage() {
  return (
    <div className="w-full overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-[#102923] text-white sm:min-h-[700px] lg:min-h-[760px]">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
          alt="A beautifully prepared shared meal for a celebration"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover animate-[menu-hero-in_1.4s_ease-out_both]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-14 pt-24 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-3xl animate-[menu-copy-in_0.8s_0.15s_ease-out_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dce8df]">Buzzit Event &amp; Catering · Mombasa, Kenya</p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl">A taste of the menu.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">Food that becomes part of the celebration. Explore ideas for your gathering, then let&apos;s shape a menu around your occasion and guests.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#catalogue" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e5ece8] px-6 text-sm font-semibold text-[#102923] transition hover:bg-white">
                Explore the menu <ArrowDown size={16} />
              </Link>
              <Link href="/book?service=Catering" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/55 px-6 text-sm font-semibold text-white transition hover:bg-white/10">
                Request a custom menu <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MenuCatalogue />
    </div>
  );
}