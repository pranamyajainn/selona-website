import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:3311';
const browser = await chromium.launch();

for (const [vw, vh, tag] of [[1512, 900, 'desktop'], [390, 844, 'mobile']]) {
  const page = await browser.newPage({ viewport: { width: vw, height: vh } });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base + '/', { waitUntil: 'networkidle', timeout: 30000 });
  const lead = await page.locator('section:has(img[alt*="six-stage overview"])');
  await lead.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await lead.screenshot({ path: `shots/platform-lead-${tag}.png` });

  const walkthrough = page.locator('section:has([role="tablist"][aria-label="Context Accelerator stages"])');
  await walkthrough.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await walkthrough.screenshot({ path: `shots/platform-walkthrough-${tag}.png` });

  // cycle through a couple of tabs to confirm switching works
  const tabs = walkthrough.locator('[role="tab"]');
  await tabs.nth(2).click();
  await page.waitForTimeout(300);
  await walkthrough.screenshot({ path: `shots/platform-walkthrough-tab3-${tag}.png` });

  await page.close();
}
await browser.close();
console.log('done');
