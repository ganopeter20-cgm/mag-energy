"use client";

import { useState } from "react";

export default function ContactForm(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  // Front-end demo: reset and show confirmation. Integrate with backend to persist.
  (e.currentTarget as HTMLFormElement).reset();
  setSubmitted(true);
}
return (
  <form id="contact-form" noValidate onSubmit={handleSubmit} className="space-y-6">
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="font-mono text-xs text-ink-dim tracking-wider uppercase">Full name</label>
      <input type="text" id="name" name="name" required className="px-4 py-3 border border-line-on-light rounded bg-cream text-ink focus:outline-sun focus:outline-offset-2" />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="company" className="font-mono text-xs text-ink-dim tracking-wider uppercase">Company / organisation</label>
      <input type="text" id="company" name="company" className="px-4 py-3 border border-line-on-light rounded bg-cream text-ink focus:outline-sun focus:outline-offset-2" />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="font-mono text-xs text-ink-dim tracking-wider uppercase">Email address</label>
      <input type="email" id="email" name="email" required className="px-4 py-3 border border-line-on-light rounded bg-cream text-ink focus:outline-sun focus:outline-offset-2" />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="reason" className="font-mono text-xs text-ink-dim tracking-wider uppercase">I&apos;m getting in touch about</label>
      <select id="reason" name="reason" defaultValue="Distribution / wholesale supply" className="px-4 py-3 border border-line-on-light rounded bg-cream text-ink focus:outline-sun focus:outline-offset-2">
        <option>Distribution / wholesale supply</option>
        <option>General enquiry</option>
        <option>Careers</option>
        <option>Media &amp; press</option>
        <option>Other</option>
      </select>
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="message" className="font-mono text-xs text-ink-dim tracking-wider uppercase">Message</label>
      <textarea id="message" name="message" required className="px-4 py-3 border border-line-on-light rounded bg-cream text-ink focus:outline-sun focus:outline-offset-2 min-h-32"></textarea>
    </div>
    <button type="submit" className="w-full px-6 py-3 bg-sun hover:bg-orange-500 text-night font-bold rounded transition-colors flex items-center justify-center gap-2">
      Send Message <span>&rarr;</span>
    </button>
    <p className="text-xs text-ink-dim">
      This form is a front-end demo only. Connect it to a form backend (Formspree, Netlify Forms, or your
      own API route) in components/ContactForm.tsx to actually receive submissions.
    </p>
    <div className={`p-4 rounded bg-teal text-cream transition-all duration-300 ${submitted ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      Thanks &mdash; your message has been recorded. Our team will follow up shortly.
    </div>
  </form>
);
}
