import { Resend } from "resend";

/**
 * Sends an email via Resend when RESEND_API_KEY is set.
 * Without a key it logs to the server and returns ok, so forms work in dev.
 */
export async function sendEmail(subject: string, html: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "goldengateiptv@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!key) {
    console.log("[email:dev]", { subject, to, html });
    return { ok: true, delivered: false };
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({ from, to, subject, html });
  if (error) throw new Error(error.message);
  return { ok: true, delivered: true };
}
