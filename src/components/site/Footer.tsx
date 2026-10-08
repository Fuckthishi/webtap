import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import Logo from "@/components/site/Logo";

const cols: { title: string; links: { to: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "All Services" },
      { to: "/services#services", label: "Sales" },
      { to: "/services#services", label: "Customer Support" },
      { to: "/services#services", label: "Marketing" },
      { to: "/services#services", label: "Operations" },
      { to: "/services#services", label: "AI Automation" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/trust", label: "Trust & Assurance" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Book a Call" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { to: "/contact", label: "Discuss a role" },
      { to: "/trust", label: "Our principles" },
      { to: "/faq", label: "Hiring FAQ" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/70 py-16 mt-10 bg-secondary/40">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              We build, manage and optimise high-performing remote teams
              backed by AI — so your business grows without the operational
              overhead.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="mailto:webtap.site@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
              >
                <Mail className="w-4 h-4" />
                webtap.site@gmail.com
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold mb-4 text-sm">{c.title}</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {c.links.map((l, idx) => (
                  <li key={`${l.to}-${idx}`}>
                    {l.to.includes("#") ? (
                      <a href={l.to} className="hover:text-foreground transition-colors">{l.label}</a>
                    ) : (
                      <Link to={l.to} className="hover:text-foreground transition-colors">{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/70 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Webtap. Managed remote teams, backed by AI.</div>
          <div>Australian business focus · Trusted by growing SaaS, agencies and B2B teams.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
