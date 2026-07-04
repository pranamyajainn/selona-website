import { Reveal, WordReveal } from "@/components/Reveal";
import { testimonials, testimonialsHeading } from "@/lib/testimonials";

function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

// New standalone section, structure referenced from liminary.io's own
// testimonials block. Two cards only, no names or photos, just quote + role.
export function Testimonials() {
  return (
    <section className="gutter bg-paper py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <WordReveal
          as="h2"
          text={testimonialsHeading}
          className="type-h2 max-w-2xl"
          onScroll
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.role}
              delay={i * 100}
              className="rounded-[24px] border border-line bg-paper p-8 md:p-10"
            >
              <p className="type-lead">{t.quote}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-tint/60 px-4 py-2">
                <span className="text-ink">
                  <PersonIcon />
                </span>
                <span className="text-sm font-medium text-ink">{t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
