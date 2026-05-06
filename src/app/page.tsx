import ScrollInit from "@/components/ScrollInit";
import HeroVideo from "@/components/HeroVideo";

/* ── DATA ─────────────────────────────────────────────────── */

const TOOLS = [
  "WordPress", "Webflow", "Framer", "React", "Next.js",
  "Custom Code", "APIs", "CRM", "Email Automation",
  "Dashboards", "Business Tools", "Automation",
  "WordPress", "Webflow", "Framer", "React", "Next.js",
  "Custom Code", "APIs", "CRM", "Email Automation",
  "Dashboards", "Business Tools", "Automation",
];

const SERVICES = [
  {
    num: "01",
    title: "Website Design & Development",
    desc: "Clean, modern, responsive websites built with WordPress, Webflow, Framer, or custom code — designed with clarity, speed, and usability in mind.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "App Development",
    desc: "Custom web apps, client portals, booking systems, and business dashboards that help your users and team get things done faster.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Workflow Automation",
    desc: "From forms and CRM to emails and onboarding flows — we connect the tools behind your daily work so your business moves smoother.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Website Audit & Optimization",
    desc: "A thorough review of your website's speed, UX, SEO, mobile experience, and conversion flow — then we fix what actually matters.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Website Management",
    desc: "Ongoing updates, monitoring, improvements, content support, bug fixes, and optimization to keep your website healthy after launch.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const WHY_ITEMS = [
  {
    num: "01",
    title: "Design-First Thinking",
    desc: "Every project starts with structure, user flow, and clarity — not just visual polish. We build with purpose before we build with pixels.",
  },
  {
    num: "02",
    title: "Clean Development",
    desc: "We build responsive, fast, and maintainable websites, apps, and dashboards. Code that works today and stays clean as you grow.",
  },
  {
    num: "03",
    title: "Automation-Minded Approach",
    desc: "We look beyond the website and connect the tools that run your business. Less manual work, more time for what matters.",
  },
  {
    num: "04",
    title: "Support After Launch",
    desc: "We help you manage, improve, and optimize your digital system over time. No ghosting. No handover headaches.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your business, goals, users, problems, and current setup.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "We define the right structure, features, tools, timeline, and development direction.",
  },
  {
    num: "03",
    title: "Design",
    desc: "We create clean layouts and user-friendly interfaces that match your brand.",
  },
  {
    num: "04",
    title: "Develop",
    desc: "We build your website, app, dashboard, automation, or digital system.",
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "We test, launch, monitor, and support your project after delivery.",
  },
];

/* ── ICONS ────────────────────────────────────────────────── */

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ── PAGE ─────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <ScrollInit />

      {/* ── NAVIGATION ── */}
      <nav className="site-nav" role="banner">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            Skoolen<span>.</span>
          </a>
          <ul className="nav-links" role="list">
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#why" className="nav-link">Why Skoolen</a></li>
            <li><a href="#process" className="nav-link">How We Work</a></li>
          </ul>
          <div className="nav-cta-wrap">
            <a href="#contact" className="btn btn-secondary btn-sm">Contact</a>
            <a href="#contact" className="btn btn-primary btn-sm">Book a Call</a>
          </div>
        </div>
      </nav>

      <div className="page-wrap">

        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "92vh",
            display: "flex",
            alignItems: "center",
            background: "var(--bg-deep)",
            borderBottom: "1px solid var(--border)",
          }}
          aria-label="Hero"
        >
          {/* Background video at 10% opacity */}
          <HeroVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4" />

          <div className="section-inner" style={{ position: "relative", zIndex: 1, paddingTop: "var(--sp-20)", paddingBottom: "var(--sp-20)" }}>
            <span className="hero-eyebrow" data-hero="1">
              Digital Product Agency
            </span>
            <h1 className="hero-title" data-hero="2">
              Build <em>Better</em> Websites,<br />
              Apps, and Business Systems
            </h1>
            <p className="hero-desc" data-hero="3">
              Skoolen helps businesses design, develop, optimize, and manage
              digital products that work beautifully and perform smoothly.
              From modern websites to custom apps, dashboards, and workflow
              automation.
            </p>
            <div className="hero-btns" data-hero="4">
              <a href="#contact" className="btn btn-primary btn-lg">
                Book a Free Consultation
              </a>
              <a href="#services" className="btn btn-secondary btn-lg">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>

        {/* ── TOOLS TICKER ── */}
        <div className="ticker-outer" aria-hidden="true">
          <div className="ticker-track">
            {TOOLS.map((tool, i) => (
              <span key={i} className="ticker-item">
                {tool}
                <span className="ticker-sep" style={{ marginLeft: 48 }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── PROBLEM ── */}
        <section className="section-xl" style={{ background: "var(--bg-primary)" }}>
          <div className="section-inner">
            <div className="problem-grid">
              <div data-scroll="large">
                <span className="section-label">The Challenge</span>
                <h2 className="problem-headline">
                  Your Business Needs More Than<br />
                  Just a <em>Website</em>
                </h2>
              </div>
              <div className="problem-body" data-scroll data-scroll-delay="2">
                <p className="problem-emphasis">
                  A website should not only look good. It should guide visitors,
                  collect leads, support your team, connect your tools, and
                  make your business easier to run.
                </p>
                <p className="problem-text">
                  That is where Skoolen comes in. We help you turn scattered
                  ideas, outdated websites, manual tasks, and disconnected tools
                  into one clean digital experience.
                </p>
                <p className="problem-text">
                  No messy handovers. No random patchwork. No overcomplicated
                  tech talk. Just smart digital work built around your business.
                </p>
                <div style={{ marginTop: "var(--sp-8)" }}>
                  <a href="#contact" className="btn btn-outline btn-md">
                    Let&rsquo;s talk about your project <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="services"
          className="section-xl"
          style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner">
            <div className="section-header-row">
              <div data-scroll="large">
                <span className="section-eyebrow">What We Do</span>
                <h2 className="section-title" style={{ marginBottom: 0 }}>
                  Five Ways We <em>Help</em><br />Your Business Grow
                </h2>
              </div>
              <div data-scroll data-scroll-delay="2" style={{ paddingTop: "var(--sp-3)" }}>
                <p className="section-desc">
                  From initial concept to ongoing support, we cover the full
                  spectrum of digital product work. We choose the right platform
                  based on your project, budget, and long-term goals.
                </p>
              </div>
            </div>

            <div className="card-grid-3" data-scroll="fade">
              {SERVICES.map((s, i) => (
                <div key={s.num} className="card-inner" data-scroll data-scroll-delay={String(i + 1)}>
                  <div className="card-body">
                    <div className="card-icon" aria-hidden="true">
                      {s.icon}
                    </div>
                    <span className="card-label">{s.num}</span>
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-desc">{s.desc}</p>
                  </div>
                </div>
              ))}

              {/* CTA card — 6th slot */}
              <div
                className="card-inner-accent"
                data-scroll
                data-scroll-delay="6"
                style={{ padding: "var(--sp-8)" }}
              >
                <div>
                  <span className="card-label">Start a Project</span>
                  <h3
                    className="card-title"
                    style={{ fontSize: "var(--text-2xl)", letterSpacing: "-.03em" }}
                  >
                    Have a project in mind?
                  </h3>
                  <p className="card-desc" style={{ marginBottom: "var(--sp-8)" }}>
                    Whether you are launching something new or improving
                    what you already have — let&rsquo;s talk.
                  </p>
                </div>
                <a href="#contact" className="btn btn-primary btn-md" style={{ alignSelf: "flex-start" }}>
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY SKOOLEN ── */}
        <section
          id="why"
          className="section-xl"
          style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner">
            <div className="section-header" style={{ maxWidth: 600 }}>
              <span className="section-eyebrow" data-scroll="subtle">Why Work With Skoolen</span>
              <h2 className="section-title" data-scroll="large">
                We Build Systems That <em>Stay Useful</em><br />
                As Your Business Grows
              </h2>
              <p className="section-desc" data-scroll data-scroll-delay="2">
                We do not just build things that look good in a screenshot.
                We build digital systems that feel clear, work smoothly, and
                support your team over time.
              </p>
            </div>

            <div className="card-grid-2" data-scroll="fade">
              {WHY_ITEMS.map((item, i) => (
                <div
                  key={item.num}
                  className="card-inner"
                  data-scroll
                  data-scroll-delay={String(i + 1)}
                >
                  <div className="card-body">
                    <span className="card-label">{item.num}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section
          id="process"
          className="section-xl"
          style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner">
            <div className="process-grid">
              <div>
                <span className="section-eyebrow" data-scroll="subtle">How We Work</span>
                <h2 className="section-title" data-scroll="large">
                  A Clear Process<br />
                  From Idea to <em>Launch</em>
                </h2>
                <p className="section-desc" data-scroll data-scroll-delay="2">
                  Whether you are launching a new brand, improving an old
                  website, or building a custom app — Skoolen helps you move
                  from idea to execution with a clear process.
                </p>
                <div style={{ marginTop: "var(--sp-10)" }} data-scroll data-scroll-delay="3">
                  <a href="#contact" className="btn btn-outline btn-md">
                    Start the conversation <ArrowRight />
                  </a>
                </div>
              </div>

              <div className="workflow-card" data-scroll>
                {PROCESS_STEPS.map((step) => (
                  <div key={step.num} className="workflow-step">
                    <div className="workflow-num" aria-hidden="true">{step.num}</div>
                    <div className="workflow-info">
                      <div className="workflow-name">{step.title}</div>
                      <div className="workflow-sub">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section
          id="contact"
          className="cta-section"
          aria-label="Contact and consultation booking"
        >
          <div className="cta-inner">
            <span className="section-eyebrow" style={{ marginBottom: "var(--sp-5)" }} data-scroll="subtle">
              Ready to Build?
            </span>
            <h2 className="cta-title" data-scroll="large">
              Have a Website, App,<br />or Workflow <em>Idea?</em>
            </h2>
            <p className="cta-desc" data-scroll data-scroll-delay="2">
              Let&rsquo;s turn it into a clean, useful, and scalable digital
              system. Tell us what you want to build, improve, or automate —
              we&rsquo;ll help you plan the best way forward.
            </p>
            <div className="cta-btns" data-scroll data-scroll-delay="3">
              <a
                href="mailto:hello@skoolen.com"
                className="btn btn-primary btn-lg"
              >
                Book a Free Consultation
              </a>
              <a
                href="mailto:hello@skoolen.com?subject=Website Audit Request"
                className="btn btn-secondary btn-lg"
              >
                Request Website Audit
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="site-footer" role="contentinfo">
          <div className="footer-inner">
            <div className="footer-grid">
              {/* Brand */}
              <div>
                <div className="footer-logo">Skoolen<span style={{ color: "var(--accent)" }}>.</span></div>
                <p className="footer-tagline">
                  Skoolen builds websites, apps, dashboards, automation
                  systems, and digital workflows for businesses that want
                  to grow smarter.
                </p>
              </div>

              {/* Services */}
              <div>
                <span className="footer-col-label">Services</span>
                <nav className="footer-links" aria-label="Footer services">
                  <a href="#services" className="footer-link">Website Design</a>
                  <a href="#services" className="footer-link">Website Development</a>
                  <a href="#services" className="footer-link">App Development</a>
                  <a href="#services" className="footer-link">Workflow Automation</a>
                  <a href="#services" className="footer-link">Website Optimization</a>
                  <a href="#services" className="footer-link">Website Management</a>
                </nav>
              </div>

              {/* Contact */}
              <div>
                <span className="footer-col-label">Contact</span>
                <nav className="footer-links" aria-label="Footer contact">
                  <a href="mailto:hello@skoolen.com" className="footer-link footer-email">
                    hello@skoolen.com
                  </a>
                  <a href="#contact" className="footer-link">Book a Free Consultation</a>
                  <a href="#contact" className="footer-link">Request Website Audit</a>
                </nav>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
              <span className="footer-copy">
                © {new Date().getFullYear()} Skoolen. All rights reserved.
              </span>
              <a href="mailto:hello@skoolen.com" className="footer-email">
                hello@skoolen.com
              </a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
