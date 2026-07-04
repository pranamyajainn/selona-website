// All copy on this site is migrated verbatim from www.selona.ai unless a line
// is tagged FIRST DRAFT (pending client review) or PLACEHOLDER in the section
// that renders it. Spelling of the two CTAs is corrected per the client brief.

export const site = {
  email: "info@selona.ai",
  bookingUrl: "https://meetings-eu1.hubspot.com/rahul4",
  badge: "AI WORKSPACE FOR FINANCE TEAMS",
  // DRAFT: Pending Rahul's approval (audience per deck Slide 1/3)
  headline: "ThinkAIWork automates reporting, reconciliations, and data workflows for finance teams and fractional CFOs",
  // DRAFT: Pending Rahul's approval (derived from deck Slide 1)
  subheadline: "The AI-agnostic workspace that turns controlled inputs into structured, auditable outputs.",
  // DRAFT: Pending Rahul's approval (audience per deck Slide 1/3)
  mission:
    "ThinkAIWork gives finance teams and fractional CFOs a controlled AI workspace: custom contexts and automated workflows without technical complexity.",
  ctaPrimary: "Request a demo",
  ctaSecondary: "Explore Platform",
  // DRAFT: Pending Rahul's approval (audience per deck Slide 1/3)
  footerTagline:
    "ThinkAIWork: the trustable AI workspace for finance teams and fractional CFOs — controlled inputs in, structured, auditable outputs out.",
};

// Product walkthrough: real screens from Selona's Context Accelerator product
// (ThinkAIWork), cleaned from raw screen-recording frames. Descriptions are
// taken verbatim from the product's own on-screen card copy, not invented.
// Output and Library have no dedicated workspace screen in the source
// recordings, so their media is a cropped inset of the real overview screen's
// own card for that stage rather than a fabricated screenshot.
// Lead copy is verbatim from the investor deck (Slide 1) — approved, no
// draft flag needed.
export const platformLead = {
  eyebrow: "ThinkAIWork · Flagship Product",
  heading: "A trustable workspace for your business AI.",
  sub: "ThinkAIWork is the AI-agnostic workspace built for finance teams and fractional CFOs — turning controlled inputs into structured, auditable outputs.",
  image: "/product/overview-a.webp",
};

// Problem section: names and one-line explanations verbatim from the
// investor deck (Slide 2).
export const problems = {
  eyebrow: "THE PROBLEM",
  heading: "Finance AI is broken.",
  intro:
    "Practitioners hesitate to adopt AI because control shifts away from them. Six structural failures keep generic AI out of the finance function.",
  items: [
    {
      name: "Generic Output",
      tagline: "Sounds like every other company",
      body: "No board voice, no company context, no competitive edge.",
    },
    {
      name: "Context Drift",
      tagline: "Every session starts blank",
      body: "Institutional knowledge re-explained monthly — and lost again.",
    },
    {
      name: "No Fixed Structure",
      tagline: "Different analyst, different output",
      body: "The board sees something new every month. No repeatability, no trust.",
    },
    {
      name: "Exploding Token Cost",
      tagline: "API bills scale invisibly",
      body: "Same context re-sent every call. No visibility, no control over spend.",
    },
    {
      name: "Model Lock-in",
      tagline: "Switch models, everything breaks",
      body: "Workflows, prompts and outputs all vendor-trapped.",
    },
    {
      name: "Cluttered Context",
      tagline: "Files everywhere, adoption stalls",
      body: "Different teams, projects and geographies bury context in confusion.",
    },
  ],
};

// Feature grid: four real ThinkAIWork features, verbatim from the investor
// deck (Slide 3). Token Optimizer is a platform feature, not a separate
// product.
export const features = [
  {
    name: "Out-of-box skills",
    body: "Plug-and-play head start for generic finance use cases.",
  },
  {
    name: "Token Optimizer",
    body: "Cost control — keep AI inside your budget, transparently.",
  },
  {
    name: "Library of contexts",
    body: "Reusable contexts, skills and files for the whole function.",
  },
  {
    name: "Memory that never forgets",
    body: "Easy search, versioning and storage of files needed for audit.",
  },
];

// Differentiator claim, verbatim from the investor deck (Slide 4).
export const differentiator =
  "Model flexibility — start on Claude, run Anthropic, OpenAI or local models (Llama, Mistral) without rebuilding context.";

// Traction data, verbatim from the investor deck (Slide 6).
export const traction = {
  eyebrow: "TRACTION",
  heading: "MVP ready — and already in use.",
  sub: "MVP is ready and in the hands of real fractional CFOs, two enterprise deals are closing, and three partnerships extend our reach.",
  stats: [
    { value: "10", label: "Fractional CFOs using the platform" },
    { value: "2", label: "Enterprise deals in progress" },
    { value: "15", label: "Strong prospects in pipeline" },
  ],
  partnershipsLabel: "Partnerships signed",
  partnerships: [
    {
      name: "Sookti AI",
      body: "Mid-market finance functions running SAP as the general ledger.",
    },
    {
      name: "DevRev",
      body: "Finance function for the agentic AI platform.",
    },
    {
      name: "Automation Anywhere",
      body: "Automation of core finance processes.",
    },
  ],
};

