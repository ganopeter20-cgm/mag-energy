import Link from "next/link";

export const metadata = {
  title: "About — M.A.G ENERGY",
  description:
    "M.A.G ENERGY is an independent power generation company based in Juba, South Sudan, supplying electricity wholesale to local distributors.",
};

function PersonAvatar({ ring1, ring2 }) {
  return (
    <div className="person-avatar">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
      <section className="page-header">
        <div className="page-header-glow" aria-hidden="true"></div>
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / About
          </div>
          <div className="eyebrow on-dark">About M.A.G Energy</div>
          <h1>Generating power in Juba, for the whole of South Sudan&apos;s grid.</h1>
          <p className="head-sub">
            M.A.G ENERGY is an independent power producer. We build and operate generation capacity in the
            Juba area, and sell that electricity wholesale to the local distribution companies who deliver
            it to homes and businesses.
          </p>
        </div>
      </section>

      {/* ============================================================
          MISSION
          ============================================================ */}
      <section className="on-light section-pad" id="mission" data-reveal>
        <div className="wrap split reverse">
          <div className="split-copy">
            <div className="eyebrow on-light">Our mission</div>
            <h2>Steadier power, for a country that has gone without it.</h2>
            <p>
              South Sudan&apos;s demand for electricity is growing faster than its grid. Much of Juba still
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
          <div className="split-media">
            <div className="media-frame">
              <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg">
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
              <span className="media-tag">Thermal + solar hybrid</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          VALUES
          ============================================================ */}
      <section className="on-card section-pad" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow on-light" style={{ justifyContent: "center" }}>
              What guides us
            </div>
            <h2>Four principles behind how we operate.</h2>
            <p className="head-note">
              The same standards apply whether we&apos;re running the plant, negotiating a supply
              agreement, or planning the next expansion.
            </p>
          </div>
          <div className="value-grid">
            <div className="value-item">
              <div className="num">Reliability</div>
              <h3>Uptime comes first.</h3>
              <p>Distributors plan around our output. Consistent, predictable generation is the standard we hold ourselves to every day.</p>
            </div>
            <div className="value-item">
              <div className="num">Integrity</div>
              <h3>Agreements we keep.</h3>
              <p>Our wholesale contracts are built to be honoured in full &mdash; in volume, in price, and in the season it matters most.</p>
            </div>
            <div className="value-item">
              <div className="num">Local investment</div>
              <h3>Built in South Sudan.</h3>
              <p>We hire, train, and invest locally, and we size our capacity to the real needs of Juba&apos;s communities and industry.</p>
            </div>
            <div className="value-item">
              <div className="num">Sustainability</div>
              <h3>Reducing diesel dependence.</h3>
              <p>Every megawatt of solar-hybrid capacity we add reduces fuel imports and emissions across our generation mix.</p>
            </div>
            <div className="value-item">
              <div className="num">Safety</div>
              <h3>No shortcuts on site.</h3>
              <p>From the plant floor to the substation, our engineering and safety standards are non-negotiable.</p>
            </div>
            <div className="value-item">
              <div className="num">Partnership</div>
              <h3>Distributors first.</h3>
              <p>We succeed when the companies we supply can, in turn, depend on us to serve their own customers well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TIMELINE (simple, dashed — distinct from the home page's
          scroll-filled version)
          ============================================================ */}
      <section className="on-light section-pad" id="timeline" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow on-light" style={{ justifyContent: "center" }}>
              Our history
            </div>
            <h2>How M.A.G ENERGY got here.</h2>
            {/* TODO: replace the milestones below with M.A.G ENERGY's real company history */}
          </div>
          <div className="spec-list" style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div><span>2015</span><span>Company founded, initial thermal unit supplying one distributor</span></div>
            <div><span>2018</span><span>First substation and dedicated transmission line commissioned</span></div>
            <div><span>2021</span><span>Solar-hybrid expansion begins alongside existing thermal generation</span></div>
            <div><span>2024</span><span>Capacity passes 18MW across six distribution partners</span></div>
            <div><span>Next</span><span>Feasibility work underway on additional generation capacity</span></div>
          </div>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP
          ============================================================ */}
      <section className="on-card section-pad" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow on-light" style={{ justifyContent: "center" }}>
              Leadership
            </div>
            <h2>The team running the plant.</h2>
            <p className="head-note">Engineering, commercial, and operations leads based on site in Juba.</p>
            {/* TODO: replace with real leadership names, titles, and photos */}
          </div>
          <div className="people-grid">
            <div className="person">
              <PersonAvatar ring1="#ff7a3d" ring2="#2fa89c" />
              <h3>Managing Director</h3>
              <div className="role">Executive Leadership</div>
            </div>
            <div className="person">
              <PersonAvatar ring1="#2fa89c" ring2="#ff7a3d" />
              <h3>Head of Generation</h3>
              <div className="role">Plant Operations</div>
            </div>
            <div className="person">
              <PersonAvatar ring1="#ff7a3d" ring2="#2fa89c" />
              <h3>Commercial Director</h3>
              <div className="role">Distribution Agreements</div>
            </div>
            <div className="person">
              <PersonAvatar ring1="#2fa89c" ring2="#ff7a3d" />
              <h3>Chief Engineer</h3>
              <div className="role">Grid &amp; Substation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="cta-banner" data-reveal>
        <div className="wrap">
          <div className="eyebrow on-dark text-center" style={{ justifyContent: "center" }}>
            Get in touch
          </div>
          <h2>Want to know more about how we operate?</h2>
          <p>Reach out to our commercial team to discuss capacity, supply agreements, or a site visit.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Contact Us <span className="btn-arrow">&rarr;</span>
            </Link>
            <Link href="/services" className="btn btn-ghost-dark">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
