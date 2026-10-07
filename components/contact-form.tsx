"use client";

import { useState } from "react";

const emptyFields = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [fields, setFields] = useState(emptyFields);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof typeof emptyFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your message right now.");
      setFields(emptyFields);
      setIsSuccess(true);
      setFeedback("Thanks for getting in touch. The Buzzit team will reply soon.");
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "We couldn't send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)]/70 focus:border-[var(--brand-accent)]";
  const labelClass = "grid gap-2 text-sm font-medium text-[var(--foreground)]";

  return (
    <form onSubmit={submit} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)] p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input className={inputClass} name="name" autoComplete="name" required minLength={2} maxLength={80} value={fields.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" />
        </label>
        <label className={labelClass}>
          Email
          <input className={inputClass} name="email" type="email" autoComplete="email" required value={fields.email} onChange={(event) => updateField("email", event.target.value)} placeholder="Email address" />
        </label>
        <label className={labelClass}>
          Phone
          <input className={inputClass} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={25} value={fields.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="Phone number" />
        </label>
        <label className={labelClass}>
          Subject
          <input className={inputClass} name="subject" required minLength={2} maxLength={120} value={fields.subject} onChange={(event) => updateField("subject", event.target.value)} placeholder="How can we help?" />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          Message
          <textarea className={`${inputClass} min-h-36 resize-y`} name="message" required minLength={2} maxLength={1500} value={fields.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Tell us what you have in mind" />
        </label>
        <label className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={(event) => updateField("website", event.target.value)} />
        </label>
      </div>
      {feedback && <p role="status" className={`mt-5 text-sm ${isSuccess ? "text-[var(--brand-accent)]" : "text-red-600 dark:text-red-300"}`}>{feedback}</p>}
      <button type="submit" disabled={isSubmitting} className="mt-6 w-full rounded-full bg-[var(--brand-accent)] px-5 py-3.5 text-sm font-semibold text-[var(--brand-on-dark)] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
