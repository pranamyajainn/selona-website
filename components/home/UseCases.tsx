import { Reveal, WordReveal } from "@/components/Reveal";
import { useCases } from "@/lib/content";

export function UseCases() {
  return (
    <section id="use-cases" className="gutter scroll-mt-28 py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-action">{useCases.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={useCases.heading}
            className="type-display text-ink-deep"
            onScroll
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {useCases.items.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 55}
              className="flex items-center rounded-lg border border-line bg-paper px-5 py-4"
            >
              <span className="type-body font-medium text-ink-deep">{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
