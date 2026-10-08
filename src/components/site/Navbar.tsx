import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/site/Logo";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/trust", label: "Our approach" },
  { to: "/faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`hover:text-foreground transition-colors ${
                    pathname === l.to ? "text-foreground font-semibold" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Book Your Free Strategy Call</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block px-3 py-2 rounded-lg hover:bg-secondary text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">Book Your Free Strategy Call</Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
