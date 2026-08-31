"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type NavLink = { href: string; label: string };

const LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);
  function toggleMenu() {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  }
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <Link href="/" className="brand">
        <Logo />
        <span>
          M.A.G ENERGY
          <small>JUBA &middot; SOUTH SUDAN</small>
        </span>
      </Link>

      <nav className={`nav-links${open ? " is-open" : ""}`}>
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="nav-cta">
        <Link href="/contact" className="btn btn-ghost-dark">
          Become a Partner
        </Link>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={toggleMenu} type="button">
          <span></span>
        </button>
      </div>
    </header>
  );
}
