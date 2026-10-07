"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const serviceOptions = [
  "Catering",
  "Event Planning",
  "Catering + Event Planning",
];

const eventOptions = [
  "Wedding",
  "Birthday",
  "Corporate Meeting",
  "Graduation",
  "Private Dinner",
  "Conference",
  "Party",
  "Private Event",
  "Outdoor Event",
  "Home Event",
  "Product Launch",
  "Company Event",
  "Other",
];

const budgetOptions = [
  "KES 20,000 - 50,000",
  "KES 50,000 - 100,000",
  "KES 100,000 - 150,000",
  "KES 150,000 - 250,000",
  "KES 250,000+",
  "Not sure yet",
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  serviceType: "Catering",
  eventType: "Wedding",
  eventDate: "",
  guests: "",
  location: "",
  budget: "",
  preferredMenu: "",
  additionalServices: "",
  specialRequirements: "",
  message: "",
  honeypot: "",
};

const fieldClass = "w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--brand-accent)]";
const fieldLabelClass = "mb-2 block text-sm font-medium text-[var(--foreground)]";

export function BookingForm() {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service") ?? "";
  const queryEvent = searchParams.get("event") ?? "";
  const queryGuests = searchParams.get("guests") ?? "";
  const queryMenu = searchParams.get("menu") ?? "";

  const initialEventType = useMemo(() => {
    const value = queryService ? queryService.toLowerCase() : "";
    if (value.includes("wedding")) return "Wedding";
    if (value.includes("birthday")) return "Birthday";
    if (value.includes("corporate")) return "Corporate Meeting";
    if (value.includes("private")) return "Private Event";
    if (value.includes("outdoor")) return "Outdoor Event";
    if (value.includes("home")) return "Home Event";
    if (value.includes("launch")) return "Product Launch";
    if (value.includes("company")) return "Company Event";
    return "Wedding";
  }, [queryService]);

  const [formData, setFormData] = useState({
    ...initialState,
    serviceType: serviceOptions.includes(queryService) ? queryService : initialState.serviceType,
    eventType: queryEvent || initialEventType,
    guests: queryGuests,
    preferredMenu: queryMenu,
  });
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof initialState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const nextStep = () => setStep((current) => Math.min(current + 1, 4));
  const previousStep = () => setStep((current) => Math.max(current - 1, 1));

  const validateStep = () => {
    if (step === 1) {
      return !!formData.name && !!formData.phone && !!formData.email;
    }

    if (step === 2) {
      return !!formData.serviceType && !!formData.eventType && !!formData.eventDate && !!formData.guests && !!formData.location;
    }

    return true;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!validateStep()) {
      setStatus("error");
      setFeedback("Please complete all required fields before sending your request.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setFeedback("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your request right now.");
      }

      setStatus("success");
      setFeedback("Your enquiry has been sent successfully.");
      setStep(4);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "We couldn't send your request. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    if (status === "success") {
      return (
        <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)] p-6 text-center text-[var(--foreground)] shadow-[0_20px_80px_var(--shadow)] sm:p-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-accent)] text-[var(--brand-on-dark)]">
            <CheckCircle2 size={30} />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Thank you</p>
          <h3 className="mb-3 text-3xl font-semibold">Your enquiry is on its way.</h3>
          <p className="mx-auto max-w-lg text-base leading-7 text-[var(--muted)]">
            The Buzzit team will review your request and get back to you shortly. In the meantime,
            feel free to call or WhatsApp us directly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-full bg-[var(--brand-accent)] px-5 py-3 font-medium text-[var(--brand-on-dark)]">
              Return Home
            </Link>
            <a
              href="https://wa.me/254741520272?text=Hello%20Buzzit%20Event%20%26%20Catering%2C%20I%20would%20like%20to%20enquire%20about%20booking%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[var(--brand-accent)] px-5 py-3 font-medium text-[var(--brand-accent)]"
            >
              <MessageCircle size={18} />
              WhatsApp Buzzit
            </a>
          </div>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-3">
            <label className="block md:col-span-1">
              <span className={fieldLabelClass}>Full Name *</span>
              <input
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={fieldClass}
                placeholder="Your full name"
              />
            </label>
            <label className="block md:col-span-1">
              <span className={fieldLabelClass}>Phone Number *</span>
              <input
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className={fieldClass}
                placeholder="0712345678"
              />
            </label>
            <label className="block md:col-span-1">
              <span className={fieldLabelClass}>Email Address *</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </label>
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className={fieldLabelClass}>Service Type *</span>
              <select
                value={formData.serviceType}
                onChange={(event) => updateField("serviceType", event.target.value)}
                className={fieldClass}
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={fieldLabelClass}>Event Type *</span>
              <select
                value={formData.eventType}
                onChange={(event) => updateField("eventType", event.target.value)}
                className={fieldClass}
              >
                {eventOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={fieldLabelClass}>Event Date *</span>
              <input
                type="date"
                value={formData.eventDate}
                onChange={(event) => updateField("eventDate", event.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className={fieldLabelClass}>Expected Number of Guests *</span>
              <input
                value={formData.guests}
                onChange={(event) => updateField("guests", event.target.value)}
                className={fieldClass}
                placeholder="150"
              />
            </label>
            <label className="block md:col-span-2">
              <span className={fieldLabelClass}>Location *</span>
              <input
                value={formData.location}
                onChange={(event) => updateField("location", event.target.value)}
                className={fieldClass}
                placeholder="Mombasa, Nairobi, or venue name"
              />
            </label>
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className={fieldLabelClass}>Budget Range</span>
              <select
                value={formData.budget}
                onChange={(event) => updateField("budget", event.target.value)}
                className={fieldClass}
              >
                <option value="">Select budget</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={fieldLabelClass}>Preferred Menu</span>
              <input
                value={formData.preferredMenu}
                onChange={(event) => updateField("preferredMenu", event.target.value)}
                className={fieldClass}
                placeholder="Signature menu, buffet, finger food etc."
              />
            </label>
            <label className="block md:col-span-2">
              <span className={fieldLabelClass}>Additional Services</span>
              <input
                value={formData.additionalServices}
                onChange={(event) => updateField("additionalServices", event.target.value)}
                className={fieldClass}
                placeholder="Staffing, décor, rentals, coordination"
              />
            </label>
            <label className="block md:col-span-2">
              <span className={fieldLabelClass}>Special Requirements</span>
              <input
                value={formData.specialRequirements}
                onChange={(event) => updateField("specialRequirements", event.target.value)}
                className={fieldClass}
                placeholder="Vegetarian, dietary requirements, theme, venue constraints"
              />
            </label>
            <label className="block md:col-span-2">
              <span className={fieldLabelClass}>Additional Message</span>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                className={`${fieldClass} min-h-32 resize-y`}
                placeholder="Tell us more about your vision, guest experience, or any key details."
              />
            </label>
          </div>
          <input
            type="hidden"
            name="website"
            value={formData.honeypot}
            onChange={(event) => updateField("honeypot", event.target.value)}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-5xl rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-card)] p-4 shadow-[0_20px_80px_var(--shadow)] sm:p-6 md:p-8">
      <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Booking Request</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Let&apos;s create something special</h2>
        </div>
        <div className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">
          Step {step} of 3
        </div>
      </div>

      {renderStep()}

      {feedback && (
        <div
          className={[
            "mt-6 rounded-2xl border px-4 py-3 text-sm",
            status === "error"
              ? "border-red-400/30 bg-red-500/10 text-red-100"
              : "border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]",
          ].join(" ")}
        >
          {feedback}
        </div>
      )}

      {step < 3 && status !== "success" && (
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={previousStep}
            disabled={step === 1}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={!validateStep()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-[var(--brand-on-dark)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {step === 3 && status !== "success" && (
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={previousStep}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--foreground)]"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-[var(--brand-on-dark)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Booking Request"
            )}
          </button>
        </div>
      )}
    </form>
  );
}
