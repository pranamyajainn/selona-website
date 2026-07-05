import { Reveal } from "@/components/Reveal";

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
      <Reveal as="h1" delay={80} className="type-display">
        {heading}
      </Reveal>
      {sub ? (
        <Reveal as="p" delay={140} className="type-lead text-body-60">
          {sub}
        </Reveal>
      ) : null}
    </div>
  );
}
