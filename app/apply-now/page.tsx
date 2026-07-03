import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { careers, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Apply to join Selona's AI native team.",
};

// Built from Selona's own design system; copy migrated from
// selona.ai/apply-now (its email typo, info@selona.aicom, is corrected).
// The open-roles cards repeat the real listings from the homepage capture.
export default function ApplyNowPage() {
  return (
    <>
      <section className="gutter">
        <PageHeader
          eyebrow="APPLY NOW"
          heading="Apply"
          sub="Have questions or need any help? We're here to help you with that"
        />

        <div className="mx-auto grid max-w-5xl gap-6 pb-10 md:grid-cols-2">
          {careers.map((c, i) => (
            <Reveal
              key={`${c.role}-${c.location}`}
              delay={i * 100}
              className="flex flex-col gap-2 rounded-2xl border border-line bg-tint/50 p-8"
            >
              <p className="type-eyebrow text-ink">Open role: {c.location}</p>
              <h2 className="type-h3">{c.role}</h2>
              <p className="type-body text-body-60">
                Location: {c.location}. Duration: {c.duration}. Start Date:{" "}
                {c.startDate}. Stipend: {c.stipend}.
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 pb-10 md:grid-cols-2">
          <Reveal className="flex flex-col gap-2 rounded-2xl border border-line bg-tint/50 p-8">
            <p className="type-body text-body-60">
              Feel free to email me if you have any questions or need more
              details!
            </p>
            <a
              href={`mailto:${site.email}`}
              className="type-h3 text-action hover:text-sky"
            >
              {site.email}
            </a>
          </Reveal>
          <Reveal
            delay={100}
            className="flex flex-col gap-2 rounded-2xl border border-line bg-tint/50 p-8"
          >
            <p className="type-body text-body-60">
              Feel free to book a call if that&apos;s more convenient and easier
              for you
            </p>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="type-h3 text-action hover:text-sky"
            >
              Book a call
            </a>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-line p-8 md:p-10">
          {/* Resume upload cannot ride a mailto handoff; the form asks for a
              link to the resume instead. Swap to a real upload when a form
              backend exists. */}
          <ContactForm
            fields={[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "role", label: "Job Role" },
              { name: "resume", label: "Link to your Resume" },
            ]}
          />
        </Reveal>
      </section>
      <Faq />
    </>
  );
}
