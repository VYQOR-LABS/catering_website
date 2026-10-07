import { GalleryLightbox } from "@/components/gallery-lightbox";
import { SectionReveal } from "@/components/section-reveal";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main className="w-full bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
        <SectionReveal>
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">Gallery</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Food Worth Gathering For</h1>
          </div>
        </SectionReveal>
        <GalleryLightbox items={gallery} />
      </div>
    </main>
  );
}
