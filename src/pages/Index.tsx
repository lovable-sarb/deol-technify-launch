import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSection from "@/components/TestimonialSection";
import ClientLogos from "@/components/ClientLogos";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-illustration.jpg";
import {
  ArrowRight, Code, Zap, Bot, MessageSquare, ShoppingCart,
  Headphones, Rocket, Shield, TrendingUp, Settings, Cpu, Sparkles,
} from "lucide-react";

const services = [
  { icon: Code, title: "Web & SaaS Development", description: "Custom web applications, SaaS platforms, mobile apps, and API integrations built with cutting-edge technology." },
  { icon: ShoppingCart, title: "E-Commerce Stores", description: "Shopify, WooCommerce, headless commerce, and complete online selling solutions with payment integrations." },
  { icon: MessageSquare, title: "WhatsApp Automation", description: "WhatsApp Business API, chatbots, marketing campaigns, and commerce solutions for customer engagement." },
  { icon: Headphones, title: "AI Voice Agents", description: "ElevenLabs voice agents, conversational AI, automated phone systems, and speech-to-text solutions." },
  { icon: Bot, title: "AI Solutions", description: "AI agents, GPT/LLM solutions, chatbots, content generation, and predictive analytics for your business." },
  { icon: Zap, title: "Automation & Integration", description: "Zapier, n8n, Make automation, workflow optimization, and seamless tool integrations." },
];

const whyUs = [
  { icon: Rocket, title: "Speed", description: "Rapid deployment and fast iteration cycles to get your solutions live quickly." },
  { icon: Settings, title: "Automation-First", description: "Every solution is built with automation at its core to maximize efficiency." },
  { icon: TrendingUp, title: "Scalable Solutions", description: "Architecture designed to grow with your business from day one." },
  { icon: Cpu, title: "AI-Powered Systems", description: "Leverage the latest AI to give your business a competitive edge." },
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your business needs, goals, and current systems to identify opportunities." },
  { step: "02", title: "Strategy", description: "Create a detailed roadmap with timelines, tech stack decisions, and milestones." },
  { step: "03", title: "Development", description: "Build your solution with agile methodology, regular demos, and transparent progress." },
  { step: "04", title: "Deployment", description: "Launch with thorough testing, monitoring setup, and performance optimization." },
  { step: "05", title: "Automation", description: "Implement ongoing automation and support to keep everything running smoothly." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6, .heading-font {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .hero-banner {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background-image: url('${heroImage}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.92) 0%,
            rgba(30, 41, 59, 0.88) 50%,
            rgba(15, 23, 42, 0.85) 100%
          );
        }

        .hero-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 50%);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
        }

        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .text-glow {
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gradient-bg {
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
        }

        .section-badge {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
      `}</style>

      {/* Hero Section with Background Image */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center py-20">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Advanced Tech & Automation
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-8 text-glow animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <span className="text-white block mb-3">
                Build Smarter with
              </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Automation
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              We design, develop, and automate scalable tech solutions — from
              custom software and SaaS platforms to AI agents, CRM automation,
              and communication systems.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="btn-primary text-white px-10 py-7 text-lg rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-all font-semibold"
                >
                  Book a Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 px-10 py-7 text-lg rounded-xl transition-all font-semibold"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="stat-card p-6 rounded-2xl">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent heading-font mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-border/40 bg-primary/[0.02]" aria-label="Key stats">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Services Overview */}
      <section className="section-padding bg-muted/30" id="services" aria-label="Our Services">
        <div className="container mx-auto">
          <SectionHeading
            label="What We Do"
            title="Technology & Automation Services"
            description="End-to-end solutions covering development, automation, AI, and communication systems to transform your business."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" aria-label="Why Choose Deol Technify">
        <div className="container mx-auto">
          <SectionHeading
            label="Why Choose Us"
            title="Built for Speed, Scale & Intelligence"
            description="We combine cutting-edge technology with automation-first thinking to deliver results that matter."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="glass-card-hover p-6 text-center">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/30" aria-label="Our Process">
        <div className="container mx-auto">
          <SectionHeading
            label="Our Process"
            title="From Idea to Automation"
            description="A proven 5-step methodology to deliver high-quality, automated solutions."
          />
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="glass-card-hover p-6 text-center relative">
                <span className="font-display text-4xl font-bold gradient-text opacity-50">{p.step}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from DB */}
      <TestimonialSection />

      {/* CTA */}
      <section className="section-padding" aria-label="Book Your Project">
        <div className="container mx-auto">
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss your project and find the perfect automation and tech solution for your needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-bg text-primary-foreground font-semibold glow-border text-base px-8">
                  Book Your Project <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
