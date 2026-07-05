import { Reveal, WordReveal } from "@/components/Reveal";
import { betaProof } from "@/lib/content";

export function PrivateBeta() {
  return (
    <section className="gutter py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-lg border border-line bg-paper p-5 shadow-[0_24px_80px_rgba(13,22,48,0.06)] md:gap-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-action">{betaProof.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={betaProof.heading}
            className="type-h2 text-ink-deep"
            onScroll
          />
          <Reveal delay={120}>
            <p className="type-lead max-w-2xl text-body-60">{betaProof.sub}</p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {betaProof.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="rounded-lg border border-line bg-tint/70 p-5"
            >
              <p className="type-display text-ink-deep">{stat.value}</p>
              <p className="type-body text-body-60">{stat.label}</p>
            </Reveal>
          ))}
          <Reveal className="rounded-lg bg-ink-deep p-5 text-white sm:col-span-2 lg:col-span-1">
            <p className="type-body text-white/80">{betaProof.feedback}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
