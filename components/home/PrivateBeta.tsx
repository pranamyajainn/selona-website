import { Reveal, WordReveal } from "@/components/Reveal";
import { betaProof } from "@/lib/content";

export function PrivateBeta() {
  return (
    <section className="gutter py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 overflow-hidden rounded-[26px] border border-line bg-paper p-5 shadow-[0_24px_80px_rgba(13,22,48,0.06)] md:gap-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
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
              className="rounded-[22px] border border-line bg-gradient-to-br from-white to-tint/70 p-5"
            >
              <p className="type-display text-ink-deep">{stat.value}</p>
              <p className="type-body text-body-60">{stat.label}</p>
            </Reveal>
          ))}
          <Reveal className="rounded-[22px] bg-ink-deep p-5 text-white sm:col-span-2 lg:col-span-1">
            <p className="type-eyebrow mb-3 text-sky">Early signal</p>
            <p className="type-body text-white/80">{betaProof.feedback}</p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-6 lg:col-span-2 md:pt-8">
          <Reveal>
            <p className="type-eyebrow text-body-60">
              Early customer testimonials
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {betaProof.testimonials.map((testimonial, i) => (
              <Reveal
                key={testimonial.attribution}
                delay={i * 80}
                className="flex min-h-full flex-col justify-between gap-6 rounded-[22px] border border-line bg-gradient-to-br from-white to-tint/45 p-5 md:p-6"
              >
                <blockquote>
                  <p className="type-h3 italic text-ink-deep">
                    “{testimonial.quote}”
                  </p>
                </blockquote>
                <p className="text-sm font-medium text-body-60">
                  — {testimonial.attribution}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
