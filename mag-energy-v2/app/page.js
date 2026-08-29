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
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Independent Power Producer &mdash; Juba, South Sudan</div>
          <h1>
            Power for Juba.
            <br />
            <em>Power for South Sudan.</em>
          </h1>
          <p className="hero-sub">
            M.A.G ENERGY generates electricity and supplies it wholesale to local distribution companies
            &mdash; building steadier, more reliable power for the businesses and households of South
            Sudan&apos;s capital.
          </p>
          <div className="hero-actions">
            <Link href="/services" className="btn btn-primary">
              Our Generation Capacity <span className="btn-arrow">&rarr;</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost-dark">
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Sunburst />
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />
      {/* TODO: replace ticker figures with M.A.G ENERGY's actual numbers */}

      {/* ============================================================
          ABOUT
          ============================================================ */}
      <section className="on-light section-pad" data-reveal>
        <div className="wrap split">
          <div className="split-copy">
            <div className="eyebrow on-light">Who we are</div>
            <h2>An independent generator, built for South Sudan&apos;s grid.</h2>
            <p>
              M.A.G ENERGY owns and operates power generation assets in and around Juba. We don&apos;t sell
              to individual households &mdash; we generate electricity at scale and sell it wholesale to
              South Sudan&apos;s local distribution companies, who carry it the rest of the way to homes,
              markets, and industry.
            </p>
            <p>
              That focus lets us do one thing well: keep the plant running, keep output predictable, and
              keep the country&apos;s distributors supplied through both the dry and rainy seasons.
            </p>
            <ul className="split-list">
              <li>Thermal and solar-hybrid generation assets in the Juba area</li>
              <li>Long-term wholesale supply agreements with local distributors</li>
              <li>Reinvesting in capacity as demand across Juba grows</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: "32px" }}>
              <Link href="/about" className="btn btn-ghost-light">
                More About M.A.G <span className="btn-arrow">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="split-media">
            <div className="media-frame">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
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
              <span className="media-tag">Generation &mdash; Juba site</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW POWER REACHES YOU — scroll-filled timeline
          ============================================================ */}
      <section className="on-dark section-pad" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow on-dark" style={{ justifyContent: "center" }}>
              How the power moves
            </div>
            <h2>From our plant to South Sudan&apos;s grid.</h2>
            <p className="head-note">
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
      <section className="on-panel section-pad" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow on-dark" style={{ justifyContent: "center" }}>
              At a glance
            </div>
            <h2>Where things stand today.</h2>
          </div>
          <StatRings stats={STATS} />
        </div>
        {/* TODO: replace figures with M.A.G ENERGY's actual operating statistics */}
      </section>

      {/* ============================================================
          SERVICES PREVIEW
          ============================================================ */}
      <section className="on-light section-pad" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow on-light" style={{ justifyContent: "center" }}>
              What we do
            </div>
            <h2>Generation, supply, and the infrastructure between.</h2>
          </div>

          <div>
            <div className="service-row">
              <span className="service-num">01</span>
              <div className="service-copy">
                <h3>Power Generation</h3>
                <p>Thermal and solar-hybrid generating units sized to Juba&apos;s daily and seasonal demand.</p>
              </div>
              <div className="service-thumb" aria-hidden="true">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="150" fill="#1f1740" />
                  <circle cx="150" cy="40" r="16" fill="none" stroke="#ff7a3d" strokeWidth="1.4" />
                  <rect x="40" y="60" width="14" height="70" fill="none" stroke="#faf3e6" strokeWidth="1.2" opacity="0.8" />
                  <rect x="64" y="40" width="14" height="90" fill="none" stroke="#faf3e6" strokeWidth="1.2" opacity="0.8" />
                </svg>
              </div>
            </div>
            <div className="service-row">
              <span className="service-num">02</span>
              <div className="service-copy">
                <h3>Wholesale Supply</h3>
                <p>Structured, long-term supply agreements with licensed local distribution companies.</p>
              </div>
              <div className="service-thumb" aria-hidden="true">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="150" fill="#1f1740" />
                  <rect x="80" y="55" width="46" height="40" fill="none" stroke="#faf3e6" strokeWidth="1.2" />
                  <line x1="20" y1="75" x2="80" y2="75" stroke="#2fa89c" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="126" y1="75" x2="180" y2="75" stroke="#ff7a3d" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
            <div className="service-row">
              <span className="service-num">03</span>
              <div className="service-copy">
                <h3>Grid Infrastructure</h3>
                <p>Substation, step-up transformers, and transmission lines connecting our site to the wider grid.</p>
              </div>
              <div className="service-thumb" aria-hidden="true">
                <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="150" fill="#1f1740" />
                  <path d="M60 130 L75 60 L90 130" fill="none" stroke="#faf3e6" strokeWidth="1.1" />
                  <path d="M120 130 L135 60 L150 130" fill="none" stroke="#faf3e6" strokeWidth="1.1" />
                  <path d="M90 90 C100 78, 110 78, 120 90" fill="none" stroke="#ffbe55" strokeWidth="1" strokeDasharray="2 3" />
                </svg>
              </div>
            </div>
            <div className="service-row">
              <span className="service-num">04</span>
              <div className="service-copy">
                <h3>Reliability &amp; Maintenance</h3>
                <p>Scheduled maintenance and on-site engineering keep output steady through both seasons.</p>
              </div>
              <div className="service-thumb" aria-hidden="true">
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
            </div>
          </div>

          <div className="wrap text-center" style={{ marginTop: "48px", paddingLeft: 0, paddingRight: 0 }}>
            <Link href="/services" className="btn btn-ghost-light">
              See all services <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="cta-banner" data-reveal>
        <div className="wrap">
          <div className="eyebrow on-dark text-center" style={{ justifyContent: "center" }}>
            Distribution partners
          </div>
          <h2>Looking for a wholesale power supplier in Juba?</h2>
          <p>If you distribute electricity in South Sudan and need a dependable generation partner, we&apos;d like to hear from you.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Talk to Our Team <span className="btn-arrow">&rarr;</span>
            </Link>
            <Link href="/about" className="btn btn-ghost-dark">
              Learn About M.A.G
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
