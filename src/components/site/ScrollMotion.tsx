import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Scroll-triggered effects for elements carrying data-reveal.
 * Content remains visible without JavaScript and for reduced-motion users.
 */
export default function ScrollMotion() {
  const { pathname } = useLocation();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    // Don't hide headings and cards that are already on-screen when we attach.
    for (const node of nodes) {
      const bounds = node.getBoundingClientRect();
      if (bounds.top <= window.innerHeight * 0.92) {
        node.classList.add("is-visible");
      } else {
        observer.observe(node);
      }
    }
    document.documentElement.classList.add("motion-ready");

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = progressRef.current;
      if (!el) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 0;
      el.style.transform = "scaleX(" + progress + ")";
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div ref={progressRef} aria-hidden="true" className="scroll-progress" />;
}
