import Link from "next/link";
import Logo from "./Logo";

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
  <footer className="bg-night text-cream">
<div className="max-w-container mx-auto px-pad py-16">
{/* Top section - brand + columns */}
<div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-line-on-dark mb-12">
  <div>
    <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
      <Logo />
      <span className="font-display font-bold">M.A.G ENERGY</span>
    </Link>
    <p className="text-sm text-paper-dim leading-relaxed">
      An independent power generation company based in Juba, South Sudan, supplying electricity
      wholesale to local distributors.
    </p>
  </div>

  <div>
    <h4 className="font-display font-bold text-lg mb-4">Site</h4>
    <ul className="space-y-2 text-sm">
      <li><Link href="/" className="text-paper-dim hover:text-cream transition-colors">Home</Link></li>
      <li><Link href="/about" className="text-paper-dim hover:text-cream transition-colors">About</Link></li>
      <li><Link href="/services" className="text-paper-dim hover:text-cream transition-colors">Services</Link></li>
      <li><Link href="/contact" className="text-paper-dim hover:text-cream transition-colors">Contact</Link></li>
    </ul>
  </div>

  <div>
    <h4 className="font-display font-bold text-lg mb-4">Company</h4>
    <ul className="space-y-2 text-sm">
      <li><Link href="/about#mission" className="text-paper-dim hover:text-cream transition-colors">Mission &amp; Values</Link></li>
      <li><Link href="/about#timeline" className="text-paper-dim hover:text-cream transition-colors">Our History</Link></li>
      <li><Link href="/services" className="text-paper-dim hover:text-cream transition-colors">Generation Capacity</Link></li>
      <li><Link href="/contact" className="text-paper-dim hover:text-cream transition-colors">Become a Partner</Link></li>
    </ul>
  </div>

  <div>
    <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
    <ul className="space-y-2 text-sm">
      <li className="text-paper-dim">Juba, Central Equatoria<br />South Sudan</li>
      <li><a href="mailto:info@magenergy.ss" className="text-paper-dim hover:text-cream transition-colors">info@magenergy.ss</a></li>
      <li><a href="tel:+211900000000" className="text-paper-dim hover:text-cream transition-colors">+211 90 000 0000</a></li>
    </ul>
  </div>
</div>

{/* Bottom section */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-paper-dim">
  <span>&copy; {year} M.A.G ENERGY. All rights reserved.</span>
  <div className="flex gap-6">
    <a href="#" className="text-paper-dim hover:text-cream transition-colors">LinkedIn</a>
    <a href="#" className="text-paper-dim hover:text-cream transition-colors">Facebook</a>
    <a href="#" className="text-paper-dim hover:text-cream transition-colors">X</a>
  </div>
</div>
</div>
  </footer>
);
}
