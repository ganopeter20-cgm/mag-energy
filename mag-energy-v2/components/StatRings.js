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
    <div className="stat-rings" ref={rowRef}>
      {stats.map((s) => {
        const offset = CIRCUMFERENCE * (1 - s.pct);
        return (
          <div className="stat-ring-item" key={s.label} style={{ "--ring-offset": offset }}>
            <svg viewBox="0 0 128 128">
              <circle className="ring-track" cx="64" cy="64" r="55" />
              <circle
                className="ring-fill"
                cx="64"
                cy="64"
                r="55"
                transform="rotate(-90 64 64)"
              />
              <text className="ring-num" x="64" y="70" textAnchor="middle">
                {s.value}
              </text>
            </svg>
            <div className="stat-ring-label">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}
