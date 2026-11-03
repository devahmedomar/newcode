/**
 * English versions of every element tagged data-i18n="key" in index.html.
 * The Arabic originals live in the HTML itself and are captured at start-up
 * (see NC.i18n.captureArabic in js/i18n.js), so a new static string needs:
 *   - data-i18n="some.key" on the element, with the Arabic text inside it
 *   - an entry "some.key" below with the English text
 */
window.NC = window.NC || {};

NC.englishStrings = {
  say0: "<b>Every product</b> starts with one line.",
  say1: "This isn’t just a logo.<br><b>It’s a door.</b>",
  say2: "Come, let us tell you <b>the story.</b>",
  "hero.cta1": "See our work",
  "hero.cta2": "Start your project",
  mq: "IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ ",
  "culture.h": "How do we work together?",
  "culture.c0h": "// We test before we ship",
  "culture.c0p": "Nothing reaches the client until we’ve tried to break it first.",
  "culture.c1h": "// Honesty first",
  "culture.c1p": "If there’s a problem, the client hears it from us before they find it.",
  "culture.c2h": "// We learn every day",
  "culture.c2p": "One hour a week to try a new technology, with no delivery pressure.",
  "culture.c3h": "// Code gets reviewed",
  "culture.c3p": "Every line is reviewed by a teammate before merging. No lone heroes.",
  "process.h": "Every project takes the same road.",
  "services.h": "And this is what we can build for you.",
  "exp.h": "The numbers speak.",
  "exp.p0": "Projects delivered",
  "exp.p1": "Years of experience",
  "exp.p2": "Engineers and designers",
  "exp.p3": "% of clients came back",
  "acad.h":
    'We don’t just build products. <span style="color:var(--amber)">We build programmers.</span>',
  "acad.c0h": "Programming Basics",
  "acad.c0p": "8 weeks · Beginner",
  "acad.c1h": "Web Development",
  "acad.c1p": "12 weeks · Intermediate",
  "acad.c2h": "Mobile Apps",
  "acad.c2p": "10 weeks · Intermediate",
  "acad.grads": "Academy graduates",
  "work.h": "Projects we’ve designed and built.",
  "work.l":
    "University systems, point of sale, online stores, learning platforms and mobile apps across fintech, food, HR and on-demand services, designed Arabic-first for Saudi Arabia and Egypt. Click any project to open it.",
  "end.h": "This story is still being written.",
  "end.l": "And the next line could be your project.",
  "end.btn": "Write the new code with us",
  "contact.wa": "WhatsApp",
  "contact.call": "Call",
  "contact.mail": "Email",
  "form.h": "Or send us a message",
  "form.name": "Name",
  "form.phone": "Mobile number",
  "form.email": "Email (optional)",
  "form.service": "What do you need?",
  "form.s0": "Choose a service",
  "form.s1": "Mobile app",
  "form.s2": "Website or online store",
  "form.s3": "System or dashboard",
  "form.s4": "UI/UX design",
  "form.s5": "Something else",
  "form.msg": "Your message",
  "form.msg.ph": "Tell us about your idea in a few lines",
  "form.send": "Send message",
  foot: "© New Code Academy · All rights reserved",
};
