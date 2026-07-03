# Selona Design System (derived from selona.ai capture, applied to Liminary structural map)

## Color tokens (all pulled from Selona's live assets)

| Token | Hex | Source |
|---|---|---|
| ink | #2C4F7D | Framer token named "dark blue"; logo fill, headings, nav links |
| ink-deep | #0E1229 | dark navy surface used on selona.ai (footer band) |
| action | #247CF0 | primary button blue on selona.ai |
| sky | #0099FF | link/accent blue on selona.ai |
| mist | #F5F5F5 | light section surface token |
| paper | #FFFFFF | page background |
| body-60 | rgba(0,0,0,0.6) | mission paragraph text color on selona.ai |
| tint | #F0F8FF (90%) | pale blue card tint used on selona.ai |

## Type roles (families and weights extracted from Selona text-layer presets)

- Display: Satoshi 700 (500 for sub-display). Used with restraint: hero h1, section h2 only.
  Scale carried from Liminary structural map: h1 40/28/26, display h2 50/40/32 at 110%,
  secondary h2 36/32/20, h3 26/21/17, tracking tightened (-0.02em to -0.03em).
- Body: Inter 400/500. 18px lead at 1.3, 16px body at 1.6, matching Selona presets
  (Inter 400 16px/150%, 14px/160%).
- Utility: Satoshi 500, 12 to 14px, uppercase, +0.5px tracking. Used for eyebrows,
  stat labels, badge (matches Selona's uppercase badge treatment and 12px Satoshi preset).

## Motion tokens (measured live on liminary.io via Playwright)

- Hero word reveal: per-word spans, opacity 0.001 + translateY(10px) to 1/0,
  650ms ease-out, 100ms stagger per word.
- Section reveal: uniform fade-up (10px), 400ms ease-out, on scroll into view.
- Nav entrance: translateY(-90px) to 0 + fade, 1100ms, cubic-bezier(0, 0.59, 0.16, 1).
- Mobile nav: bottom pill, spring in from y:150 (approximated with cubic-bezier(0.34, 1.56, 0.64, 1), 1000ms, 100ms delay).
- Desktop nav has NO scroll-state change (verified: transparent pill at all scroll depths).
- Hover: color shifts only, no transforms. Primary button darkens ~12% (matching
  Liminary's rgb(128,187,235) to rgb(102,165,217) shift ratio, applied to #247CF0 to #1E68CC).
- Hero video: 16:9 embedded card, autoplay muted playsinline. Selona's asset is a
  seamless loop so `loop` stays on (Selona's own site loops it; Liminary's plays once).

## Section layout concepts (one sentence each, Liminary map to Selona content)

1. Hero: two-column split, left = badge + word-staggered h1 + lead + CTA row, right = 16:9 looping video card.
2. Announcement strip: bordered card under hero text; Selona counterpart = careers callout (AI Developer Intern, real copy exists).
3. Statement section: oversized display h2 = Selona mission sentence, with founder photo + "Founder of Selona" attribution.
4. Proof section: claim h2 + supporting copy + the four real stats (95% / 20+ / 24/7 / 40%).
5. Switcher section: tabbed feature switcher = Selona's four services (AI Consulting, AI Agent Development, AI Talent, Agentic Business Process Platform).
6. Cards section (Liminary testimonials): Selona project credentials as cards (Cerebro, Wyzr, Sustaintel) + sector chips.
7. Features + ticker: About-us bullets (AI Native Talent / Multidisciplinary team / Pre built Agents) with the AI-tools logo ticker rows (Miro, OpenAI, Claude, Gemini, etc.).
8. Ratings band (Liminary Chrome-store stars): no Selona counterpart, labeled placeholder.
9. CTA band: Book a consultation / Explore solutions.
10. Latest posts/updates: updates column feeds /changelog; blog column = labeled placeholder.
11. FAQ: Selona's five real FAQ items, accordion.
12. Mega footer: Selona footer tagline + link columns + contact email.

## Signature element

The orbit ring: a fine 1px circular ring with a small satellite dot in slow orbit,
derived from Selona's circular logo mark. Appears behind the hero video card corner
and as the active-tab indicator in the services switcher. This is the one element
the page should be remembered by; used nowhere else.

## Anti-generic critique pass (required before code)

- Warm cream bg + high-contrast serif + terracotta: REJECTED and actively corrected.
  Liminary's own cream (rgb 250,248,246) IS this default; carrying it over would import
  another brand's palette. Replaced with Selona paper white + mist panels.
- Near-black with single neon accent: no match; light theme, navy ink.
- Broadsheet hairline-rule newspaper: no match; soft rounded cards, no rules.
- Violet/purple gradient: no purple anywhere in the system. Additional guard: Selona's
  blues are used FLAT, no gradients at all, to avoid the adjacent "blue SaaS gradient"
  cliche. The coral press-quote accent on Liminary is dropped, not replaced.

Revisions made by this critique: (1) dropped Liminary cream for Selona white/mist,
(2) banned gradients outright, (3) dropped coral accent, (4) utility face is Satoshi
caps rather than a mono face, because the mono caption is Liminary's identity, not Selona's.
