import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Globe2, MapPin, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const markets = ["United States", "United Kingdom", "Canada", "Australia"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 hero-mesh" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-48 -right-24 h-[620px] w-[620px] rounded-full bg-primary/10 blur-[110px]" aria-hidden="true" />
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr] xl:gap-20">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-2 text-xs font-semibold tracking-[.13em] uppercase text-primary-glow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
              </span>
              Talent acquisition, precisely matched
            </div>
            <h1 className="mt-7 font-display text-[clamp(3rem,5.5vw,5.8rem)] font-bold leading-[1.02] tracking-[-.055em]">
              Great teams
              <br />
              begin with the
              <br />
              <span className="text-gradient-primary">right people.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              WEBTAP helps businesses find professionals who fit the role,
              the team, and the <span className="font-semibold text-foreground">location where you need them</span>.
              From software developers and assistants to sales, finance and support,
              we turn a clear hiring brief into a focused shortlist.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">
                  Find your next hire <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outlineGlow" asChild>
                <Link to="/services">
                  Explore roles <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-foreground/75">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary-glow" /> Role-specific sourcing</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-glow" /> Your hiring geography</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary-glow" /> You make the final choice</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[590px] animate-fade-up [animation-delay:160ms]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-card shadow-[0_28px_90px_-20px_rgba(0,0,0,.65)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1300&q=85"
                alt="Professionals collaborating on a project around a table"
                fetchPriority="high"
                className="h-[445px] w-full object-cover md:h-[550px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071123] via-[#071123]/25 to-transparent" />
              <div className="absolute left-6 right-6 bottom-7 md:left-8 md:right-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061125]/60 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-lg">
                  <Globe2 className="h-3.5 w-3.5 text-sky-300" /> Location-aware hiring
                </div>
                <p className="max-w-sm font-display text-2xl font-bold leading-snug text-white md:text-3xl">
                  The search fits your business. Not the other way around.
                </p>
              </div>
            </div>
            <div className="absolute -left-5 top-[14%] hidden rounded-2xl border border-white/15 bg-[#0c1629]/95 p-4 shadow-2xl backdrop-blur-xl sm:block xl:-left-12 animate-float">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-white/70">
                <SearchCheck className="h-4 w-4 text-sky-300" /> The hiring brief
              </div>
              <div className="space-y-2">
                <div className="rounded-lg bg-white/[0.07] px-3 py-2 text-xs text-white">Role &amp; skills <span className="ml-2 text-sky-300">✓</span></div>
                <div className="rounded-lg bg-white/[0.07] px-3 py-2 text-xs text-white">Location &amp; eligibility <span className="ml-2 text-sky-300">✓</span></div>
                <div className="rounded-lg bg-white/[0.07] px-3 py-2 text-xs text-white">Team fit <span className="ml-2 text-sky-300">✓</span></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#101e35]/95 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:-right-5 animate-float [animation-delay:1.4s]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-400/15 text-sky-300"><Sparkles className="h-5 w-5" /></span>
              <span className="text-sm"><strong className="block font-semibold">People before buzzwords</strong><span className="text-xs text-white/60">A smarter way to search</span></span>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:gap-8">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">Employer markets</span>
          <div className="flex flex-wrap gap-2.5">
            {markets.map((market) => (
              <span key={market} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-foreground/85">{market}</span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground md:ml-auto">Candidate location follows your brief</span>
        </div>
      </div>
    </section>
  );
}
