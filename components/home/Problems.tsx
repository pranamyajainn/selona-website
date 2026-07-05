import { Reveal, WordReveal } from "@/components/Reveal";
import { problems } from "@/lib/content";

export function Problems() {
  return (
    <section id="problem" className="gutter scroll-mt-28 bg-mist/60 py-14 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-9 md:gap-12">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-ink">{problems.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={problems.heading}
            className="type-h2 max-w-2xl"
            onScroll
          />
          <Reveal delay={150}>
            <p className="type-lead max-w-2xl text-body-60">{problems.intro}</p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problems.items.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className="flex flex-col gap-2.5 rounded-lg border border-line bg-paper p-4 shadow-[0_18px_50px_rgba(13,22,48,0.04)] md:gap-3 md:p-6"
            >
              <h3 className="type-h3 text-ink-deep">{p.name}</h3>
              <p className="type-body text-body-60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
