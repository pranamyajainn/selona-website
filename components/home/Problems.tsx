import { Reveal, WordReveal } from "@/components/Reveal";
import { VisualFrame } from "@/components/home/VisualSystem";
import { problems } from "@/lib/content";

function ProblemFailureVisual() {
  return (
    <VisualFrame className="p-4 md:p-6">
      <div className="relative flex min-h-[520px] flex-col justify-between gap-5 md:min-h-[560px]">
        <div
          aria-hidden="true"
          className="absolute inset-x-10 top-24 h-56 rounded-full border border-dashed border-action/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-20 bottom-16 h-48 rounded-full border border-dashed border-ink/10"
        />

        <div className="relative mx-auto flex w-full max-w-sm flex-col items-center gap-2 rounded-[22px] border border-line bg-white/86 px-5 py-4 text-center shadow-[0_18px_50px_rgba(13,22,48,0.06)]">
          <span className="type-eyebrow text-body-60">Blank prompt surface</span>
          <p className="type-h3 text-ink-deep">Generic AI starts without finance controls.</p>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2">
          {problems.items.map((item, index) => (
            <div
              key={item.name}
              className="group rounded-[18px] border border-line bg-white/82 p-3.5 shadow-[0_12px_34px_rgba(13,22,48,0.04)]"
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint text-xs font-semibold text-action"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-ink-deep">{item.name}</h3>
              <p className="mt-1 text-sm leading-6 text-body-60">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-[18px] border border-action/15 bg-action/10 p-4">
          <p className="text-sm font-medium leading-6 text-ink">
            The issue is not intelligence. It is the missing control structure
            around context, cost, evidence, and repeatability.
          </p>
        </div>
      </div>
    </VisualFrame>
  );
}

export function Problems() {
  return (
    <section id="problem" className="gutter scroll-mt-28 bg-mist/60 py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="flex flex-col gap-4 lg:sticky lg:top-32">
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

        <Reveal delay={160}>
          <ProblemFailureVisual />
        </Reveal>
      </div>
    </section>
  );
}
