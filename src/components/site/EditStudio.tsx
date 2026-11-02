import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Clapperboard,
  Film, Layers3, Menu, MousePointer2, Play, Scissors, Sparkles, Video, X,
} from "lucide-react";
import "./edit-studio.css";

const bookingUrl =
  "https://calendly.com/hassansalehh753/30min?hide_gdpr_banner=1&background_color=0b0b0b&text_color=ffffff&primary_color=ffffff";

const formats = [
  {
    id: "short",
    tab: "SHORT FORM",
    number: "01",
    eyebrow: "VERTICAL / 9:16",
    title: "THE FIRST\nTHREE SECONDS.",
    desc: "Pace, captions, sound and a hook that gives viewers a reason to stay.",
    tags: ["Reels", "Shorts", "TikTok"],
  },
  {
    id: "long",
    tab: "LONG FORM",
    number: "02",
    eyebrow: "WIDESCREEN / 16:9",
    title: "EVERY SECOND\nHAS A PURPOSE.",
    desc: "Story-focused YouTube edits with structure, rhythm and clean transitions.",
    tags: ["YouTube", "Gaming", "Podcasts"],
  },
  {
    id: "brand",
    tab: "BRAND & ADS",
    number: "03",
    eyebrow: "CAMPAIGNS / MULTI-FORMAT",
    title: "MAKE THEM\nREMEMBER.",
    desc: "Product cuts, social ads and brand storytelling with a distinct visual voice.",
    tags: ["Social ads", "Promos", "Launches"],
  },
];

const services = [
  { number: "01", name: "Short-form content", description: "High-energy vertical edits, hooks, captions, motion and sound designed for the feed.", icon: Scissors },
  { number: "02", name: "YouTube & long-form", description: "Story-led editing for videos that need to hold attention beyond the opening.", icon: Film },
  { number: "03", name: "Brand & commercial", description: "Confident product, campaign and promotional content that stays on brand.", icon: Clapperboard },
  { number: "04", name: "Motion & finishing", description: "Titles, graphic treatments, color, audio polish and all the little details.", icon: Layers3 },
];

const faqs = [
  { q: "What kind of videos do you edit?", a: "We focus on short-form social content, YouTube and long-form videos, promotional edits and motion-driven post-production." },
  { q: "Can I send raw footage?", a: "Yes. Share the footage, references, deliverables and your goal. We'll discuss the edit and scope before work begins." },
  { q: "How does pricing work?", a: "Pricing depends on length, complexity, turnaround, assets and revision requirements. We discuss your project before quoting." },
  { q: "Do you offer revisions?", a: "Revisions can be included in the agreed project scope, with the number and process clarified upfront." },
  { q: "How do I get started?", a: "Book a 30-minute introduction using the calendar below. It's embedded here, so you can choose a time without leaving the website." },
];

function Brand() {
  return (
    <a href="/#top" className="es-brand" aria-label="Webtap Edit Studio home">
      <span className="es-brand-icon" aria-hidden="true">W<span>.</span></span>
      <span className="es-brand-name">WEBTAP<span> / EDIT STUDIO</span></span>
    </a>
  );
}

