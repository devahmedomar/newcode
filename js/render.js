/**
 * Turns the data in js/data/ into HTML. Each function below builds one part of
 * the page; renderPage() runs them all for a given language.
 *
 * The strings come from our own data files (trusted), so they are inserted as
 * HTML on purpose - that lets a text contain <b>, <br> or similar tags.
 */
NC.render = (() => {
  const { $, $$ } = NC.dom;
  const html = NC.compactHtml;

  const ONE_PER_ROW = "col-12";
  const TWO_PER_ROW = "col-12 col-md-6";
  const NETWORK_LINE_SCALE = 0.9; // lines stop a little before the bubble

  /* ---------- small building blocks ---------- */

  const card = (columnClass, content) =>
    html(`<div class="${columnClass}"><div class="nc-card rv">${content}</div></div>`);

  /* ---------- timeline, services ---------- */

  function renderTimeline(steps) {
    $("#tl").innerHTML = steps
      .map(([title, description]) =>
        html(`<div class="st rv">
                <i></i>
                <b>${title}</b>
                <span>${description}</span>
              </div>`),
      )
      .join("");
  }

  function renderServices(services) {
    $("#svc").innerHTML = services
      .map(([title, description]) => card(ONE_PER_ROW, `<h3>${title}</h3><p>${description}</p>`))
      .join("");
  }

  /* ---------- client network (lines + hub + client bubbles) ---------- */

  function renderClientNetwork(clientNames) {
    const positions = NC.clientNetworkPositions;

    const lines = positions
      .map(
        ([x, y]) =>
          `<line x1="0" y1="0" x2="${x * NETWORK_LINE_SCALE}" y2="${y * NETWORK_LINE_SCALE}"/>`,
      )
      .join("");

    const bubbles = positions
      .map(
        ([x, y], index) =>
          `<div class="n" style="--x:${x}px;--y:${y}px">${clientNames[index]}</div>`,
      )
      .join("");

    $("#net").innerHTML =
      `<svg viewBox="-400 -160 800 320" preserveAspectRatio="none">${lines}</svg>` +
      `<div class="hub mono">NC</div>${bubbles}`;
  }

  /* ---------- projects ---------- */

  function categoryLabel(categoryId, lang) {
    return NC.projectCategories.find((category) => category.id === categoryId).label[lang];
  }

  function renderProjectFilters(lang, activeCategoryId) {
    const filters = $("#flt");
    filters.setAttribute("aria-label", NC.content[lang].projectFilterLabel);
    filters.innerHTML = NC.projectCategories
      .map((category) => {
        const isActive = category.id === activeCategoryId;
        return (
          `<button type="button" data-category="${category.id}" aria-pressed="${isActive}"` +
          `${isActive ? ' class="on"' : ""}>${category.label[lang]}</button>`
        );
      })
      .join("");
  }

  /** Optional row of big numbers under a project (project.metrics). */
  function projectMetricsHtml(metrics, lang) {
    if (!metrics || !metrics.length) return "";
    const items = metrics
      .map(
        ({ value, label }) => `<div><b class="mono">${value}</b><span>${label[lang]}</span></div>`,
      )
      .join("");
    return `<div class="res">${items}</div>`;
  }

  function projectCardHtml(project, positionInList, lang) {
    const tags = project.tags[lang].map((tag) => `<span>${tag}</span>`).join("");

    // Clickable card: a real <a> (works with keyboard, middle-click, "copy link") when the project has a url.
    const hasLink = Boolean(project.url);
    const openTag = hasLink
      ? `<a class="wk" href="${project.url}" target="_blank" rel="noopener noreferrer" style="--i:${positionInList}">`
      : `<article class="wk" style="--i:${positionInList}">`;
    const closeTag = hasLink ? "</a>" : "</article>";

    return html(`
      <div class="${TWO_PER_ROW}">
        ${openTag}
          <div class="wk-img">
            <img src="images/${project.image}.svg" alt="${project.imageAlt[lang]}"
                 width="800" height="500" loading="lazy">
            <span class="wk-cat">${categoryLabel(project.category, lang)}</span>
          </div>
          <div class="wk-b">
            <div class="wk-sec">${project.sector[lang]}</div>
            <h3>${project.name[lang]}</h3>
            <p>${project.description[lang]}</p>
            <div class="wk-tags mono">${tags}</div>
            ${projectMetricsHtml(project.metrics, lang)}
          </div>
        ${closeTag}
      </div>`);
  }

  /** Draw the filter buttons and the project cards that match the active filter. */
  function renderProjects(lang, activeCategoryId) {
    renderProjectFilters(lang, activeCategoryId);

    $("#wk").innerHTML = NC.projects
      .filter((project) => activeCategoryId === "all" || project.category === activeCategoryId)
      .map((project, positionInList) => projectCardHtml(project, positionInList, lang))
      .join("");
  }

  /* ---------- whole page ---------- */

  /**
   * Re-draw everything that JavaScript generates, in `lang`.
   * On the very first render the new cards fade in when scrolled to; on later
   * renders (language switch) they are shown immediately.
   */
  function renderPage(lang, { isFirstRender }) {
    const content = NC.content[lang];

    renderTimeline(content.timeline);
    renderServices(content.services);
    renderClientNetwork(content.clients);
    renderProjects(lang, NC.state.projectCategory);
    NC.terminal.render($("#term"));

    $$("#tl .rv,#svc .rv,#net").forEach((element) => {
      if (isFirstRender) NC.reveal.watch(element);
      else NC.reveal.showNow(element);
    });
  }

  return { renderPage, renderProjects };
})();
