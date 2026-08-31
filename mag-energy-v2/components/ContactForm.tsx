"use client";

import { useState } from "react";

export default function ContactForm(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end demo: reset and show confirmation. Integrate with backend to persist.    (e.currentTarget as HTMLFormElement).reset();    setSubmitted(true);  }
  return (
    <form id="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company / organisation</label>
        <input type="text" id="company" name="company" />
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="field">
        <label htmlFor="reason">I&apos;m getting in touch about</label>
        <select id="reason" name="reason" defaultValue="Distribution / wholesale supply">
          <option>Distribution / wholesale supply</option>
          <option>General enquiry</option>
          <option>Careers</option>
          <option>Media &amp; press</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message <span className="btn-arrow">&rarr;</span>
      </button>
      <p className="form-note">
        This form is a front-end demo only. Connect it to a form backend (Formspree, Netlify Forms, or your
        own API route) in components/ContactForm.js to actually receive submissions.
      </p>
      <div className={`form-success${submitted ? " is-visible" : ""}`}>
        Thanks &mdash; your message has been recorded. Our team will follow up shortly.
      </div>
    </form>
  );
}
