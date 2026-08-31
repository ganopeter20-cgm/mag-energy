const RAYS_OUTER = 16;
const RAYS_INNER = 10;

export default function Sunburst(): JSX.Element {
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes rayPulse { 0%,100% { opacity: 0.25 } 50% { opacity: 0.85 } }
        .burst-slow { animation: spin 60s linear infinite; transform-origin: center; }
        .burst-fast { animation: spin 34s linear infinite reverse; transform-origin: center; }
        .burst-ray { animation: rayPulse 3.6s ease-in-out infinite; }
      `}</style>
      <circle cx="300" cy="300" r="280" fill="none" stroke="rgba(250,243,230,0.08)" strokeWidth="1" />
      <circle cx="300" cy="300" r="220" fill="none" stroke="rgba(250,243,230,0.1)" strokeWidth="1" />

      <g className="burst-slow">
        {Array.from({ length: RAYS_OUTER }).map((_, i) => {
          const angle = (i * 360) / RAYS_OUTER;
          return (
            <line
              key={i}
              x1="300"
              y1="300"
              x2="300"
              y2="60"
              stroke="#ff7a3d"
              strokeWidth="2"
              strokeLinecap="round"
              className="burst-ray"
              opacity="0.5"
              style={{
                transformOrigin: "300px 300px",
                transform: `rotate(${angle}deg)`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          );
        })}
      </g>

      <g className="burst-fast">
        {Array.from({ length: RAYS_INNER }).map((_, i) => {
          const angle = (i * 360) / RAYS_INNER;
          return (
            <line
              key={i}
              x1="300"
              y1="300"
              x2="300"
              y2="140"
              stroke="#ffbe55"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.35"
              style={{ transformOrigin: "300px 300px", transform: `rotate(${angle}deg)` }}
            />
          );
        })}
      </g>

      <circle cx="300" cy="300" r="70" fill="none" stroke="#ff7a3d" strokeWidth="2" />
      <circle cx="300" cy="300" r="50" fill="#ff7a3d" opacity="0.15" />
    </svg>
  );
}
