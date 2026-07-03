"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";

// No form backend was supplied, so submit composes a prefilled email to
// info@selona.ai in the visitor's mail client. Swap handleSubmit for an API
// route or form service when one exists.
export function ContactForm({
  fields,
  submitLabel = "Submit",
}: {
  fields: { name: string; label: string; type?: string; textarea?: boolean }[];
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      String(data.get("subject") || data.get("role") || "Website enquiry"),
    );
    const bodyLines = fields.map(
      (f) => `${f.label}: ${String(data.get(f.name) || "")}`,
    );
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {fields.map((f) => (
        <label key={f.name} className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">{f.label}</span>
          {f.textarea ? (
            <textarea
              name={f.name}
              rows={5}
              required
              className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-sky"
            />
          ) : (
            <input
              name={f.name}
              type={f.type ?? "text"}
              required
              className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-sky"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className="mt-2 rounded-full bg-action px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-action-hover"
      >
        {submitLabel}
      </button>
      {sent && (
        <p className="type-body text-body-60">
          Your email client should have opened with the details prefilled. If
          not, write to us directly at {site.email}.
        </p>
      )}
    </form>
  );
}
