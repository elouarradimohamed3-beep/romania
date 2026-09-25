import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { plans, deviceOptions, priceFor } from "@/lib/site";

export async function POST(request: Request) {
  const stripe = getStripe();
  const { slug, devices = 1 } = await request.json().catch(() => ({ slug: "", devices: 1 }));

  const plan = plans.find((p) => p.slug === slug);
  const device = deviceOptions.find((d) => d.devices === Number(devices)) ?? deviceOptions[0];
  if (!plan) {
    return NextResponse.json({ error: "Plan invalid." }, { status: 400 });
  }

  const price = priceFor(plan.price, device.multiplier);

  // No Stripe key configured yet — tell the client to fall back to WhatsApp.
  if (!stripe) {
    return NextResponse.json({ fallback: true });
  }

  const origin =
    request.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://romanianiptv.ro";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      allow_promotion_codes: true, // coupon / discount codes
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: price * 100,
            product_data: {
              name: `Romanian IPTV – Abonament VIP ${plan.duration}`,
              description: `${device.label} · ${plan.duration}`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/anulat`,
      metadata: { plan: plan.slug, devices: String(device.devices), duration: plan.duration },
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Nu am putut porni plata." }, { status: 500 });
  }
}
