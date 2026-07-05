import { credibilityStrip } from "@/lib/content";

export function CredibilityStrip() {
  return (
    <section aria-label="ThinkAIWork credibility" className="gutter bg-paper py-5">
      <div className="mx-auto max-w-6xl border-y border-line py-4">
        <p className="text-center text-sm font-medium leading-6 text-body-60">
          {credibilityStrip.map((item, index) => (
            <span key={item}>
              {index > 0 && (
                <span aria-hidden="true" className="px-2 text-line">
                  ·
                </span>
              )}
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
