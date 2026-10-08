import { createFileRoute } from "@tanstack/react-router";
import { Users, Cpu, Workflow, Target, Shield, Heart } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import ManagementPromise from "@/components/site/ManagementPromise";

const pillars = [
  { icon: Users, title: "People", desc: "Rigorously recruited specialists — fewer than 5% of applicants join a Webtap team." },
  { icon: Workflow, title: "Process", desc: "Documented SOPs, weekly QA and reporting cadences that make quality repeatable." },
  { icon: Cpu, title: "Technology", desc: "AI and automation working alongside human talent to amplify every hour." },
];

const values = [
  { icon: Target, title: "Own the outcome", desc: "We are accountable for the operation, not just the resume." },
  { icon: Shield, title: "Confidential by default", desc: "NDAs, least-privilege access and audit trails on every engagement." },
  { icon: Heart, title: "Long partnerships", desc: "We work with clients for years — not for the length of a single contract." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Managed Talent & Automation | Webtap" },
      { name: "description", content: "Webtap is a managed talent and automation partner. We build, manage and optimise high-performing remote teams backed by AI." },
      { property: "og:title", content: "About Webtap" },
      { property: "og:description", content: "The managed talent partner for growing businesses." },
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
            We build, manage and optimise high-performing remote teams.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Webtap exists because growing businesses need more than a resume.
            They need an operation — trained specialists, documented processes,
            active performance management and AI-powered workflows working
            together so results keep compounding.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Today we run managed remote teams for SaaS, professional services,
            healthcare, real estate, marketing agencies and more — with a
            long-term commitment to every client we take on.
          </p>
        </section>

        <section className="container max-w-5xl mt-24">
          <div className="text-center mb-12">
            <span className="eyebrow">What we're built on</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient">
              People + Process + AI
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

        <ManagementPromise />
        <CTA primaryLabel="Talk to a Talent Specialist" />
      </main>
      <Footer />
    </div>
  );
}
