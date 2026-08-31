"use client";

import { useEffect, useRef, useState } from "react";

type Step = { step: string; title: string; body: string };

export default function PowerTimeline({ steps }: { steps: Step[] }): JSX.Element {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [fillPct, setFillPct] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {    function onScroll() {      const el = railRef.current;      if (!el) return;      const rect = el.getBoundingClientRect();      const viewportAnchor = window.innerHeight * 0.55;      const progress = (viewportAnchor - rect.top) / rect.height;      const clamped = Math.min(Math.max(progress, 0), 1);      setFillPct(clamped * 100);      setActiveIndex(Math.floor(clamped * steps.length));    }    onScroll();    window.addEventListener("scroll", onScroll, { passive: true });    window.addEventListener("resize", onScroll);    return () => {      window.removeEventListener("scroll", onScroll);      window.removeEventListener("resize", onScroll);    };  }, [steps.length]);  return (    <div className="power-timeline">      <div className="power-timeline-rail" ref={railRef}></div>      <div className="power-timeline-fill" style={{ height: `${fillPct}%` }}></div>      {steps.map((s, i) => (        <div key={s.step} className={`pt-step${i <= activeIndex ? " is-active" : ""}`}>          <div className="pt-dot">{s.step}</div>          <h3>{s.title}</h3>          <p>{s.body}</p>        </div>      ))}    </div>  );}
