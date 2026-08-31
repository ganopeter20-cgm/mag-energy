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
  <header className={`fixed inset-x-0 top-0 z-50 text-cream transition-all duration-300 ${
scrolled
  ? "bg-night/90 backdrop-blur-md shadow-md"
  : "bg-transparent"
  }`}>
<div className="max-w-container mx-auto px-pad flex items-center justify-between py-4">
  <Link href="/" className="flex items-center gap-3 flex-none hover:opacity-80 transition-opacity">
    <Logo />
    <span className="font-display font-bold text-cream hidden sm:block">
      M.A.G ENERGY
      <small className="block text-xs font-mono text-paper-dim tracking-wider opacity-70">JUBA &middot; SOUTH SUDAN</small>
    </span>
  </Link>

  <nav className={`fixed inset-0 top-0 bg-night md:static md:bg-transparent md:flex md:items-center md:gap-8 md:inset-auto flex-col items-center justify-center gap-8 p-6 md:p-0 ${
    open ? "flex" : "hidden md:flex"
  }`}>
    {LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="font-mono text-sm tracking-wider uppercase text-cream hover:text-sun transition-colors"
        aria-current={pathname === link.href ? "page" : undefined}
      >
        {link.label}
      </Link>
    ))}
  </nav>
  <div className="relative z-10 flex items-center gap-4">
    <Link href="/contact" className="hidden md:inline-flex btn btn-ghost-dark">
      Become a Partner
    </Link>
    <button
      className="md:hidden flex flex-col gap-1.5 w-6 h-6 relative"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={toggleMenu}
      type="button"
    >
      <span className={`block w-full h-0.5 bg-cream transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
      <span className={`block w-full h-0.5 bg-cream transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
      <span className={`block w-full h-0.5 bg-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
    </button>
  </div>
</div>
  </header>
);
}