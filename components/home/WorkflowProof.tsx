import { Reveal, WordReveal } from "@/components/Reveal";
import {
  MiniArtifact,
  ProductCrop,
  VisualFrame,
} from "@/components/home/VisualSystem";
import { workflowProof } from "@/lib/content";

const workflowVisuals = [
  {
    image: "/product/input-data.webp",
    alt: "ThinkAIWork input data workspace",
    artifact: {
      label: "Source",
      title: "Ledger extract uploaded",
      meta: "Linked",
      tone: "blue" as const,
    },
  },
  {
    image: "/product/build-context.webp",
    alt: "ThinkAIWork company context builder",
    artifact: {
      label: "Context",
      title: "Entity and review rules applied",
      meta: "v2.4",
      tone: "amber" as const,
    },
  },
  {
    image: "/product/skills-plugins.webp",
    alt: "ThinkAIWork reusable finance skill builder",
    artifact: {
      label: "Skill",
      title: "VAT/GST workflow selected",
      meta: "Approved",
      tone: "navy" as const,
    },
  },
  {
    image: "/product/overview-a.webp",
    alt: "ThinkAIWork output workspace overview",
    artifact: {
      label: "Output",
      title: "Exceptions and evidence ready",
      meta: "Audit",
      tone: "green" as const,
    },
  },
];

export function WorkflowProof() {
  return (
    <section id="workflow-proof" className="gutter bg-paper py-14 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <Reveal>
            <p className="type-eyebrow text-action">{workflowProof.eyebrow}</p>
          </Reveal>
          <WordReveal
            as="h2"
            text={workflowProof.heading}
            className="type-h2 text-ink-deep"
            onScroll
          />
          <Reveal delay={120}>
            <p className="type-lead text-body-60">{workflowProof.sub}</p>
          </Reveal>
        </div>

        <VisualFrame className="p-4 md:p-5">
          <div className="relative grid gap-4 md:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-[116px] hidden h-px bg-gradient-to-r from-action/0 via-action/28 to-action/0 md:block"
            />
            {workflowProof.steps.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 70}
                className="relative flex min-h-full flex-col gap-4 rounded-[20px] border border-line bg-white/82 p-3.5 shadow-[0_12px_34px_rgba(13,22,48,0.04)] md:p-4"
              >
                <div className="relative">
                  <ProductCrop
                    src={workflowVisuals[index].image}
                    alt={workflowVisuals[index].alt}
                    className="aspect-[5/3]"
                  />
                  <MiniArtifact
                    {...workflowVisuals[index].artifact}
                    className="absolute bottom-2 left-2 right-2 hidden sm:block"
                  />
                </div>
                <span className="type-eyebrow text-action">{item.step}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="type-h3 text-ink-deep">{item.label}</h3>
                  <p className="text-sm leading-6 text-body-60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </VisualFrame>
      </div>
    </section>
  );
}
