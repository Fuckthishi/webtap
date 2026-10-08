import { X, Check } from "lucide-react";
import { traditionalVsWebtap } from "@/data/site";

const Comparison = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Why Webtap is different</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            Traditional recruitment vs Webtap.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Most agencies stop when the contract is signed. We build the operation and stay accountable for the outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10 bg-card border border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-destructive/10 text-destructive">
                <X className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Traditional Recruitment</div>
                <div className="font-display text-xl font-bold">Finds employees. Then disappears.</div>
              </div>
            </div>
            <ul className="space-y-3">
              {traditionalVsWebtap.traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 mt-0.5 text-muted-foreground/70 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-8 md:p-10 bg-gradient-dark text-white border border-primary/40 shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-primary-glow/20 text-primary-glow">
                  <Check className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-glow font-semibold">Webtap</div>
                  <div className="font-display text-xl font-bold">Builds, manages & optimises high-performing teams.</div>
                </div>
              </div>
              <ul className="space-y-3">
                {traditionalVsWebtap.webtap.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                    <Check className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
