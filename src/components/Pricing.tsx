"use client";

import { useState } from "react";
import { plans, planIncludes, deviceOptions, priceFor } from "@/lib/site";
import { Icon } from "./Icons";
import BuyButton from "./BuyButton";
import Countdown from "./Countdown";

export default function Pricing() {
  const [deviceId, setDeviceId] = useState(deviceOptions[0].id);
  const device = deviceOptions.find((d) => d.id === deviceId) ?? deviceOptions[0];

  return (
    <section id="preturi" className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand">Abonamente</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Alege planul IPTV România <span className="text-accent">🇷🇴</span>
        </h2>
        <p className="mt-3 text-muted">
          Economisește peste 1000 € pe an cu abonamentul nostru premium. Toate planurile include
          garanție de returnare a banilor.
        </p>
        <div className="mt-6 flex justify-center">
          <Countdown />
        </div>

        {/* Device selector */}
        <div className="mt-6 inline-flex flex-wrap justify-center gap-2 rounded-full border border-border bg-surface p-1">
          {deviceOptions.map((d) => (
            <button
              key={d.id}
              onClick={() => setDeviceId(d.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                d.id === deviceId ? "bg-brand text-background" : "text-muted hover:text-foreground"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = priceFor(plan.price, device.multiplier);
          return (
            <div
              key={plan.slug}
              className={`card-hover relative flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-brand bg-surface shadow-[0_0_40px_-12px_rgba(242,201,76,0.4)]"
                  : "border-border bg-surface"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-bold text-background">
                  Cel mai popular
                </span>
              )}

              <div className="text-sm font-semibold uppercase tracking-wide text-muted">
                Abonament VIP
              </div>
              <div className="mt-1 text-lg font-bold">
                {plan.duration} <span className="text-muted">/ {device.label}</span>
              </div>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-extrabold">{price}€</span>
                <span className="mb-2 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
                  {plan.discount}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm">
                {planIncludes.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>

              <BuyButton
                slug={plan.slug}
                devices={device.devices}
                label="Comandă acum"
                waText={`Salut! Vreau abonamentul ${plan.duration} (${device.label}) - ${price}€.`}
                className={`mt-7 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors disabled:opacity-60 ${
                  plan.featured
                    ? "bg-brand text-background hover:bg-brand-strong"
                    : "bg-surface-2 text-foreground hover:bg-border"
                }`}
              />
              <p className="mt-3 text-center text-xs text-muted">PayPal / Card de credit · Cod reducere la checkout</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
