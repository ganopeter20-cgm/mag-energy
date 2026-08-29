import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — M.A.G ENERGY",
  description: "Get in touch with M.A.G ENERGY in Juba, South Sudan — for distribution partnerships, supply enquiries, or general contact.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-glow" aria-hidden="true"></div>
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Contact
          </div>
          <div className="eyebrow on-dark">Get in touch</div>
          <h1>Let&apos;s talk about power supply in South Sudan.</h1>
          <p className="head-sub">
            Whether you&apos;re a distribution company exploring a wholesale agreement, a partner, or just
            have a question &mdash; reach our team using the details below.
          </p>
        </div>
      </section>

      <section className="on-light section-pad" data-reveal>
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow on-light">Contact details</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,36px)", marginTop: "16px" }}>Reach the team directly.</h2>
            <div className="contact-info-list">
              {/* TODO: replace every value below with M.A.G ENERGY's real contact information */}
              <div className="contact-info-item">
                <h4>Head Office</h4>
                <p>M.A.G ENERGY<br />Juba, Central Equatoria<br />South Sudan</p>
              </div>
              <div className="contact-info-item">
                <h4>General Enquiries</h4>
                <p><a href="mailto:info@magenergy.ss">info@magenergy.ss</a></p>
              </div>
              <div className="contact-info-item">
                <h4>Distribution Partnerships</h4>
                <p><a href="mailto:partnerships@magenergy.ss">partnerships@magenergy.ss</a></p>
              </div>
              <div className="contact-info-item">
                <h4>Phone</h4>
                <p><a href="tel:+211900000000">+211 90 000 0000</a></p>
              </div>
              <div className="contact-info-item">
                <h4>Office Hours</h4>
                <p>Monday &ndash; Friday, 8:00 &ndash; 17:00 (EAT)</p>
              </div>
            </div>

            <div style={{ marginTop: "36px" }}>
              <iframe
                className="map-frame"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.52%2C4.80%2C31.65%2C4.90&layer=mapnik&marker=4.8517%2C31.5825"
                title="Map of Juba, South Sudan"
              ></iframe>
              {/* TODO: swap the bbox/marker coordinates above for your exact site or office location */}
            </div>
          </div>

          <div>
            <div className="eyebrow on-light">Send a message</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,36px)", marginTop: "16px", marginBottom: "24px" }}>
              Tell us what you need.
            </h2>
            <div className="contact-form-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
