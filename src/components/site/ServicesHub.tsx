import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { pillars } from "@/data/services";

const ServicesHub = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">
            What we do
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient">
            Pick the service you need.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three independent crafts under one roof. Tap a card to dive into
            the offers, examples and FAQs for that specific service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const featured = i === 1;
            return (
              <Link
                key={p.id}
                to={p.path}
                className={`group relative rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1 ${
                  featured
                    ? "bg-gradient-card border border-primary/50 shadow-glow"
                    : "bg-gradient-card border border-border hover:border-primary/40"
                }`}
              >
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary shadow-glow mb-5">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className={`text-xs uppercase tracking-[0.2em] font-semibold ${p.badgeColor}`}>
                  {p.badge}
                </span>
                <h3 className="font-display text-2xl font-bold mt-2">{p.title}</h3>
                <p className="text-sm text-foreground/80 mt-2">{p.short}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>

                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-6 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-primary-glow group-hover:text-primary transition-colors">
                  Explore {p.title.toLowerCase()}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          Not sure where to start?{" "}
          <a href="#contact" className="text-primary-glow hover:text-primary transition-colors font-semibold">
            Tell us what you're working on
          </a>{" "}
          and we'll point you in the right direction.
        </p>
      </div>
    </section>
  );
};

export default ServicesHub;
