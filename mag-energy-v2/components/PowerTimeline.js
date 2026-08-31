"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vertical timeline whose progress line fills as the section scrolls
 * through view, with each step lighting up as the fill passes it.
 * steps: [{ step: "01", title, body }]
 */
export default function PowerTimeline({ steps }) {
  const railRef = useRef(null);
  const [fillPct, setFillPct] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    function onScroll() {
      const el = railRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.55;
      const progress = (viewportAnchor - rect.top) / rect.height;
      const clamped = Math.min(Math.max(progress, 0), 1);
      setFillPct(clamped * 100);
      setActiveIndex(Math.floor(clamped * steps.length));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-6 top-1.5 bottom-1.5 w-0.5 bg-line-dark" ref={railRef}></div>
      <div className="absolute left-6 top-1.5 w-0.5 bg-gradient-to-b from-sun to-gold transition-all" style={{ height: `${fillPct}%` }}></div>
      {steps.map((s, i) => (
        <div key={s.step} className={`relative pb-16 pl-16 ${i <= activeIndex ? "is-active" : ""}`}>
          <div className="absolute left-3 top-0.5 w-5 h-5 rounded-full bg-night border-2 border-line-dark flex items-center justify-center font-mono text-xs text-paper-dim transition-all duration-300" style={i <= activeIndex ? { borderColor: '#ff7a3d', backgroundColor: '#ff7a3d', color: '#1c1526' } : {}}>
            {s.step}
          </div>
          <h3 className="text-xl mb-2.5">{s.title}</h3>
          <p className="text-sm text-paper-dim max-w-sm">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
