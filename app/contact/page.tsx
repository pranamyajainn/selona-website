import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions or need any help? We're here to help you with that.",
};

// Built from Selona's own design system; copy migrated from selona.ai/contact.
export default function ContactPage() {
  return (
    <>
      <section className="gutter">
        <PageHeader
          eyebrow="CONTACT"
          heading="Reach Us At Anytime"
          sub="Have questions or need any help? We're here to help you with that"
        />

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
          <ContactForm
            fields={[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "subject", label: "Subject Of Interest" },
              { name: "message", label: "How may we assist you?", textarea: true },
            ]}
          />
        </Reveal>
      </section>
      <Faq />
    </>
  );
}
