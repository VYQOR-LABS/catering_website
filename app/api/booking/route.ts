import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendBookingEmail, sendCustomerConfirmation } from "@/lib/email/client";

const bookingSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(25),
  email: z.string().trim().email(),
  serviceType: z.string().min(2).max(80),
  eventType: z.string().min(2).max(80),
  eventDate: z.string().trim().min(1),
  guests: z.string().trim().min(1).max(50),
  location: z.string().trim().min(2).max(120),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  preferredMenu: z.string().trim().max(200).optional().or(z.literal("")),
  additionalServices: z.string().trim().max(200).optional().or(z.literal("")),
  specialRequirements: z.string().trim().max(300).optional().or(z.literal("")),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
  honeypot: z.string().trim().optional().or(z.literal("")),
});

const rateLimitStore = new Map<string, { count: number; firstRequest: number }>();

function sanitizeValue(value: unknown) {
  if (typeof value !== "string") return "";

  return value.replace(/[<>]/g, "").trim();
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (now - current.firstRequest > 10 * 60 * 1000) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (current.count >= 5) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "local";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a moment before trying again." },
        { status: 429 },
      );
    }

    const rawBody = await request.json().catch(() => ({}));
    const payload = {
      name: sanitizeValue(rawBody.name),
      phone: sanitizeValue(rawBody.phone),
      email: sanitizeValue(rawBody.email),
      serviceType: sanitizeValue(rawBody.serviceType),
      eventType: sanitizeValue(rawBody.eventType),
      eventDate: sanitizeValue(rawBody.eventDate),
      guests: sanitizeValue(rawBody.guests),
      location: sanitizeValue(rawBody.location),
      budget: sanitizeValue(rawBody.budget),
      preferredMenu: sanitizeValue(rawBody.preferredMenu),
      additionalServices: sanitizeValue(rawBody.additionalServices),
      specialRequirements: sanitizeValue(rawBody.specialRequirements),
      message: sanitizeValue(rawBody.message),
      honeypot: sanitizeValue(rawBody.honeypot),
    };

    if (payload.honeypot) {
      return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
    }

    const parsed = bookingSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please complete the required booking details before submitting.",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const bookingData = parsed.data;

    const [bookingResult, confirmationResult] = await Promise.allSettled([
      sendBookingEmail(bookingData),
      sendCustomerConfirmation(bookingData),
    ]);

    if (bookingResult.status === "rejected") throw bookingResult.reason;
    if (confirmationResult.status === "rejected") throw confirmationResult.reason;

    return NextResponse.json({ success: true, message: "Enquiry sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Booking submission failed:", error);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please try again or contact us directly on 0741 520 272." },
      { status: 500 },
    );
  }
}
