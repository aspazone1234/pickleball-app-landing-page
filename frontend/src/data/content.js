export const ASSETS = {
  logo: "https://customer-assets-gfyr7b9c.emergentagent.net/job_ace-pickleball-pad/artifacts/3qdtclzn_Screenshot%202026-08-16%20203704.png",
  hero: "https://images.pexels.com/photos/30864598/pexels-photo-30864598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  thaltejCourts: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/4459be5a3ee6c10b48643e62f15f0f55e17d3fa1a4897a6d5fa060a690754948.jpeg",
  gandhinagarCourts: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/b3558e6c92a53bdfbf529383847a0b2d5f125313f0c2cde60f68b46daa0f82a2.jpeg",
  domeParty: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/bd6d194bf03bd33119a5cfac81b3c409077a1c448904005956d59ac6458ab8ee.jpeg",
  djCrowd: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/e2db87d39f4891bbf92a637261bc26809aeef0bff5bfa399356fef1b535a670f.jpeg",
  bollywoodLights: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/72f17951c457d88f404473927838552c961f4d09ad39e89f228ae14298448aae.jpeg",
  tcdMocktails: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/a0d03be2dde74023f633723a7c277fa11d250b9d2ad88bfbc729352319164d5b.jpeg",
  tcdInterior: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/9777babc0f26fef40ef0ad5c8272f6eb83ff67257bf76d2849584ce2c6101ea9.jpeg",
  tcdFood: "https://static.prod-images.emergentagent.com/jobs/78bde903-14fc-43b3-9bb1-b0ee3b96cf7f/images/8e906cd742b3e935257b81e226f9f1e1b044f01ed946c4dc2df0ba510e768877.jpeg",
};

export const HERO_SLIDES = [
  { src: ASSETS.hero, alt: "Pickleball player mid-rally at AP Pickleball Club" },
  { src: "https://images.unsplash.com/photo-1711996151738-657bd95b7cdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwzfHxwaWNrbGViYWxsJTIwY291cnQlMjBhY3Rpb258ZW58MHx8fHwxNzg3MDMyODE3fDA&ixlib=rb-4.1.0&q=85", alt: "Match point on the court" },
  { src: ASSETS.thaltejCourts, alt: "AP Pickleball Club courts under lights" },
];

export const APP_LINKS = {
  appStore: "https://apps.apple.com/in/app/ap-pickleball-club/id1669408798",
  playStore: "https://play.google.com/store/search?q=AP%20Pickleball%20Club&c=apps",
};

export const REVIEWS = [
  { name: "Rahul Mehta", initials: "RM", color: "#E63946", time: "2 weeks ago", text: "Best pickleball courts in Ahmedabad! Well maintained surface, great lighting for night games and super easy booking through their app." },
  { name: "Priya Shah", initials: "PS", color: "#0F172A", time: "1 month ago", text: "Amazing vibe at the Thaltej branch. The community here is so welcoming — went from complete beginner to playing tournaments in 3 months!" },
  { name: "Kunal Patel", initials: "KP", color: "#2563EB", time: "3 weeks ago", text: "Booked via WhatsApp and got instant confirmation. Courts are international standard. The Gandhinagar branch is equally fantastic." },
  { name: "Ananya Desai", initials: "AD", color: "#E9A23B", time: "2 months ago", text: "My whole family plays here every weekend. Clean facility, friendly staff and the TCD Cafe next door makes it a perfect outing." },
];

export const BOOKING_WAYS = [
  { id: "app", label: "MOBILE APP", sub: "AP Pickleball Club App" },
  { id: "website", label: "WEBSITE", sub: "appickleballclub.com" },
  { id: "whatsapp", label: "WHATSAPP", sub: "+91 88666 77822" },
];

