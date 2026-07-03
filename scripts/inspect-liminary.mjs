import { chromium } from 'playwright';

const out = {};
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1512, height: 900 } });
await page.goto('https://liminary.io/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(3000);

// 1. Hero video rendered aspect ratio + loop behavior
out.heroVideo = await page.evaluate(() => {
  const v = document.querySelector('video');
  if (!v) return null;
  const r = v.getBoundingClientRect();
  return {
    rectW: Math.round(r.width), rectH: Math.round(r.height),
    ratio: (r.width / r.height).toFixed(3),
    intrinsicW: v.videoWidth, intrinsicH: v.videoHeight,
    loopAttr: v.loop, autoplay: v.autoplay, muted: v.muted,
    duration: v.duration, currentTime: v.currentTime, paused: v.paused,
    parentRadius: getComputedStyle(v.parentElement).borderRadius,
  };
});

// watch for loop: seek near end, see if it restarts
out.loopBehavior = await page.evaluate(async () => {
  const v = document.querySelector('video');
  if (!v || !isFinite(v.duration)) return 'no-video-or-metadata';
  v.currentTime = Math.max(0, v.duration - 0.4);
  await new Promise(r => setTimeout(r, 1500));
  return { afterEnd_currentTime: v.currentTime, ended: v.ended, paused: v.paused, loop: v.loop };
});

// 2. Nav scroll-state transition
const navProbe = async () => page.evaluate(() => {
  const h = document.querySelector('div[class*="15uivn1"] header') || document.querySelectorAll('header')[1];
  const hdr = [...document.querySelectorAll('header')].find(e => {
    const p = e.closest('[class*="15uivn1"]');
    return p && getComputedStyle(p).position === 'fixed';
  }) || h;
  if (!hdr) return null;
  const cs = getComputedStyle(hdr);
  return {
    name: hdr.getAttribute('data-framer-name'),
    variantClass: [...hdr.classList].find(c => c.startsWith('framer-v-')),
    bg: cs.backgroundColor, blur: cs.backdropFilter, shadow: cs.boxShadow,
    radius: cs.borderRadius, scrollY: window.scrollY,
  };
});
out.navAtTop = await navProbe();
const steps = [50, 100, 150, 200, 300, 400, 600, 800];
out.navScrollStates = [];
for (const y of steps) {
  await page.evaluate(s => window.scrollTo(0, s), y);
  await page.waitForTimeout(700);
  out.navScrollStates.push(await navProbe());
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);
out.navBackAtTop = await navProbe();

// 3. Text reveal stagger: reload and sample hero h1 word spans over time
await page.goto('https://liminary.io/', { waitUntil: 'domcontentloaded', timeout: 60000 });
out.staggerSamples = await page.evaluate(async () => {
  const samples = [];
  const t0 = performance.now();
  for (let i = 0; i < 40; i++) {
    const spans = [...document.querySelectorAll('h1 span[style*="inline-block"]')].slice(0, 8);
    samples.push({
      t: Math.round(performance.now() - t0),
      op: spans.map(s => parseFloat(getComputedStyle(s).opacity).toFixed(2)),
    });
    await new Promise(r => setTimeout(r, 50));
  }
  return samples;
});

// scroll-triggered char reveal on section 2
out.charReveal = await page.evaluate(async () => {
  const h2s = [...document.querySelectorAll('h2')];
  const target = h2s.find(h => h.textContent.includes("done the research"));
  if (!target) return null;
  target.scrollIntoView({ block: 'center' });
  const samples = [];
  const t0 = performance.now();
  for (let i = 0; i < 40; i++) {
    const spans = [...target.querySelectorAll('span[style*="inline-block"]')].slice(0, 12);
    samples.push({
      t: Math.round(performance.now() - t0),
      op: spans.map(s => parseFloat(getComputedStyle(s).opacity).toFixed(2)),
    });
    await new Promise(r => setTimeout(r, 50));
  }
  return samples;
});

// 4. Button / card hover transforms
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
out.hover = {};
const probeHover = async (locator, key) => {
  try {
    const el = locator.first();
    await el.scrollIntoViewIfNeeded();
    const before = await el.evaluate(e => {
      const cs = getComputedStyle(e);
      return { transform: cs.transform, bg: cs.backgroundColor, color: cs.color, shadow: cs.boxShadow, scale: cs.scale, filter: cs.filter };
    });
    await el.hover();
    await page.waitForTimeout(600);
    const after = await el.evaluate(e => {
      const cs = getComputedStyle(e);
      return { transform: cs.transform, bg: cs.backgroundColor, color: cs.color, shadow: cs.boxShadow, scale: cs.scale, filter: cs.filter };
    });
    out.hover[key] = { before, after };
  } catch (e) { out.hover[key] = 'error: ' + e.message.slice(0, 80); }
};
await probeHover(page.locator('header a:has-text("Download Free")'), 'navDownloadBtn');
await probeHover(page.locator('a:has-text("Download Free")').nth(1), 'heroDownloadBtn');
await probeHover(page.locator('header a:has-text("Pricing")'), 'navLink');
await probeHover(page.locator('[data-framer-name*="Testimonial"]'), 'testimonialCard');

console.log(JSON.stringify(out, null, 1));
await browser.close();
