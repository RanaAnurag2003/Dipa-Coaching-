# Dipa M Kapur — Landing Page

A pixel-matched React + Vite + Tailwind CSS build of the Dipa M Kapur coaching landing page design.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/            → photo of Dipa + client avatars (cropped from the reference design)
  components/
    Header.jsx        → logo, name, tagline
    About.jsx          → about section, stats, photo + quote card
    Message.jsx        → "My Message to You" + Goal/Vision cards
    HowIHelp.jsx        → 5-icon "How I Help You" grid
    Testimonials.jsx    → client testimonial carousel
    CTA.jsx              → webinar registration banner + form
    Footer.jsx            → footer with socials
  App.jsx             → composes all sections
  index.css           → Tailwind directives + base styles
tailwind.config.js    → brand color palette & fonts (Playfair Display + Poppins)
```

## Notes
- Colors, fonts, spacing, and copy were matched directly to the supplied design image.
- The registration form and "Register" button are currently front-end only — wire them up to your email/webinar tool of choice (Mailchimp, Zoho, Google Sheets, etc.) when ready to go live.
- Fonts are loaded from Google Fonts (Playfair Display + Poppins) via `index.html`.