export const BRANCHES = [
  {
    id: "thaltej",
    name: "AP Club Thaltej",
    city: "Ahmedabad",
    tag: "01 — The Original",
    address: "AP Pickleball Club, Near Aryaman Bunglows, Hebatpur Rd, Thaltej, Ahmedabad, Gujarat 380059",
    phones: ["+91 95120 60060", "+91 98254 23650"],
    hours: "Open 24 × 7",
    courts: "9 Dedicated Courts",
    img: ASSETS.thaltejCourts,
    insta: "@apclubthaltej",
    instaUrl: "https://www.instagram.com/apclubthaltej/",
    mapsUrl: "https://maps.app.goo.gl/vQGMLyVJLtQAkx8z7",
  },
  {
    id: "gandhinagar",
    name: "AP Club Gandhinagar",
    city: "Gandhinagar",
    tag: "02 — The New Arena",
    address: "Infocity Club and Resort, Near Indroda Circle, Infocity, Gandhinagar, Gujarat 382007",
    phones: ["+91 88666 77650", "+91 99982 50050"],
    hours: "Open 24 × 7",
    courts: "6 Dedicated Courts",
    img: ASSETS.gandhinagarCourts,
    insta: "@apclubgandhinagar",
    instaUrl: "https://www.instagram.com/apclubgandhinagar/",
    mapsUrl: "https://share.google/sEG681ljK01hiyDWp",
  },
];

export const MEDIA = [
  { src: "https://images.unsplash.com/photo-1711996151738-657bd95b7cdb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwzfHxwaWNrbGViYWxsJTIwY291cnQlMjBhY3Rpb258ZW58MHx8fHwxNzg3MDMyODE3fDA&ixlib=rb-4.1.0&q=85", handle: "@apclubthaltej", video: false, span: "md:col-span-7 md:row-span-2", label: "Match point, Thaltej" },
  { src: "https://images.pexels.com/photos/32975182/pexels-photo-32975182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", handle: "@apclubgandhinagar", video: true, span: "md:col-span-5", label: "Sunday league highlights" },
  { src: "https://images.pexels.com/photos/36513707/pexels-photo-36513707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", handle: "@apclubthaltej", video: false, span: "md:col-span-5", label: "Fresh paddles in" },
  { src: "https://images.unsplash.com/photo-1737476997205-b3336182f215?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxwaWNrbGViYWxsJTIwbGlmZXN0eWxlfGVufDB8fHx8MTc4NzAzMjgxN3ww&ixlib=rb-4.1.0&q=85", handle: "@apclubgandhinagar", video: false, span: "md:col-span-4", label: "Coach's corner" },
  { src: "https://images.pexels.com/photos/30864598/pexels-photo-30864598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", handle: "@apclubthaltej", video: true, span: "md:col-span-8", label: "Night games under lights" },
];

export const INSTA_PROFILES = [
  {
    id: "thaltej",
    handle: "apclubthaltej",
    url: "https://www.instagram.com/apclubthaltej/",
    city: "Thaltej · Ahmedabad",
    posts: "340",
    followers: "12.6K",
    following: "180",
    bio: "Play. Train. Compete. Connect. 🏓 9 dedicated courts · Open 24×7",
    grid: [MEDIA[0].src, ASSETS.thaltejCourts, MEDIA[2].src],
  },
  {
    id: "gandhinagar",
    handle: "apclubgandhinagar",
    url: "https://www.instagram.com/apclubgandhinagar/",
    city: "Infocity · Gandhinagar",
    posts: "215",
    followers: "8.4K",
    following: "142",
    bio: "The new arena 🏓 6 dedicated courts · Open 24×7 · Book on WhatsApp",
    grid: [MEDIA[1].src, ASSETS.gandhinagarCourts, MEDIA[3].src],
  },
];

export const VENTURES = [
  {
    name: "Bollywood Vibes",
    type: "Dome Party Venue",
    num: "01",
    route: "/bollywood-vibes",
    desc: "An immersive DJ dome where AP Club switches from game mode to party mode. Bollywood music, DJ nights, birthdays and private celebrations — party all night under one spectacular dome.",
    img: ASSETS.domeParty,
  },
  {
    name: "TCD Cafe",
    type: "Mocktail Bar + Cafe",
    num: "02",
    route: "/tcd-cafe",
    desc: "Eat. Sip. Chill. Colourful mocktails, fresh bites and comfy corners — your pre-game fuel, post-match hangout and the perfect pre-party pit stop, right next to the courts.",
    img: ASSETS.tcdInterior,
  },
];

export const CONTACT = {
  whatsapp: "+91 88666 77822",
  whatsappUrl: "https://wa.me/918866677822",
  website: "appickleballclub.com",
  websiteUrl: "https://appickleballclub.com",
  email: "pickleballclub2021@gmail.com",
  phone: "+91 95120 60060",
};
