import { Reveal, WordReveal } from "@/components/Reveal";
import { differentiator, features, stats } from "@/lib/content";

export function About() {
  return (
    <section id="about-us" className="gutter scroll-mt-28 bg-mist py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-ink">About us</p>
          </Reveal>
          {/* DRAFT: Pending Rahul's approval (audience per deck Slide 1/3) */}
          <WordReveal
            as="h2"
            text="ThinkAIWork: the AI workspace built for finance teams and fractional CFOs."
            className="type-h2 max-w-2xl"
            onScroll
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.name} delay={i * 100} className="flex flex-col gap-2">
              <h3 className="type-h3">{f.name}</h3>
              <p className="type-body text-body-60">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-2xl border border-line bg-paper p-6 md:p-8">
          <p className="type-lead text-ink">{differentiator}</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-y-10 border-t border-line pt-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="flex flex-col gap-1">
              <p className="type-display text-action">{s.value}</p>
              <p className="type-eyebrow text-body-60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