export const platformStages = [
  {
    step: "01",
    name: "Build Context",
    body: "Define your company's voice, KPIs, board communication style, and AI behaviour rules.",
    cta: "Open Builder",
    image: "/product/build-context.webp",
  },
  {
    step: "02",
    name: "Usecases",
    body: "Choose a pre-built workflow: board deck, VAT reconciliation, audit report, and more.",
    cta: "Browse Usecases",
    image: "/product/usecases.webp",
  },
  {
    step: "03",
    name: "Input Data",
    body: "Upload datasets, schemas, and source files that ground your analysis in real numbers.",
    cta: "Manage Files",
    image: "/product/input-data.webp",
  },
  {
    step: "04",
    name: "Output",
    body: "Configure output templates, report formats, and how results are presented.",
    cta: "Configure Output",
    image: "/product/output-card.webp",
  },
  {
    step: "05",
    name: "Skills & Plugins",
    body: "Create slash commands and upload skill packs to extend your AI analysis workflow.",
    cta: "Manage Skills",
    image: "/product/skills-plugins.webp",
  },
  {
    step: "06",
    name: "Library",
    body: "Browse saved contexts, past project configurations, and all your assets ready to deploy.",
    cta: "Open Library",
    image: "/product/library-card.webp",
  },
];

export const stats = [
  { value: "95%", label: "Client satisfaction" },
  { value: "20+", label: "AI specialist" },
  { value: "24/7", label: "Support" },
  { value: "40%", label: "Average efficiency gain" },
];

export const services = [
  {
    name: "AI Consulting",
    body: "Identification of AI Use Cases, AI Architectural Consulting, Small Language Models",
    image: "/services/ai-consulting.webp",
  },
  {
    name: "AI Agent Development",
    body: "We develop AI-driven Agents with advanced cognitive technologies to elevate customer support and automate business operations.",
    image: "/services/ai-agent-development.webp",
  },
  {
    name: "AI Talent",
    body: "Global Talent, Gig Economy workers, Computer Science Graduates, University associations",
    image: "/services/ai-talent.webp",
  },
  {
    name: "Agentic Business Process Platform",
    body: "Workflow Automation, Integration, Document Analysis, Edge and Privacy first applications",
    image: "/product/overview-a.webp",
  },
];

// DRAFT: Pending Rahul's approval
export const journey = [
  {
    step: "01",
    name: "Setup",
    title: "Import and configure your data schemas",
    body: "ThinkAIWork integrates raw datasets, company policies, and voice guidelines to construct a high-fidelity context foundation.",
  },
  {
    step: "02",
    name: "Automation",
    title: "Launch pre-built finance workflows",
    body: "ThinkAIWork runs automated tasks, from complex VAT reconciliations to board decks, grounded directly in your custom data.",
  },
  {
    step: "03",
    name: "Scaling",
    title: "Extend capabilities with skills and plugins",
    body: "ThinkAIWork scales across teams via slash commands and custom skill packs, constantly refining context for faster, sharper outputs.",
  },
];

// DRAFT: Pending Rahul's approval
export const projects = [
  {
    number: "01",
    name: "Cerebro",
    body: "Cerebro is a lead intelligence platform powered by Agentic AI. The engineering team behind ThinkAIWork led its end-to-end development from design to AI integration and beta testing, preparing it for scale.",
    image: "/credentials/cerebro.webp",
  },
  {
    number: "02",
    name: "Wyzr",
    body: "Wyzr is an AI CFO platform for micro-SMEs, with its redesign, AI validation, and workflows built by the team behind ThinkAIWork.",
    image: "/credentials/wyzr.webp",
  },
  {
    number: "03",
    name: "Sustaintel",
    body: "Sustaintel is a digital sustainability stack for enterprises. The UI/UX frontend and AI-based GRM platform were engineered by the team behind ThinkAIWork.",
    image: "/credentials/sustaintel.webp",
  },
];

export const sectors = [
  "Insurance",
  "Banking and Finance",
  "Life Sciences",
  "GBS / GCC",
  "AI Start ups",
];

// aboutBullets removed: the invented capability bullets are replaced by the
// deck-verbatim `features` grid above (Slide 3).

export const toolLogos = [
  "OpenAI",
  "Claude",
  "Gemini",
  "Miro",
  "Runway",
  "Midjourney",
  "Canva",
  "Clipchamp",
  "Photoshop",
  "Trello",
  "Invideo",
];

