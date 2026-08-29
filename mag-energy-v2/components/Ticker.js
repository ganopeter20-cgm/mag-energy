/**
 * Continuous horizontal marquee. Renders `items` twice back-to-back so the
 * CSS keyframe (translateX -50%) loops seamlessly — see .ticker-track in
 * globals.css.
 */
export default function Ticker({ items }) {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
