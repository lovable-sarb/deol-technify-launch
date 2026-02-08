import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Deol Technify Home">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Deol <span className="gradient-text">Technify</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link to="/contact">
            <Button className="gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-border">
              Book Service
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden glass-card border-t border-border/40 px-4 pb-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button className="w-full mt-2 gradient-bg text-primary-foreground font-semibold">
              Book Service
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
