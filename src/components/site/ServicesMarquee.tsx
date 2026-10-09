import { Target, Search, CalendarCheck, Users, Megaphone, Briefcase, ClipboardList, Cpu } from "lucide-react";

const services = [
  { icon: Target, label: "Sales Professionals" },
  { icon: Search, label: "Technical Specialists" },
  { icon: CalendarCheck, label: "Appointment Setters" },
  { icon: Users, label: "Virtual Assistants" },
  { icon: Megaphone, label: "Marketing Talent" },
  { icon: Briefcase, label: "Accounting & Finance" },
  { icon: ClipboardList, label: "Operations & Admin" },
  { icon: Cpu, label: "Software Developers" },
];

const Row = () => (
  <>
    {services.map((s) => {
      const Icon = s.icon;
      return (
        <div
          key={s.label}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-card whitespace-nowrap shrink-0"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-primary text-primary-foreground">
            <Icon className="w-4 h-4" />
          </span>
          <span className="font-display font-semibold text-sm">{s.label}</span>
        </div>
      );
    })}
  </>
);

const ServicesMarquee = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border/70 bg-secondary/50">
      <div className="container">
        <p data-reveal="up" className="text-center eyebrow mb-6">Talent for the roles that matter</p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="flex gap-4 animate-marquee w-max">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
