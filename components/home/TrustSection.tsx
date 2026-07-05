import { Reveal, WordReveal } from "@/components/Reveal";
import { trust } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="gutter bg-mist/60 py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-action">{trust.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={trust.heading}
            className="type-display text-ink-deep"
            onScroll
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {trust.items.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 55}
              className="flex items-center gap-3 rounded-lg border border-line bg-paper px-5 py-4"
            >
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tint text-sm font-medium text-action"
              >
                ✓
              </span>
              <span className="type-body text-ink-deep">{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
