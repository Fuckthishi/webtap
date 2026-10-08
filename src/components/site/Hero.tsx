import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Cpu, Workflow, Sparkles } from "lucide-react";
import TrustBadges from "@/components/site/TrustBadges";

const orbits = [
  { icon: Users, label: "Managed Talent", angle: 0 },
  { icon: Cpu, label: "AI Automation", angle: 120 },
  { icon: Workflow, label: "Ongoing Management", angle: 240 },
];

const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-gradient-primary opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-muted-foreground mb-6 ring-elegant">
              <Sparkles className="w-3.5 h-3.5 text-primary-glow" />
              Managed Remote Teams · Backed by AI
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-[4.25rem] font-bold leading-[1.02] tracking-tight">
              Build a Remote Team
              <br />
              <span className="text-gradient-primary">That Helps Your</span>
              <br />
              Business Grow.
            </h1>

            <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              <span className="text-foreground font-semibold">Webtap</span> builds, manages
              and optimises high-performing remote teams — recruitment,
              training, KPI monitoring, coaching and rapid replacement support
              handled end-to-end.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outlineGlow" size="xl" asChild>
                <a href="#services">Explore our services</a>
              </Button>
            </div>

            <div className="mt-8">
              <TrustBadges className="justify-start" />
            </div>
          </div>

          {/* Orbit visual */}
          <div className="relative hidden lg:block animate-fade-up [animation-delay:150ms]">
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <div className="absolute inset-0 rounded-full border border-border" />
              <div className="absolute inset-[10%] rounded-full border border-border/80" />
              <div className="absolute inset-[22%] rounded-full border border-border/60" />
              <div className="absolute inset-[34%] rounded-full border border-primary/20 border-dashed" />

              <div className="absolute inset-[8%] animate-spin-slow">
                {orbits.map((o) => {
                  const Icon = o.icon;
                  const rad = (o.angle * Math.PI) / 180;
                  const r = 46;
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);
                  return (
                    <div
                      key={o.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className="animate-counter-spin">
                        <div className="flex items-center gap-2 glass rounded-full px-4 py-2 shadow-card">
                          <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-primary text-primary-foreground">
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-xs font-semibold whitespace-nowrap">{o.label}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="absolute inset-[38%] rounded-full bg-gradient-primary shadow-glow grid place-items-center text-primary-foreground">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold">Webtap</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Core</div>
                </div>
              </div>

              <div className="absolute -left-4 top-8 glass rounded-xl p-3 shadow-card animate-float">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Meetings booked</div>
                <div className="font-display text-lg font-bold text-gradient-primary">1,240<span className="text-xs">/mo</span></div>
              </div>
              <div className="absolute -right-4 bottom-10 glass rounded-xl p-3 shadow-card animate-float [animation-delay:1s]">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Retention</div>
                <div className="font-display text-lg font-bold text-gradient-primary">96%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
