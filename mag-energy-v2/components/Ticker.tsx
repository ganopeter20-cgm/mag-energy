type Props = { items: string[] };

export default function Ticker({ items }: Props): JSX.Element {
  return (
    <div className="relative w-full bg-night py-6 overflow-hidden">
      <div className="flex gap-8 whitespace-nowrap animate-none" style={{ animationName: 'ticker', animationDuration: '40s', animationIterationCount: 'infinite', animationTimingFunction: 'linear' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-cream text-sm font-mono flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

