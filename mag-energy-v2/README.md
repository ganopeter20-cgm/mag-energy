# M.A.G ENERGY — "Solar Dawn" (Design Variant 2)

A second Next.js build of the M.A.G ENERGY website — same company and
content (an independent power generator in Juba, South Sudan, selling
wholesale to local distributors) but a distinct visual identity, page
layout, and set of animations from the first version.

## What's different from the first build

| | Version 1 ("Nile Grid") | Version 2 ("Solar Dawn") |
|---|---|---|
| Palette | Deep teal-black + ochre + turbine green | Indigo night + sunrise orange/amber + nile teal |
| Type | Space Grotesk / Inter / IBM Plex Mono | Fraunces (serif) / Work Sans / Space Mono |
| Hero | Full-bleed centered hero, animated transmission-line dots | Split-screen hero with a rotating radial sunburst |
| Stats | Plain animated count-up numbers | Circular progress rings that fill in on scroll |
| "How power moves" | Horizontal 4-step rail with a static dashed line | Vertical timeline whose progress line fills as you scroll, lighting up each step |
| Services | Card grid | Full-width diagonal-cut rows that unclip on hover |
| Section dividers | Flat | Diagonal clip-path cuts (CTA banner, etc.) |
| New motion | Pulse dots along SVG paths | Scrolling marquee ticker, rotating sunburst rays, scroll-linked timeline fill |

## Structure

```
mag-energy-v2/
├── app/
│   ├── layout.js         Root layout — fonts, header/footer
│   ├── globals.css        Full "Solar Dawn" design system
│   ├── page.js             Home
│   ├── about/page.js        Company story, mission, timeline, leadership
│   ├── services/page.js      Generation, wholesale supply, grid infra, maintenance
│   └── contact/page.js        Contact details, map, contact form
├── components/
│   ├── Logo.js              Sun-mark brand icon
│   ├── Header.js             Nav + scroll state
│   ├── Footer.js
│   ├── Sunburst.js            Rotating radial hero graphic (CSS/SVG only)
│   ├── Ticker.js               Scrolling marquee stat band
│   ├── PowerTimeline.js         Scroll-filled vertical timeline (client component)
│   ├── StatRings.js              Animated circular progress rings
│   ├── ContactForm.js             Contact form (front-end demo handler)
│   └── ClientEffects.js            Scroll-reveal wiring, re-run on route change
├── package.json
├── next.config.js
└── .gitignore
```

## Running it locally in VS Code

```bash
cd mag-energy-v2
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Publishing to GitHub

```bash
cd mag-energy-v2
git init
git add .
git commit -m "M.A.G ENERGY — Solar Dawn variant"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

The easiest hosting for a Next.js app like this is
[Vercel](https://vercel.com) (made by the Next.js team) — import the
GitHub repo and it deploys automatically on every push. GitHub Pages
does **not** support Next.js server features out of the box, so Vercel,
Netlify, or your own Node host are better fits than Pages for this
version (unlike the plain-HTML build, which works fine on Pages).

## What to customize before launch

Search the project for `TODO` comments — same placeholder categories as
the first build: company stats, history, leadership names/photos,
contact details, map coordinates, and the contact form backend (wire it
to Formspree, Netlify Forms, or your own API route in
`components/ContactForm.js`).
