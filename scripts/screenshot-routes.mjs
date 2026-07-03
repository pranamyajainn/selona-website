import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const base = process.env.BASE_URL || 'http://localhost:3311';
const outDir = process.env.OUT_DIR || 'shots';
const routes = [
  ['/', 'home'],
  ['/pricing', 'pricing'],
  ['/changelog', 'changelog'],
  ['/privacy', 'privacy'],
  ['/contact', 'contact'],
  ['/apply-now', 'apply-now'],
  ['/definitely-missing', '404'],
];

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();

for (const [vw, vh, tag] of [[1512, 900, 'desktop'], [390, 844, 'mobile']]) {
  const page = await browser.newPage({ viewport: { width: vw, height: vh } });
  // deliverable shots: settled state, no mid-flight entrance animations
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const [route, name] of routes) {
    await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 });
    // walk the page so reveal-on-scroll sections become visible
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += 400) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    // let word-stagger reveals and the nav drop fully settle
    await page.waitForTimeout(3200);
    await page.screenshot({ path: `${outDir}/${name}-${tag}.png`, fullPage: true });
    console.log(`captured ${name}-${tag}`);
  }
  await page.close();
}
await browser.close();
