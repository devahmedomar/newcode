/**
 * Scroll-reveal: elements with class "rv" fade in (class "in" is added) the
 * first time a quarter of them is visible. Also starts the number count-up
 * (elements with data-n="target") and the terminal typing.
 */
NC.reveal = (() => {
  const { $, $$ } = NC.dom;
  const COUNT_UP_DURATION_MS = 1400;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    },
    { threshold: 0.25 },
  );

  function reveal(element) {
    element.classList.add("in");
    observer.unobserve(element);

    const counter = $("[data-n]", element);
    if (counter) countUp(counter);

    if (element.id === "term") NC.terminal.start(element);
  }

  /** Animate the number inside `counter` from 0 up to its data-n value (ease-out). */
  function countUp(counter) {
    const target = Number(counter.dataset.n);
    let startTime = null;

    function frame(timestamp) {
      startTime = startTime || timestamp;
      const progress = NC.clamp01((timestamp - startTime) / COUNT_UP_DURATION_MS);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /** Reveal `element` when it scrolls into view. */
  function watch(element) {
    observer.observe(element);
  }

  /** Show `element` immediately, without waiting for scroll. */
  function showNow(element) {
    element.classList.add("in");
  }

  /** Start watching everything already marked as revealable in the HTML. */
  function watchPageContent() {
    $$(".rv,.net").forEach(watch);
  }

  return { watch, showNow, watchPageContent };
})();
