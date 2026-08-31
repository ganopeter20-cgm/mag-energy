/**
 * Continuous horizontal marquee. Renders `items` twice back-to-back so the
 * CSS animation (animate-ticker with translateX -50%) loops seamlessly.
 */
export default function Ticker({ items }) {
  return (
    <div className="bg-sun text-ink overflow-hidden whitespace-nowrap border-t border-b border-opacity-15 border-ink">
      <div className="inline-flex items-center animate-ticker">
        {[...items, ...items].map((item, i) => (
          <span className="inline-flex items-center gap-3.5 py-3.5 font-mono text-xs tracking-widest uppercase" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
