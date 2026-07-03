import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Selona collects, uses, and safeguards personal information.",
};

// Selona tokens only, standard legal typography. Policy text migrated
// verbatim from selona.ai/privacy; the contact email there was a template
// leftover (orbai@support.com) and is corrected to Selona's real address.
const sections: { heading: string; paragraphs: string[]; list?: string[] }[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "1.1 Personal Information. We may collect personal information, such as your name, email address, and other contact details when you voluntarily provide it to us, such as when you register for an account, subscribe to newsletters, or contact us through the website.",
      "1.2 Usage Information. We may collect information about your use of the website, including your IP address, browser type, device information, and pages visited. This information helps us analyze trends, administer the site, and improve user experience.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    paragraphs: ["We use the collected information for various purposes, including:"],
    list: [
      "Providing and maintaining the website",
      "Communicating with you about your account and our services",
      "Sending newsletters, promotional materials, and other information you request",
      "Analyzing website usage and improving our services",
    ],
  },
  {
    heading: "3. Sharing Your Information",
    paragraphs: [
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business.",
    ],
  },
  {
    heading: "4. Cookies and Similar Technologies",
    paragraphs: [
      "We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect your ability to use certain features of the site.",
    ],
  },
  {
    heading: "5. Your Choices",
    paragraphs: [
      "You can manage your communication preferences by unsubscribing from newsletters or adjusting your account settings. You may also contact us to update or delete your personal information.",
    ],
  },
  {
    heading: "6. Security",
    paragraphs: [
      "We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "7. Children's Privacy",
    paragraphs: [
      "Our website is not directed to individuals under the age of 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.",
    ],
  },
  {
    heading: "8. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Privacy Policy.",
    ],
  },
  {
    heading: "9. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy, please contact us at info@selona.ai.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="gutter pb-24">
      <div className="mx-auto max-w-2xl pt-36 md:pt-44">
        <h1 className="type-display mb-2">Privacy Policy</h1>
        <p className="type-body mb-10 text-body-60">Last updated on 23 Jan 2024</p>
        <p className="type-body mb-10 text-body-60">
          Welcome to Selona (&quot;we&quot; or &quot;us&quot;). This Privacy
          Policy is designed to help you understand how we collect, use,
          disclose, and safeguard your personal information when you use our
          website and related services.
        </p>
        {sections.map((s) => (
          <div key={s.heading} className="mb-10">
            <h2 className="type-h3 mb-3">{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="type-body mb-3 text-body-60">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="list-disc pl-6">
                {s.list.map((item) => (
                  <li key={item} className="type-body mb-1.5 text-body-60">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
