import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/webtap-info/book-a-meeting?background_color=0a0f1c&text_color=ffffff&primary_color=3b82f6";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

// Preconnect + preload as soon as this module is imported so assets start
// downloading before the section is even mounted.
if (typeof document !== "undefined") {
  const head = document.head;
  const ensure = (selector: string, create: () => HTMLElement) => {
    if (!head.querySelector(selector)) head.appendChild(create());
  };
  ensure('link[data-calendly="preconnect-assets"]', () => {
    const l = document.createElement("link");
    l.rel = "preconnect";
    l.href = "https://assets.calendly.com";
    l.crossOrigin = "";
    l.setAttribute("data-calendly", "preconnect-assets");
    return l;
  });
  ensure('link[data-calendly="preconnect-app"]', () => {
    const l = document.createElement("link");
    l.rel = "preconnect";
    l.href = "https://calendly.com";
    l.crossOrigin = "";
    l.setAttribute("data-calendly", "preconnect-app");
    return l;
  });
  ensure('link[data-calendly="css"]', () => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = CALENDLY_CSS;
    l.setAttribute("data-calendly", "css");
    return l;
  });
  ensure('script[data-calendly="widget"]', () => {
    const s = document.createElement("script");
    s.src = CALENDLY_SCRIPT;
    s.async = true;
    s.setAttribute("data-calendly", "widget");
    return s;
  });
}

const CalendlyEmbed = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  // Fade-up on view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Initialize widget as soon as Calendly script is available.
  useEffect(() => {
    let cancelled = false;
    let timeout: number | undefined;

    const init = () => {
      if (cancelled || initializedRef.current) return false;
      const parent = widgetRef.current;
      if (parent && window.Calendly?.initInlineWidget) {
        parent.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: parent,
        });
        initializedRef.current = true;
        setReady(true);
        return true;
      }
      return false;
    };

    if (init()) return;

    const ensureScript = () => {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[data-calendly="widget"]'
      );
      if (existing) return existing;
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      script.setAttribute("data-calendly", "widget");
      document.head.appendChild(script);
      return script;
    };

    const script = ensureScript();
    const onLoad = () => init();
    script.addEventListener("load", onLoad);

    // Poll briefly in case script already loaded but event missed.
    const interval = window.setInterval(() => {
      if (init()) window.clearInterval(interval);
    }, 100);
    timeout = window.setTimeout(() => window.clearInterval(interval), 12000);

    return () => {
      cancelled = true;
      script.removeEventListener("load", onLoad);
      window.clearInterval(interval);
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="absolute inset-0 grid-pattern opacity-[0.08] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-primary opacity-[0.15] rounded-full blur-3xl pointer-events-none animate-glow-pulse" />

      <div className={`container relative ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div
          className="mx-auto rounded-3xl overflow-hidden border border-border/60 shadow-elegant bg-gradient-dark relative"
          style={{ maxWidth: 1100 }}
        >
          <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="relative px-4 sm:px-8 md:px-10 pt-10 md:pt-14 pb-6 text-center">
            <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 text-primary-glow mb-5">
              <Calendar className="w-7 h-7" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient leading-tight">
              Book your consultation
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground text-base md:text-lg">
              Pick a slot below — you'll book directly on this page.
            </p>
          </div>

          <div className="relative px-2 sm:px-4 md:px-6 pb-8">
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{ minWidth: "320px", height: "750px" }}
            >
              <div ref={widgetRef} className="h-full w-full" />
              {!ready && (
                <div className="absolute inset-0 grid place-items-center text-muted-foreground text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full border-2 border-primary/40 border-t-primary animate-spin" />
                    Loading calendar…
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyEmbed;
