import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { getPillar, type Pillar } from "@/data/services";

interface Props {
  pillarId: Pillar["id"];
  extra?: React.ReactNode;
}

const PillarPage = ({ pillarId, extra }: Props) => {
  const pillar = getPillar(pillarId);
  const PillarIcon = pillar.icon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Button variant="glass" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                All services
              </Link>
            </Button>
          </div>

          {/* Hero */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-16">
            <div className="max-w-3xl">
              <span className={`eyebrow`}>{pillar.badge}</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-gradient leading-tight">
                {pillar.title}
              </h1>
              <p className="mt-4 text-lg text-foreground/90 font-medium">{pillar.tagline}</p>
              <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                {pillar.desc}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-glow">
                Starting at {pillar.price}
              </div>
            </div>
            <div className="hidden lg:grid place-items-center w-24 h-24 rounded-3xl bg-gradient-primary shadow-glow shrink-0 text-primary-foreground">
              <PillarIcon className="w-12 h-12" />
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {pillar.highlights.map((h) => (
              <div
                key={h}
                className="rounded-2xl p-4 bg-card border border-border shadow-card flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-primary-glow shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{h}</span>
              </div>
            ))}
          </div>

          {/* Services / Offers */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gradient mb-2">
              What we deliver
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Every engagement is custom-scoped. Examples show typical starting
              points — the real shape gets designed with you in discovery.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className={`relative rounded-2xl p-7 flex flex-col shadow-card ${
                      s.featured
                        ? "bg-gradient-dark text-white border border-primary/40"
                        : "bg-card border border-border"
                    }`}
                  >
                    {s.featured && (
                      <span className="absolute -top-3 right-7 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                        Most requested
                      </span>
                    )}
                    <div className={`grid place-items-center w-12 h-12 rounded-xl mb-4 ${s.featured ? "bg-primary-glow/20 text-primary-glow" : "bg-gradient-primary text-primary-foreground shadow-glow"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{s.name}</h3>
                    <p className={`text-xs uppercase tracking-wider font-semibold mt-2 ${s.featured ? "text-primary-glow" : "text-primary-glow"}`}>
                      {s.sub}
                    </p>
                    <p className={`text-sm mt-3 ${s.featured ? "text-white/80" : "text-muted-foreground"}`}>
                      {s.desc}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {s.deliverables.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-6 pt-6 border-t flex-1 ${s.featured ? "border-white/15" : "border-border/60"}`}>
                      <p className={`text-xs uppercase tracking-wider font-semibold mb-3 ${s.featured ? "text-white/60" : "text-muted-foreground"}`}>
                        A good fit for
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.examples.map((ex) => (
                          <span
                            key={ex}
                            className={`text-xs px-2.5 py-1 rounded-full border ${s.featured ? "bg-white/5 border-white/10 text-white/80" : "bg-secondary/60 border-border/60 text-foreground/80"}`}
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>

                    {s.timeline && (
                      <p className="mt-5 text-xs text-primary-glow font-semibold">
                        Typical timeline: {s.timeline}
                      </p>
                    )}

                    <Button
                      variant={s.featured ? "hero" : "outlineGlow"}
                      className="mt-7 w-full"
                      asChild
                    >
                      <Link to="/contact">Request scoping</Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {extra}

          {/* FAQ */}
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">{pillar.title} FAQ</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient">
                Questions, answered.
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {pillar.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-2xl px-5 shadow-card data-[state=open]:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="rounded-3xl bg-gradient-dark text-white p-10 md:p-14 text-center relative overflow-hidden shadow-elegant">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-primary opacity-30 blur-3xl rounded-full pointer-events-none animate-glow-pulse" />
            <div className="relative">
              <h2 className="font-display text-2xl md:text-4xl font-bold">
                Ready to build your {pillar.title.toLowerCase()} team?
              </h2>
              <p className="mt-3 text-white/75 max-w-xl mx-auto">
                Book a 30-minute consultation. We'll come back within 24 hours
                with a proposed team structure and quote.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Book a consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <a href="mailto:webtap.site@gmail.com">
                    <Mail className="w-4 h-4" />
                    webtap.site@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PillarPage;
