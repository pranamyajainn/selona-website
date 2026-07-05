import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { contactIntro, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contactIntro.sub,
};

export default function ContactPage() {
  return (
    <>
      <section className="gutter">
        <PageHeader
          eyebrow={contactIntro.eyebrow}
          heading={contactIntro.heading}
          sub={contactIntro.sub}
        />

        <div className="mx-auto grid max-w-5xl gap-8 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="flex flex-col gap-5 rounded-lg border border-line bg-tint/60 p-6 md:p-8">
            <h2 className="type-h3 text-ink-deep">What we will cover</h2>
            <ul className="flex flex-col gap-3 text-body-60">
              <li className="type-body">Your first recurring finance workflow</li>
              <li className="type-body">Context and source-file setup</li>
              <li className="type-body">Output templates and audit trail needs</li>
              <li className="type-body">Approved model and deployment preferences</li>
            </ul>
            <p className="type-body text-body-60">
              For enquiries:{" "}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-[44px] min-w-[44px] items-center align-middle text-action hover:text-sky"
              >
                {site.email}
              </a>
            </p>
          </Reveal>

          <Reveal className="rounded-lg border border-line bg-paper p-6 md:p-8">
            <ContactForm
              submitLabel="Request my walkthrough"
              fields={[
                { name: "name", label: "Name", autoComplete: "name" },
                {
                  name: "email",
                  label: "Work email",
                  type: "email",
                  autoComplete: "email",
                },
                {
                  name: "company",
                  label: "Company",
                  autoComplete: "organization",
                },
                {
                  name: "role",
                  label: "Role",
                  autoComplete: "organization-title",
                },
                {
                  name: "workflow",
                  label: "First workflow you want to automate",
                  textarea: true,
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
      <Faq />
    </>
  );
}
