import { Reveal, WordReveal } from "@/components/Reveal";
import { workflowProof } from "@/lib/content";

export function WorkflowProof() {
  return (
    <section className="gutter bg-paper py-14 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex max-w-3xl flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-action">{workflowProof.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={workflowProof.heading}
            className="type-h2 text-ink-deep"
            onScroll
          />
          <Reveal delay={120}>
            <p className="type-lead text-body-60">{workflowProof.sub}</p>
          </Reveal>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {workflowProof.steps.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 70}
              className="flex min-h-full flex-col gap-4 rounded-lg border border-line bg-tint/40 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="type-eyebrow text-body-60">{item.step}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="type-h3 text-ink-deep">{item.label}</h3>
                <p className="type-body text-body-60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
