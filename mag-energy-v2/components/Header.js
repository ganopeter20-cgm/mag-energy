"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
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
    <header
      className={`fixed inset-0 inset-y-auto z-100 flex items-center justify-between px-pad py-[22px] text-cream transition-all duration-300 ${
        scrolled
          ? "bg-night bg-opacity-86 backdrop-blur-md py-[15px]"
          : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-3 font-display font-semibold text-lg">
        <Logo />
        <span>
          M.A.G ENERGY
          <small className="block font-mono font-normal text-xs tracking-widest opacity-70 mt-0.5">
            JUBA &middot; SOUTH SUDAN
          </small>
        </span>
      </Link>

      <nav
        className={`fixed inset-0 flex-col justify-center gap-8 bg-night -translate-y-full transition-transform duration-350 flex items-center max-md:flex ${
          open ? "translate-y-0" : ""
        } md:relative md:inset-auto md:flex-row md:justify-normal md:gap-9 md:bg-transparent md:translate-y-0 md:transition-none`}
      >
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative text-sm hover:text-gold transition-colors md:text-sm"
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-line-dark text-cream hover:border-gold hover:text-gold transition-all"
        >
          Become a Partner
        </Link>
        <button
          className="md:hidden bg-none border-none text-inherit w-8 h-6 relative"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggleMenu}
          type="button"
        >
          <span className="absolute left-0 right-0 h-px bg-current top-1/2 -translate-y-1/2 transition-all duration-250"></span>
        </button>
      </div>
    </header>
  );
}
