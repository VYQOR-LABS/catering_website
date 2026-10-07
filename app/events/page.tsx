import { SectionReveal } from "@/components/section-reveal";
import { EventBrowser } from "@/components/event-browser";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <main className="w-full bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
        <SectionReveal>
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Events</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Your Event. Our Expertise.</h1>
          </div>
        </SectionReveal>

      <EventBrowser events={events} />
      </div>
    </main>
  );
}
