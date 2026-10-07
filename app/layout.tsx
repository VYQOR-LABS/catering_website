import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buzziteventsandcatering.com"),
  title: "Buzzit Event & Catering | Exceptional Food. Unforgettable Events.",
  description:
    "Buzzit Event & Catering provides catering and event planning services for weddings, birthdays, corporate events, private celebrations and more.",
  openGraph: {
    title: "Buzzit Event & Catering",
    description:
      "Luxury catering and event planning experiences for weddings, private events and corporate occasions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzit Event & Catering",
    description:
      "Luxury catering and event planning experiences for weddings, private events and corporate occasions.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} data-theme="light">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <div className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(226,180,68,0.10),transparent_32%),linear-gradient(180deg,_var(--background)_0%,_var(--surface-strong)_100%)]">
          <Navbar />
          <main className="relative z-10 flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <FloatingContact />
        </div>
      </body>
    </html>
  );
}
