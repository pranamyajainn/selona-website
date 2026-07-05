import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Security Review",
  description:
    "How Selona approaches security review and controlled finance AI workflows.",
};

const sections = [
  {
    heading: "Controlled deployments",
    body:
      "ThinkAIWork is introduced through scoped pilots and deployment reviews so teams can confirm workflow boundaries, model preferences, and operating requirements before broader rollout.",
  },
  {
    heading: "Workspace access and roles",
    body:
      "Workspaces are structured around the teams and workflows using them. Role and access requirements are reviewed during pilot setup so finance teams can define who can prepare, run, and review work.",
  },
  {
    heading: "Source-linked outputs",
    body:
      "Outputs are designed to reference the files, context, and workflow inputs used to produce them, helping reviewers trace where conclusions came from.",
  },
  {
    heading: "Context versioning",
    body:
      "Finance context changes over time. ThinkAIWork is designed around versioned context so teams can understand which assumptions, preferences, and source materials were used.",
  },
  {
    heading: "Approval-ready workflows",
    body:
      "Recurring workflows can be shaped around review steps, exceptions, evidence, and approval notes before outputs are used in finance reporting or stakeholder updates.",
  },
  {
    heading: "Model flexibility",
    body:
      "ThinkAIWork is model-agnostic. Teams can review approved model options and routing preferences before deployment, without making public claims about a single model provider.",
  },
  {
    heading: "Security review materials available for pilots",
    body:
      "Security and deployment materials are available during qualified pilot discussions, including information about the intended workflow, data handling, and review requirements.",
  },
  {
    heading: "Enterprise review before deployment",
    body:
      "Enterprise teams can complete security, legal, and procurement review before production deployment. Certification claims are shared only when formally documented.",
  },
];

export default function SecurityPage() {
  return (
    <section className="gutter pb-24">
      <PageHeader
        eyebrow="SECURITY REVIEW"
        heading="Built for controlled finance AI workflows."
        sub="A practical overview of how ThinkAIWork supports reviewable inputs, traceable outputs, and model-flexible deployment discussions."
      />

      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        {sections.map((section, index) => (
          <Reveal
            key={section.heading}
            delay={index * 55}
            className="rounded-lg border border-line bg-paper p-6 md:p-7"
          >
            <h2 className="type-h3 mb-3 text-ink-deep">{section.heading}</h2>
            <p className="type-body text-body-60">{section.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 max-w-3xl rounded-lg bg-mist px-6 py-6 text-center md:px-8">
        <p className="type-body text-body-60">
          For security review materials, contact{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-action hover:text-sky"
          >
            {site.email}
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
