import { WordReveal } from "@/components/Reveal";
import { site } from "@/lib/content";

// Liminary section 2 analog: oversized statement heading revealed on scroll.
export function Mission() {
  return (
    <section className="gutter py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <WordReveal
          as="h2"
          text={site.mission}
          className="type-statement max-w-5xl"
          onScroll
        />
      </div>
    </section>
  );
}
