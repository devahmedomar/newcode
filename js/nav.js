/**
 * Side navigation: one dot per page section (any element with data-t="Name").
 * The dot of the section currently in view is highlighted while scrolling.
 */
NC.nav = (() => {
  const { $, $$ } = NC.dom;
  const navElement = $("#nav");
  let sections = [];
  let dots = [];

  /** Rebuild the dots, using the section names of `lang`. */
  function refresh(lang) {
    const names = NC.content[lang].sectionNames;
    sections = $$("[data-t]");

    sections.forEach((section, index) => {
      if (!section.id) section.id = `s${index}`;
      const name = names[section.id];
      if (name) section.dataset.t = name;
    });

    navElement.innerHTML = sections
      .map((section) => {
        const name = section.dataset.t;
        return `<a href="#${section.id}" aria-label="${name}"><span>${name}</span></a>`;
      })
      .join("");
    dots = $$("a", navElement);
  }

  /** Highlight the last section whose top edge has passed the middle of the screen. */
  function highlightCurrent(viewportHeight) {
    let current = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top < viewportHeight * 0.5) current = index;
    });
    dots.forEach((dot, index) => dot.classList.toggle("on", index === current));
  }

  return { refresh, highlightCurrent };
})();
