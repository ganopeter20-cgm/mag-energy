import Link from "next/link";
import Sunburst from "../components/Sunburst";
import Ticker from "../components/Ticker";
import PowerTimeline from "../components/PowerTimeline";
import StatRings from "../components/StatRings";

export const metadata = {
  title: "M.A.G ENERGY — Power Generation & Wholesale Supply, Juba, South Sudan",
};

const TICKER_ITEMS = [
  "18MW+ INSTALLED CAPACITY",
  "6 DISTRIBUTION PARTNERS",
  "97.8% AVERAGE UPTIME",
  "GENERATING IN JUBA SINCE 2015",
  "THERMAL + SOLAR-HYBRID",
];

const FLOW_STEPS = [
  {
    step: "01",
    title: "Generate",
    body: "Thermal and solar-hybrid units produce electricity at our Juba-area generation site, day and night.",
  },
  {
    step: "02",
    title: "Step Up & Transmit",
    body: "Power is stepped up at our substation and sent out along dedicated transmission infrastructure.",
  },
  {
    step: "03",
    title: "Sell Wholesale",
    body: "Local distribution companies purchase capacity under long-term wholesale supply agreements.",
  },
  {
    step: "04",
    title: "Distribute",
    body: "Our partners carry that power the last mile — to homes, markets, and businesses across Juba.",
  },
];

