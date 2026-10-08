import { Handshake } from "lucide-react";

const ManagementPromise = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dark p-10 md:p-16 text-white shadow-elegant max-w-5xl mx-auto">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-primary opacity-30 blur-3xl rounded-full pointer-events-none animate-glow-pulse" />
          <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />

          <div className="relative">
            <div className="grid place-items-center w-16 h-16 rounded-2xl bg-primary-glow/20 border border-primary/30 text-primary-glow mb-6">
              <Handshake className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary-glow font-semibold">Our management promise</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-3xl">
              Most agencies recruit and disappear. We stay.
            </h2>
            <p className="mt-6 text-white/80 max-w-3xl text-lg leading-relaxed">
              At Webtap, every client receives ongoing performance management,
              regular reviews, workflow optimisation, coaching, and rapid
              replacement support to ensure their remote team continues
              delivering results — month after month, year after year.
            </p>
            <p className="mt-4 text-white/60 max-w-3xl leading-relaxed">
              We're not just another outsourcing agency. We're the long-term
              managed partner that keeps your operation performing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementPromise;
