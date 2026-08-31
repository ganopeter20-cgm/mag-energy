"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
/****************************************
 * Mounted once in the root layout. Wires up
 * [data-reveal] fade-up animations for the
 * current page and re-runs on route change.
 ****************************************/
export default function ClientEffects(): null {
  const pathname = usePathname();
  useEffect(() => {    const revealEls = document.querySelectorAll("[data-reveal]");    let observer: IntersectionObserver | undefined;    if (typeof window !== "undefined" && "IntersectionObserver" in window && revealEls.length) {      observer = new IntersectionObserver(        (entries) => {          entries.forEach((entry) => {            if (entry.isIntersecting) {              entry.target.classList.add("is-visible");              observer?.unobserve(entry.target);            }          });        },        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }      );      revealEls.forEach((el) => observer!.observe(el));    } else {      revealEls.forEach((el) => el.classList.add("is-visible"));    }    return () => {      if (observer) observer.disconnect();    };  }, [pathname]);  return null;}
