#!/usr/bin/env node
// A static file server for the film's dev page: node serve.mjs [port]. No dependencies.
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)));
const PORT = Number(process.argv[2] || process.env.PORT || 5177);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.wav': 'audio/wav', '.mp4': 'video/mp4' };

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = resolve(join(ROOT, normalize(path === '/' ? '/index.html' : path)));
  if (!file.startsWith(ROOT)) { res.writeHead(403).end(); return; }
  // PUT /out/<name>: the page hands a rendered MP4, WAV or still back to be kept in out/
  if (req.method === 'PUT') {
    if (!/^\/out\/[\w.@-]+$/.test(path)) { res.writeHead(403).end(); return; }
    const parts = []; for await (const c of req) parts.push(c);
    await mkdir(join(ROOT, 'out'), { recursive: true }); await writeFile(file, Buffer.concat(parts));
    res.writeHead(200, { 'content-type': 'text/plain' }).end(`kept ${path}`); return;
  }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' }).end(body);
  } catch { res.writeHead(404, { 'content-type': 'text/plain' }).end('not found'); }
}).listen(PORT, '127.0.0.1', () => console.log(`gregale-film: http://localhost:${PORT}`));
