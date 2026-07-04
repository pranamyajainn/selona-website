import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:3311';
const routes = ['/', '/pricing', '/changelog', '/privacy', '/contact', '/apply-now'];
const widths = [320, 375, 390, 414, 768];

const browser = await chromium.launch();
let anyFail = false;

for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 });
    const { scrollW, clientW } = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));
    const overflow = scrollW > clientW + 1;
    if (overflow) anyFail = true;
    console.log(
      `${overflow ? 'FAIL' : 'ok  '} w=${w} ${route} scrollWidth=${scrollW} clientWidth=${clientW}`,
    );
  }
  await page.close();
}

// CLS check on homepage mobile
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto(base + '/', { waitUntil: 'load', timeout: 30000 });
const cls = await page.evaluate(
  () =>
    new Promise((resolve) => {
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) clsValue += entry.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });
      setTimeout(() => resolve(clsValue), 2500);
    }),
);
console.log(`CLS (home, 390w, 2.5s sample) = ${cls}`);
await page.close();

await browser.close();
if (anyFail) process.exit(1);
