import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Selona handles website, enquiry, and pilot information.",
};

const sections: { heading: string; paragraphs: string[]; list?: string[] }[] = [
  {
    heading: "Information we collect",
    paragraphs: [
      "We collect information you choose to provide when you contact Selona, request a walkthrough, ask for security review materials, or discuss a ThinkAIWork pilot.",
    ],
    list: [
      "Contact details such as name, work email, company, role, and message content.",
      "Workflow information you provide, such as the first finance workflow you want to automate.",
      "Calendar booking details if you use the meeting link on this website.",
      "Technical information normally sent by a browser, such as IP address, device type, browser type, referring page, and pages visited.",
    ],
  },
  {
    heading: "Contact forms and email",
    paragraphs: [
      "The contact form on this website opens a prefilled email to Selona rather than submitting to a hidden form backend. If you send that email, your email provider and our email provider will process the message in the normal course of delivery.",
      "We use contact information to respond to enquiries, arrange walkthroughs, assess pilot fit, and keep a record of business conversations.",
    ],
  },
  {
    heading: "Calendar booking provider",
    paragraphs: [
      "This website links to a HubSpot Meetings booking page. If you use that link, HubSpot may process the information you provide to schedule the meeting and operate the booking flow. HubSpot's own privacy terms apply to that booking experience.",
    ],
  },
  {
    heading: "Website analytics and cookies",
    paragraphs: [
      "At the time this policy was last updated, this website does not include a dedicated analytics script such as Google Analytics, Plausible, PostHog, or Segment.",
      "Hosting, browser, and security infrastructure may still generate basic server logs or technical records. If we add analytics or cookie-based tracking later, we will update this policy to describe it.",
    ],
  },
  {
    heading: "Product and pilot data",
    paragraphs: [
      "During a ThinkAIWork pilot, teams may choose to provide source files, company context, workflow requirements, output templates, and review preferences. The handling of pilot or deployment data is governed by the pilot scope, commercial terms, and security review materials agreed with the customer.",
      "Do not send confidential product or pilot materials through the website contact form unless you are comfortable sending them by email.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: [
      "We use information to respond to enquiries, arrange walkthroughs, evaluate pilot fit, provide requested security or deployment materials, improve the website, and administer business relationships.",
      "We do not sell personal information. We may share information with service providers who help us operate email, scheduling, hosting, and business systems, or where required by law.",
    ],
  },
  {
    heading: "Retention and deletion",
    paragraphs: [
      "We keep enquiry and business-contact information for as long as needed to manage the relationship, respond to the request, maintain business records, or comply with legal obligations.",
      `You can ask us to update, export, or delete personal information by contacting ${site.email}. We may need to retain limited records where required for legal, accounting, security, or legitimate business purposes.`,
    ],
  },
  {
    heading: "UK and EU privacy rights",
    paragraphs: [
      "Where UK GDPR or EU GDPR applies, you may have rights to access, correct, delete, restrict, object to processing, and request portability of your personal data. You may also have the right to complain to your local supervisory authority.",
      "Where we rely on legitimate interests, those interests include responding to business enquiries, operating and improving the website, arranging pilots, and maintaining appropriate business records.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "We take reasonable steps to protect information we handle. No website, email flow, or internet transmission can be guaranteed to be completely secure.",
      "Security review materials for ThinkAIWork pilots or deployments are available during qualified discussions.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy as Selona, ThinkAIWork, or our website operations evolve. The updated date below will show when the policy was last changed.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `For privacy questions, data requests, or deletion requests, contact ${site.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="gutter pb-24">
      <div className="mx-auto max-w-3xl pt-36 md:pt-44">
        <p className="type-eyebrow mb-4 text-action">PRIVACY</p>
        <h1 className="type-display mb-3">Privacy Policy</h1>
        <p className="type-body mb-10 text-body-60">Last updated: July 5, 2026</p>
        <p className="type-lead mb-12 text-body-60">
          This policy explains how Selona handles information collected through
          this website, walkthrough requests, calendar bookings, and
          ThinkAIWork pilot discussions.
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.heading} className="border-t border-line pt-8">
              <h2 className="type-h3 mb-3 text-ink-deep">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="type-body mb-3 text-body-60"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  {section.list.map((item) => (
                    <li key={item} className="type-body text-body-60">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
