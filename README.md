# New Code website

A single-page, bilingual (Arabic RTL / English LTR) site. Plain HTML, CSS and JavaScript:
**no build step, no dependencies to install** — open `index.html` in a browser.

## Folder structure

```
index.html          Page markup + the Arabic copy (data-i18n elements)
css/style.css       All styles (table of contents + class glossary at the top)
images/             Project cover images, named after the project (mizan.svg, ...)
js/
  data/             <- the files you edit to change content
    projects.js       Portfolio projects (ar + en in one entry)
    content.js        Team, process steps, services, client names, terminal lines, section names
    strings.js        English text for every data-i18n element in index.html
  utils.js          $ / $$ helpers, clamp, template whitespace helper
  state.js          Current language and project filter
  i18n.js           Applies Arabic / English to the static copy
  nav.js            Side navigation dots
  terminal.js       Typing terminal in the services section
  reveal.js         Fade-in on scroll + number count-up
  render.js         Builds the generated HTML (cards, timeline, projects, filters)
  form.js           Contact form (Web3Forms email, WhatsApp fallback)
  scroll.js         Hero tagline rotation, progress bar, nav highlight
  music.js          Generative background music (Web Audio)
  main.js           Language switch + button wiring; starts everything
```

Scripts are loaded in the order listed in `index.html` (data first, `main.js` last).
Each file adds one object to the global `NC` namespace, so it also works from `file://`.

## Common tasks

**Add a project** — copy a cover image (800×500) to `images/`, then add one entry to
`js/data/projects.js` (Arabic and English side by side). Order in the file = order on the page (most important first). Put the project link in `url` and the whole card becomes a link that opens it in a new tab.

**Add a filter category** — add `{ id, label: { ar, en } }` to `NC.projectCategories` in
`js/data/projects.js`, then use that `id` in the projects' `category` field.

**Change static text** (headings, paragraphs) — edit the Arabic in `index.html` and the English
under the same key in `js/data/strings.js`.

**Change team / services / clients / terminal text** — `js/data/content.js` (both languages).

**Add or reorder a page section** — move or add a `<section data-t="Arabic name" id="...">` in
`index.html`, and add its name for each language under `sectionNames` in `js/data/content.js`.
The side navigation follows the page order automatically.

**Colours** — change the variables at the top of `css/style.css` (`--amber`, `--panel`, ...).

**Contact form** — messages go to your email through Web3Forms (free). Get a key at
https://web3forms.com (it arrives by email) and paste it into `web3formsKey` in `js/data/config.js`.
While the key is empty the form opens WhatsApp with the message pre-written.

## Formatting

`.prettierrc.json` and `.editorconfig` are included. If you use Prettier:
`npx prettier --write .`
