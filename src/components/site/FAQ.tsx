import { Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { sharedFaqs } from "@/data/services";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <div data-reveal="up" className="text-center mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-gradient leading-tight">
            Answers before you book.
          </h2>
          <p className="mt-4 text-muted-foreground">
            More on our{" "}
            <Link to="/faq" className="text-primary hover:text-primary-glow transition-colors font-semibold">
              full FAQ page
            </Link>{" "}
            or the{" "}
            <Link to="/trust" className="text-primary hover:text-primary-glow transition-colors font-semibold">
              Trust page
            </Link>.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {sharedFaqs.slice(0, 6).map((f, i) => (
            <AccordionItem
              key={i}
              data-reveal="up"
              data-reveal-delay={i % 3}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-5 data-[state=open]:border-primary/40 transition-colors shadow-card"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
