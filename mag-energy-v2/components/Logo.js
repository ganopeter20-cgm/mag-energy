export default function Logo() {
  return (
    <svg className="w-8 h-8 flex-none" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="15" cy="15" r="6" fill="none" stroke="#ff7a3d" strokeWidth="1.6" />
      <g stroke="#ffbe55" strokeWidth="1.4" strokeLinecap="round">
        <line x1="15" y1="2" x2="15" y2="6" />
        <line x1="15" y1="24" x2="15" y2="28" />
        <line x1="2" y1="15" x2="6" y2="15" />
        <line x1="24" y1="15" x2="28" y2="15" />
        <line x1="5.5" y1="5.5" x2="8.2" y2="8.2" />
        <line x1="21.8" y1="21.8" x2="24.5" y2="24.5" />
        <line x1="24.5" y1="5.5" x2="21.8" y2="8.2" />
        <line x1="8.2" y1="21.8" x2="5.5" y2="24.5" />
      </g>
    </svg>
  );
}
