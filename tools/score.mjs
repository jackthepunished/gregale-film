#!/usr/bin/env node
// Write the score as a WAV without a browser: node tools/score.mjs [cut] [out.wav]
// cut is one of timeline.js's: night (the default), full, nightSlow, fullSlow.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { renderScore } from '../src/sound.js';

const cut = process.argv[2] || 'night', out = process.argv[3] || `out/gregale-${cut}-score.wav`, SR = 44100;
const { l, r } = renderScore(cut), n = l.length, b = Buffer.alloc(44 + n * 4);
b.write('RIFF', 0); b.writeUInt32LE(36 + n * 4, 4); b.write('WAVEfmt ', 8); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(2, 22);
b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 4, 28); b.writeUInt16LE(4, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 4, 40);
for (let i = 0; i < n; i++) { b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, l[i])) * 32767), 44 + i * 4); b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, r[i])) * 32767), 46 + i * 4); }
mkdirSync(dirname(out), { recursive: true }); writeFileSync(out, b);
console.log(`${out}  ${(n / SR).toFixed(2)} s`);
