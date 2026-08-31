"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    /*
      This form currently only shows a confirmation message in the browser.
      To actually receive messages, connect it to a form backend
      (e.g. Formspree, Netlify Forms, or your own API route under
      app/api/contact/route.js) and replace this handler with a real
      fetch()/POST submission.
    */
    e.target.reset();
    setSubmitted(true);
  }

  return (
    <form id="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="block font-mono text-xs tracking-wider uppercase mb-2 text-ink-dim">
          Full name
        </label>
        <input type="text" id="name" name="name" className="w-full bg-cream border border-line-light rounded-lg px-3.5 py-3 font-body text-sm text-ink focus:outline-none focus:border-sun transition-colors duration-200" required />
      </div>
      <div className="mb-5">
        <label htmlFor="company" className="block font-mono text-xs tracking-wider uppercase mb-2 text-ink-dim">
          Company / organisation
        </label>
        <input type="text" id="company" name="company" className="w-full bg-cream border border-line-light rounded-lg px-3.5 py-3 font-body text-sm text-ink focus:outline-none focus:border-sun transition-colors duration-200" />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block font-mono text-xs tracking-wider uppercase mb-2 text-ink-dim">
          Email address
        </label>
        <input type="email" id="email" name="email" className="w-full bg-cream border border-line-light rounded-lg px-3.5 py-3 font-body text-sm text-ink focus:outline-none focus:border-sun transition-colors duration-200" required />
      </div>
      <div className="mb-5">
        <label htmlFor="reason" className="block font-mono text-xs tracking-wider uppercase mb-2 text-ink-dim">
          I&apos;m getting in touch about
        </label>
        <select id="reason" name="reason" className="w-full bg-cream border border-line-light rounded-lg px-3.5 py-3 font-body text-sm text-ink focus:outline-none focus:border-sun transition-colors duration-200" defaultValue="Distribution / wholesale supply">
          <option>Distribution / wholesale supply</option>
          <option>General enquiry</option>
          <option>Careers</option>
          <option>Media &amp; press</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="block font-mono text-xs tracking-wider uppercase mb-2 text-ink-dim">
          Message
        </label>
        <textarea id="message" name="message" className="w-full bg-cream border border-line-light rounded-lg px-3.5 py-3 font-body text-sm text-ink resize-vertical min-h-[110px] focus:outline-none focus:border-sun transition-colors duration-200" required></textarea>
      </div>
      <button type="submit" className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-body font-semibold text-sm border border-transparent bg-sun text-ink hover:-translate-y-0.5 transition-all duration-250">
        Send Message <span className="inline-block transition-transform duration-250">&rarr;</span>
      </button>
      <p className="text-xs text-ink-dim mt-4">
        This form is a front-end demo only. Connect it to a form backend (Formspree, Netlify Forms, or your
        own API route) in components/ContactForm.js to actually receive submissions.
      </p>
      <div className={`hidden mt-4.5 px-4 py-3.5 rounded-lg bg-teal bg-opacity-14 border border-teal border-opacity-40 text-sm ${submitted ? "block" : ""}`}>
        Thanks &mdash; your message has been recorded. Our team will follow up shortly.
      </div>
    </form>
  );
}
