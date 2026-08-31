import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black bg-opacity-80 text-paper-dim py-20 px-0">
      <div className="max-w-container mx-auto px-pad grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-14 border-b border-line-dark">
        <div>
          <Link href="/" className="flex items-center gap-3 text-cream mb-3.5 font-display font-semibold text-lg">
            <Logo />
            <span>M.A.G ENERGY</span>
          </Link>
          <p className="text-sm max-w-xs">
            An independent power generation company based in Juba, South Sudan, supplying electricity
            wholesale to local distributors.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase text-cream mb-4.5">Site</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase text-cream mb-4.5">Company</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/about#mission">Mission &amp; Values</Link>
            </li>
            <li>
              <Link href="/about#timeline">Our History</Link>
            </li>
            <li>
              <Link href="/services">Generation Capacity</Link>
            </li>
            <li>
              <Link href="/contact">Become a Partner</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase text-cream mb-4.5">Contact</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              Juba, Central Equatoria
              <br />
              South Sudan
            </li>
            <li>
              <a href="mailto:info@magenergy.ss">info@magenergy.ss</a>
            </li>
            <li>
              <a href="tel:+211900000000">+211 90 000 0000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container mx-auto px-pad flex justify-between items-center pt-6.5 text-xs flex-wrap gap-3">
        <span>&copy; {year} M.A.G ENERGY. All rights reserved.</span>
        <div className="flex gap-4.5 hover:text-gold transition-colors">
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">X</a>
        </div>
      </div>
    </footer>
  );
}
