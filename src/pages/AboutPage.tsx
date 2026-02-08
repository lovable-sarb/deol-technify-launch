import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";
import {
  ArrowRight, Target, Eye, Users, Building2, ShoppingCart, Briefcase,
  GraduationCap, Heart, Factory, Truck,
  Code, Database, Cloud, Brain, Cog,
} from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-Commerce" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: GraduationCap, name: "Education" },
  { icon: Heart, name: "Healthcare" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: Building2, name: "Real Estate" },
  { icon: Users, name: "Agencies" },
];

const techStack = [
  { icon: Code, name: "React / Next.js / Node.js" },
  { icon: Database, name: "PostgreSQL / MongoDB" },
  { icon: Cloud, name: "AWS / GCP / Azure" },
  { icon: Brain, name: "OpenAI / LangChain / Custom ML" },
  { icon: Cog, name: "Zapier / n8n / Make" },
];

const team = [
  { name: "Alex Deol", role: "Founder & CEO" },
  { name: "Priya Sharma", role: "CTO" },
  { name: "Marcus Lee", role: "Head of Automation" },
  { name: "Sofia Gonzalez", role: "Lead Developer" },
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden" aria-label="About hero">
      <div className="absolute inset-0">
        <img src={aboutHero} alt="Deol Technify team in modern tech office" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      </div>
      <div className="container mx-auto relative z-10 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full mb-6">
          About Us
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
          Powering Business Growth with <span className="gradient-text">Smart Technology</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Deol Technify is an advanced technology and automation company dedicated to building scalable, AI-powered solutions that help businesses operate faster and smarter.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-card/30" aria-label="Mission and Vision">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card-hover p-8">
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses of all sizes with cutting-edge technology and intelligent automation — reducing manual effort, increasing efficiency, and unlocking new growth opportunities through AI-powered solutions.
            </p>
          </div>
          <div className="glass-card-hover p-8">
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the go-to technology partner for forward-thinking businesses worldwide, setting the standard for innovation in automation, AI integration, and custom software development.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="section-padding" aria-label="Technology Stack">
      <div className="container mx-auto">
        <SectionHeading label="Tech Stack" title="Technologies We Work With" description="We leverage the latest and most reliable technologies to build solutions that last." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {techStack.map((t) => (
            <div key={t.name} className="glass-card-hover p-5 text-center">
              <t.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding bg-card/30" aria-label="Industries Served">
      <div className="container mx-auto">
        <SectionHeading label="Industries" title="Industries We Serve" description="We deliver tailored solutions across a wide range of industries." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div key={ind.name} className="glass-card-hover p-5 text-center">
              <ind.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding" aria-label="Our Team">
      <div className="container mx-auto">
        <SectionHeading label="Our Team" title="Meet the Experts" description="A talented team of developers, automation engineers, and AI specialists." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="glass-card-hover p-6 text-center">
              <div className="w-20 h-20 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-card/30" aria-label="Get in touch">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Want to Work With Us?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss how we can help your business grow with technology and automation.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-bg text-primary-foreground font-semibold glow-border">
            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
