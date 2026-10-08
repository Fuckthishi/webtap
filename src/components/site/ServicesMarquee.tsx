import { Target, Search, CalendarCheck, Users, Megaphone, Briefcase, ClipboardList, Cpu } from "lucide-react";

const services = [
  { icon: Target, label: "Sales Development" },
  { icon: Search, label: "Lead Generation" },
  { icon: CalendarCheck, label: "Appointment Setting" },
  { icon: Users, label: "Virtual Teams" },
  { icon: Megaphone, label: "Marketing Operations" },
  { icon: Briefcase, label: "Executive Assistants" },
  { icon: ClipboardList, label: "Campaign Execution" },
  { icon: Cpu, label: "Automation Workflows" },
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
        <p className="text-center eyebrow mb-6">Functions we build & manage</p>
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
