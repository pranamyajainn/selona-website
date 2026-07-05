import Image from "next/image";
import { Reveal, WordReveal } from "@/components/Reveal";
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

          <Reveal
            delay={180}
            className="hidden overflow-hidden rounded-lg border border-line bg-paper md:block"
          >
            <div className="relative aspect-[16/11] w-full">
              <Image
                src="/product/visual-context-builder.svg"
                alt="ThinkAIWork context builder product visual"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-contain p-3"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {financeLayers.items.map((layer, i) => (
            <Reveal
              key={layer.name}
              delay={i * 70}
              className="flex flex-col gap-2.5 rounded-lg border border-line bg-paper p-4 md:gap-3 md:p-6"
            >
              <div className="relative mb-3 hidden aspect-[3/2] overflow-hidden rounded-md border border-line bg-tint/50 sm:block">
                <Image
                  src={layer.visual}
                  alt={`${layer.name} product visual`}
                  fill
                  sizes="(min-width: 1024px) 300px, 45vw"
                  className="object-cover"
                />
              </div>
              <span className="type-eyebrow text-action">{layer.step}</span>
              <h3 className="type-h3 text-ink-deep">{layer.name}</h3>
              <p className="type-body text-body-60">{layer.body}</p>
            </Reveal>
          ))}

          <Reveal className="rounded-lg bg-ink-deep p-5 text-white md:col-span-2 md:p-6">
            <p className="type-lead text-white/86">{financeLayers.modelFlex}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