const STATS = [
  { label: "Installed Capacity", value: "18MW+", pct: 0.9 },
  { label: "Distribution Partners", value: "6", pct: 0.6 },
  { label: "Average Uptime", value: "97.8%", pct: 0.978 },
  { label: "Years Operating", value: "9+", pct: 0.7 },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO — split screen, rotating sunburst
          ============================================================ */}
      <section className="relative min-h-screen grid grid-cols-[1.05fr_0.95fr] bg-night text-cream overflow-hidden max-lg:grid-cols-1">
        <div className="relative z-20 flex flex-col justify-center py-40 pl-[clamp(20px,6vw,88px)] pr-pad max-lg:pt-36">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase w-fit">
            <span className="text-sun text-sm">＊</span>
            Independent Power Producer &mdash; Juba, South Sudan
          </div>
          <h1 className="text-[clamp(38px,5.2vw,68px)] leading-tight max-w-xs mt-0">
            Power for Juba.
            <br />
            <em className="italic text-sun">Power for South Sudan.</em>
          </h1>
          <p className="mt-6 max-w-4xl text-[clamp(15.5px,1.4vw,18px)] text-paper-dim">
            M.A.G ENERGY generates electricity and supplies it wholesale to local distribution companies
            &mdash; building steadier, more reliable power for the businesses and households of South
            Sudan&apos;s capital.
          </p>
          <div className="mt-9 flex gap-4 flex-wrap">
            <Link href="/services" className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-transparent bg-sun text-ink hover:-translate-y-0.5 transition-all duration-250">
              Our Generation Capacity <span className="inline-block transition-transform duration-250">&rarr;</span>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-line-dark text-cream hover:border-gold hover:text-gold transition-all duration-250">
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-purple-900 via-night to-night overflow-hidden max-lg:min-h-[340px] max-lg:-order-1" style={{ background: 'radial-gradient(120% 100% at 70% 30%, #2a1f52 0%, var(--night) 70%)' }}>
          <Sunburst />
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />
      {/* TODO: replace ticker figures with M.A.G ENERGY's actual numbers */}

      {/* ============================================================
          ABOUT
          ============================================================ */}
      <section className="bg-cream text-ink py-[120px]" data-reveal>
        <div className="max-w-container mx-auto px-pad grid grid-cols-[0.9fr_1.1fr] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-orange-700 w-fit">
              <span className="text-orange-700 text-sm">＊</span>
              Who we are
            </div>
            <h2 className="text-[clamp(28px,3.4vw,42px)] my-4 leading-tight">An independent generator, built for South Sudan&apos;s grid.</h2>
            <p className="text-base mb-4 text-ink-dim">
              M.A.G ENERGY owns and operates power generation assets in and around Juba. We don&apos;t sell
              to individual households &mdash; we generate electricity at scale and sell it wholesale to
              South Sudan&apos;s local distribution companies, who carry it the rest of the way to homes,
              markets, and industry.
            </p>
            <p className="text-base mb-4 text-ink-dim">
              That focus lets us do one thing well: keep the plant running, keep output predictable, and
              keep the country&apos;s distributors supplied through both the dry and rainy seasons.
            </p>
            <ul className="mt-6 flex flex-col gap-3.5">
              <li className="flex gap-3.5 items-start text-sm"><span className="text-sun font-bold flex-none">→</span>Thermal and solar-hybrid generation assets in the Juba area</li>
              <li className="flex gap-3.5 items-start text-sm"><span className="text-sun font-bold flex-none">→</span>Long-term wholesale supply agreements with local distributors</li>
              <li className="flex gap-3.5 items-start text-sm"><span className="text-sun font-bold flex-none">→</span>Reinvesting in capacity as demand across Juba grows</li>
            </ul>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/about" className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-line-light text-ink hover:border-sun hover:text-orange-700 transition-all duration-250">
                More About M.A.G <span className="inline-block transition-transform duration-250">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-media rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 to-night" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)' }}>
            <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="380" cy="90" r="26" fill="none" stroke="#ff7a3d" strokeWidth="1.4" />
              <g stroke="#ffbe55" strokeWidth="1.2">
                <line x1="380" y1="40" x2="380" y2="26" />
                <line x1="380" y1="140" x2="380" y2="154" />
                <line x1="322" y1="90" x2="308" y2="90" />
                <line x1="438" y1="90" x2="452" y2="90" />
              </g>
              <g stroke="#2fa89c" strokeWidth="1.3" fill="none">
                <rect x="40" y="230" width="120" height="14" transform="skewX(-20)" />
                <line x1="46" y1="230" x2="46" y2="244" transform="skewX(-20)" />
                <line x1="76" y1="230" x2="76" y2="244" transform="skewX(-20)" />
                <line x1="106" y1="230" x2="106" y2="244" transform="skewX(-20)" />
                <line x1="136" y1="230" x2="136" y2="244" transform="skewX(-20)" />
              </g>
              <g stroke="#faf3e6" strokeWidth="1.3" fill="none" opacity="0.85">
                <rect x="210" y="150" width="34" height="150" />
                <rect x="262" y="120" width="34" height="180" />
                <rect x="314" y="170" width="34" height="130" />
                <line x1="200" y1="150" x2="358" y2="150" />
              </g>
            </svg>
            <span className="absolute left-4 bottom-4 font-mono text-xs tracking-widest uppercase text-paper-dim bg-black bg-opacity-60 px-3 py-1.5 rounded-full">
              Generation &mdash; Juba site
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW POWER REACHES YOU — scroll-filled timeline
          ============================================================ */}
      <section className="bg-night text-cream py-[120px]" data-reveal>
        <div className="max-w-container mx-auto px-pad">
          <div className="max-w-xl mx-auto mb-[70px] text-center">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase justify-center w-full">
              <span className="text-gold text-sm">＊</span>
              How the power moves
            </div>
            <h2 className="text-[clamp(30px,3.8vw,48px)] leading-tight mt-4">From our plant to South Sudan&apos;s grid.</h2>
            <p className="mt-4 text-base text-paper-dim">
              M.A.G ENERGY sits at the start of the chain. Every kilowatt we generate is stepped up, sold
              under supply agreement, and carried onward by our distribution partners.
            </p>
          </div>
          <PowerTimeline steps={FLOW_STEPS} />
        </div>
      </section>

      {/* ============================================================
          STATS
          ============================================================ */}
      <section className="bg-night-2 text-cream py-[120px]" data-reveal>
        <div className="max-w-container mx-auto px-pad">
          <div className="max-w-xl mx-auto mb-[70px] text-center">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase justify-center w-full">
              <span className="text-gold text-sm">＊</span>
              At a glance
            </div>
            <h2 className="text-[clamp(30px,3.8vw,48px)] leading-tight mt-4">Where things stand today.</h2>
          </div>
          <StatRings stats={STATS} />
        </div>
        {/* TODO: replace figures with M.A.G ENERGY's actual operating statistics */}
      </section>

      {/* ============================================================
          SERVICES PREVIEW
          ============================================================ */}
      <section className="bg-cream text-ink py-[120px]" data-reveal>
        <div className="max-w-container mx-auto px-pad">
          <div className="max-w-xl mx-auto mb-[70px] text-center">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-orange-700 justify-center w-full">
              <span className="text-orange-700 text-sm">＊</span>
              What we do
            </div>
            <h2 className="text-[clamp(30px,3.8vw,48px)] leading-tight mt-4">Generation, supply, and the infrastructure between.</h2>
          </div>

          <div>
            {[
              { num: "01", title: "Power Generation", desc: "Thermal and solar-hybrid generating units sized to Juba's daily and seasonal demand." },
              { num: "02", title: "Wholesale Supply", desc: "Structured, long-term supply agreements with licensed local distribution companies." },
              { num: "03", title: "Grid Infrastructure", desc: "Substation, step-up transformers, and transmission lines connecting our site to the wider grid." },
              { num: "04", title: "Reliability & Maintenance", desc: "Scheduled maintenance and on-site engineering keep output steady through both seasons." },
            ].map((service, idx) => (
              <div key={idx} className="grid grid-cols-[120px_1fr_280px] gap-10 items-center py-12 border-t border-line-light max-lg:grid-cols-[60px_1fr] last:border-b">
                <span className="font-display text-4xl font-semibold text-sun leading-none">{service.num}</span>
                <div>
                  <h3 className="text-2xl mb-2.5">{service.title}</h3>
                  <p className="text-sm max-w-2xl text-ink-dim">{service.desc}</p>
                </div>
                {idx === 0 && (
                  <div className="aspect-service rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-night max-lg:hidden transition-all duration-400" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 84%, 84% 100%, 0 100%)' }}>
                    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="150" fill="#1f1740" />
                      <circle cx="150" cy="40" r="16" fill="none" stroke="#ff7a3d" strokeWidth="1.4" />
                      <rect x="40" y="60" width="14" height="70" fill="none" stroke="#faf3e6" strokeWidth="1.2" opacity="0.8" />
                      <rect x="64" y="40" width="14" height="90" fill="none" stroke="#faf3e6" strokeWidth="1.2" opacity="0.8" />
                    </svg>
                  </div>
                )}
                {idx === 1 && (
                  <div className="aspect-service rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-night max-lg:hidden transition-all duration-400" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 84%, 84% 100%, 0 100%)' }}>
                    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="150" fill="#1f1740" />
                      <rect x="80" y="55" width="46" height="40" fill="none" stroke="#faf3e6" strokeWidth="1.2" />
                      <line x1="20" y1="75" x2="80" y2="75" stroke="#2fa89c" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="126" y1="75" x2="180" y2="75" stroke="#ff7a3d" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>
                  </div>
                )}
                {idx === 2 && (
                  <div className="aspect-service rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-night max-lg:hidden transition-all duration-400" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 84%, 84% 100%, 0 100%)' }}>
                    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="150" fill="#1f1740" />
                      <path d="M60 130 L75 60 L90 130" fill="none" stroke="#faf3e6" strokeWidth="1.1" />
                      <path d="M120 130 L135 60 L150 130" fill="none" stroke="#faf3e6" strokeWidth="1.1" />
                      <path d="M90 90 C100 78, 110 78, 120 90" fill="none" stroke="#ffbe55" strokeWidth="1" strokeDasharray="2 3" />
                    </svg>
                  </div>
                )}
                {idx === 3 && (
                  <div className="aspect-service rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-night max-lg:hidden transition-all duration-400" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 84%, 84% 100%, 0 100%)' }}>
                    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="150" fill="#1f1740" />
                      <circle cx="100" cy="75" r="34" fill="none" stroke="#faf3e6" strokeWidth="1" opacity="0.5" />
                      <circle
                        cx="100"
                        cy="75"
                        r="34"
                        fill="none"
                        stroke="#ff7a3d"
                        strokeWidth="3"
                        strokeDasharray="213"
                        strokeDashoffset="20"
                        strokeLinecap="round"
                        transform="rotate(-90 100 75)"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-container mx-auto text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-line-light text-ink hover:border-sun hover:text-orange-700 transition-all duration-250">
              See all services <span className="inline-block transition-transform duration-250">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="relative py-28 bg-gradient-to-r from-night to-purple-900 text-cream text-center my-[-40px]" data-reveal style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
        <div className="max-w-container mx-auto px-pad">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-gold justify-center w-full">
            <span className="text-gold text-sm">＊</span>
            Distribution partners
          </div>
          <h2 className="text-[clamp(28px,4vw,50px)] max-w-xs mx-auto mb-5.5 mt-0">Looking for a wholesale power supplier in Juba?</h2>
          <p className="max-w-2xl mx-auto mb-8.5 text-paper-dim text-base">If you distribute electricity in South Sudan and need a dependable generation partner, we&apos;d like to hear from you.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-transparent bg-sun text-ink hover:-translate-y-0.5 transition-all duration-250">
              Talk to Our Team <span className="inline-block transition-transform duration-250">&rarr;</span>
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-line-dark text-cream hover:border-gold hover:text-gold transition-all duration-250">
              Learn About M.A.G
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
