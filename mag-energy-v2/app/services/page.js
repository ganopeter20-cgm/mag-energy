import Link from "next/link";

export const metadata = {
  title: "Services — M.A.G ENERGY",
  description:
    "Power generation, wholesale supply agreements, grid infrastructure, and maintenance — how M.A.G ENERGY supplies South Sudan's local distributors.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-glow" aria-hidden="true"></div>
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Services
          </div>
          <div className="eyebrow on-dark">What we do</div>
          <h1>Generation, supply, and the grid infrastructure between.</h1>
          <p className="head-sub">
            Everything M.A.G ENERGY does supports one job: getting reliable power from our Juba site into
            the hands of the local distributors who serve South Sudan.
          </p>
        </div>
      </section>

      {/* ============================================================
          SERVICE 01 — GENERATION
          ============================================================ */}
      <section className="on-light section-pad" data-reveal>
        <div className="wrap split">
          <div className="split-copy">
            <span className="eyebrow on-light">01 &middot; Power Generation</span>
            <h2>Thermal and solar-hybrid generation, sized to real demand.</h2>
            <p>
              Our Juba-area site combines thermal generating units with a growing share of solar-hybrid
              capacity. Thermal generation gives us dependable output regardless of weather; solar reduces
              fuel costs and emissions during daylight hours.
            </p>
            <div className="spec-list">
              <div><span>Generation mix</span><span>Thermal (base load) + solar-hybrid</span></div>
              <div><span>Site location</span><span>Juba, Central Equatoria</span></div>
              <div><span>Operating pattern</span><span>Continuous, seasonal dispatch planning</span></div>
            </div>
            {/* TODO: replace with your actual fuel type, engine/turbine models, and solar array size */}
          </div>
          <div className="split-media">
            <div className="media-frame">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#faf3e6" strokeWidth="1.3" fill="none" opacity="0.85">
                  <rect x="90" y="150" width="34" height="150" />
                  <rect x="142" y="120" width="34" height="180" />
                  <rect x="194" y="170" width="34" height="130" />
                  <line x1="80" y1="150" x2="238" y2="150" />
                </g>
                <g stroke="#2fa89c" strokeWidth="1.3" fill="none">
                  <rect x="290" y="250" width="130" height="16" transform="skewX(-20)" />
                  <line x1="296" y1="250" x2="296" y2="266" transform="skewX(-20)" />
                  <line x1="326" y1="250" x2="326" y2="266" transform="skewX(-20)" />
                  <line x1="356" y1="250" x2="356" y2="266" transform="skewX(-20)" />
                </g>
                <circle cx="360" cy="90" r="20" fill="none" stroke="#ff7a3d" strokeWidth="1.2" />
              </svg>
              <span className="media-tag">Generation mix</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE 02 — WHOLESALE SUPPLY
          ============================================================ */}
      <section className="on-panel section-pad" data-reveal>
        <div className="wrap split reverse">
          <div className="split-copy">
            <span className="eyebrow on-dark">02 &middot; Wholesale Supply</span>
            <h2>Long-term agreements with licensed distributors.</h2>
            <p>
              We sell generation capacity wholesale, under structured supply agreements with South
              Sudan&apos;s local distribution companies. Contracts are built around committed volumes and
              predictable pricing, so our partners can plan their own retail supply with confidence.
            </p>
            <div className="spec-list">
              <div><span>Customer type</span><span>Licensed local distribution companies</span></div>
              <div><span>Agreement structure</span><span>Long-term wholesale supply contracts</span></div>
              <div><span>Billing</span><span>Metered delivery at the point of interconnection</span></div>
            </div>
            {/* TODO: replace with your actual contract terms and current distribution partners */}
          </div>
          <div className="split-media">
            <div className="media-frame">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                <rect x="190" y="150" width="100" height="80" fill="none" stroke="#faf3e6" strokeWidth="1.2" />
                <path d="M 60 190 H 190" stroke="rgba(250,243,230,0.3)" strokeWidth="1" />
                <path d="M 290 190 H 420" stroke="rgba(250,243,230,0.3)" strokeWidth="1" />
                <text x="30" y="185" fontFamily="var(--font-mono), monospace" fontSize="10" fill="#c9bfe0">M.A.G</text>
                <text x="392" y="185" fontFamily="var(--font-mono), monospace" fontSize="10" fill="#c9bfe0">DIST.</text>
              </svg>
              <span className="media-tag">Metered interconnection</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE 03 — GRID INFRASTRUCTURE
          ============================================================ */}
      <section className="on-light section-pad" data-reveal>
        <div className="wrap split">
          <div className="split-copy">
            <span className="eyebrow on-light">03 &middot; Grid Infrastructure</span>
            <h2>The substation and lines that carry power out.</h2>
            <p>
              Generation is only useful once it reaches the grid. We build and maintain the step-up
              substation and transmission lines connecting our plant to the interconnection points our
              distribution partners use to draw power.
            </p>
            <div className="spec-list">
              <div><span>Substation</span><span>On-site step-up substation</span></div>
              <div><span>Transmission</span><span>Dedicated lines to interconnection points</span></div>
              <div><span>Monitoring</span><span>On-site engineering team, continuous monitoring</span></div>
            </div>
            {/* TODO: replace with your actual voltage levels and substation specifications */}
          </div>
          <div className="split-media">
            <div className="media-frame">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#faf3e6" strokeWidth="1.1" fill="none">
                  <path d="M 90 300 L 110 200 L 130 300" />
                  <path d="M 220 300 L 240 170 L 260 300" />
                  <path d="M 350 300 L 370 200 L 390 300" />
                </g>
                <path d="M 110 205 C 160 180, 190 180, 240 175" stroke="#2fa89c" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <path d="M 240 175 C 290 180, 320 180, 370 205" stroke="#2fa89c" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              </svg>
              <span className="media-tag">Substation &amp; transmission</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE 04 — MAINTENANCE & RELIABILITY
          ============================================================ */}
      <section className="on-panel section-pad" data-reveal>
        <div className="wrap split reverse">
          <div className="split-copy">
            <span className="eyebrow on-dark">04 &middot; Reliability &amp; Maintenance</span>
            <h2>Keeping output steady through both seasons.</h2>
            <p>
              South Sudan&apos;s rainy season brings real operating challenges. Our maintenance program is
              planned around that reality, with scheduled servicing and an on-site engineering team who can
              respond quickly when conditions change.
            </p>
            <div className="spec-list">
              <div><span>Maintenance</span><span>Scheduled preventive maintenance program</span></div>
              <div><span>Response</span><span>On-site engineering team, year-round</span></div>
              <div><span>Target uptime</span><span>High-availability supply to all partners</span></div>
            </div>
          </div>
          <div className="split-media">
            <div className="media-frame">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
                <circle cx="240" cy="190" r="70" fill="none" stroke="#faf3e6" strokeWidth="1" opacity="0.4" />
                <circle
                  cx="240"
                  cy="190"
                  r="70"
                  fill="none"
                  stroke="#ff7a3d"
                  strokeWidth="3"
                  strokeDasharray="440"
                  strokeDashoffset="15"
                  strokeLinecap="round"
                  transform="rotate(-90 240 190)"
                />
                <text x="240" y="184" textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="30" fill="#faf3e6" fontWeight="700">
                  97.8%
                </text>
                <text x="240" y="206" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="10" fill="#c9bfe0" letterSpacing="1">
                  AVG. UPTIME
                </text>
              </svg>
              <span className="media-tag">Fleet-wide reliability</span>
            </div>
          </div>
        </div>
        {/* TODO: replace 97.8% with your actual measured uptime figure */}
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="cta-banner" data-reveal>
        <div className="wrap">
          <div className="eyebrow on-dark text-center" style={{ justifyContent: "center" }}>
            Ready to talk?
          </div>
          <h2>Let&apos;s discuss a wholesale supply agreement.</h2>
          <p>Our commercial team can walk you through current capacity, pricing structure, and how a new agreement would come online.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Contact Our Team <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
