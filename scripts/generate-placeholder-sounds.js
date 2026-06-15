/* eslint-disable */
/**
 * Generates placeholder animal sound files into `assets/sounds/<id>.wav`.
 *
 * These are short, pleasant, distinct tones (one per animal) so the app is
 * fully playable today with NO external tools or licensed media. Each tone's
 * pitch and little melody is derived from the animal id, so every animal
 * sounds different.
 *
 * Replace any file with a real recording later — just keep the same filename
 * (`<id>.wav`). The id list below must stay in sync with `src/data/animals.ts`.
 *
 * Run with: npm run generate-sounds
 */

const fs = require('fs');
const path = require('path');

// Keep in sync with the `Animals` array in src/data/animals.ts
const ANIMAL_IDS = [
  // Farm
  'cow', 'pig', 'horse', 'sheep', 'goat', 'chicken', 'rooster', 'duck', 'turkey', 'donkey',
  // Pets
  'dog', 'cat', 'rabbit', 'guineapig', 'parrot', 'mouse',
  // Wild
  'lion', 'tiger', 'elephant', 'monkey', 'bear', 'wolf', 'fox',
  // Birds
  'owl', 'crow', 'eagle', 'penguin', 'chick', 'dove',
  // Bugs
  'bee', 'cricket', 'mosquito', 'fly',
  // Ocean
  'dolphin', 'whale', 'seal',
  // Reptiles
  'frog', 'snake', 'crocodile', 'lizard',
];

const SAMPLE_RATE = 22050;
const DURATION = 0.6; // seconds

/** Simple deterministic string hash. */
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/**
 * Build a 16-bit PCM mono WAV buffer for a short three-note motif derived
 * from the id, with a smooth fade in/out so there are no clicks.
 */
function makeWav(id) {
  const h = hash(id);
  // Base pitch between ~220Hz and ~660Hz, unique per id.
  const base = 220 + (h % 440);
  // A little 3-note motif (multipliers of the base frequency).
  const motif = [1, h % 2 === 0 ? 1.25 : 1.5, h % 3 === 0 ? 2 : 1.5];

  const totalSamples = Math.floor(SAMPLE_RATE * DURATION);
  const samples = new Int16Array(totalSamples);
  const noteLen = Math.floor(totalSamples / motif.length);

  for (let i = 0; i < totalSamples; i++) {
    const noteIndex = Math.min(motif.length - 1, Math.floor(i / noteLen));
    const freq = base * motif[noteIndex];
    const t = i / SAMPLE_RATE;

    // Per-note envelope (fade each note in and out a touch).
    const local = (i - noteIndex * noteLen) / noteLen; // 0..1 within note
    const env = Math.sin(Math.PI * Math.min(1, Math.max(0, local)));

    // Mild harmonic for a warmer tone.
    const value =
      env *
      0.6 *
      (Math.sin(2 * Math.PI * freq * t) + 0.3 * Math.sin(4 * Math.PI * freq * t));

    samples[i] = Math.max(-1, Math.min(1, value)) * 32767;
  }

  const dataSize = samples.length * 2;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  // fmt chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // chunk size
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(1, 22); // mono
  buffer.writeUInt32LE(SAMPLE_RATE, 24);
  buffer.writeUInt32LE(SAMPLE_RATE * 2, 28); // byte rate
  buffer.writeUInt16LE(2, 32); // block align
  buffer.writeUInt16LE(16, 34); // bits per sample
  // data chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);
  for (let i = 0; i < samples.length; i++) {
    buffer.writeInt16LE(samples[i], 44 + i * 2);
  }
  return buffer;
}

const outDir = path.join(__dirname, '..', 'assets', 'sounds');
fs.mkdirSync(outDir, { recursive: true });

for (const id of ANIMAL_IDS) {
  const file = path.join(outDir, `${id}.wav`);
  fs.writeFileSync(file, makeWav(id));
}

console.log(`Generated ${ANIMAL_IDS.length} placeholder sounds in ${outDir}`);
