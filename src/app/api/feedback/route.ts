import { NextResponse } from "next/server";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(160).optional().or(z.literal("")),
  subject: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

const recipientEmail = "phamminh030801@gmail.com";

export const POST = async (request: Request) => {
  const payload = feedbackSchema.safeParse(await request.json().catch(() => null));

  if (!payload.success) {
    return NextResponse.json({ error: "Invalid feedback payload." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY ?? process.env.resend_api_key;

  if (!apiKey) {
    return NextResponse.json({ error: "Feedback email is not configured." }, { status: 503 });
  }

  const fromEmail = process.env.FEEDBACK_FROM_EMAIL ?? "PhamTienClub <onboarding@resend.dev>";
  const { name, email, subject, message } = payload.data;
  const senderName = name || "Khách ẩn danh";
  const feedbackSubject = subject || "Phản hồi khách hàng";
  const replyTo = email || undefined;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipientEmail,
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject: `[PhamTienClub] ${feedbackSubject}`,
      text: [
        `Name: ${senderName}`,
        `Email: ${email || "Not provided"}`,
        `Subject: ${feedbackSubject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Feedback email could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
};
