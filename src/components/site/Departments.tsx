import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { pillars } from "@/data/services";

const Departments = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Managed departments</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            Pick the function you want to scale.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Three managed departments, each with dedicated trained talent, SOPs
            and a Webtap manager owning quality and reporting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const featured = i === 0;
            return (
              <Link
                key={p.id}
                to={p.path}
                className={`group relative rounded-3xl p-8 flex flex-col transition-all hover:-translate-y-1 shadow-card ${
                  featured
                    ? "bg-gradient-dark text-white border border-primary/40"
                    : "bg-card border border-border hover:border-primary/40"
                }`}
              >
                {featured && (
                  <div className="absolute inset-0 grid-pattern opacity-[0.06] rounded-3xl pointer-events-none" />
                )}
                <div className="relative">
                  <div className={`grid place-items-center w-14 h-14 rounded-2xl mb-5 ${featured ? "bg-primary-glow/20 text-primary-glow" : "bg-gradient-primary text-primary-foreground shadow-glow"}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`text-xs uppercase tracking-[0.2em] font-semibold ${featured ? "text-primary-glow" : "text-primary-glow"}`}>
                    {p.badge}
                  </span>
                  <h3 className="font-display text-2xl font-bold mt-2">{p.title}</h3>
                  <p className={`text-sm mt-2 ${featured ? "text-white/85" : "text-foreground/80"}`}>{p.short}</p>
                  <p className={`text-sm mt-3 leading-relaxed ${featured ? "text-white/70" : "text-muted-foreground"}`}>
                    {p.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-8 pt-6 border-t flex items-center justify-between text-sm font-semibold ${featured ? "border-white/15 text-primary-glow" : "border-border/70 text-primary group-hover:text-primary-glow"}`}>
                    Explore {p.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Not sure where to start?{" "}
          <Link to="/contact" className="text-primary hover:text-primary-glow transition-colors font-semibold">
            Book a consultation
          </Link>{" "}
          and we'll help you scope the right first hire.
        </p>
      </div>
    </section>
  );
};

export default Departments;
