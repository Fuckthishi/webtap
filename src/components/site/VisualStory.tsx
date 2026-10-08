import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, MapPinned, ScanSearch } from "lucide-react";

const cards = [
  {
    index: "01 / DEFINE",
    title: "You set the parameters.",
    description: "Role, seniority, skills, working arrangement, location radius, and hiring eligibility.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=82",
    alt: "Colleagues discussing work at a meeting table",
    icon: MapPinned,
  },
  {
    index: "02 / DISCOVER",
    title: "We search with intention.",
    description: "We focus on professionals who match your actual requirements, not just the job title.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=82",
    alt: "Business professionals collaborating around a desk",
    icon: ScanSearch,
  },
  {
    index: "03 / DECIDE",
    title: "You choose who fits.",
    description: "Review a relevant shortlist, speak to potential hires and move forward on your terms.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=82",
    alt: "A group collaborating during a professional discussion",
    icon: CheckCircle2,
  },
];

export default function VisualStory() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">A focused approach</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Less noise.<br /><span className="text-gradient-primary">Better conversations.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Finding talent should feel structured, personal and transparent — from your first role brief to the final interview.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-glow">
                <div className="relative h-56 overflow-hidden md:h-64">
                  <img src={card.image} alt={card.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091223]/65 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-[#091223]/75 px-3 py-1.5 text-xs font-semibold tracking-widest text-white backdrop-blur-lg">{card.index}</span>
                </div>
                <div className="p-7">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300"><Icon className="h-5 w-5" /></div>
                  <h3 className="font-display text-xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-9 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-white">
            Tell us what you need <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
