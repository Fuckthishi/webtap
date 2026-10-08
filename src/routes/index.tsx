import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import ServicesMarquee from "@/components/site/ServicesMarquee";
import VisualStory from "@/components/site/VisualStory";
import HowItWorks from "@/components/site/HowItWorks";
import ServicesCategories from "@/components/site/ServicesCategories";
import WhyChoose from "@/components/site/WhyChoose";
import CandidateScreening from "@/components/site/CandidateScreening";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <ServicesCategories />
        <VisualStory />
        <HowItWorks />
        <WhyChoose />
        <CandidateScreening />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
