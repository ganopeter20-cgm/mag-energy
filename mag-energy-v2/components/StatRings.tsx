"use client";

import { useEffect, useRef } from "react";

const CIRCUMFERENCE = 345; // matches CSS stroke-dasharray

type Stat = { label: string; value: string; pct: number };

export default function StatRings({ stats }: { stats: Stat[] }): JSX.Element {
  const rowRef = useRef<HTMLDivElement | null>(null);
useEffect(() => {    const items = rowRef.current ? rowRef.current.querySelectorAll<HTMLElement>(".stat-ring-item") : null;    if (!items || items.length === 0 || typeof window === "undefined" || !("IntersectionObserver" in window)) {      items && items.forEach((el) => el.classList.add("is-visible"));      return;    }    const observer = new IntersectionObserver(      (entries) => {        entries.forEach((entry) => {          if (entry.isIntersecting) {            (entry.target as HTMLElement).classList.add("is-visible");            observer.unobserve(entry.target);          }        });      },      { threshold: 0.4 }    );    items.forEach((el) => observer.observe(el));    return () => observer.disconnect();  }, []);  return (    <div className="stat-rings" ref={rowRef}>      {stats.map((s) => {        const offset = CIRCUMFERENCE * (1 - s.pct);        return (          <div className="stat-ring-item" key={s.label} style={{ ["--ring-offset" as any]: offset } as React.CSSProperties}>            <svg viewBox="0 0 128 128">              <circle className="ring-track" cx="64" cy="64" r="55" />              <circle className="ring-fill" cx="64" cy="64" r="55" transform="rotate(-90 64 64)" />              <text className="ring-num" x="64" y="70" textAnchor="middle">{s.value}</text>            </svg>            <div className="stat-ring-label">{s.label}</div>          </div>        );      })}    </div>  );
}
