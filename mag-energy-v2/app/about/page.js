import Link from "next/link";

export const metadata = {
  title: "About — M.A.G ENERGY",
  description:
    "M.A.G ENERGY is an independent power generation company based in Juba, South Sudan, supplying electricity wholesale to local distributors.",
};

function PersonAvatar({ ring1, ring2 }) {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center mb-4">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="50" r="6" fill="none" stroke={ring1} strokeWidth="1" />
        <circle cx="50" cy="50" r="20" fill="none" stroke={ring1} strokeWidth="0.8" opacity="0.6" />
        <circle cx="50" cy="50" r="34" fill="none" stroke={ring2} strokeWidth="0.8" opacity="0.5" />
        <circle cx="50" cy="50" r="48" fill="none" stroke={ring1} strokeWidth="0.6" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-b from-night-2 to-night py-24 px-pad">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% -50%, #ff7a3d, transparent 50%)'
        }} aria-hidden="true"></div>
        <div className="max-w-container mx-auto relative z-10">
          <div className="text-cream-2 mb-8">
            <Link href="/" className="hover:text-sun transition-colors">Home</Link> / About
          </div>
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-sun mb-8">
            About M.A.G Energy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-6 leading-tight max-w-4xl">
            Generating power in Juba, for the whole of South Sudan's grid.
          </h1>
          <p className="text-lg text-cream-2 max-w-2xl leading-relaxed">
            M.A.G ENERGY is an independent power producer. We build and operate generation capacity in the
            Juba area, and sell that electricity wholesale to the local distribution companies who deliver
            it to homes and businesses.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-cream py-20 px-pad" id="mission" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
                Our mission
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6 leading-tight">
                Steadier power, for a country that has gone without it.
              </h2>
              <div className="space-y-4 text-ink-dim">
                <p>
                  South Sudan's demand for electricity is growing faster than its grid. Much of Juba still
                  relies on costly diesel self-generation, and supply can be unpredictable through the rainy
                  season. M.A.G ENERGY exists to change that &mdash; by generating dependable capacity and
                  supplying it, at wholesale scale, to the distributors best placed to reach customers.
                </p>
                <p>
                  We are deliberately not a retailer. Staying focused on generation and wholesale supply lets
                  us invest in the plant, the substation, and the people who keep both running &mdash; instead
                  of spreading ourselves across the whole value chain.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-night-2 p-8 rounded-lg overflow-hidden flex items-center justify-center min-h-96" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)'
            }}>
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <g stroke="#faf3e6" strokeWidth="1.3" fill="none" opacity="0.85">
                  <rect x="150" y="140" width="34" height="160" />
                  <rect x="202" y="110" width="34" height="190" />
                  <rect x="254" y="160" width="34" height="140" />
                  <line x1="140" y1="140" x2="298" y2="140" />
                </g>
                <g stroke="#ff7a3d" strokeWidth="1.2" fill="none">
                  <circle cx="360" cy="90" r="22" />
                  <line x1="360" y1="50" x2="360" y2="38" />
                  <line x1="360" y1="130" x2="360" y2="142" />
                </g>
                <g stroke="#2fa89c" strokeWidth="1" strokeDasharray="3 3">
                  <path d="M 40 300 V 60" />
                  <path d="M 40 60 H 130" />
                </g>
              </svg>
            </div>
            <p className="text-xs text-ink-dim font-mono tracking-wider uppercase col-span-2 md:col-span-1 md:col-start-2 text-center pt-4">
              Thermal + solar hybrid
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cream-2 py-20 px-pad" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
              What guides us
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4 leading-tight">
              Four principles behind how we operate.
            </h2>
            <p className="text-ink-dim max-w-2xl mx-auto">
              The same standards apply whether we're running the plant, negotiating a supply
              agreement, or planning the next expansion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: 'Reliability', title: 'Uptime comes first.', desc: 'Distributors plan around our output. Consistent, predictable generation is the standard we hold ourselves to every day.' },
              { num: 'Integrity', title: 'Agreements we keep.', desc: 'Our wholesale contracts are built to be honoured in full — in volume, in price, and in the season it matters most.' },
              { num: 'Local investment', title: 'Built in South Sudan.', desc: 'We hire, train, and invest locally, and we size our capacity to the real needs of Juba\'s communities and industry.' },
              { num: 'Sustainability', title: 'Reducing diesel dependence.', desc: 'Every megawatt of solar-hybrid capacity we add reduces fuel imports and emissions across our generation mix.' },
              { num: 'Safety', title: 'No shortcuts on site.', desc: 'From the plant floor to the substation, our engineering and safety standards are non-negotiable.' },
              { num: 'Partnership', title: 'Distributors first.', desc: 'We succeed when the companies we supply can, in turn, depend on us to serve their own customers well.' }
            ].map((item, i) => (
              <div key={i} className="bg-cream p-8 rounded-lg border border-line-on-light">
                <div className="text-ink-dim font-mono text-xs tracking-wider uppercase mb-4">{item.num}</div>
                <h3 className="text-xl font-display font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-ink-dim text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream py-20 px-pad" id="timeline" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
              Our history
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4 leading-tight">
              How M.A.G ENERGY got here.
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { year: '2015', event: 'Company founded, initial thermal unit supplying one distributor' },
              { year: '2018', event: 'First substation and dedicated transmission line commissioned' },
              { year: '2021', event: 'Solar-hybrid expansion begins alongside existing thermal generation' },
              { year: '2024', event: 'Capacity passes 18MW across six distribution partners' },
              { year: 'Next', event: 'Feasibility work underway on additional generation capacity' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 pb-6 border-b border-line-on-light last:border-0">
                <div className="font-mono text-sm font-bold text-sun min-w-fit">{item.year}</div>
                <p className="text-ink-dim">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-cream-2 py-20 px-pad" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4 leading-tight">
              The team running the plant.
            </h2>
            <p className="text-ink-dim">Engineering, commercial, and operations leads based on site in Juba.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Managing Director', role: 'Executive Leadership', ring1: '#ff7a3d', ring2: '#2fa89c' },
              { name: 'Head of Generation', role: 'Plant Operations', ring1: '#2fa89c', ring2: '#ff7a3d' },
              { name: 'Commercial Director', role: 'Distribution Agreements', ring1: '#ff7a3d', ring2: '#2fa89c' },
              { name: 'Chief Engineer', role: 'Grid & Substation', ring1: '#2fa89c', ring2: '#ff7a3d' }
            ].map((person, i) => (
              <div key={i} className="text-center">
                <PersonAvatar ring1={person.ring1} ring2={person.ring2} />
                <h3 className="text-lg font-display font-bold text-ink mb-2">{person.name}</h3>
                <div className="text-sm text-ink-dim font-mono tracking-wider">{person.role}</div>
              </div>
            ))}
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
            Get in touch
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-4 leading-tight">
            Want to know more about how we operate?
          </h2>
          <p className="text-cream-2 mb-8 max-w-xl mx-auto">
            Reach out to our commercial team to discuss capacity, supply agreements, or a site visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-sun hover:bg-orange-500 text-night font-bold py-3 px-8 rounded transition-colors">
              Contact Us <span>&rarr;</span>
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-cream text-cream hover:bg-cream hover:text-night font-bold py-3 px-8 rounded transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
