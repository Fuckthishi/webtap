import { createFileRoute } from "@tanstack/react-router";
import { Mail, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CalendlyEmbed from "@/components/site/CalendlyEmbed";
import TrustBadges from "@/components/site/TrustBadges";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Your Free Strategy Call | Webtap" },
      { name: "description", content: "Book a 30-minute strategy call. We'll come back within 24 hours with a proposed team structure and a custom hiring plan." },
      { property: "og:title", content: "Book Your Free Strategy Call — Webtap" },
      { property: "og:description", content: "30 minutes to scope the team you need to grow." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-36 pb-10">
        <section data-reveal="up" className="container text-center max-w-3xl mx-auto">
          <span className="eyebrow">Book your free strategy call</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-gradient leading-tight">
            Get a custom hiring plan in 24 hours.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A 30-minute conversation to understand your business, the roles you
            want to build and what success looks like. We'll follow up within
            24 hours with a proposed team structure and written plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "Reply within 24 hours",
              "NDA available on request",
              "Transparent pricing",
            ].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-glow" />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <TrustBadges className="mt-8" />
        </section>

        <div data-reveal="scale" className="container mx-auto mt-10 max-w-3xl">
          <a href="mailto:webtap.site@gmail.com?subject=WEBTAP%20Hiring%20Inquiry" className="flex items-center justify-between gap-4 rounded-2xl border border-sky-400/30 bg-sky-400/10 p-6 text-left transition-colors hover:bg-sky-400/15">
            <span><strong className="block text-lg text-foreground">Prefer email?</strong><span className="mt-1 block text-sm text-muted-foreground">Send the role, required location and a few details to webtap.site@gmail.com</span></span>
            <Mail className="h-6 w-6 shrink-0 text-sky-300" />
          </a>
        </div>
        <CalendlyEmbed />

        <section className="container text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href="mailto:webtap.site@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              <Mail className="w-4 h-4" /> webtap.site@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