export default function EditStudio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const current = formats[selected];

  useEffect(() => {
    const root = document.querySelector(".es-site");
    if (!root) return;
    root.classList.add("es-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("es-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    root.querySelectorAll(".es-reveal").forEach((element) => observer.observe(element));

    let frame = 0;
    const updateProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
        frame = 0;
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="es-site" id="top">
      <div className="es-progress" style={{ width: scrollProgress + "%" }} aria-hidden="true" />
      <header className="es-header">
        <div className="es-header-inner">
          <Brand />
          <nav className={"es-nav" + (menuOpen ? " es-nav-open" : "")} aria-label="Main navigation">
            <a href="/#work" onClick={() => setMenuOpen(false)}>THE WORK</a>
            <a href="/#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
            <a href="/#process" onClick={() => setMenuOpen(false)}>PROCESS</a>
            <a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </nav>
          <a className="es-header-cta" href="/#book">LET'S TALK <ArrowUpRight size={16} /></a>
          <button className="es-menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="es-hero" aria-labelledby="es-hero-title">
          <div className="es-hero-noise" aria-hidden="true" />
          <div className="es-shell es-hero-grid">
            <div className="es-hero-copy">
              <div className="es-kicker es-reveal"><span className="es-status-dot" /> THE CREATIVE EDITING STUDIO</div>
              <h1 id="es-hero-title" className="es-hero-title es-reveal">WE MAKE<br /><span>EVERY FRAME</span><br />MATTER<span className="es-period">.</span></h1>
              <p className="es-hero-lede es-reveal">Sharp cuts. Strong stories. Content that feels impossible to scroll past. Video editing for creators and brands who care how they show up.</p>
              <div className="es-hero-buttons es-reveal">
                <a href="/#book" className="es-button es-button-light">START A PROJECT <ArrowUpRight size={19} /></a>
                <a href="/#work" className="es-text-button">EXPLORE THE STUDIO <ArrowDown size={18} /></a>
              </div>
              <div className="es-hero-foot es-reveal"><span>01 / EDIT WITH INTENTION</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
            </div>
            <div className="es-hero-stage es-reveal">
              <div className="es-editor">
                <div className="es-editor-top">
                  <span className="es-editor-dots"><i /><i /><i /></span>
                  <span>WEBTAP / FINAL_CUT</span>
                  <span className="es-editor-top-right">PREVIEW <span className="es-live-dot" /></span>
                </div>
                <div className="es-editor-image">
                  <div className="es-editor-art" aria-hidden="true">
                    <span className="es-art-orbit es-art-orbit-one" />
                    <span className="es-art-orbit es-art-orbit-two" />
                    <span className="es-art-core" />
                    <span className="es-art-plus">+</span>
                  </div>
                  <div className="es-editor-overlay"><span>WEBTAP ORIGINAL / 01</span><strong>MAKE IT<br /><em>UNMISSABLE.</em></strong></div>
                  <div className="es-play" aria-hidden="true"><Play size={24} fill="currentColor" /></div>
                  <span className="es-frame-label">16:9 / 4K</span>
                </div>
                <div className="es-editor-controls"><span>00:12:08 / 00:30:00</span><span>● 30 FPS <span className="es-divider-mini">/</span> HQ</span></div>
                <div className="es-editor-timeline" aria-hidden="true">
                  <div className="es-timeline-ruler"><span>00:00</span><span>00:10</span><span>00:20</span><span>00:30</span></div>
                  <div className="es-timeline-row es-timeline-row-one"><i /><i /><i /><i /></div>
                  <div className="es-timeline-row es-timeline-row-two"><i /><i /><i /><i /><i /></div>
                  <div className="es-timeline-wave"><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /><b /></div>
                  <div className="es-playhead" />
                </div>
              </div>
              <div className="es-stage-note"><span>CRAFTED FRAME BY FRAME</span><span>↗ 001</span></div>
            </div>
          </div>
        </section>

        <div className="es-ticker" aria-label="Editing disciplines">
          <div className="es-ticker-track" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index}>STORY FIRST <b>✳</b> BUILT TO ENGAGE <b>✳</b> VISUAL RHYTHM <b>✳</b> NOT JUST ANOTHER CUT <b>✳</b></span>
            ))}
          </div>
        </div>

        <section className="es-statement es-light" aria-labelledby="es-statement-title">
          <div className="es-shell es-statement-layout">
            <div className="es-section-overline es-reveal"><span>01</span> / WHY WE EDIT</div>
            <div>
              <h2 id="es-statement-title" className="es-statement-head es-reveal">GOOD FOOTAGE<br />ISN'T ENOUGH.<br /><span>IT NEEDS A POINT OF VIEW.</span></h2>
              <div className="es-statement-bottom es-reveal"><p>Anyone can cut a clip. The difference is knowing what to keep, what to remove, and how to make the next moment feel inevitable.</p><span className="es-crosshair" aria-hidden="true">✳</span></div>
            </div>
          </div>
        </section>

        <section id="work" className="es-work es-dark" aria-labelledby="es-work-title">
          <div className="es-shell">
            <div className="es-section-heading es-reveal"><div><div className="es-section-overline"><span>02</span> / CREATIVE DIRECTIONS</div><h2 id="es-work-title">THE RIGHT CUT<br /><em>FOR THE FORMAT.</em></h2></div><p>One creative mindset. Different ways to tell the story. Choose a format to explore how we approach the edit.</p></div>
            <div className="es-format-tabs es-reveal" role="tablist" aria-label="Editing formats">
              {formats.map((format, index) => (
                <button key={format.id} type="button" role="tab" id={"es-tab-" + format.id} aria-selected={selected === index} aria-controls="es-format-panel" onClick={() => setSelected(index)} className={"es-format-tab" + (selected === index ? " es-format-tab-active" : "")}><span>{format.number}</span>{format.tab}<ArrowUpRight size={15} /></button>
              ))}
            </div>
            <div className="es-work-panel es-reveal" id="es-format-panel" role="tabpanel" aria-labelledby={"es-tab-" + current.id}>
              <div className="es-work-visual">
                <div className={"es-work-art es-work-art-" + current.id}>
                  <span className="es-art-counter">{current.eyebrow}</span>
                  <div className="es-work-rings" aria-hidden="true"><i /><i /><i /></div>
                  <div className="es-work-art-title">{current.title.split("\n").map((part, i) => <span key={i}>{part}</span>)}</div>
                  <div className="es-work-art-footer"><span>CONCEPT PREVIEW / WEBTAP</span><span>✳ EDIT STUDIO</span></div>
                </div>
                <div className="es-work-bottom-bar"><span><span className="es-live-dot" /> ACTIVE EDIT</span><div className="es-segments"><i /><i /><i /><i /><i /><i /><i /></div><span>00:{String(selected * 7 + 14).padStart(2, "0")}</span></div>
              </div>
              <div className="es-work-description"><span className="es-work-index">FORMAT / {current.number}</span><h3>{current.tab}</h3><p>{current.desc}</p><div className="es-chip-row">{current.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="/#book" className="es-inline-link">LET'S MAKE THIS <ArrowUpRight size={18} /></a></div>
            </div>
            <p className="es-concept-note">Illustrative creative directions — not client work or performance claims.</p>
          </div>
        </section>

        <section id="services" className="es-services es-light" aria-labelledby="es-services-title">
          <div className="es-shell">
            <div className="es-section-heading es-section-heading-light es-reveal"><div><div className="es-section-overline"><span>03</span> / WHAT WE DO</div><h2 id="es-services-title">FROM RAW<br />TO <em>REMARKABLE.</em></h2></div><p>Every project gets a considered edit, a clear creative direction and attention to the details that bring it together.</p></div>
            <div className="es-service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return <article className="es-service-card es-reveal" key={service.number}><div className="es-service-card-top"><span>{service.number} / EDITING</span><Icon size={27} strokeWidth={1.4} /></div><div><h3>{service.name}</h3><p>{service.description}</p></div><ArrowUpRight className="es-service-arrow" size={23} /></article>;
              })}
            </div>
            <div className="es-services-foot es-reveal"><span><Sparkles size={18} /> YOUR VISION. OUR TIMELINE.</span><a className="es-inline-link es-inline-link-dark" href="/#book">TELL US WHAT YOU'RE MAKING <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="es-manifesto es-dark" aria-labelledby="es-manifesto-title">
          <div className="es-shell es-manifesto-inner">
            <p className="es-section-overline es-reveal">WE THINK IN FRAMES. WE WORK IN FEELING.</p>
            <h2 id="es-manifesto-title" className="es-reveal">LESS NOISE.<br /><span>MORE IMPACT.</span></h2>
            <div className="es-manifesto-line es-reveal"><span><MousePointer2 size={19} /> SCROLL WITH PURPOSE</span><span>WEBTAP / EDIT STUDIO</span></div>
          </div>
        </section>

        <section id="process" className="es-process es-light" aria-labelledby="es-process-title">
          <div className="es-shell">
            <div className="es-section-heading es-section-heading-light es-reveal"><div><div className="es-section-overline"><span>04</span> / HOW IT WORKS</div><h2 id="es-process-title">SIMPLE PROCESS.<br /><em>STRONG OUTPUT.</em></h2></div><p>Clear communication from the first brief to the final export.</p></div>
            <div className="es-process-list">
              {[
                ["01", "THE BRIEF", "You share your footage, references, goals and ideal deliverables."],
                ["02", "THE CUT", "We shape the story, find the rhythm and build the edit."],
                ["03", "THE POLISH", "Feedback, sound, color, motion and the fine details."],
                ["04", "THE DELIVERY", "A finished video, exported for the platforms you need."],
              ].map(([number, name, description]) => (
                <div className="es-process-row es-reveal" key={number}><span>{number}</span><h3>{name}</h3><p>{description}</p><ArrowRight size={20} /></div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="es-faq es-dark" aria-labelledby="es-faq-title">
          <div className="es-shell es-faq-layout">
            <div className="es-reveal"><div className="es-section-overline"><span>05</span> / QUESTIONS</div><h2 id="es-faq-title">THE<br /><em>DETAILS.</em></h2><p>No complicated process. Just a clear conversation about your video and what it needs.</p></div>
            <div className="es-faq-list es-reveal">{faqs.map((faq, index) => <details key={faq.q}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.q}<ChevronDown size={20} /></summary><p>{faq.a}</p></details>)}</div>
          </div>
        </section>

        <section id="book" className="es-book es-light" aria-labelledby="es-book-title">
          <div className="es-shell">
            <div className="es-book-intro es-reveal"><div className="es-section-overline"><span>06</span> / YOUR NEXT EDIT STARTS HERE</div><h2 id="es-book-title">LET'S MAKE<br /><em>SOMETHING GOOD.</em></h2><p>Tell us what you're creating. Book a 30-minute introduction right here, without switching to another page.</p></div>
            <div className="es-book-panel es-reveal">
              <div className="es-book-panel-heading"><div><span className="es-book-panel-label"><span className="es-status-dot" /> BOOKINGS OPEN</span><h3>LET'S TALK ABOUT YOUR PROJECT.</h3><p>Choose a time that works for you. Scheduling is powered by Calendly and opens directly below.</p></div><Video size={37} strokeWidth={1} /></div>
              {calendarOpen ? (
                <div className="es-calendar-container">
                  <iframe src={bookingUrl} title="Book a 30-minute call with WEBTAP Edit Studio" loading="eager" allow="fullscreen" />
                  <p>If the calendar does not load, <a href="https://calendly.com/hassansalehh753/30min" target="_blank" rel="noopener noreferrer">open the booking page</a>.</p>
                </div>
              ) : (
                <button className="es-calendar-trigger" type="button" onClick={() => setCalendarOpen(true)}><span className="es-calendar-preview"><span className="es-calendar-icon">✳</span><span>30 MINUTE INTRO CALL</span><span className="es-calendar-dashes" /></span><span className="es-button es-button-light">SEE AVAILABLE TIMES <ArrowUpRight size={20} /></span><small>THE CALENDAR LOADS ONLY WHEN YOU OPEN IT, KEEPING THIS PAGE FAST.</small></button>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="es-footer es-dark">
        <div className="es-shell">
          <div className="es-footer-top"><div><Brand /><p>Thoughtful edits. Built to be watched.</p></div><a href="/#top" className="es-back-top">BACK TO TOP ↑</a></div>
          <div className="es-footer-wordmark" aria-hidden="true">WEBTAP<span>.</span></div>
          <div className="es-footer-bottom"><span>© {new Date().getFullYear()} WEBTAP EDIT STUDIO</span><span>VIDEO EDITING / CREATIVE POST-PRODUCTION</span><a href="/#book">LET'S TALK <ArrowUpRight size={14} /></a></div>
        </div>
      </footer>
    </div>
  );
}
