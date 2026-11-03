/**
 * The fake terminal in the services section. Lines alternate between a typed
 * command and its instant output; the output text depends on the language.
 */
NC.terminal = (() => {
  const COMMANDS = [
    "$ build --app mobile",
    "$ build --web --lang ar,en",
    "$ build --dashboard",
    "$ deploy --prod",
  ];
  const DELAY_PER_CHARACTER = 45;
  const DELAY_AFTER_COMMAND = 350;
  const DELAY_AFTER_OUTPUT = 450;

  let hasStarted = false;

  /** [command, output, command, output, ...] in the current language. */
  function getLines() {
    const outputs = NC.content[NC.state.lang].terminal;
    return COMMANDS.flatMap((command, index) => [command, outputs[index]]);
  }

  function createLineElement(lineIndex) {
    const line = document.createElement("span");
    line.className = lineIndex % 2 ? "o" : "c"; // "o" = output, "c" = command
    line.style.display = "block";
    return line;
  }

  /** Show every line at once (used when the language changes after typing has started). */
  function showAllLines(container) {
    getLines().forEach((text, index) => {
      const line = createLineElement(index);
      line.textContent = text;
      container.appendChild(line);
    });
  }

  /** Type the lines one after another. Runs only once per page visit. */
  function start(container) {
    if (hasStarted) return;
    hasStarted = true;
    container.innerHTML = "";

    const lines = getLines();
    let lineIndex = 0;
    let typedCharacters = 0;
    let lineElement = null;

    (function step() {
      if (lineIndex >= lines.length) return;

      const isOutputLine = lineIndex % 2 === 1;
      if (typedCharacters === 0) {
        lineElement = createLineElement(lineIndex);
        container.appendChild(lineElement);
      }

      if (isOutputLine) {
        lineElement.textContent = lines[lineIndex];
        lineIndex++;
        typedCharacters = 0;
        return setTimeout(step, DELAY_AFTER_OUTPUT);
      }

      typedCharacters++;
      lineElement.textContent = lines[lineIndex].slice(0, typedCharacters);
      if (typedCharacters >= lines[lineIndex].length) {
        lineIndex++;
        typedCharacters = 0;
        setTimeout(step, DELAY_AFTER_COMMAND);
      } else {
        setTimeout(step, DELAY_PER_CHARACTER);
      }
    })();
  }

  /** Re-draw after a language change: empty until typing has started, then fully shown. */
  function render(container) {
    container.innerHTML = "";
    if (hasStarted) showAllLines(container);
  }

  return { start, render };
})();
