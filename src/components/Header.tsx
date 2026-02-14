import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        .header-font {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .nav-font {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .header-glass {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
          transition: all 0.3s ease;
        }

        .header-glass.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .logo-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
        }

        .logo-icon {
          transition: transform 0.3s ease;
        }

        .logo-group:hover .logo-icon {
          transform: rotate(15deg) scale(1.1);
        }

        .nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 80%;
        }

        .nav-link.active {
          color: #4f46e5;
        }

        .btn-primary-header {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .btn-primary-header:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
        }

        .btn-primary-header:hover::before {
          left: 100%;
        }

        .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(226, 232, 240, 0.6);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:active {
          transform: scale(0.98);
        }

        .hamburger-icon {
          transition: transform 0.3s ease;
        }

        .hamburger-button:hover .hamburger-icon {
          transform: scale(1.1);
        }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 header-glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 logo-group" aria-label="Deol Technify Home">
            <div className="w-10 h-10 rounded-xl logo-gradient flex items-center justify-center shadow-md">
              <Zap className="w-5 h-5 text-white logo-icon" />
            </div>
            <span className="header-font text-xl font-bold tracking-tight text-gray-900">
              Deol <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technify</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link px-4 py-2 rounded-lg text-sm nav-font ${
                  location.pathname === link.to
                    ? "active text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="btn-primary-header text-white px-6 py-2 rounded-lg shadow-md">
                Book Service
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors hamburger-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 hamburger-icon" />
            ) : (
              <Menu className="w-6 h-6 hamburger-icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden mobile-menu px-4 pb-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`mobile-nav-link block px-4 py-3 rounded-lg text-sm ${
                  location.pathname === link.to
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-3 btn-primary-header text-white py-2.5 rounded-lg shadow-md">
                Book Service
              </Button>
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;