// Clearly labeled placeholder block for Liminary sections that have no Selona
// content counterpart yet. Listed in the build report; not filled with
// invented Selona claims.
export function Placeholder({
  slot,
  note,
  className = "",
}: {
  slot: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-line bg-tint/60 p-8 text-center ${className}`}
    >
      <p className="type-eyebrow mb-2 text-ink">Placeholder: {slot}</p>
      <p className="type-body text-body-60">{note}</p>
    </div>
  );
}
