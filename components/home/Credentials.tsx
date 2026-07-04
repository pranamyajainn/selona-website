import Image from "next/image";
import { Reveal, WordReveal } from "@/components/Reveal";
import { projects, sectors } from "@/lib/content";

// Liminary testimonials analog: card wall. Selona's proof is project
// credentials and sector coverage rather than quotes.
export function Credentials() {
  return (
    <section
      id="credentials"
      className="gutter scroll-mt-28 py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-ink">Credentials</p>
          </Reveal>
          {/* DRAFT: Pending Rahul's approval */}
          <WordReveal
            as="h2"
            text="Proven engineering: AI products built by the creators of ThinkAIWork"
            className="type-h2 max-w-2xl"
            onScroll
          />
        </div>

        <Reveal className="flex flex-wrap gap-2">
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-tint/60 px-4 py-2 text-sm font-medium"
            >
              {s}
            </span>
          ))}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className="flex flex-col gap-3 rounded-2xl border border-line p-8"
            >
              <div className="relative mb-2 aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-paper">
                <Image
                  src={p.image}
                  alt={`${p.name} case study screenshot preview`}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <span className="type-eyebrow text-body-60">{p.number}</span>
              <h3 className="type-h3">{p.name}</h3>
              <p className="type-body text-body-60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
