import { ongoingManagement } from "@/data/site";

const OngoingManagement = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Support around the hire</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            A clear process around your search.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Additional coordination and onboarding support may be discussed depending on the needs of your role.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ongoingManagement.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="bg-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-colors">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OngoingManagement;
