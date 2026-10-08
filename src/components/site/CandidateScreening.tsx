import { Check } from "lucide-react";
import { screeningSteps } from "@/data/site";

const CandidateScreening = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 border-y border-border/70">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Elite talent, vetted end-to-end</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            Every candidate is carefully vetted.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Fewer than 5% of applicants pass. Every professional you meet has already cleared eight assessments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {screeningSteps.map((s) => (
            <div key={s} className="bg-card border border-border rounded-2xl p-5 shadow-card flex items-center gap-3 hover:border-primary/40 transition-colors">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
                <Check className="w-5 h-5" />
              </span>
              <span className="font-display font-semibold text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateScreening;
