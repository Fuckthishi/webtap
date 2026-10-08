import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { sharedFaqs } from "@/data/services";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Webtap" },
      { name: "description", content: "Answers about hiring speed, interviews, management, replacements, AI automation and how Webtap measures performance." },
      { property: "og:title", content: "Frequently Asked Questions — Webtap" },
      { property: "og:description", content: "Everything you might want to ask before you reach out." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-36 pb-16">
        <section className="container max-w-3xl">
          <span className="eyebrow">Frequently asked</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-gradient leading-tight">
            Everything to ask before you reach out.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Service-specific questions live on each department page.
          </p>

          <Accordion type="single" collapsible className="space-y-3 mt-12">
            {sharedFaqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-5 shadow-card data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
