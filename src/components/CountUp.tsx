"use client";

/* eslint-disable react-hooks/set-state-in-effect -- animation drives state from an effect by design */
import { useEffect, useRef, useState } from "react";

/**
 * Animates a number up when it scrolls into view.
 * `value` like "55.000+", "99,9%", "4K", "24/7" — the numeric part animates,
 * non-numeric suffixes/prefixes are preserved.
 */
export default function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse the first number in the string (supports . and , as thousand sep).
    const match = value.match(/[\d.,]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const numStr = match[0];
    const target = parseInt(numStr.replace(/[.,]/g, ""), 10);
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + numStr.length);
    const useDot = numStr.includes(".");

    const format = (n: number) => {
      const s = Math.round(n).toString();
      return useDot ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : s;
    };

    setDisplay(`${prefix}0${suffix}`);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(`${prefix}${format(target * eased)}${suffix}`);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
