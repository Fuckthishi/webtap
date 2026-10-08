import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/site";

const ServicesCategories = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">What we build</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            Every role your remote team needs.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Six categories, dozens of specialists — recruited, trained, managed and optimised end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.id} className="group bg-card border border-border rounded-3xl p-7 shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{c.title}</h3>
                    <p className="text-xs text-primary-glow font-semibold mt-0.5">{c.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {c.roles.map((r) => {
                    const RIcon = r.icon;
                    return (
                      <li key={r.name} className="flex items-start gap-2.5 text-sm">
                        <RIcon className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" />
                        <span>
                          <span className="font-semibold">{r.name}</span>
                          <span className="text-muted-foreground"> — {r.desc}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 pt-6 border-t border-border/60">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary-glow transition-colors">
                    Talk to a Talent Specialist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategories;
