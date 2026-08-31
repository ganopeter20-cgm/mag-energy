type Props = { items: string[] };

export default function Ticker({ items }: Props): JSX.Element {
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
