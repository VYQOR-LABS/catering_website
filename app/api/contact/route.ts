import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactConfirmation, sendContactEmail } from "@/lib/email/client";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(25),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(2).max(1500),
  website: z.string().trim().optional().or(z.literal("")),
});

const requests = new Map<string, { count: number; startedAt: number }>();

function sanitize(value: unknown) {
  return typeof value === "string" ? value.replace(/[<>]/g, "").trim() : "";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);
  if (!current || now - current.startedAt > 10 * 60 * 1000) {
    requests.set(ip, { count: 1, startedAt: now });
    return false;
  }
  if (current.count >= 5) return true;
  current.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "local";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many messages. Please wait before trying again." }, { status: 429 });
    }

    const raw = await request.json().catch(() => ({}));
    const payload = {
      name: sanitize(raw.name),
      phone: sanitize(raw.phone),
      email: sanitize(raw.email),
      subject: sanitize(raw.subject),
      message: sanitize(raw.message),
      website: sanitize(raw.website),
    };
    if (payload.website) return NextResponse.json({ success: true }, { status: 200 });

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json({ error: "Please check the required contact details and try again." }, { status: 400 });
    }

    const [inboxResult, confirmationResult] = await Promise.allSettled([
      sendContactEmail(parsed.data),
      sendContactConfirmation(parsed.data),
    ]);
    if (inboxResult.status === "rejected") throw inboxResult.reason;
    if (confirmationResult.status === "rejected") throw confirmationResult.reason;
    return NextResponse.json({ success: true, message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json({ error: "We couldn't send your message. Please try again or contact us directly." }, { status: 500 });
  }
}
