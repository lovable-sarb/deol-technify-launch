import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "E-Commerce Stores", to: "/services#ecommerce" },
  { label: "WhatsApp Solutions", to: "/services#whatsapp" },
  { label: "AI Voice Agents", to: "/services#voice" },
  { label: "AI Solutions", to: "/services#ai" },
  { label: "Social Media Automation", to: "/services#social" },
  { label: "CRM & Funnels", to: "/services#crm" },
];

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/40" aria-label="Site footer">
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Deol <span className="gradient-text">Technify</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Advanced technology &amp; automation company delivering scalable, AI-powered solutions for businesses worldwide.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Social media"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              contact@deoltechnify.com
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              123 Tech Street, Innovation City, IC 10001
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Deol Technify. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
