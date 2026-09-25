import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body ?? {};

    // Honeypot: bots fill the hidden field. Pretend success, do nothing.
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Câmpuri lipsă." }, { status: 400 });
    }

    await sendEmail(
      `Contact nou: ${subject || "fără subiect"}`,
      `<h2>Mesaj nou de pe site</h2>
       <p><b>Nume:</b> ${escapeHtml(name)}</p>
       <p><b>Email:</b> ${escapeHtml(email)}</p>
       <p><b>Subiect:</b> ${escapeHtml(subject || "-")}</p>
       <p><b>Mesaj:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
