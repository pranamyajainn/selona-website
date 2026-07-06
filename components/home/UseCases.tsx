import { Reveal, WordReveal } from "@/components/Reveal";
import { MiniArtifact } from "@/components/home/VisualSystem";
import { useCases } from "@/lib/content";

const useCaseArtifacts = [
  {
    label: "Board",
    title: "Commentary pack",
    meta: "Template",
    tone: "blue" as const,
  },
  {
    label: "Variance",
    title: "Driver narrative",
    meta: "Source",
    tone: "amber" as const,
  },
  {
    label: "VAT/GST",
    title: "Exception log",
    meta: "Audit",
    tone: "green" as const,
  },
  {
    label: "Update",
    title: "Stakeholder memo",
    meta: "Review",
    tone: "navy" as const,
  },
  {
    label: "Accounts",
    title: "Close summary",
    meta: "Monthly",
    tone: "blue" as const,
  },
  {
    label: "Forecast",
    title: "Scenario notes",
    meta: "Model",
    tone: "amber" as const,
  },
  {
    label: "Evidence",
    title: "Support pack",
    meta: "Linked",
    tone: "green" as const,
  },
  {
    label: "Review",
    title: "CFO operating view",
    meta: "Reusable",
    tone: "navy" as const,
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="gutter scroll-mt-28 py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="flex flex-col gap-4 lg:sticky lg:top-32">
          <Reveal>
            <p className="type-eyebrow text-action">{useCases.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={useCases.heading}
            className="type-display text-ink-deep"
            onScroll
          />
          <Reveal delay={120}>
            <p className="type-lead text-body-60">
              Each workflow becomes a reusable artifact, not a one-off prompt.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.items.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 55}
              className="group flex min-h-full flex-col justify-between gap-4 overflow-hidden rounded-[22px] border border-line bg-paper p-3.5 shadow-[0_14px_40px_rgba(13,22,48,0.04)]"
            >
              <MiniArtifact {...useCaseArtifacts[i]} />
              <div className="flex items-center justify-between gap-3 px-1 pb-1">
                <span className="text-base font-semibold text-ink-deep">{item}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tint text-sm font-semibold text-action"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
