import { Reveal, WordReveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 pt-36 pb-14 text-center md:pt-44">
      <Reveal>
        <p className="type-eyebrow text-ink">{eyebrow}</p>
      </Reveal>
      <WordReveal as="h1" text={heading} className="type-display" />
      {sub ? (
        <WordReveal
          as="p"
          text={sub}
          className="type-lead text-body-60"
          startDelay={300}
        />
      ) : null}
    </div>
  );
}
