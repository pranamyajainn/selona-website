import { Reveal, WordReveal } from "@/components/Reveal";
import {
  MiniArtifact,
  SystemChip,
  VisualFrame,
} from "@/components/home/VisualSystem";
import { mechanism } from "@/lib/content";

function FlowColumn({
  eyebrow,
  title,
  items,
  direction,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  direction: "in" | "out";
}) {
  return (
    <div className="flex min-h-full flex-col gap-4 rounded-[22px] border border-line bg-white/82 p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="type-eyebrow text-body-60">{eyebrow}</p>
          <h3 className="mt-1 text-xl font-semibold text-ink-deep">{title}</h3>
        </div>
        <span
          aria-hidden="true"
          className="hidden rounded-full bg-tint px-3 py-1 text-sm font-semibold text-action md:inline-flex"
        >
          {direction === "in" ? "Input" : "Output"}
        </span>
      </div>
      <ul className="grid gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-2 text-sm font-medium text-ink"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-action/70"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ControlLayerDiagram() {
  return (
    <VisualFrame className="p-4 md:p-6">
      <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:items-stretch">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[26%] right-[26%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-action/35 to-transparent lg:block"
        />

        <FlowColumn
          eyebrow="Controlled source"
          title="Inputs"
          items={mechanism.inputs}
          direction="in"
        />

        <div className="relative overflow-hidden rounded-[24px] bg-ink-deep p-5 text-white shadow-[0_24px_70px_rgba(13,22,48,0.18)] md:p-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 24% 0%, rgba(110,182,255,0.25), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0))",
            }}
          />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between gap-8">
            <div>
              <p className="type-eyebrow text-sky">ThinkAIWork</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                Control layer
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Context, skills, templates, model rules, and budget logic sit
                between finance data and AI output.
              </p>
            </div>

            <div className="grid gap-2">
              {mechanism.layer.map((item) => (
                <SystemChip key={item} tone="dark">
                  {item}
                </SystemChip>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <MiniArtifact
                label="Version"
                title="Context v2.4 approved"
                meta="Reusable"
                tone="blue"
              />
              <MiniArtifact
                label="Policy"
                title="Board output template locked"
                meta="Auditable"
                tone="green"
              />
            </div>
          </div>
        </div>

        <FlowColumn
          eyebrow="Structured return"
          title="Outputs"
          items={mechanism.outputs}
          direction="out"
        />
      </div>
    </VisualFrame>
  );
}

export function ControlMechanism() {
  return (
    <section id="control-layer" className="gutter scroll-mt-28 py-14 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-9 md:gap-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Reveal>
            <p className="type-eyebrow text-action">{mechanism.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={mechanism.heading}
            className="type-display text-ink-deep"
            onScroll
          />
          <Reveal delay={120}>
            <p className="type-lead text-body-60">{mechanism.sub}</p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <ControlLayerDiagram />
        </Reveal>
      </div>
    </section>
  );
}
