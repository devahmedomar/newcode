/**
 * Page-level motion: the self-rotating hero taglines, the reading-progress
 * bar, the side-nav highlight and the music filter.
 *
 * The hero itself no longer depends on scrolling: the logo draws itself with
 * CSS when the page loads, and the three taglines below take turns on a timer.
 */
NC.scroll = (() => {
  const { $, $$ } = NC.dom;
  const { clamp01 } = NC;

  const progressBar = $("#bar");
  const taglines = $$(".say div");
  const TAGLINE_FIRST_DELAY_MS = 3600; // let the logo finish drawing first
  const TAGLINE_INTERVAL_MS = 3200;

  let visibleTagline = 0;

  function showTagline(index) {
    visibleTagline = index;
    taglines.forEach((tagline, i) => tagline.classList.toggle("on", i === index));
  }

  /** Rotate the hero taglines automatically (paused while the tab is hidden). */
  function startTaglines() {
    function next() {
      if (!document.hidden) showTagline((visibleTagline + 1) % taglines.length);
      setTimeout(next, TAGLINE_INTERVAL_MS);
    }
    setTimeout(next, TAGLINE_FIRST_DELAY_MS);
  }

  /** Re-calculate every scroll-dependent visual. Safe to call at any time. */
  function update() {
    const viewportHeight = window.innerHeight;
    const pageProgress = clamp01(window.scrollY / (document.body.scrollHeight - viewportHeight));
    progressBar.style.transform = `scaleX(${pageProgress})`;

    NC.nav.highlightCurrent(viewportHeight);
    NC.music.followScroll(pageProgress);
  }

  /** Run update() at most once per animation frame while scrolling. */
  function listen() {
    let frameQueued = false;
    window.addEventListener(
      "scroll",
      () => {
        if (frameQueued) return;
        frameQueued = true;
        requestAnimationFrame(() => {
          update();
          frameQueued = false;
        });
      },
      { passive: true },
    );
    window.addEventListener("resize", update);
    startTaglines();
  }

  return { update, listen };
})();
