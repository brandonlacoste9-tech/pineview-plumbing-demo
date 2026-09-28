const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "801 771-8652",
  "hero.kicker": "Layton, Utah · New construction to remodels",
  "hero.title": "Plumbing for<br>every project.",
  "hero.sub": "4.8-star rated (16 reviews): new construction, remodels, service and repair — water heaters, softeners and everything in between.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Fri",
  "stats.hours": "Open weekdays",
  "stats.makesNum": "4.8",
  "stats.makes": "rating · 16 reviews",
  "stats.diagNum": "New build +",
  "stats.diag": "remodel specialists",
  "stats.quoteNum": "Water",
  "stats.quote": "heaters & softeners",
  "services.kicker": "What we do",
  "services.title": "Full-service plumbing",
  "services.s1t": "New construction plumbing",
  "services.s1d": "Full rough-in and finish plumbing for new homes — done right from the start.",
  "services.s2t": "Remodel plumbing",
  "services.s2d": "Bathroom and kitchen remodels — moving lines, new fixtures, clean work.",
  "services.s3t": "Water heaters",
  "services.s3d": "Tank and tankless water heaters repaired and installed.",
  "services.s4t": "Water softeners & RO",
  "services.s4d": "Softeners and reverse-osmosis systems for better water throughout your home.",
  "services.s5t": "Service & repair",
  "services.s5d": "Leaks, faucets, toilets — everyday repairs handled fast.",
  "services.s6t": "Sump pumps & septic",
  "services.s6d": "Sump pumps, grease traps and septic service for your property.",
  "walkin.w1t": "4.8 rated",
  "walkin.w1d": "16 customer reviews",
  "walkin.w2t": "Full-service",
  "walkin.w2d": "Construction to repair",
  "walkin.w3t": "Local & accountable",
  "walkin.w3d": "Owned by Sheldon Olsen",
  "makes.kicker": "All major brands",
  "makes.title": "We service every brand",
  "makes.sub": "Fixtures and equipment from all the brands homeowners trust.",
  "why.kicker": "Why choose us",
  "why.title": "Layton's full-service plumber",
  "why.intro": "From new construction to a dripping faucet — one team handles it all. Owner Sheldon Olsen has built Pineview on straightforward work and fair dealing.",
  "why.l1t": "New build to repair",
  "why.l1d": "Rough-ins, remodels, service — one call covers it.",
  "why.l2t": "4.8-star rated",
  "why.l2d": "Customers rate us 4.8 across 16 reviews.",
  "why.l3t": "Water specialists",
  "why.l3d": "Heaters, softeners, RO and tankless — we know water.",
  "why.l4t": "Local & accountable",
  "why.l4d": "Owned by Sheldon Olsen — a real local business.",
  "products.kicker": "We install",
  "products.title": "Quality equipment we trust",
  "products.sub": "The same quality equipment we install every day — ask us what's right for your home.",
  "products.p1t": "Tankless water heaters",
  "products.p1d": "Endless hot water with a high-efficiency tankless unit.",
  "products.p2t": "Water softeners",
  "products.p2d": "Softer water that protects your pipes and appliances.",
  "products.p3t": "Fixtures & faucets",
  "products.p3d": "Quality kitchen and bath fixtures, professionally installed.",
  "products.note": "Call us to ask about equipment options for your home.",
  "products.cta": "Call to ask",
  "gallery.kicker": "On the job",
  "gallery.title": "Clean work, every time",
  "gallery.c1": "Tankless water heater installation",
  "gallery.c2": "Clean, careful pipe fitting",
  "gallery.c3": "Professional water softener install",
  "reviews.kicker": "Word on the street",
  "reviews.title": "Rated 4.8 by Layton homeowners",
  "reviews.more": "<strong>4.8 rating · 16 reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Do you do new construction?",
  "faq.a1": "Yes — new construction rough-in and finish plumbing is a core part of our business.",
  "faq.q2": "Tank or tankless water heater?",
  "faq.a2": "Call (801) 771-8652 — we'll size the right system for your household and budget.",
  "faq.q3": "Do you install water softeners?",
  "faq.a3": "Yes — softeners and reverse-osmosis systems, installed cleanly and correctly.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Thursday 7:00 AM to 3:30 PM, Friday 7:00 AM to 12:00 PM.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Thu: 7:00 AM – 3:30 PM<br>Fri: 7:00 AM – 12:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Water heaters",
  "promo.title": "Tank & tankless water heaters",
  "promo.text": "Repair or replacement, tank or tankless — hot water done right, sized for your household and installed cleanly.",
  "promo.cta": "Call Pineview Plumbing",
  "footer.tag": "Full-service plumbing · Layton, Utah"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
