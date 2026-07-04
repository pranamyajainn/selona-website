import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the ThinkAIWork team for platform demos, support, and custom integrations.",
};

// Built from Selona's own design system; copy migrated from selona.ai/contact.
export default function ContactPage() {
  return (
    <>
      <section className="gutter">
        <PageHeader
          eyebrow="CONTACT"
          heading="Reach Us At Anytime"
          sub="Contact the ThinkAIWork team for platform demos, support, and custom integrations."
        />

        <div className="mx-auto grid max-w-5xl gap-6 pb-10 md:grid-cols-2">
          <Reveal className="flex flex-col gap-2 rounded-2xl border border-line bg-tint/50 p-8">
            <p className="type-body text-body-60">
              Email us directly for support or custom platform questions.
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
              Book a live demo session with a product specialist.
            </p>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="type-h3 text-action hover:text-sky"
            >
              Book a demo
            </a>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-line p-8 md:p-10">
          <ContactForm
            fields={[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "subject", label: "Subject Of Interest" },
              { name: "message", label: "What workflows are you looking to automate?", textarea: true },
            ]}
          />
        </Reveal>
      </section>
      <Faq />
    </>
  );
}
