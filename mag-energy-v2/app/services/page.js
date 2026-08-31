import Link from "next/link";

export const metadata = {
  title: "Services — M.A.G ENERGY",
  description:
    "Power generation, wholesale supply agreements, grid infrastructure, and maintenance — how M.A.G ENERGY supplies South Sudan's local distributors.",
};

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-b from-night-2 to-night py-24 px-pad">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% -50%, #ff7a3d, transparent 50%)'
        }} aria-hidden="true"></div>
        <div className="max-w-container mx-auto relative z-10">
          <div className="text-cream-2 mb-8">
            <Link href="/">Home</Link> / Services
          </div>
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-sun mb-8">
            What we do
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-6 leading-tight max-w-4xl">
            Generation, supply, and the grid infrastructure between.
          </h1>
          <p className="text-lg text-cream-2 max-w-2xl leading-relaxed">
            Everything M.A.G ENERGY does supports one job: getting reliable power from our Juba site into
            the hands of the local distributors who serve South Sudan.
          </p>
        </div>
      </section>

      {/* SERVICE 1 - GENERATION */}
      <section className="bg-cream py-20 px-pad" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
                01 &middot; Power Generation
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6 leading-tight">
                Thermal and solar-hybrid generation, sized to real demand.
              </h2>
              <p className="text-ink-dim mb-8">
                Our Juba-area site combines thermal generating units with a growing share of solar-hybrid
                capacity. Thermal generation gives us dependable output regardless of weather; solar reduces
                fuel costs and emissions during daylight hours.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Generation mix', value: 'Thermal (base load) + solar-hybrid' },
                  { label: 'Site location', value: 'Juba, Central Equatoria' },
                  { label: 'Operating pattern', value: 'Continuous, seasonal dispatch planning' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-line-on-light text-sm">
                    <span className="font-mono text-xs text-ink-dim uppercase">{item.label}</span>
                    <span className="text-ink-dim">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-night-2 p-8 rounded-lg overflow-hidden flex items-center justify-center min-h-96" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)'
            }}>
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full">
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
            </div>
            <p className="text-xs text-ink-dim font-mono tracking-wider uppercase md:col-start-1 text-left pt-4">
              Generation mix
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE 2 - WHOLESALE SUPPLY */}
      <section className="bg-night-2 py-20 px-pad" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-night p-8 rounded-lg overflow-hidden flex items-center justify-center min-h-96" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)'
            }}>
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <rect x="190" y="150" width="100" height="80" fill="none" stroke="#faf3e6" strokeWidth="1.2" />
                <path d="M 60 190 H 190" stroke="rgba(250,243,230,0.3)" strokeWidth="1" />
                <path d="M 290 190 H 420" stroke="rgba(250,243,230,0.3)" strokeWidth="1" />
                <text x="30" y="185" fontFamily="var(--font-mono), monospace" fontSize="10" fill="#c9bfe0">M.A.G</text>
                <text x="392" y="185" fontFamily="var(--font-mono), monospace" fontSize="10" fill="#c9bfe0">DIST.</text>
              </svg>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-sun mb-6">
                02 &middot; Wholesale Supply
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-6 leading-tight">
                Long-term agreements with licensed distributors.
              </h2>
              <p className="text-cream-2 mb-8">
                We sell generation capacity wholesale, under structured supply agreements with South
                Sudan's local distribution companies. Contracts are built around committed volumes and
                predictable pricing, so our partners can plan their own retail supply with confidence.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Customer type', value: 'Licensed local distribution companies' },
                  { label: 'Agreement structure', value: 'Long-term wholesale supply contracts' },
                  { label: 'Billing', value: 'Metered delivery at the point of interconnection' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-line-on-dark text-sm">
                    <span className="font-mono text-xs text-paper-dim uppercase">{item.label}</span>
                    <span className="text-cream-2">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-paper-dim font-mono tracking-wider uppercase md:col-start-1 text-left pt-4">
              Metered interconnection
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE 3 - GRID INFRASTRUCTURE */}
      <section className="bg-cream py-20 px-pad" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
                03 &middot; Grid Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6 leading-tight">
                The substation and lines that carry power out.
              </h2>
              <p className="text-ink-dim mb-8">
                Generation is only useful once it reaches the grid. We build and maintain the step-up
                substation and transmission lines connecting our plant to the interconnection points our
                distribution partners use to draw power.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Substation', value: 'On-site step-up substation' },
                  { label: 'Transmission', value: 'Dedicated lines to interconnection points' },
                  { label: 'Monitoring', value: 'On-site engineering team, continuous monitoring' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-line-on-light text-sm">
                    <span className="font-mono text-xs text-ink-dim uppercase">{item.label}</span>
                    <span className="text-ink-dim">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-night-2 p-8 rounded-lg overflow-hidden flex items-center justify-center min-h-96" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)'
            }}>
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <g stroke="#faf3e6" strokeWidth="1.1" fill="none">
                  <path d="M 90 300 L 110 200 L 130 300" />
                  <path d="M 220 300 L 240 170 L 260 300" />
                  <path d="M 350 300 L 370 200 L 390 300" />
                </g>
                <path d="M 110 205 C 160 180, 190 180, 240 175" stroke="#2fa89c" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <path d="M 240 175 C 290 180, 320 180, 370 205" stroke="#2fa89c" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              </svg>
            </div>
            <p className="text-xs text-ink-dim font-mono tracking-wider uppercase md:col-start-1 text-left pt-4">
              Substation &amp; transmission
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE 4 - MAINTENANCE & RELIABILITY */}
      <section className="bg-night-2 py-20 px-pad" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-night p-8 rounded-lg overflow-hidden flex items-center justify-center min-h-96" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)'
            }}>
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full">
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
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-sun mb-6">
                04 &middot; Reliability &amp; Maintenance
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-6 leading-tight">
                Keeping output steady through both seasons.
              </h2>
              <p className="text-cream-2 mb-8">
                South Sudan's rainy season brings real operating challenges. Our maintenance program is
                planned around that reality, with scheduled servicing and an on-site engineering team who can
                respond quickly when conditions change.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Maintenance', value: 'Scheduled preventive maintenance program' },
                  { label: 'Response', value: 'On-site engineering team, year-round' },
                  { label: 'Target uptime', value: 'High-availability supply to all partners' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-line-on-dark text-sm">
                    <span className="font-mono text-xs text-paper-dim uppercase">{item.label}</span>
                    <span className="text-cream-2">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-paper-dim font-mono tracking-wider uppercase md:col-start-1 text-left pt-4">
              Fleet-wide reliability
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-pad overflow-hidden" style={{
        background: 'linear-gradient(135deg, #17102f 0%, #1f1740 100%)',
        clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)'
      }} data-reveal>
        <div className="max-w-container mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-sun mb-6">
            Ready to talk?
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-4 leading-tight">
            Let's discuss a wholesale supply agreement.
          </h2>
          <p className="text-cream-2 mb-8 max-w-xl mx-auto">
            Our commercial team can walk you through current capacity, pricing structure, and how a new agreement would come online.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-sun hover:bg-orange-500 text-night font-bold py-3 px-8 rounded transition-colors">
            Contact Our Team <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
