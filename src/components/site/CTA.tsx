import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

interface Props {
  eyebrow?: string;
  title?: React.ReactNode;
  desc?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

const CTA = ({
  eyebrow = "Ready when you are",
  title,
  desc = "Tell us about your business and the team you want to build. We'll come back within 24 hours with a proposed structure and a written plan.",
  primaryLabel = "Build Your Remote Team",
  secondaryLabel = "webtap.site@gmail.com",
}: Props) => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dark p-10 md:p-16 text-center text-white shadow-elegant">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-primary opacity-30 blur-3xl rounded-full pointer-events-none animate-glow-pulse" />
          <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative">
            <span className="text-xs uppercase tracking-[0.22em] text-primary-glow font-semibold">{eyebrow}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
              {title ?? (<>Build a remote team<br />that helps your business grow.</>)}
            </h2>
            <p className="mt-5 text-white/75 max-w-xl mx-auto">
              {desc}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  {primaryLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="mailto:webtap.site@gmail.com">
                  <Mail className="w-4 h-4" />
                  {secondaryLabel}
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/60">
              Available for retainers, project builds and long-term partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
