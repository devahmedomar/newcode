/**
 * Small shared helpers. Loaded first (after the data files); everything else
 * hangs off the global `NC` namespace so the site works from file:// with no build step.
 */
window.NC = window.NC || {};

NC.dom = {
  /** First element matching `selector` inside `root` (default: the document). */
  $(selector, root = document) {
    return root.querySelector(selector);
  },
  /** All elements matching `selector`, as a real array. */
  $$(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  },
};

/** Limit a number to the 0..1 range. */
NC.clamp01 = (value) => Math.max(0, Math.min(1, value));

/**
 * Remove the whitespace that template literals leave *between* tags, so that
 * multi-line templates produce exactly the same DOM as hand-concatenated HTML.
 * (Only whitespace between two tags is removed, never text inside a tag.)
 */
NC.compactHtml = (html) => html.replace(/>\s+</g, "><").trim();
