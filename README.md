# Angel's Touch Day Spa — Website

A premium, calming, editorial spa website built with Next.js 14, TypeScript,
Tailwind CSS, Framer Motion, and a GSAP-powered "A Moment of Calm" loader.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- Signature "A Moment of Calm" loader (GSAP ripple + falling petal + logo reveal)
- Full-screen video hero, editorial intro, Arrive/Unwind/Restore/Renew brand story
- Services, Featured Treatment, Wellness Benefits, Pamper Parties (Hens & Kids),
  Celebrate Beautifully, Gallery, Testimonials carousel, Why Choose Us,
  Booking CTA, Contact, Hours, Map, Instagram showcase, Final CTA, Footer
- Mobile sticky "Book Now" bar
- SEO: metadata, Open Graph, sitemap.xml, robots.txt, LocalBusiness + Service
  JSON-LD schema
- Brand palette (#8A6B51, #937761, #BFA490, #B19D8D, #F8EDE2) wired into
  `tailwind.config.ts`
- Fonts: Playfair Display + Cormorant Garamond (headings), DM Sans (body)

## Before you launch

1. **Booking link** — `components/BookingCTA.tsx` currently points to
   `https://www.fresha.com`. Replace with your actual Fresha booking URL
   (search for `fresha.com` in the file).
2. **Facebook link** — `components/Footer.tsx` has a placeholder Facebook URL;
   swap in your real page.
3. **More photography** — only your logo and three video clips were supplied.
   The Gallery and Instagram Showcase sections use soft gradient placeholders
   where real photos would go — drop new images into `public/images/` and
   swap them into `components/Gallery.tsx` and `components/InstagramShowcase.tsx`
   for the full editorial-grid effect described in the brief.
4. **Domain** — update `siteUrl` in `app/layout.tsx` and the URLs in
   `app/sitemap.ts` / `app/robots.ts` once your domain is live.

## Deploying

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and deploy
   (no configuration needed — Vercel auto-detects Next.js).
3. Point your domain at the Vercel deployment from your domain registrar.

## Notes on the brief

This build focuses on a strong, production-ready single-page structure using
Framer Motion for scroll reveals (lighter-weight than combining GSAP + Lenis)
and GSAP specifically for the signature loader animation. If you'd like Lenis
smooth-scroll or Lottie petal/water animations layered in on top, those can be
added incrementally — `npm install lenis` for scroll, and `lottie-react` plus
an exported Lottie JSON for the water-ripple sequence.
