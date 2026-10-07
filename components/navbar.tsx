"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full bg-[var(--brand-header)] text-[var(--brand-on-dark)] transition-all duration-300",
        scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,0.2)]" : "",
      ].join(" ")}
    >
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-2.5 md:px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Buzzit home">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-5 text-[11px] font-medium text-[var(--brand-muted)] lg:flex xl:gap-7">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--brand-on-dark)]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/book"
            className="rounded-full border border-[var(--brand-stroke)] bg-white/5 px-5 py-2.5 text-[11px] font-medium text-[var(--brand-on-dark)] transition hover:border-[var(--brand-highlight)] hover:bg-white/10"
          >
            Plan Your Event
          </Link>

          <ThemeToggle className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-on-dark)] transition hover:border-[var(--brand-highlight)] hover:text-[var(--brand-highlight)]" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-stroke)] text-[var(--brand-on-dark)]" />

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex rounded-full border border-[var(--brand-stroke)] p-2 text-[var(--brand-on-dark)]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--brand-stroke)] bg-[var(--brand-header)] px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-sm text-[var(--brand-muted)]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 transition hover:text-[var(--brand-on-dark)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full border border-[var(--brand-stroke)] bg-[var(--brand-accent)] px-5 py-2.5 text-sm font-medium text-[var(--brand-on-dark)]"
            >
              Plan Your Event
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
