# PRD — AP Pickleball Club Landing Page

## Original Problem Statement
Landing page website for 'AP Pickleball Club', a pickleball venue in Gujarat with 2 branches (Thaltej-Ahmedabad & Gandhinagar). Use logo color scheme. Sections: creative hero, Google reviews (static cards + see more button), 3 ways of booking with mobile mockups (Mobile App / Website appickleballclub.com / WhatsApp +91 8866677822), 2 branches with directions, Instagram showcase (@apclubthaltej, @apclubgandhinagar) combined with media library, other ventures (Bollywood Vibes dome party venue, TCD Cafe).

## User Choices
- Colors extracted from logo: navy (#0F172A), red (#E63946), light blue (#8ECAE6), white
- Static Google review cards + "See more on Google" button
- Curated static images with Instagram profile links
- Mock branch data (addresses/phones to be updated later by user)

## Architecture
- Frontend-only landing page (React, framer-motion, lenis smooth scroll, react-fast-marquee)
- Backend untouched (default FastAPI hello world)
- Fonts: Clash Display (headings) + Manrope (body)
- Files: /app/frontend/src/components/landing/{Navbar,Hero,StatsMarquee,Reviews,Booking,Branches,InstagramMedia,Ventures,Footer}.jsx, data in /app/frontend/src/data/content.js

## Implemented (June 2026)
- Kinetic hero: masked line-by-line reveal, rotating CSS pickleball with parallax, manifesto chapters 01-03, hero image card
- Editorial stats marquee (navy, red borders)
- Google reviews: 4.9 rating card, 4 review cards, See More on Google button
- 3 Ways to Book: CSS phone mockups (App Store listing / website booking calendar / WhatsApp chat), red pill buttons per reference image
- Branches: dark section, Thaltej & Gandhinagar cards with mock address/phone/hours + Get Directions (Google Maps links)
- Instagram + media library: profile pills for both handles + bento grid with video play overlays
- Other Ventures: Bollywood Vibes + TCD Cafe alternating rows
- Footer: giant "LET'S PLAY", contacts, socials

## Backlog / Next
- P1: Replace mock branch addresses/phones with real data (user to provide)
- P1: Replace stock media with real club photos/videos
- P2: Real Google review screenshots if user provides them
- P2: Mobile hamburger menu for nav links
- P2: Dedicated pages for Bollywood Vibes / TCD Cafe
