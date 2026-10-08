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
      { title: "Recruitment Services | WEBTAP" },
      { name: "description", content: "Explore recruitment support for technical, administrative, sales, customer support, creative and finance roles." },
      { property: "og:title", content: "WEBTAP Services — Talent Recruitment" },
      { property: "og:description", content: "Find talent that fits your skills, location and working requirements." },
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
            The people your team needs next.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From developers to virtual assistants, we work from your role brief and preferred hiring location.
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
