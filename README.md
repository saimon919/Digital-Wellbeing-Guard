# Digital Wellbeing Guard — landing page

The marketing site for **Digital Wellbeing Guard**, an Android app for taking your screen time back. Built with Next.js 14 (App Router), Tailwind CSS, and framer-motion.

## Stack

- **Next.js 14** (App Router, static export-friendly)
- **Tailwind CSS** — warm editorial design system (see `app/globals.css` for tokens)
- **framer-motion** — restrained scroll reveals; respects `prefers-reduced-motion`
- **Fonts** — Fraunces (display serif) via `next/font/google`, Geist Sans/Mono (UI) via the `geist` package

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

## The download artifact

The Download buttons point at `/DigitalWellbeingGuard.apk`, which is served from
`public/DigitalWellbeingGuard.apk`. To ship a new build:

1. Replace `public/DigitalWellbeingGuard.apk` with the new signed APK.
2. Update the version/size metadata in `app/components/DownloadSection.tsx`.
3. Rebuild and verify: `curl -sI http://localhost:3000/DigitalWellbeingGuard.apk`

## Structure

```
app/
  layout.tsx          fonts, metadata, theme color
  page.tsx            renders the landing page
  globals.css         design tokens + component classes
  icon.svg            favicon
  robots.ts           robots.txt
  components/
    LandingPage.tsx   section order + motion config
    Header, Hero, Features, HowItWorks, Reviews,
    DownloadSection, Footer, Button
```
