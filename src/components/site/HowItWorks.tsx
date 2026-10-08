import { useEffect, useRef, useState } from "react";
import { howItWorksSteps } from "@/data/site";

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-cycle through steps
  useEffect(() => {
    if (!visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setActiveStep((s) => (s + 1) % howItWorksSteps.length);
    }, 2200);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/40 border-y border-border/70 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow animate-fade-in">How it works</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight animate-fade-up">
            From discovery to a fully managed team.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg animate-fade-up" style={{ animationDelay: "120ms" }}>
            A clear, five-step process built to remove the risk from building a remote team.
          </p>
        </div>

        <div ref={sectionRef} className="relative grid md:grid-cols-5 gap-4">
          {/* Base connector line */}
          <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-px bg-border" />
          {/* Progress connector line */}
          <div
            className="hidden md:block absolute top-14 left-[10%] h-px bg-gradient-to-r from-primary via-primary-glow to-primary shadow-glow transition-all duration-[1200ms] ease-out"
            style={{
              width: visible
                ? `${((activeStep + 1) / howItWorksSteps.length) * 80}%`
                : "0%",
            }}
          />

          {howItWorksSteps.map((s, i) => {
            const Icon = s.icon;
            const delay = 200 + i * 180;
            const isActive = i === activeStep;
            const isPassed = i <= activeStep;
            return (
              <div
                key={s.title}
                onMouseEnter={() => setActiveStep(i)}
                className={`group relative bg-card border rounded-2xl p-6 shadow-card hover:-translate-y-1 transition-all duration-500 cursor-pointer ${
                  isActive ? "border-primary/60 shadow-glow -translate-y-1" : "border-border"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? isActive
                      ? "translateY(-6px)"
                      : "translateY(0)"
                    : "translateY(24px)",
                  transition: `opacity 700ms ease-out ${delay}ms, transform 500ms ease-out, border-color 400ms, box-shadow 400ms`,
                }}
              >
                {/* Active glow halo */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/15 to-transparent transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative flex items-start justify-between mb-4">
                  <div
                    className={`relative grid place-items-center w-14 h-14 rounded-2xl text-primary-foreground transition-all duration-500 ${
                      isPassed ? "bg-gradient-primary shadow-glow" : "bg-secondary"
                    } ${isActive ? "scale-110 rotate-3" : ""}`}
                  >
                    {/* Pulsing ring on active */}
                    {isActive && (
                      <>
                        <span className="absolute inset-0 rounded-2xl bg-primary/40 blur-xl opacity-70 animate-glow-pulse" />
                        <span className="absolute -inset-2 rounded-2xl border-2 border-primary/50 animate-ping" />
                      </>
                    )}
                    <Icon
                      className={`w-6 h-6 relative transition-colors ${
                        isPassed ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  {/* Big step number */}
                  <span
                    className={`font-display text-4xl font-black leading-none transition-all duration-500 ${
                      isActive
                        ? "text-transparent bg-gradient-primary bg-clip-text scale-110"
                        : "text-muted/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>

                <div className="text-[10px] uppercase tracking-widest text-primary-glow font-bold">
                  Step {i + 1}
                </div>
                <h3
                  className={`font-display text-lg font-bold mt-1 transition-colors ${
                    isActive ? "text-primary-glow" : ""
                  }`}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>

                {/* Bottom progress bar */}
                <div className="mt-4 h-1 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary transition-all ease-linear"
                    style={{
                      width: isActive ? "100%" : isPassed ? "100%" : "0%",
                      transitionDuration: isActive ? "2200ms" : "500ms",
                    }}
                  />
                </div>

                {i < howItWorksSteps.length - 1 && (
                  <div className="md:hidden text-primary-glow text-center mt-4 text-xl animate-float">↓</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
