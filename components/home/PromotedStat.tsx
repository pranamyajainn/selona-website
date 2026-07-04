import Image from "next/image";
import { Reveal, WordReveal } from "@/components/Reveal";

// Standalone full-bleed promoted stat section: oversized bold centered "40%"
// on a grained navy/blue gradient, with "Average efficiency gain" text.
// Placed between Journey and Services.
export function PromotedStat() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep py-24 md:py-36 text-center">
      <Image
        src="/brand/promoted-stat-bg.webp"
        alt="Selona AI business transformation results: 40% average efficiency gain background"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70 mix-blend-screen"
      />
      <div className="gutter relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-4">
        <Reveal>
          <span className="type-stat block text-white">40%</span>
        </Reveal>
        <WordReveal
          as="p"
          text="Average efficiency gain."
          className="type-h3 text-sky font-medium tracking-wide uppercase"
          onScroll
        />
      </div>
    </section>
  );
}
