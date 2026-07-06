import { Reveal, WordReveal } from "@/components/Reveal";
import { MiniArtifact, VisualFrame } from "@/components/home/VisualSystem";
import { trust } from "@/lib/content";

function TrustControlVisual() {
  const controls = [
    "Source links",
    "Version history",
    "Access review",
    "Approval trail",
  ];

  return (
    <VisualFrame className="p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
        <div className="flex min-h-[420px] flex-col gap-4 rounded-[22px] border border-line bg-white/82 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="type-eyebrow text-action">Output evidence</p>
              <h3 className="mt-1 text-xl font-semibold text-ink-deep">
                Board commentary
              </h3>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Review ready
            </span>
          </div>

          <div className="grid flex-1 gap-3">
            <MiniArtifact
              label="Source"
              title="Ledger extract line 184 linked"
              meta="Evidence"
              tone="green"
            />
            <MiniArtifact
              label="Template"
              title="Board voice and structure locked"
              meta="v1.8"
              tone="blue"
            />
            <MiniArtifact
              label="Model"
              title="Approved routing policy used"
              meta="Policy"
              tone="navy"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-[22px] bg-ink-deep p-4 text-white">
          <p className="type-eyebrow text-sky">Control state</p>
          <div className="grid gap-3">
            {controls.map((control, index) => (
              <div
                key={control}
                className="flex items-center gap-3 rounded-[16px] border border-white/12 bg-white/10 p-3"
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-sky"
                >
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-white/82">{control}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto rounded-[16px] border border-white/12 bg-white/10 p-4">
            <p className="text-sm leading-6 text-white/72">
              Finance teams can defend how each answer was shaped, which source
              was used, and what approval path it followed.
            </p>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

export function TrustSection() {
  return (
    <section id="trust-control" className="gutter bg-mist/60 py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="flex flex-col gap-6">
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
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {trust.items.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 45}
                className="flex items-center gap-3 rounded-full border border-line bg-paper px-4 py-3"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-action/70"
                />
                <span className="text-sm font-medium text-ink">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={160}>
          <TrustControlVisual />
        </Reveal>
      </div>
    </section>
  );
}
