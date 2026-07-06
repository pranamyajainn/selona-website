import Image from "next/image";
import { Reveal, WordReveal } from "@/components/Reveal";
import { VisualFrame } from "@/components/home/VisualSystem";
import { financeLayers } from "@/lib/content";

export function FinanceLayers() {
  return (
    <section id="layers" className="gutter scroll-mt-28 bg-mist/60 py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-9 md:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="type-eyebrow text-action">{financeLayers.eyebrow}</p>
            </Reveal>
            <WordReveal
              as="h2"
              text={financeLayers.heading}
              className="type-display text-ink-deep"
              onScroll
            />
            <Reveal delay={120}>
              <p className="type-lead text-body-60">{financeLayers.sub}</p>
            </Reveal>
          </div>

          <Reveal delay={180} className="hidden md:block">
            <VisualFrame className="p-3">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[18px] bg-tint/50">
                <Image
                  src="/product/visual-context-builder.svg"
                  alt="ThinkAIWork context builder product visual"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-contain p-4"
                />
              </div>
            </VisualFrame>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {financeLayers.items.map((layer, i) => (
            <Reveal
              key={layer.name}
              delay={i * 70}
              className="group flex min-h-full flex-col gap-3 overflow-hidden rounded-[22px] border border-line bg-paper p-3.5 shadow-[0_14px_40px_rgba(13,22,48,0.04)] md:p-4"
            >
              <div className="relative aspect-[5/3] overflow-hidden rounded-[16px] border border-line bg-gradient-to-br from-white to-tint/70">
                <div
                  aria-hidden="true"
                  className="absolute left-3 right-3 top-3 z-10 h-1 rounded-full bg-action/18"
                />
                <Image
                  src={layer.visual}
                  alt={`${layer.name} product visual`}
                  fill
                  sizes="(min-width: 1024px) 300px, 45vw"
                  className="object-contain p-4 pt-6"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-1">
                <span className="type-eyebrow text-action">{layer.step}</span>
                <h3 className="type-h3 text-ink-deep">{layer.name}</h3>
                <p className="text-sm leading-6 text-body-60">{layer.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className="overflow-hidden rounded-[22px] bg-ink-deep p-5 text-white shadow-[0_24px_70px_rgba(13,22,48,0.16)] md:col-span-2 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="type-lead max-w-3xl text-white/86">{financeLayers.modelFlex}</p>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {["Claude", "OpenAI", "Local"].map((model) => (
                  <span
                    key={model}
                    className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-sm text-white/78"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
