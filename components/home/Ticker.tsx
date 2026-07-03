import { toolLogos } from "@/lib/content";

// Liminary ingestion-ticker analog: continuous marquee rows of the AI tools
// Selona works with (list migrated from selona.ai).
function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...toolLogos, ...toolLogos];
  return (
    <div className="overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`ticker-track gap-10 ${reverse ? "is-reverse" : ""}`}>
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="type-h3 whitespace-nowrap text-body-60"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <section aria-label="Tools Selona works with" className="py-20">
      <Row />
      <Row reverse />
    </section>
  );
}
