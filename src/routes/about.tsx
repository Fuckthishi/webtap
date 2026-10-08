import { createFileRoute } from "@tanstack/react-router";
import { Users, Cpu, Workflow, Target, Shield, Heart } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";

const pillars = [
  { icon: Users, title: "People", desc: "Recruitment starts with understanding the individual behind the CV and the team they may join." },
  { icon: Workflow, title: "Process", desc: "A clear brief, relevant sourcing and transparent candidate conversations." },
  { icon: Cpu, title: "Tools", desc: "Technology supports research and organisation without replacing human judgement." },
];

const values = [
  { icon: Target, title: "Stay focused", desc: "Search for the specific skills and requirements the employer has actually requested." },
  { icon: Shield, title: "Respect the details", desc: "Treat the hiring brief and candidate information with care and clarity." },
  { icon: Heart, title: "Good connections", desc: "Think beyond the resume to help create better long-term working relationships." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Managed Talent & Automation | Webtap" },
      { name: "description", content: "WEBTAP is a recruitment and talent-matching service focused on skills, team fit and employer-defined hiring markets." },
      { property: "og:title", content: "About Webtap" },
      { property: "og:description", content: "Where talent meets opportunity, within your hiring requirements." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-36 pb-16">
        <section className="container max-w-4xl">
          <span className="eyebrow">About Webtap</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-gradient leading-tight">
            A better match starts with a better understanding.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            WEBTAP was built around a straightforward idea: a good hire is not just about impressive qualifications. Skills, communication, location, work eligibility and the way someone fits a business all matter.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We focus on helping businesses in the United States, United Kingdom, Canada and Australia define their hiring needs and find people within the location and working arrangement that suits them.
          </p>
        </section>

        <section className="container max-w-5xl mt-24">
          <div className="text-center mb-12">
            <span className="eyebrow">What we're built on</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient">
              People + Clarity + Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-card border border-border rounded-2xl p-8 shadow-card">
                  <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container max-w-5xl mt-24">
          <div className="text-center mb-12">
            <span className="eyebrow">Our values</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient">
              How we work.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-card border border-border rounded-2xl p-7 shadow-card hover:border-primary/40 transition-colors">
                  <Icon className="w-6 h-6 text-primary-glow mb-3" />
                  <h3 className="font-display text-lg font-bold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <CTA primaryLabel="Talk to a Talent Specialist" />
      </main>
      <Footer />
    </div>
  );
}
