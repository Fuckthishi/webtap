import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, GraduationCap, FileText, LineChart, ClipboardCheck, Lock, Handshake } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import CandidateScreening from "@/components/site/CandidateScreening";

const items = [
  { icon: ShieldCheck, title: "Role-specific matching", desc: "Skills and experience are evaluated against the responsibilities you define." },
  { icon: GraduationCap, title: "Relevant experience", desc: "We discuss job-specific experience rather than use a one-size-fits-all checklist." },
  { icon: FileText, title: "Clear briefs", desc: "Document the role, responsibilities and expectations before starting the search." },
  { icon: LineChart, title: "Practical alignment", desc: "Working hours, location, availability and expectations belong in the conversation early." },
  { icon: ClipboardCheck, title: "Employer review", desc: "You can decide which checks, interviews and selection criteria are appropriate." },
  { icon: Lock, title: "Respect for privacy", desc: "Sensitive information and confidentiality needs should be discussed and agreed before sharing documents." },
  { icon: Handshake, title: "Transparent communication", desc: "Clear next steps and realistic expectations support a better working relationship." },
];

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Assurance | Webtap" },
      { name: "description", content: "How WEBTAP approaches recruitment, clarity and employer-defined hiring requirements." },
      { property: "og:title", content: "Trust & Assurance — Webtap" },
      { property: "og:description", content: "Skills, location requirements and thoughtful candidate selection." },
    ],
  }),
  component: TrustPage,
});

function TrustPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-36 pb-16">
        <section data-reveal="up" className="container max-w-4xl">
          <span className="eyebrow">Trust & Assurance</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-gradient leading-tight">
            Hire thoughtfully. Stay in control.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We believe hiring works better when expectations are clear. Here are the principles we bring to conversations with employers and candidates.
          </p>
        </section>

        <section className="container max-w-5xl mt-16">
          <div className="grid md:grid-cols-2 gap-5">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <div key={it.title} data-reveal="up" data-reveal-delay={i % 2} data-reveal-hover="true" className="bg-card border border-border rounded-2xl p-7 shadow-card hover:border-primary/40 transition-colors flex gap-5">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground mt-10 text-center max-w-2xl mx-auto">
            These are our working principles, not certifications or guarantees. Specific screening, privacy and service arrangements depend on the agreed engagement.
          </p>
        </section>

        <CandidateScreening />
        <CTA primaryLabel="Talk to a Talent Specialist" />
      </main>
      <Footer />
    </div>
  );
}
