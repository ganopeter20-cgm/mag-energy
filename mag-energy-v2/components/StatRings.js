"use client";

import { useEffect, useRef } from "react";

const CIRCUMFERENCE = 345; // 2 * PI * r(55), matches .ring-fill stroke-dasharray in CSS

/**
 * Row of circular progress rings that animate in once scrolled into view.
 * stats: [{ label, value: "18MW+", pct: 0.9 }]  (pct is 0–1, how "full" the ring should read)
 */
export default function StatRings({ stats }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const items = rowRef.current ? rowRef.current.querySelectorAll(".stat-ring-item") : [];
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8" ref={rowRef}>
      {stats.map((s) => {
        const offset = CIRCUMFERENCE * (1 - s.pct);
        return (
          <div className="text-center" key={s.label} style={{ "--ring-offset": offset }}>
            <svg viewBox="0 0 128 128" className="w-32 h-32 mx-auto">
              <circle className="fill-none stroke-line-dark stroke-[5]" cx="64" cy="64" r="55" />
              <circle
                className="fill-none stroke-sun stroke-[5] stroke-linecap-round transition-all duration-1400"
                cx="64"
                cy="64"
                r="55"
                transform="rotate(-90 64 64)"
                style={{ strokeDasharray: CIRCUMFERENCE, strokeDashoffset: CIRCUMFERENCE }}
              />
              <text className="font-display text-xl fill-cream" x="64" y="70" textAnchor="middle">
                {s.value}
              </text>
            </svg>
            <div className="mt-3.5 font-mono text-xs tracking-tight uppercase text-paper-dim">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}
