import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { sendEmail } from "@/lib/email";
import { generateCredentials } from "@/lib/credentials";

// Stripe sends events here after payment. Configure the endpoint + signing secret
// in the Stripe dashboard, and set STRIPE_WEBHOOK_SECRET.
export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: "Webhook neconfigurat." }, { status: 400 });
  }

  const sig = request.headers.get("stripe-signature");
  const raw = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig ?? "", secret);
  } catch {
    return NextResponse.json({ error: "Semnătură invalidă." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as {
      customer_details?: { email?: string | null };
      metadata?: Record<string, string> | null;
    };
    const email = session.customer_details?.email ?? "";
    const meta = session.metadata ?? {};

    if (email) {
      const cred = generateCredentials(email);
      await sendEmail(
        "Datele tale de acces Romanian IPTV",
        `<h2>Bine ai venit la Romanian IPTV!</h2>
         <p>Abonament: <b>${meta.duration ?? ""}</b> · ${meta.devices ?? "1"} dispozitiv(e)</p>
         <p><b>Utilizator:</b> ${cred.username}<br/>
            <b>Parolă:</b> ${cred.password}<br/>
            <b>Portal:</b> ${cred.portal}</p>
         <p>Ai nevoie de ajutor la configurare? Scrie-ne pe WhatsApp.</p>`,
      );
    }
  }

  return NextResponse.json({ received: true });
}
