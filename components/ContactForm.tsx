"use client";

import { useId, useState, type FormEvent } from "react";
import { site } from "@/lib/content";

// Submissions are delivered to site.formRecipient via FormSubmit.co's AJAX
// endpoint — no backend or API key required. The first-ever submission sends
// a one-time activation email to that inbox which must be confirmed before
// deliveries start.
export function ContactForm({
  fields,
  submitLabel = "Submit",
}: {
  fields: {
    name: string;
    label: string;
    type?: string;
    textarea?: boolean;
    autoComplete?: string;
  }[];
  submitLabel?: string;
}) {
  const formId = useId();
  const [status, setStatus] = useState<
    "idle" | "invalid" | "sending" | "error" | "success"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setStatus("invalid");
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const subject = data.get("workflow")
      ? "ThinkAIWork walkthrough request"
      : String(
          data.get("subject") ||
            data.get("role") ||
            "ThinkAIWork walkthrough request",
        );

    const payload: Record<string, string> = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
    };
    for (const f of fields) {
      payload[f.label] = String(data.get(f.name) || "");
    }
    const replyTo = data.get("email");
    if (replyTo) payload._replyto = String(replyTo);

    setStatus("sending");
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${site.formRecipient}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-2">
          <label
            htmlFor={`${formId}-${f.name}`}
            className="text-sm font-medium text-ink-deep"
          >
            {f.label}
          </label>
          {f.textarea ? (
            <textarea
              id={`${formId}-${f.name}`}
              name={f.name}
              rows={5}
              required
              aria-invalid={status === "invalid" ? true : undefined}
              className="min-h-[132px] rounded-lg border border-line bg-paper px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-body-60/60 focus:border-action"
            />
          ) : (
            <input
              id={`${formId}-${f.name}`}
              name={f.name}
              type={f.type ?? "text"}
              autoComplete={f.autoComplete}
              required
              aria-invalid={status === "invalid" ? true : undefined}
              className="min-h-[44px] rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-body-60/60 focus:border-action"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 min-h-[44px] rounded-full bg-ink-deep px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(13,22,48,0.12)] transition-colors duration-200 hover:bg-ink disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      {status === "invalid" && (
        <p role="alert" className="type-body text-action">
          Please complete each field with a valid work email before submitting.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="type-body text-action">
          Something went wrong sending your request. Please try again, or write
          to us directly at {site.email}.
        </p>
      )}
      {status === "success" && (
        <p role="status" className="type-body text-body-60">
          Thanks — your request has been received. We will be in touch shortly.
        </p>
      )}
    </form>
  );
}
