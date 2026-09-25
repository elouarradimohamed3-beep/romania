import { NextResponse } from "next/server";

// Renewal reminders. Call this from a scheduled cron (e.g. Vercel Cron) daily.
// Protect it with a shared secret in the CRON_SECRET env var.
//
// This is a scaffold: it needs a customer database to know who to remind.
// Once you store customers (with plan + expiry), query those expiring in ~3 days
// here and send them a reminder via sendEmail().
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // TODO: fetch expiring subscriptions from your DB and email reminders.
  const remindersSent = 0;

  return NextResponse.json({ ok: true, remindersSent });
}
