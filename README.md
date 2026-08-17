# portfolio

its all about aleppo

A dark, motion-heavy single-page portfolio landing page built with React, TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (dev server / build)
- **Tailwind CSS 3** (utility styling, mobile-first)
- **Framer Motion 12** (scroll + viewport animation)
- **Lucide React** (icons)
- **Kanit** (Google Fonts, weights 300–900)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Other scripts:

```bash
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
npm run lint     # type-check only
```

## Structure

```
src/
├─ App.tsx                  # section order + page wrapper
├─ index.css                # reset, Kanit font, .hero-heading gradient
├─ components/
│  ├─ AnimatedText.tsx      # char-by-char scroll reveal
│  ├─ ContactButton.tsx     # gradient pill CTA
│  ├─ FadeIn.tsx            # whileInView fade/slide wrapper
│  ├─ LiveProjectButton.tsx # ghost outline pill
│  └─ Magnet.tsx            # magnetic mouse-follow effect
├─ data/
│  ├─ marquee.ts            # marquee reel URLs
│  ├─ projects.ts           # project cards
│  └─ services.ts           # service list
└─ sections/
   ├─ HeroSection.tsx       # nav, giant heading, magnetic portrait
   ├─ MarqueeSection.tsx    # two scroll-driven image rows
   ├─ AboutSection.tsx      # animated bio + corner 3D props
   ├─ ServicesSection.tsx   # white panel, 5 numbered services
   └─ ProjectsSection.tsx   # sticky card-stacking projects
```

## Design tokens

| Token      | Value                                                |
| ---------- | ---------------------------------------------------- |
| Background | `#0C0C0C`                                            |
| Text       | `#D7E2EA`                                            |
| Light panel| `#FFFFFF` on `#0C0C0C` text                          |
| Heading    | `linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`  |
| CTA        | `linear-gradient(123deg, #18011F, #B600A8, #7621B0, #BE4C00)` |

Breakpoints are Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px) with `clamp()` used throughout for fluid typography.

## Notes

Portrait, decorative 3D props, marquee reels and project imagery are currently remote placeholder URLs. Swap them for your own assets in `src/data/*.ts` and `src/sections/HeroSection.tsx` / `AboutSection.tsx`.
