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
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
      
      .footer-font {
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      }
      
      .footer-heading-font {
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .footer-bg {
        background: linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%);
      }

      .footer-logo-gradient {
        background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
      }

      .footer-logo-icon {
        transition: transform 0.3s ease;
      }

      .footer-logo:hover .footer-logo-icon {
        transform: rotate(15deg) scale(1.1);
      }

      .footer-link {
        position: relative;
        font-family: 'DM Sans', sans-serif;
        transition: all 0.2s ease;
      }

      .footer-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
        transition: width 0.3s ease;
      }

      .footer-link:hover::after {
        width: 100%;
      }

      .social-icon {
        transition: all 0.3s ease;
        background: rgba(241, 245, 249, 1);
      }

      .social-icon:hover {
        background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
      }

      .social-icon:hover svg {
        color: white;
      }

      .contact-item {
        transition: all 0.2s ease;
      }

      .contact-item:hover {
        transform: translateX(4px);
      }

      .contact-item:hover svg {
        color: #4f46e5;
      }

      .footer-divider {
        background: linear-gradient(to right, transparent, rgba(226, 232, 240, 0.8), transparent);
      }

      .footer-bottom-link {
        transition: all 0.2s ease;
        font-family: 'DM Sans', sans-serif;
      }

      .footer-bottom-link:hover {
        color: #4f46e5;
      }
    `}</style>

    <footer className="footer-bg border-t border-gray-200" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:pr-4">
            <Link to="/" className="footer-logo flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl footer-logo-gradient flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 text-white footer-logo-icon" />
              </div>
              <span className="footer-heading-font text-xl font-bold text-gray-900">
                Deol <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technify</span>
              </span>
            </Link>
            <p className="footer-font text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              Advanced technology &amp; automation company delivering scalable, AI-powered solutions for businesses worldwide.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-xl flex items-center justify-center text-gray-600"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading-font text-gray-900 mb-5 text-base">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link footer-font text-sm text-gray-600 hover:text-indigo-600 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading-font text-gray-900 mb-5 text-base">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link footer-font text-sm text-gray-600 hover:text-indigo-600 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-heading-font text-gray-900 mb-5 text-base">Contact Info</h3>
            <ul className="space-y-4">
              <li className="contact-item flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-indigo-600 shrink-0" />
                <a 
                  href="mailto:contact@deoltechnify.com" 
                  className="footer-font text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  admin@deoltechnify.com
                </a>
              </li>
              <li className="contact-item flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-indigo-600 shrink-0" />
                <a 
                  href="tel:+971503671142" 
                  className="footer-font text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  +971 (50) 367-1142
                </a>
              </li>
              <li className="contact-item flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-indigo-600 shrink-0" />
                <span className="footer-font text-sm text-gray-600">
                  123 Tech Street, Batala City, IN 143505
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="footer-font text-sm text-gray-600">
              © {new Date().getFullYear()} Deol Technify. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="footer-bottom-link text-sm text-gray-600">
                Privacy Policy
              </a>
              <a href="#" className="footer-bottom-link text-sm text-gray-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;