export const careers = [
  {
    role: "AI Developer Intern",
    location: "Remote (UK)",
    duration: "3-6 months (with potential for extension or full-time offer)",
    startDate: "Flexible",
    stipend: "GBP 1200 / Month",
    cta: "Apply now",
  },
  {
    role: "AI Developer Intern",
    location: "Remote (India)",
    duration: "3-6 months (with potential for extension or full-time offer)",
    startDate: "Flexible",
    stipend: "INR 35000 / Month",
    cta: "Apply now",
  },
];

// DRAFT: Pending Rahul's approval
// FAQs kept general and directional regarding security, compliance, scaling, and extensibility.
export const faqs = [
  {
    q: "What is ThinkAIWork?",
    a: "ThinkAIWork is an Agentic AI workspace built for finance teams and fractional CFOs. It enables them to build custom data context, configure automated report templates, and run workflows like VAT reconciliation and board deck generation.",
  },
  {
    q: "How does ThinkAIWork automate finance workflows?",
    a: "ThinkAIWork integrates raw datasets, custom rules, and pre-built templates to execute finance operations. Users upload their schemas and source files to ground the AI's analysis in accurate numbers.",
  },
  {
    q: "What makes ThinkAIWork different from generic AI tools?",
    a: "Unlike generic chat interfaces, ThinkAIWork focuses on context acceleration. It uses custom behavior rules, active context libraries, and slash-command plugins to ensure outputs align with enterprise standards.",
  },
  {
    q: "Does the platform support security and compliance?",
    a: "Yes. Data protection and privacy are built into our design philosophy. Detailed security policies and integration specifications are available upon request.",
  },
  {
    q: "Can teams extend ThinkAIWork's capabilities?",
    a: "Absolutely. ThinkAIWork features an extensible skills and plugins framework, letting teams configure custom skill packs and slash commands to match their operations.",
  },
];

// Pricing structure rebuilt around the real revenue model (investor deck,
// Slide 7): four streams. The deck specifies structure, not prices —
// specific figures are deliberately absent, PENDING Rahul's input; the
// previous $30/hour and $2,400/week figures were invented and are removed.
export const pricingIntro = {
  eyebrow: "PRICING",
  // DRAFT: Pending Rahul's approval
  heading: "Priced the way finance teams buy",
  sub: "Three distinct revenue streams plus ongoing professional services.",
  donation:
    "We donate 2% the Subscription billing to Women STEM Students Hackathons.",
};

export const pricingTiers = [
  {
    name: "User License",
    // PLACEHOLDER: per-seat figure pending Rahul's input
    price: "Per seat",
    period: " · billed annually",
    model: "Recurring",
    description:
      "Multi-tenant, role-based platform access — charged per seat, billed annually.",
    features: [],
    note: null,
    highlighted: true,
  },
  {
    name: "Context Building",
    // PLACEHOLDER: per-file figure pending Rahul's input
    price: "Per context file",
    period: " · one-time",
    model: "One-time",
    description:
      "Parent and use-case context, priced per delivered context (.md) file.",
    features: [],
    note: null,
    highlighted: false,
  },
  {
    name: "Skills & AI Agents",
    // PLACEHOLDER: per-skill figure pending Rahul's input
    price: "Per skill",
    period: " · one-time",
    model: "One-time",
    description:
      "Charged per skill, priced by integration complexity and level of build.",
    features: [],
    note: null,
    highlighted: false,
  },
  {
    name: "Professional Services",
    // PLACEHOLDER: managed-services figure pending Rahul's input
    price: "Managed",
    period: " · yearly",
    model: "Recurring",
    description:
      "Context maintenance and enhancements over time, on a recurring managed-services basis.",
    features: [],
    note: null,
    highlighted: false,
  },
];

// Changelog: selona.ai/changelog currently carries Framer template residue
// ("OrbAI" entries), which is not Selona content. Entries below are PLACEHOLDER
// structure awaiting real release notes.
// DRAFT: Pending Rahul's approval
export const changelogIntro = {
  eyebrow: "UPDATES",
  heading: "Fresh Takes & Updates",
  sub: "Updates and releases for the ThinkAIWork platform",
};

export const changelogEntries = [
  {
    date: "Placeholder date",
    tag: "Changelog",
    title: "Placeholder: first release note pending",
    body: "This entry is a placeholder awaiting Selona's real release notes. The live selona.ai changelog currently contains Framer template content that was not carried over.",
  },
  {
    date: "Placeholder date",
    tag: "Announcement",
    title: "Placeholder: first announcement pending",
    body: "This entry is a placeholder awaiting Selona's real announcements.",
  },
];

export const navLinks = [
  { label: "About Us", href: "/#about-us" },
  { label: "Platform", href: "/#platform" },
  { label: "Pricing", href: "/pricing" },
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about-us" },
      { label: "Platform Walkthrough", href: "/#platform" },
      { label: "Case Proofs", href: "/#credentials" },
      { label: "Our Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Updates", href: "/changelog" },
      { label: "FAQ's", href: "/#faq" },
      { label: "Careers", href: "/apply-now" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book a consultation", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];
