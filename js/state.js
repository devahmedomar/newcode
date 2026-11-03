/**
 * The few values that change while the visitor uses the page.
 * Modules read them when they need them; only main.js changes them.
 */
window.NC = window.NC || {};

NC.state = {
  /** Current language: "ar" (default) or "en". */
  lang: "ar",
  /** Selected project filter: "all" or a category id from NC.projectCategories. */
  projectCategory: "all",
  /** True until the first full render has finished (decides how cards are revealed). */
  isFirstRender: true,
};
