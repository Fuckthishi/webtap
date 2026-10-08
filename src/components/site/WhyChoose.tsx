import { whyChoose } from "@/data/site";

const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Why businesses choose Webtap</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            A managed partner, not just an agency.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Six reasons growing companies pick Webtap to build and run their remote teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.title} className="group bg-card border border-border rounded-2xl p-7 shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
