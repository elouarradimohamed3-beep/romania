import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, volume, website } = body ?? {};

    // Honeypot: bots fill hidden "website" field. Silently accept, do nothing.
    if (website) return NextResponse.json({ ok: true });
    if (!name || !email) return NextResponse.json({ error: "Câmpuri lipsă." }, { status: 400 });

    await sendEmail(
      "Cerere reseller nouă",
      `<h2>Cerere de parteneriat reseller</h2>
       <p><b>Nume:</b> ${String(name)}</p>
       <p><b>Email:</b> ${String(email)}</p>
       <p><b>Telefon:</b> ${String(phone || "-")}</p>
       <p><b>Volum estimat:</b> ${String(volume || "-")}</p>`,
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}
