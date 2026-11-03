/**
 * Entry point: owns the language switch and wires the page's buttons to the
 * other modules. Load order is listed in index.html.
 */
(() => {
  const { $ } = NC.dom;
  const state = NC.state;

  const STORAGE_KEY = "nc-lang";
  const BOOTSTRAP_CSS = {
    ar: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css",
    en: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  };

  const root = document.documentElement;
  const langButton = $("#lb");
  const musicButton = $("#sb");
  const projectFilters = $("#flt");

  /* ---------- language ---------- */

  /** localStorage can throw (private mode, blocked cookies), so every access is guarded. */
  function savedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return NC.content[saved] ? saved : "ar"; // ignore unknown values
    } catch (error) {
      return "ar";
    }
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* not saving is fine */
    }
  }

  function setLanguage(lang) {
    const content = NC.content[lang];
    state.lang = lang;

    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    $("#bs").href = BOOTSTRAP_CSS[lang];
    document.title = content.title;
    langButton.textContent = content.langToggleLabel;
    $("span", musicButton).textContent = content.musicLabel;

    NC.i18n.applyStatic(lang);
    NC.render.renderPage(lang, { isFirstRender: state.isFirstRender });
    NC.nav.refresh(lang);

    saveLanguage(lang);
    NC.scroll.update();
  }

  /* ---------- buttons ---------- */

  function onLanguageButtonClick() {
    setLanguage(state.lang === "ar" ? "en" : "ar");
  }

  function onMusicButtonClick() {
    musicButton.classList.remove("nudge"); // stop the attention-grabbing pulse
    NC.music.toggle();
    musicButton.classList.toggle("on", NC.music.isPlaying());
    musicButton.setAttribute("aria-pressed", NC.music.isPlaying());
  }

  function onProjectFilterClick(event) {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    state.projectCategory = button.dataset.category;
    NC.render.renderProjects(state.lang, state.projectCategory);
  }

  /* ---------- start ---------- */

  function init() {
    NC.i18n.captureArabic(); // must run before anything is translated
    NC.reveal.watchPageContent();
    NC.scroll.listen();

    langButton.addEventListener("click", onLanguageButtonClick);
    musicButton.addEventListener("click", onMusicButtonClick);
    projectFilters.addEventListener("click", onProjectFilterClick);

    setLanguage(savedLanguage());
    state.isFirstRender = false;
  }

  init();
})();
