import { Reveal, WordReveal } from "@/components/Reveal";
import { journey } from "@/lib/content";

// Liminary section 4 analog: staged three-step narrative row.
export function Journey() {
  return (
    <section className="gutter py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-ink">Engagement Journey</p>
          </Reveal>
          <WordReveal
            as="h2"
            text="Discover features that simplify workflows & grow your business."
            className="type-h2 max-w-2xl"
            onScroll
          />
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {journey.map((step, i) => (
            <Reveal
              key={step.step}
              as="li"
              delay={i * 100}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-paper p-8"
            >
              <span className="type-eyebrow text-ink">{step.step}</span>
              <h3 className="type-h3">{step.name}</h3>
              <p className="font-medium">{step.title}</p>
              <p className="type-body text-body-60">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
