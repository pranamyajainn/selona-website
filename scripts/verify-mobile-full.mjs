// Full mobile verification: screenshots + direct DOM measurements at
// 375/390/414/768. Produces JSON report + PNGs in shots/verify/.
// Every claim in the report is a measured number, not visual inference.
import { chromium } from 'playwright';
import fs from 'node:fs';

const base = process.env.BASE_URL || 'http://localhost:3311';
const widths = [375, 390, 414, 768];
const outDir = 'shots/verify';
fs.mkdirSync(outDir, { recursive: true });

const report = { base, timestamp: new Date().toISOString(), widths: {} };
const browser = await chromium.launch();

// ---------- helper: rect + tap-target info for a locator ----------
const rectInfo = (el) => {
  const r = el.getBoundingClientRect();
  return {
    x: +r.x.toFixed(1), y: +r.y.toFixed(1),
    w: +r.width.toFixed(1), h: +r.height.toFixed(1),
    text: (el.textContent || '').trim().slice(0, 40),
  };
};

for (const w of widths) {
  const height = w === 768 ? 1024 : 844;
  const page = await browser.newPage({
    viewport: { width: w, height },
    isMobile: w < 768,
    hasTouch: w < 768,
  });
  const W = (report.widths[w] = {});

  // ---- HERO ANIMATION PATH: sample transforms DURING the entrance ----
  // Navigate, then poll word-inner transforms every 50ms for 1.5s.
  await page.goto(base + '/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  W.heroAnimation = await page.evaluate(async () => {
    const samples = [];
    const t0 = performance.now();
    while (performance.now() - t0 < 1600) {
      const el = document.querySelector('.word-inner');
      const h1 = document.querySelector('h1');
      if (el) {
        const cs = getComputedStyle(el);
        samples.push({
          t: Math.round(performance.now() - t0),
          transform: cs.transform,
          opacity: cs.opacity,
          filter: cs.filter,
        });
      }
      if (h1 && !samples.h1Perspective) {
        samples.h1Perspective = getComputedStyle(h1).perspective;
      }
      await new Promise((r) => setTimeout(r, 50));
    }
    // A matrix3d or translateZ in any sample = 3D path fired.
    const saw3d = samples.some(
      (s) => s.transform.includes('matrix3d') || s.transform.includes('translateZ'),
    );
    const sawAnimation = samples.some((s) => parseFloat(s.opacity) < 1);
    const h1 = document.querySelector('h1');
    return {
      saw3d,
      sawAnimation,
      sampleCount: samples.length,
      h1Perspective: h1 ? getComputedStyle(h1).perspective : null,
      firstSamples: samples.slice(0, 8),
    };
  });

  // wait for full settle before layout measurements
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);

  // ---- SITEWIDE OVERFLOW ----
  W.overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    const bad = [];
    // find any element wider than viewport (sub-pixel tolerant)
    document.querySelectorAll('body *').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > doc.clientWidth + 1 || r.left < -1) {
        const cs = getComputedStyle(el);
        // ignore intentionally oversized fixed/absolute decorative layers that are clipped
        let p = el.parentElement, clipped = false;
        while (p) {
          const pcs = getComputedStyle(p);
          if (pcs.overflow.includes('hidden') || pcs.overflowX === 'hidden' || pcs.overflowX === 'clip') { clipped = true; break; }
          p = p.parentElement;
        }
        if (!clipped)
          bad.push({
            tag: el.tagName,
            cls: String(el.className).slice(0, 70),
            left: +r.left.toFixed(1),
            right: +r.right.toFixed(1),
          });
      }
    });
    return {
      scrollWidth: doc.scrollWidth,
      innerWidth: window.innerWidth,
      clientWidth: doc.clientWidth,
      horizontalScroll: doc.scrollWidth > doc.clientWidth + 1,
      unclippedWideElements: bad.slice(0, 10),
    };
  });

  // ---- NAV ----
  W.nav = await page.evaluate((rectSrc) => {
    const rectInfo = eval(rectSrc);
    const wrap = document.querySelector('.nav-drop');
    const header = wrap?.querySelector('header');
    const cs = wrap ? getComputedStyle(wrap) : null;
    const hr = header?.getBoundingClientRect();
    return {
      position: cs?.position,
      top: cs?.top,
      bottom: cs?.bottom,
      headerRect: header ? rectInfo(header) : null,
      headerOverflows: hr ? hr.right > document.documentElement.clientWidth + 1 || hr.left < -1 : null,
      logoVisible: !!wrap?.querySelector('a[aria-label="Selona home"]'),
      hamburger: (() => {
        const b = wrap?.querySelector('button[aria-controls="mobile-nav-menu"]');
        return b ? rectInfo(b) : null;
      })(),
      ctaChip: (() => {
        const a = wrap?.querySelector('a[href="/contact"]');
        return a ? rectInfo(a) : null;
      })(),
    };
  }, rectInfo.toString());

  // open menu (mobile widths only render hamburger)
  const burger = page.locator('button[aria-controls="mobile-nav-menu"]');
  if (await burger.isVisible().catch(() => false)) {
    await burger.click();
    await page.waitForTimeout(450);
    W.navMenuOpen = await page.evaluate((rectSrc) => {
      const rectInfo = eval(rectSrc);
      const menu = document.getElementById('mobile-nav-menu');
      const links = [...menu.querySelectorAll('a')].map((a) => {
        const info = rectInfo(a);
        return { ...info, wraps: a.scrollHeight > 60 };
      });
      // vertical gaps between consecutive links
      const gaps = links.slice(1).map((l, i) => +(l.y - (links[i].y + links[i].h)).toFixed(1));
      const mr = menu.getBoundingClientRect();
      return {
        visibleHeight: +mr.height.toFixed(1),
        menuOverflows: mr.right > document.documentElement.clientWidth + 1,
        links, gaps,
        allTappable44: links.every((l) => l.h >= 44),
      };
    }, rectInfo.toString());
    await page.screenshot({ path: `${outDir}/nav-open-${w}.png` });
    await burger.click();
    await page.waitForTimeout(400);
    W.navMenuClosedHeight = await page.evaluate(() => {
      const menu = document.getElementById('mobile-nav-menu');
      return menu.getBoundingClientRect().height;
    });
  }

  // ---- HERO CTAs, glow, grain, video ----
  W.hero = await page.evaluate((rectSrc) => {
    const rectInfo = eval(rectSrc);
    const sec = document.querySelector('section');
    const primary = sec?.querySelector('.btn-premium-primary');
    const secondary = sec?.querySelector('.btn-premium-secondary');
    const video = sec?.querySelector('video');
    const overlays = sec ? [...sec.querySelectorAll(':scope > div[aria-hidden="true"]')] : [];
    const pr = primary?.getBoundingClientRect();
    const sr = secondary?.getBoundingClientRect();
    return {
      primary: primary ? { ...rectInfo(primary), boxShadow: getComputedStyle(primary).boxShadow.slice(0, 80) } : null,
      secondary: secondary ? { ...rectInfo(secondary), backdropFilter: getComputedStyle(secondary).backdropFilter || getComputedStyle(secondary).webkitBackdropFilter } : null,
      sideBySide: pr && sr ? Math.abs(pr.y - sr.y) < 4 : null,
      gap: pr && sr ? +(sr.x - pr.x - pr.width).toFixed(1) : null,
      video: video ? {
        rect: rectInfo(video),
        filter: getComputedStyle(video).filter.slice(0, 90),
        readyState: video.readyState,
        playing: !video.paused,
        currentSrc: video.currentSrc.split('/').pop(),
      } : null,
      glowLayer: overlays[0] ? getComputedStyle(overlays[0]).backgroundImage.slice(0, 120) : null,
      grainLayer: overlays[1] ? {
        opacity: getComputedStyle(overlays[1]).opacity,
        blend: getComputedStyle(overlays[1]).mixBlendMode,
        hasNoiseBg: getComputedStyle(overlays[1]).backgroundImage.includes('svg'),
      } : null,
    };
  }, rectInfo.toString());
  await page.screenshot({ path: `${outDir}/hero-${w}.png` });

  // ---- PLATFORM SECTION (lead + walkthrough tabs) ----
  await page.locator('#platform').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${outDir}/platform-lead-${w}.png` });
  W.platform = await page.evaluate((rectSrc) => {
    const rectInfo = eval(rectSrc);
    const tabs = [...document.querySelectorAll('[role="tab"]')].map((b) => rectInfo(b));
    // overlap check: any two tab rects intersecting
    let overlap = false;
    for (let i = 0; i < tabs.length; i++)
      for (let j = i + 1; j < tabs.length; j++) {
        const a = tabs[i], b = tabs[j];
        if (a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h) overlap = true;
      }
    const clipped = [...document.querySelectorAll('[role="tab"]')].some(
      (b) => b.scrollWidth > b.clientWidth + 1,
    );
    const img = document.querySelector('[role="tablist"] ~ * img, .aspect-\\[3\\/2\\] img');
    const slot = img?.closest('[class*="aspect"]');
    const sr = slot?.getBoundingClientRect();
    return {
      tabCount: tabs.length,
      tabs,
      anyOverlap: overlap,
      anyLabelClipped: clipped,
      allTabs44: tabs.every((t) => t.h >= 44),
      imageSlot: sr ? { w: +sr.width.toFixed(1), h: +sr.height.toFixed(1), ratio: +(sr.width / sr.height).toFixed(3) } : null,
      imgObjectFit: img ? getComputedStyle(img).objectFit : null,
      imgNatural: img ? { nw: img.naturalWidth, nh: img.naturalHeight } : null,
    };
  }, rectInfo.toString());
  const tablist = page.locator('[role="tablist"]');
  await tablist.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${outDir}/platform-tabs-${w}.png` });
  // click a different tab, verify slot ratio holds
  await page.locator('[role="tab"]').nth(3).click();
  await page.waitForTimeout(700);
  W.platformTab4 = await page.evaluate(() => {
    const slot = document.querySelector('[class*="aspect-"][class*="3/2"], .relative.order-1');
    const r = slot?.getBoundingClientRect();
    return r ? { w: +r.width.toFixed(1), h: +r.height.toFixed(1), ratio: +(r.width / r.height).toFixed(3) } : null;
  });
  await page.screenshot({ path: `${outDir}/platform-tab4-${w}.png` });

  // ---- PROMOTED STAT ----
  const statSpan = page.locator('section', { hasText: 'Average efficiency gain' }).locator('span', { hasText: '40%' }).first();
  await statSpan.scrollIntoViewIfNeeded().catch(() => {});
  await page.waitForTimeout(600);
  W.promotedStat = await page.evaluate(() => {
    const spans = [...document.querySelectorAll('span')].filter((s) => s.textContent.trim() === '40%');
    const el = spans.find((s) => s.closest('section')?.textContent.includes('Average efficiency gain'));
    if (!el) return { found: false };
    const r = el.getBoundingClientRect();
    const sec = el.closest('section').getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      found: true,
      fontSize: cs.fontSize,
      numberRect: { w: +r.width.toFixed(1), h: +r.height.toFixed(1), left: +r.left.toFixed(1), right: +r.right.toFixed(1) },
      sectionWidth: +sec.width.toFixed(1),
      overflowsSection: r.left < sec.left - 1 || r.right > sec.right + 1,
      overflowsViewport: r.right > document.documentElement.clientWidth + 1 || r.left < -1,
    };
  });
  await page.screenshot({ path: `${outDir}/promoted-stat-${w}.png` });

  // ---- CTA BAND ----
  const ctaBand = page.locator('section', { hasText: 'Ready to automate your finance workflows' }).first();
  await ctaBand.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  W.ctaBand = await page.evaluate((rectSrc) => {
    const rectInfo = eval(rectSrc);
    const sec = [...document.querySelectorAll('section')].find((s) =>
      s.textContent.includes('Ready to automate your finance workflows'),
    );
    if (!sec) return { found: false };
    const primary = sec.querySelector('.btn-premium-primary');
    const secondary = sec.querySelector('.btn-premium-secondary');
    const textLink = sec.querySelector('a[href*="hubspot"]');
    const pr = primary.getBoundingClientRect();
    const sr = secondary.getBoundingClientRect();
    const tr = textLink?.getBoundingClientRect();
    const cs = getComputedStyle(sec);
    return {
      found: true,
      primary: rectInfo(primary),
      secondary: rectInfo(secondary),
      textLink: textLink ? rectInfo(textLink) : null,
      sideBySide: Math.abs(pr.y - sr.y) < 4,
      gapBetween: +(Math.min(Math.abs(sr.x - (pr.x + pr.width)), Math.abs(pr.x - (sr.x + sr.width)))).toFixed(1),
      combinedWidth: +(pr.width + sr.width).toFixed(1),
      viewport: document.documentElement.clientWidth,
      sectionPaddingX: cs.paddingLeft + ' ' + cs.paddingRight,
      all44: [pr, sr, tr].filter(Boolean).every((r) => r.height >= 44),
      heights: { primary: +pr.height.toFixed(1), secondary: +sr.height.toFixed(1), textLink: tr ? +tr.height.toFixed(1) : null },
    };
  }, rectInfo.toString());
  await page.screenshot({ path: `${outDir}/cta-band-${w}.png` });

  // ---- SECONDARY SECTIONS: overflow + text clipping sweep ----
  W.sections = await page.evaluate(() => {
    const doc = document.documentElement;
    const out = [];
    document.querySelectorAll('main section, body > section, section, footer').forEach((sec) => {
      const label =
        sec.tagName === 'FOOTER'
          ? 'footer'
          : (sec.querySelector('h2,h3,p')?.textContent || '').trim().slice(0, 45);
      const r = sec.getBoundingClientRect();
      const wide = r.right > doc.clientWidth + 1 || r.left < -1;
      // clipped text: element whose scrollWidth exceeds clientWidth (single-line clip)
      const clippedText = [...sec.querySelectorAll('h1,h2,h3,h4,p,a,button,span,li')]
        .filter((el) => {
          const cs = getComputedStyle(el);
          return (
            el.scrollWidth > el.clientWidth + 2 &&
            cs.overflow !== 'visible' &&
            el.clientWidth > 0 &&
            !el.className.toString().includes('word-wrapper')
          );
        })
        .slice(0, 3)
        .map((el) => ({ tag: el.tagName, text: el.textContent.trim().slice(0, 30), sw: el.scrollWidth, cw: el.clientWidth }));
      // small tap targets among interactive elements
      const smallTargets = [...sec.querySelectorAll('a,button')]
        .filter((el) => {
          const rr = el.getBoundingClientRect();
          return rr.width > 0 && rr.height > 0 && (rr.height < 44 || rr.width < 44);
        })
        .slice(0, 5)
        .map((el) => {
          const rr = el.getBoundingClientRect();
          return { text: el.textContent.trim().slice(0, 30), w: +rr.width.toFixed(0), h: +rr.height.toFixed(0) };
        });
      out.push({ label, sectionOverflow: wide, clippedText, smallTargets });
    });
    return out;
  });

  // ---- FAQ accordion tap test ----
  const faqBtn = page.locator('#faq button, section:has-text("FAQ") button').first();
  if (await faqBtn.count()) {
    W.faqTap = await page.evaluate(() => {
      const btns = [...document.querySelectorAll('button')].filter((b) =>
        b.closest('section')?.textContent.includes('ThinkAIWork'),
      );
      const faqButtons = [...document.querySelectorAll('[id*="faq"] button, details summary')];
      const targets = (faqButtons.length ? faqButtons : btns).slice(0, 6).map((b) => {
        const r = b.getBoundingClientRect();
        return { h: +r.height.toFixed(0), text: b.textContent.trim().slice(0, 40) };
      });
      return targets;
    });
  }

  // ---- full-page screenshot ----
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${outDir}/full-${w}.png`, fullPage: true });

  await page.close();
}

// ---- CLS (mobile 390) ----
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.goto(base + '/', { waitUntil: 'load', timeout: 30000 });
  report.cls390 = await page.evaluate(
    () =>
      new Promise((resolve) => {
        let cls = 0;
        const entries = [];
        new PerformanceObserver((list) => {
          for (const e of list.getEntries())
            if (!e.hadRecentInput) {
              cls += e.value;
              entries.push({ value: +e.value.toFixed(4), sources: e.sources?.map((s) => s.node?.tagName || '?') });
            }
        }).observe({ type: 'layout-shift', buffered: true });
        setTimeout(() => resolve({ cls: +cls.toFixed(4), entries }), 4000);
      }),
  );
  await page.close();
}

// ---- Reduced motion sanity (mobile) ----
{
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce',
  });
  await page.goto(base + '/', { waitUntil: 'networkidle', timeout: 30000 });
  report.reducedMotion = await page.evaluate(() => {
    const el = document.querySelector('.word-inner');
    return el ? { opacity: getComputedStyle(el).opacity, transform: getComputedStyle(el).transform } : null;
  });
  await page.close();
}

await browser.close();
fs.writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
console.log('Report written to', `${outDir}/report.json`);
