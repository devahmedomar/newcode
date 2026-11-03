/**
 * Language handling for the static copy that is written directly in index.html.
 *
 * Arabic is the default language and lives in the HTML. English comes from
 * NC.englishStrings (js/data/strings.js). Elements opt in with data-i18n="key".
 */
NC.i18n = (() => {
  const { $$ } = NC.dom;
  const arabicStrings = {};
  const arabicPlaceholders = {};

  /** Remember the Arabic text already in the page. Call once, before any translation. */
  function captureArabic() {
    $$("[data-i18n]").forEach((el) => {
      arabicStrings[el.dataset.i18n] = el.innerHTML;
    });
    $$("[data-i18n-ph]").forEach((el) => {
      arabicPlaceholders[el.dataset.i18nPh] = el.getAttribute("placeholder");
    });
  }

  /** Write the text of `lang` into every data-i18n element. */
  function applyStatic(lang) {
    const strings = lang === "ar" ? arabicStrings : NC.englishStrings;
    $$("[data-i18n]").forEach((el) => {
      el.innerHTML = strings[el.dataset.i18n];
    });
    const placeholders = lang === "ar" ? arabicPlaceholders : NC.englishStrings;
    $$("[data-i18n-ph]").forEach((el) => {
      el.setAttribute("placeholder", placeholders[el.dataset.i18nPh]);
    });
  }

  return { captureArabic, applyStatic };
})();
