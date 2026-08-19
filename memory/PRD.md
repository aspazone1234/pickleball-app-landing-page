# PRD — AP Pickleball Club Website

## Original Problem Statement
Premium, Awwwards-level website for 'AP Pickleball Club' (Gujarat, 2 branches: Thaltej-Ahmedabad & Gandhinagar/Infocity). Logo color scheme (navy #0F172A, red #E63946, light blue #8ECAE6). Framer Motion + Lenis smooth scroll. Multi-page: Home, Contact Us, Bollywood Vibes, TCD Cafe.

## Brand Context (user provided, June 2026)
- AP Pickleball Club: 9 courts Ahmedabad, 6 courts Gandhinagar, both open 24×7. Academy for training. Positioning: "Play. Train. Compete. Connect."
- TCD Cafe: mocktail bar + cafe, "Eat. Sip. Chill.", pre/post-game & pre/post-party hangout.
- Bollywood Vibes: immersive DJ dome party venue, "Music. Energy. Bollywood. Party.", tagline "Bollywood Vibes pe party all night!"

## Real Branch Data (LIVE)
- Thaltej: AP Pickleball Club, Near Aryaman Bunglows, Hebatpur Rd, Thaltej, Ahmedabad 380059 · +91 95120 60060 / +91 98254 23650 · maps.app.goo.gl/vQGMLyVJLtQAkx8z7
- Gandhinagar: Infocity Club and Resort, Near Indroda Circle, Infocity, Gandhinagar 382007 · +91 88666 77650 / +91 99982 50050 · share.google/sEG681ljK01hiyDWp
- WhatsApp bookings: +91 88666 77822 · email pickleballclub2021@gmail.com

## Architecture
- Frontend-only (React, react-router-dom, framer-motion, lenis, react-fast-marquee). Backend untouched (default FastAPI).
- Routes: / (Home), /contact, /bollywood-vibes, /tcd-cafe
- Files: /app/frontend/src/components/landing/*.jsx, /app/frontend/src/pages/{ContactPage,BollywoodVibesPage,TcdCafePage}.jsx, data in /app/frontend/src/data/content.js
- ScrollManager in App.js: scroll-to-top on route change, hash-scroll via window.__lenis when landing on /#section
- Fonts: Clash Display (headings) + Manrope (body)

## Implemented (June 2026)
### Session 1
- Kinetic hero, stats marquee, Google reviews, 3 Ways to Book with CSS phone mockups, branches, Instagram bento, ventures, footer

### Session 2 — tested via testing_agent (iteration_1.json, 95% pass, all issues fixed after)
- Hero: 3-image auto slider w/ clickable dots + parallax; yellow spinning pickleball attached to navy/red paddle with "AP CLUB" text (SVG), responsive & clipped on mobile
- Section swap: Branches (02, dark navy) now BEFORE Booking (03); chapters renumbered
- Booking: mockups on top, headers below, 2 distinct App Store/Google Play badges, extra description text removed
- Branches: branch photos (AI-generated), 9/6 courts badges, real addresses, Open 24×7, Get Directions + Contact Branch (→ /contact); phone/insta removed from cards
- Instagram section: 2 realistic profile cards (avatar, stats, bio, 3-img grid, gradient Follow button) + bento grid
- Navbar: mobile hamburger menu (works), navy Contact Us button next to red Book a Court (hidden on mobile top bar, present in menu panel), page links for Bollywood Vibes/TCD Cafe, cross-route section links
- New pages: /contact (both branches full details, no form), /bollywood-vibes (neon dome page, Download Party Packages → WhatsApp), /tcd-cafe (Eat.Sip.Chill page, Download Menu → WhatsApp)
- Go-live: SEO title/meta/OG in index.html, real data everywhere, overflow-x clip on html/body (mobile fix)
- 8 AI-generated images (courts ×2, dome ×3, cafe ×3) hosted on emergent static CDN

### Session 3 — tested via testing_agent (iteration_2.json, ~98% pass; marquee 4.9→4.5 fixed after)
- Floating WhatsApp bubble (Doodles.jsx FloatingWhatsApp) on every page via App.js
- Paddle reshaped Zeus-style (rounded-square face, short handle) with actual transparent logo image (ASSETS.logoBadge) inside face; PaddleSVG reusable in Doodles.jsx
- Mobile hero: paddle+ball ornament now in-flow next to CTA buttons (no text overlap); desktop keeps absolute version
- Reviews: rating 4.5 + half-star (card + marquee), mobile responsiveness fixed (min-w-0, break-words, responsive paddings)
- Instagram profile cards: followers/following/posts stats removed
- Hero subtext paragraph removed; court-grid background now mimics minimal pickleball court lines (440×220 tiles, kitchen + red net lines)
- Booking: uniform 3-row cards (pill → text → action): app badges / appickleballclub.com link / +91 88666 77822 wa.me link
- Navbar: small Contact Us + Book a Court pills always visible on mobile top bar alongside hamburger
- Decorative mini pickleballs (.ball-spin) + mini paddles sprinkled in Reviews, Branches, Booking, Instagram, Ventures, Footer

## Known Notes
- Instagram profile cards intentionally show NO follower/post counts (user request, session 3)
- Download Menu / Party Packages buttons open WhatsApp with prefilled text (user has no PDFs yet — swap to real files later)
- Google reviews are static mock cards (user-approved)
- CSS gotcha: `.pill-btn` is defined after Tailwind utilities in index.css, so `hidden` class does NOT hide pill buttons — wrap in a hidden container instead

## Backlog / Next
- P1: Real club photos/videos to replace stock/AI media
- P1: Real PDF files for TCD menu & Bollywood Vibes party packages
- P2: Tournament/league banner strip
- P2: Real Google review screenshots
