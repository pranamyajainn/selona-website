import { Reveal, WordReveal } from "@/components/Reveal";
import { aboutBullets, stats } from "@/lib/content";

// Liminary section 3 analog (claim + proof): About-us claim with the three
// capability bullets and the four real stats.
export function About() {
  return (
    <section id="about-us" className="gutter scroll-mt-28 bg-mist py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-ink">About us</p>
          </Reveal>
          {/* DRAFT: Pending Rahul's approval */}
          <WordReveal
            as="h2"
            text="ThinkAIWork: The AI Native platform built to automate business analysis."
            className="type-h2 max-w-2xl"
            onScroll
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {aboutBullets.map((b, i) => (
            <Reveal key={b.title} delay={i * 100} className="flex flex-col gap-2">
              <h3 className="type-h3">{b.title}</h3>
              <p className="type-body text-body-60">{b.body}</p>
            </Reveal>
          ))}
        </div>

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
