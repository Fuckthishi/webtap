import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ServicesCategories from "@/components/site/ServicesCategories";
import CandidateScreening from "@/components/site/CandidateScreening";
import WhyChoose from "@/components/site/WhyChoose";
import CTA from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Managed Remote Teams | Webtap" },
      { name: "description", content: "Every role your remote team needs — Sales, Support, Marketing, Operations, Finance and AI Automation. Recruited, trained, managed and optimised." },
      { property: "og:title", content: "Webtap Services — Managed Remote Teams" },
      { property: "og:description", content: "Sales, Support, Marketing, Operations, Finance and AI Automation — fully managed by Webtap." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32">
        <section className="container max-w-4xl text-center">
          <span className="eyebrow">Services</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-gradient leading-tight">
            Every role your remote team needs.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Six categories of specialists — recruited, trained, managed and continuously optimised by Webtap.
          </p>
        </section>
        <ServicesCategories />
        <WhyChoose />
        <CandidateScreening />
        <CTA
          eyebrow="Ready to scale?"
          title={<>Find your next hire.</>}
          primaryLabel="Get a Custom Hiring Plan"
        />
      </main>
      <Footer />
    </div>
  );
}
