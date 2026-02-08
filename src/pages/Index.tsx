import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-illustration.jpg";
import {
  ArrowRight,
  Code,
  Zap,
  Bot,
  MessageSquare,
  ShoppingCart,
  Headphones,
  Rocket,
  Shield,
  TrendingUp,
  Settings,
  Star,
  Quote,
  Cpu,
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

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, GrowthScale Inc.", text: "Deol Technify transformed our entire sales pipeline with AI-powered automation. Revenue increased 40% in 3 months." },
  { name: "James Rodriguez", role: "CTO, DataFlow Systems", text: "Their SaaS development expertise is unmatched. They delivered our platform ahead of schedule with incredible quality." },
  { name: "Emily Chen", role: "Marketing Director, NexaHub", text: "The WhatsApp and SMS automation setup they built generates leads on autopilot. Game-changing for our team." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 animate-slide-up">
                <Zap className="w-3.5 h-3.5" /> Advanced Tech & Automation
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 animate-slide-up animate-slide-up-delay-1">
                Build Smarter with{" "}
                <span className="gradient-text">AI-Powered</span> Automation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-slide-up animate-slide-up-delay-2">
                We design, develop, and automate scalable tech solutions — from custom software and SaaS platforms to AI agents, CRM automation, and communication systems.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up animate-slide-up-delay-3">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg text-primary-foreground font-semibold glow-border text-base px-8">
                    Book a Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-semibold text-base px-8">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up animate-slide-up-delay-2">
              <div className="absolute inset-0 gradient-bg opacity-20 rounded-2xl blur-2xl" />
              <img
                src={heroImage}
                alt="Deol Technify AI-powered technology and automation solutions illustration"
                className="relative rounded-2xl border border-border/40 w-full animate-float"
                width={960}
                height={544}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-card/30" id="services" aria-label="Our Services">
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
      <section className="section-padding bg-card/30" aria-label="Our Process">
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

      {/* Testimonials */}
      <section className="section-padding" aria-label="Client Testimonials">
        <div className="container mx-auto">
          <SectionHeading
            label="Testimonials"
            title="Trusted by Businesses Worldwide"
            description="See what our clients say about working with Deol Technify."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card-hover p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
