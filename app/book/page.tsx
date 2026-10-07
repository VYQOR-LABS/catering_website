import { Suspense } from "react";
import { BookingForm } from "@/components/booking-form";

export default function BookPage() {
  return (
    <main className="w-full bg-[var(--background)] px-4 py-14 text-[var(--foreground)] sm:py-20 md:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Book</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Let&apos;s Plan Something Special</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Tell us about your event and our team will get back to you with a tailored proposal.
          </p>
        </div>

        <Suspense fallback={<div className="mx-auto w-full max-w-5xl rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)] p-8 text-center text-[var(--foreground)]">Loading booking form...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </main>
  );
}
