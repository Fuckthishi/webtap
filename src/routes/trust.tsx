import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, GraduationCap, FileText, LineChart, ClipboardCheck, Lock, Handshake } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import CandidateScreening from "@/components/site/CandidateScreening";
import OngoingManagement from "@/components/site/OngoingManagement";

const items = [
  { icon: ShieldCheck, title: "Elite recruitment process", desc: "Multi-stage sourcing, skills testing, communication vetting, references and background checks. Fewer than 5% of applicants pass." },
  { icon: GraduationCap, title: "Trained specialists", desc: "Every team member is onboarded onto your ICP, brand, tools and playbooks before touching live work." },
  { icon: FileText, title: "Documented workflows", desc: "SOPs are written, versioned and maintained by Webtap — so quality doesn't depend on any single person." },
  { icon: LineChart, title: "KPI monitoring", desc: "Every role has a scorecard reviewed weekly. Underperformance is caught and coached, not ignored." },
  { icon: ClipboardCheck, title: "Transparent reporting", desc: "Weekly reports, monthly business reviews and always-on visibility into your team's work." },
  { icon: Lock, title: "Confidentiality", desc: "Mutual NDAs, least-privilege access in your systems, and support for SSO, password managers and audit trails." },
  { icon: Handshake, title: "Long-term partnerships", desc: "We're built for retainers and multi-year relationships — most Webtap clients stay for years." },
];

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Assurance | Webtap" },
      { name: "description", content: "How Webtap protects quality, confidentiality and continuity across every managed remote team engagement." },
      { property: "og:title", content: "Trust & Assurance — Webtap" },
      { property: "og:description", content: "Careful vetting, active management and long-term accountability." },
    ],
  }),
  component: TrustPage,
});

function TrustPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-36 pb-16">
        <section className="container max-w-4xl">
          <span className="eyebrow">Trust & Assurance</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-gradient leading-tight">
            Outsourcing should feel safer than hiring — not riskier.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every Webtap engagement is built around the same commitments: careful vetting, trained specialists, documented workflows, active performance management and confidentiality as a default.
          </p>
        </section>

        <section className="container max-w-5xl mt-16">
          <div className="grid md:grid-cols-2 gap-5">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.title} className="bg-card border border-border rounded-2xl p-7 shadow-card hover:border-primary/40 transition-colors flex gap-5">
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
            This page describes the operating commitments Webtap makes on every engagement. It is not a certification. Contractual terms and specific security controls are provided during procurement on request.
          </p>
        </section>

        <CandidateScreening />
        <OngoingManagement />
        <CTA primaryLabel="Talk to a Talent Specialist" />
      </main>
      <Footer />
    </div>
  );
}
