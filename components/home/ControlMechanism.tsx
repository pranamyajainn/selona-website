import { Reveal, WordReveal } from "@/components/Reveal";
import { mechanism } from "@/lib/content";

function ListPanel({
  title,
  items,
  tone = "light",
}: {
  title: string;
  items: string[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div
      className={`flex min-h-full flex-col gap-4 rounded-lg border p-5 md:gap-5 md:p-6 ${
        dark
          ? "border-white/15 bg-ink-deep text-white shadow-[0_24px_70px_rgba(13,22,48,0.18)]"
          : "border-line bg-paper"
      }`}
    >
      <h3 className="type-h3">{title}</h3>
      <ul className="grid grid-cols-2 gap-x-4">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-center justify-between gap-3 border-t py-2 text-sm ${
              dark ? "border-white/10 text-white/78" : "border-line text-body-60"
            }`}
          >
              <span>{item}</span>
              <span
                aria-hidden="true"
                className={`hidden ${dark ? "text-sky" : "text-action"} md:inline`}
              >
                →
              </span>
            </li>
          ))}
      </ul>
    </div>
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

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,1fr)] md:items-stretch">
          <Reveal delay={80}>
            <ListPanel title="Controlled inputs" items={mechanism.inputs} />
          </Reveal>

          <Reveal delay={160}>
            <ListPanel
              title="ThinkAIWork control layer"
              items={mechanism.layer}
              tone="dark"
            />
          </Reveal>

          <Reveal delay={240}>
            <ListPanel title="Structured outputs" items={mechanism.outputs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
