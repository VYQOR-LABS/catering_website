import "server-only";

import nodemailer, { type Transporter } from "nodemailer";

export interface EmailMessage {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

export type BookingEmailData = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  eventType: string;
  eventDate: string;
  guests: string;
  location: string;
  budget?: string;
  preferredMenu?: string;
  additionalServices?: string;
  specialRequirements?: string;
  message?: string;
};

export type ContactEmailData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

let transporter: Transporter | undefined;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("Email service is not configured.");
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }

  return transporter;
}

export function getContactInbox() {
  const address = process.env.CONTACT_EMAIL || process.env.SMTP_TO || process.env.SMTP_USER;
  if (!address) throw new Error("Contact inbox is not configured.");
  return address;
}

export async function sendEmail(message: EmailMessage) {
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  if (!from) throw new Error("Email sender is not configured.");

  await getTransporter().sendMail({
    from,
    to: message.to,
    replyTo: message.replyTo,
    subject: message.subject.replace(/[\r\n]+/g, " "),
    text: message.text,
    html: message.html,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDate(value: string) {
  if (!value) return "TBC";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export async function sendBookingEmail(data: BookingEmailData) {
  const fields = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Service", data.serviceType],
    ["Event Type", data.eventType],
    ["Date", formatDate(data.eventDate)],
    ["Guests", data.guests],
    ["Location", data.location],
    ["Budget", data.budget || "Not specified"],
    ["Preferred Menu", data.preferredMenu || "Not specified"],
    ["Additional Services", data.additionalServices || "Not specified"],
    ["Special Requirements", data.specialRequirements || "Not specified"],
    ["Message", data.message || "No extra notes"],
  ] as const;

  await sendEmail({
    to: getContactInbox(),
    replyTo: data.email,
    subject: `New Buzzit Event Booking Request - ${data.eventType}`,
    text: `NEW EVENT ENQUIRY\n\n${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}`,
    html: brandedEmail(
      "New event enquiry",
      "A new booking request has arrived.",
      "Review the event details below and reply directly to the customer.",
      detailRows(fields),
    ),
  });
}

export async function sendCustomerConfirmation(data: BookingEmailData) {
  const eventDate = formatDate(data.eventDate);
  const fields = [
    ["Event Type", data.eventType],
    ["Requested Date", eventDate],
    ["Service", data.serviceType],
    ["Guests", data.guests],
    ["Location", data.location],
    ["Preferred Menu", data.preferredMenu || "To be discussed"],
  ] as const;

  await sendEmail({
    to: data.email,
    subject: "We Received Your Buzzit Event Enquiry",
    text: `Thank you for contacting Buzzit Event & Catering. We have received your event enquiry and our team will get back to you shortly.\n\n${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}`,
    html: brandedEmail(
      `Thank you, ${escapeHtml(data.name)}`,
      "We have your event enquiry.",
      "Thank you for thinking of Buzzit Event & Catering. Our team will review your details and get back to you shortly.",
      detailRows(fields),
      `<p style="margin:24px 0 0;color:#526159;font-size:14px;line-height:22px">Need to add something? Reply to this email and we will include it in the conversation.</p>`,
    ),
  });
}

export async function sendContactEmail(data: ContactEmailData) {
  await sendEmail({
    to: getContactInbox(),
    replyTo: data.email,
    subject: `Buzzit Website Enquiry: ${data.subject}`,
    text: `NEW GENERAL ENQUIRY\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
    html: brandedEmail(
      "New website enquiry",
      escapeHtml(data.subject),
      `${escapeHtml(data.name)} · ${escapeHtml(data.phone)} · ${escapeHtml(data.email)}`,
      `<div style="margin-top:22px;padding:18px 20px;background:#f5f7f5;border-radius:8px;color:#26352d;font-size:14px;line-height:23px;white-space:pre-line">${escapeHtml(data.message)}</div>`,
    ),
  });
}

export async function sendContactConfirmation(data: ContactEmailData) {
  await sendEmail({
    to: data.email,
    subject: "We Received Your Message | Buzzit Event & Catering",
    text: `Hello ${data.name},\n\nThank you for reaching out to Buzzit Event & Catering. We have received your message about "${data.subject}" and our team will get back to you shortly.\n\nFor anything time-sensitive, call us on 0741 520 272.\n\nBuzzit Event & Catering\nMombasa, Kenya`,
    html: brandedEmail(
      `Thank you, ${escapeHtml(data.name)}`,
      "Your message is with us.",
      `We have received your message about “${escapeHtml(data.subject)}”. The Buzzit team will get back to you shortly.`,
      `<div style="margin-top:22px;padding:18px 20px;background:#f5f7f5;border-radius:8px;color:#26352d;font-size:14px;line-height:23px;white-space:pre-line">${escapeHtml(data.message)}</div>`,
      `<p style="margin:24px 0 0;color:#526159;font-size:14px;line-height:22px">For anything time-sensitive, call <a href="tel:+254741520272" style="color:#1d594b;font-weight:600;text-decoration:none">0741 520 272</a>.</p>`,
    ),
  });
}

function detailRows(fields: ReadonlyArray<readonly [string, string]>) {
  return `<table role="presentation" style="width:100%;border-collapse:collapse;margin-top:22px">${fields.map(([label, value]) => `<tr><td style="padding:11px 0;border-bottom:1px solid #e4e9e5;color:#68756d;font-size:13px;vertical-align:top;width:40%">${escapeHtml(label)}</td><td style="padding:11px 0;border-bottom:1px solid #e4e9e5;color:#26352d;font-size:13px;font-weight:600;vertical-align:top">${escapeHtml(value)}</td></tr>`).join("")}</table>`;
}

function brandedEmail(eyebrow: string, title: string, intro: string, content: string, afterContent = "") {
  return `<!doctype html><html lang="en"><body style="margin:0;padding:0;background:#f2f4f1;font-family:Arial,Helvetica,sans-serif;color:#26352d"><table role="presentation" style="width:100%;border-collapse:collapse;background:#f2f4f1"><tr><td align="center" style="padding:28px 14px"><table role="presentation" style="width:100%;max-width:620px;border-collapse:collapse;background:#ffffff"><tr><td style="padding:26px 30px;background:#102923;color:#e5ece8;border-bottom:4px solid #a9c7ba"><div style="font-family:Georgia,serif;font-size:23px;letter-spacing:2px">BUZZIT</div><div style="margin-top:5px;color:#c4d4cb;font-size:10px;letter-spacing:2px;text-transform:uppercase">Event &amp; Catering</div></td></tr><tr><td style="padding:30px 24px 34px"><p style="margin:0 0 10px;color:#1d594b;font-size:10px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase">${eyebrow}</p><h1 style="margin:0;color:#20352c;font-family:Georgia,serif;font-size:29px;font-weight:500;line-height:1.2">${title}</h1><p style="margin:14px 0 0;color:#526159;font-size:15px;line-height:24px">${intro}</p>${content}${afterContent}</td></tr><tr><td style="padding:22px 24px;background:#f5f7f5;color:#526159;font-size:12px;line-height:20px"><strong style="color:#20352c">Buzzit Event &amp; Catering</strong><br />Mombasa, Kenya<br /><a href="tel:+254741520272" style="color:#1d594b;text-decoration:none">0741 520 272</a> &nbsp;·&nbsp; <a href="mailto:hello@buzziteventsandcatering.com" style="color:#1d594b;text-decoration:none">hello@buzziteventsandcatering.com</a></td></tr></table></td></tr></table></body></html>`;
}
