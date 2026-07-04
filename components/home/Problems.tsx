import { Reveal, WordReveal } from "@/components/Reveal";
import { problems } from "@/lib/content";

// Tension-building problem section (Liminary structural map, section-3 slot):
// the six structural failures of generic AI in finance, names and one-line
// explanations verbatim from the investor deck (Slide 2). Sits between the
// hero and the platform block so the walkthrough reads as the resolution.
export function Problems() {
  return (
    <section className="gutter py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
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
              className="flex flex-col gap-2 rounded-2xl border border-line bg-paper p-6"
            >
              <p className="type-eyebrow text-action">{p.name}</p>
              <h3 className="type-h3">{p.tagline}</h3>
              <p className="type-body text-body-60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
