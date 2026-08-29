import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <Logo />
            <span>M.A.G ENERGY</span>
          </Link>
          <p>
            An independent power generation company based in Juba, South Sudan, supplying electricity
            wholesale to local distributors.
          </p>
        </div>

        <div className="footer-col">
          <h4>Site</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about#mission">Mission &amp; Values</Link></li>
            <li><Link href="/about#timeline">Our History</Link></li>
            <li><Link href="/services">Generation Capacity</Link></li>
            <li><Link href="/contact">Become a Partner</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          {/* TODO: replace with real contact details */}
          <ul>
            <li>Juba, Central Equatoria<br />South Sudan</li>
            <li><a href="mailto:info@magenergy.ss">info@magenergy.ss</a></li>
            <li><a href="tel:+211900000000">+211 90 000 0000</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>&copy; {year} M.A.G ENERGY. All rights reserved.</span>
        <div className="footer-social">
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">X</a>
        </div>
      </div>
    </footer>
  );
}
