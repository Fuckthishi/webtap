import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 border-y border-border/70">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Client stories</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            Trusted by growing businesses.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real outcomes from teams that have partnered with Webtap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-3xl p-8 shadow-card hover:border-primary/40 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold text-lg shadow-glow">
                  {t.logo}
                </div>
                <div>
                  <div className="font-display font-bold">{t.company}</div>
                  <div className="text-xs text-muted-foreground">{t.industry} · {t.size}</div>
                </div>
              </div>
              <Quote className="w-6 h-6 text-primary-glow mb-3" />
              <p className="text-foreground/90 leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
