/**
 * Generative ambient background music built with the Web Audio API (no audio
 * files). Every 6 seconds a soft chord (pad) plays plus a few random notes
 * (plucks). A low-pass filter opens up as the visitor scrolls down the page.
 */
NC.music = (() => {
  // Frequencies in Hz.
  const CHORDS = [
    [220, 261.63, 329.63],
    [174.61, 220, 261.63],
    [261.63, 329.63, 392],
    [196, 246.94, 293.66],
  ];
  const PLUCK_NOTES = [440, 523.25, 587.33, 659.25, 783.99, 880];

  const BAR_LENGTH_MS = 6000;
  const PLUCKS_PER_BAR = 4;
  const PLUCK_CHANCE = 0.7;
  const MASTER_VOLUME = 0.9;
  const FILTER_MIN_HZ = 700;
  const FILTER_SCROLL_RANGE_HZ = 2600;

  let audioContext = null;
  let masterGain = null;
  let lowpass = null; // every sound goes through this filter
  let nextBarTimer = null;
  let playing = false;

  /** A soft, slightly detuned triangle-wave chord that swells and fades. */
  function playPad(frequencies, startTime) {
    frequencies.forEach((frequency) => {
      [-7, 7].forEach((detune) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = "triangle";
        oscillator.frequency.value = frequency;
        oscillator.detune.value = detune;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.05, startTime + 2);
        gain.gain.linearRampToValueAtTime(0, startTime + 6.5);
        oscillator.connect(gain);
        gain.connect(lowpass);
        oscillator.start(startTime);
        oscillator.stop(startTime + 7);
      });
    });
  }

  /** A short bell-like sine note. */
  function playPluck(frequency, startTime) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.1, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.6);
    oscillator.connect(gain);
    gain.connect(lowpass);
    oscillator.start(startTime);
    oscillator.stop(startTime + 1.7);
  }

  /** Build the audio graph once: filter -> master volume, plus an echo (delay + feedback). */
  function createAudioGraph() {
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioContext.destination);

    lowpass = audioContext.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.value = 900;

    const echo = audioContext.createDelay(2);
    const echoFeedback = audioContext.createGain();
    echo.delayTime.value = 0.45;
    echoFeedback.gain.value = 0.42;

    lowpass.connect(masterGain);
    lowpass.connect(echo);
    echo.connect(echoFeedback);
    echoFeedback.connect(echo);
    echo.connect(masterGain);
  }

  function playBar(barIndex) {
    const startTime = audioContext.currentTime + 0.1;
    playPad(CHORDS[barIndex % CHORDS.length], startTime);

    for (let note = 0; note < PLUCKS_PER_BAR; note++) {
      if (Math.random() < PLUCK_CHANCE) {
        const frequency = PLUCK_NOTES[Math.floor(Math.random() * PLUCK_NOTES.length)];
        playPluck(frequency, startTime + note * 1.5 + Math.random() * 0.3);
      }
    }
  }

  function start() {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume();
    if (!masterGain) createAudioGraph();

    masterGain.gain.cancelScheduledValues(audioContext.currentTime);
    masterGain.gain.setTargetAtTime(MASTER_VOLUME, audioContext.currentTime, 1.2);

    let barIndex = 0;
    (function loop() {
      playBar(barIndex++);
      nextBarTimer = setTimeout(loop, BAR_LENGTH_MS);
    })();

    playing = true;
    NC.scroll.update();
  }

  function stop() {
    clearTimeout(nextBarTimer);
    if (masterGain) masterGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.5);
    playing = false;
  }

  function toggle() {
    if (playing) stop();
    else start();
  }

  /** Open the filter a little more the further down the page the visitor is (progress 0..1). */
  function followScroll(pageProgress) {
    if (!lowpass || !audioContext) return;
    const cutoff = FILTER_MIN_HZ + FILTER_SCROLL_RANGE_HZ * pageProgress;
    lowpass.frequency.setTargetAtTime(cutoff, audioContext.currentTime, 0.4);
  }

  return { toggle, followScroll, isPlaying: () => playing };
})();
