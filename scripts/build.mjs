import { mkdir, copyFile, cp } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
await mkdir(new URL('dist/', root), { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'booking.js', 'showcase.js']) {
  await copyFile(new URL(file, root), new URL(`dist/${file}`, root));
}
await cp(new URL('assets/', root), new URL('dist/assets/', root), { recursive: true });
console.log('WEBTAP built successfully in dist/');
