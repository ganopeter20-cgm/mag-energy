import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — M.A.G ENERGY",
  description: "Get in touch with M.A.G ENERGY in Juba, South Sudan — for distribution partnerships, supply enquiries, or general contact.",
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-b from-night-2 to-night py-24 px-pad">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% -50%, #ff7a3d, transparent 50%)'
        }} aria-hidden="true"></div>
        <div className="max-w-container mx-auto relative z-10">
          <div className="text-cream-2 mb-8">
            <Link href="/">Home</Link> / Contact
          </div>
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-sun mb-8">
            Get in touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-6 leading-tight max-w-4xl">
            Let's talk about power supply in South Sudan.
          </h1>
          <p className="text-lg text-cream-2 max-w-2xl leading-relaxed">
            Whether you're a distribution company exploring a wholesale agreement, a partner, or just
            have a question &mdash; reach our team using the details below.
          </p>
        </div>
      </section>

      {/* CONTACT & FORM */}
      <section className="bg-cream py-20 px-pad" data-reveal>
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT COLUMN - CONTACT INFO */}
            <div>
              <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
                Contact details
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-8 leading-tight">
                Reach the team directly.
              </h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-sm font-mono tracking-wider uppercase text-ink-dim mb-2">Head Office</h4>
                  <p className="text-ink">
                    M.A.G ENERGY<br />
                    Juba, Central Equatoria<br />
                    South Sudan
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-mono tracking-wider uppercase text-ink-dim mb-2">General Enquiries</h4>
                  <p><a href="mailto:info@magenergy.ss" className="text-sun hover:text-orange-500 transition-colors">info@magenergy.ss</a></p>
                </div>
                <div>
                  <h4 className="text-sm font-mono tracking-wider uppercase text-ink-dim mb-2">Distribution Partnerships</h4>
                  <p><a href="mailto:partnerships@magenergy.ss" className="text-sun hover:text-orange-500 transition-colors">partnerships@magenergy.ss</a></p>
                </div>
                <div>
                  <h4 className="text-sm font-mono tracking-wider uppercase text-ink-dim mb-2">Phone</h4>
                  <p><a href="tel:+211900000000" className="text-sun hover:text-orange-500 transition-colors">+211 90 000 0000</a></p>
                </div>
                <div>
                  <h4 className="text-sm font-mono tracking-wider uppercase text-ink-dim mb-2">Office Hours</h4>
                  <p className="text-ink">Monday &ndash; Friday, 8:00 &ndash; 17:00 (EAT)</p>
                </div>
              </div>

              <iframe
                className="w-full rounded-lg border border-line-on-light aspect-video"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.52%2C4.80%2C31.65%2C4.90&layer=mapnik&marker=4.8517%2C31.5825"
                title="Map of Juba, South Sudan"
              ></iframe>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div>
              <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-ink-dim mb-6">
                Send a message
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-8 leading-tight">
                Tell us what you need.
              </h2>
              <div className="bg-cream-2 p-8 rounded-lg border border-line-on-light">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
