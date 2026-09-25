import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, device, website } = body ?? {};
    if (website) return NextResponse.json({ ok: true });
    if (!email) return NextResponse.json({ error: "Email lipsă." }, { status: 400 });

    await sendEmail(
      "Cerere test gratuit (24h)",
      `<h2>Cerere de test gratuit</h2>
       <p><b>Email:</b> ${String(email)}</p>
       <p><b>Dispozitiv:</b> ${String(device || "-")}</p>`,
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}
