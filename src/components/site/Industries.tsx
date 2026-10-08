import { industries } from "@/data/services";

const Industries = () => {
  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Industries we serve</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            Built for the industries we know best.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ten verticals we've built repeatable playbooks for — with the SOPs, tools and talent to match.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.name}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold">{it.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
