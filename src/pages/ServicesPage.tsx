import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import servicesHero from "@/assets/services-hero.jpg";
import {
  ArrowRight, Code, Globe, Smartphone, Server, Plug,
  Cpu, Workflow, Users, MailCheck, Target,
  Zap, Cog, FileCode, Terminal,
  Phone, MessageCircle, MessageSquare, Mic, PhoneCall,
  Bot, BrainCircuit, AudioLines, Sparkles, Wrench,
  BarChart3, SlidersHorizontal, GitBranch, Mail, Video,
} from "lucide-react";

const serviceCategories = [
  {
    id: "development",
    label: "Development",
    title: "Custom Software & Web Development Services",
    description: "We build scalable, high-performance web applications, SaaS platforms, mobile apps, and APIs using modern technology stacks.",
    services: [
      { icon: Globe, title: "Web Application Development", description: "Custom-built, responsive web applications using React, Next.js, and modern frameworks for optimal performance and user experience." },
      { icon: Code, title: "SaaS Platform Development", description: "End-to-end SaaS product development with subscription management, multi-tenancy, and scalable cloud architecture." },
      { icon: Server, title: "Custom Software Development", description: "Tailored software solutions designed to solve your unique business challenges with clean, maintainable code." },
      { icon: Smartphone, title: "Mobile App Development (Android & iOS)", description: "Cross-platform and native mobile applications that deliver seamless experiences on all devices." },
      { icon: Plug, title: "API Development & Integrations", description: "RESTful and GraphQL APIs with third-party integrations to connect your systems and streamline data flow." },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    title: "Business Process & Workflow Automation Services",
    description: "Automate repetitive tasks, streamline workflows, and boost productivity across your entire organization.",
    services: [
      { icon: Cpu, title: "Business Process Automation", description: "Identify and automate manual processes to reduce errors, save time, and cut operational costs significantly." },
      { icon: Workflow, title: "Workflow Automation", description: "Design and implement automated workflows that connect your tools and teams for maximum efficiency." },
      { icon: Users, title: "CRM Automation", description: "Automate lead management, follow-ups, and customer communication within your CRM system." },
      { icon: MailCheck, title: "Marketing Automation", description: "Set up automated email campaigns, social media posting, and content distribution to engage your audience." },
      { icon: Target, title: "Lead Generation Automation", description: "Automated lead capture, scoring, and nurturing systems that fill your pipeline 24/7." },
    ],
  },
  {
    id: "integration",
    label: "Integration Tools",
    title: "Zapier, n8n, Make & Custom Integration Services",
    description: "Connect all your business tools with powerful automation platforms and custom integration scripts.",
    services: [
      { icon: Zap, title: "Zapier Automation", description: "Build multi-step Zaps connecting 5,000+ apps to automate your business workflows without code." },
      { icon: Cog, title: "n8n Automation", description: "Self-hosted workflow automation with n8n for maximum data privacy and complex automation scenarios." },
      { icon: FileCode, title: "Make (Integromat) Automation", description: "Visual automation with Make to create sophisticated scenarios connecting your apps and services." },
      { icon: Terminal, title: "Custom Automation Scripts", description: "Bespoke automation scripts in Python, Node.js, or other languages for unique integration requirements." },
    ],
  },
  {
    id: "communication",
    label: "Communication Systems",
    title: "Twilio, WhatsApp API & Communication Automation",
    description: "Build powerful communication systems with automated messaging, voice bots, and multi-channel engagement.",
    services: [
      { icon: Phone, title: "Twilio Integrations", description: "Full Twilio implementation for voice, SMS, video, and WhatsApp communication in your applications." },
      { icon: MessageCircle, title: "WhatsApp API Systems", description: "WhatsApp Business API integration for automated customer support, notifications, and marketing campaigns." },
      { icon: MessageSquare, title: "SMS Automation", description: "Automated SMS campaigns, two-factor authentication, appointment reminders, and transactional messaging." },
      { icon: Mic, title: "Voice Bots", description: "AI-powered voice bots that handle customer calls, answer questions, and route inquiries intelligently." },
      { icon: PhoneCall, title: "Call Automation", description: "Automated call systems with IVR, call routing, recording, and analytics for your business." },
    ],
  },
  {
    id: "ai",
    label: "AI Solutions",
    title: "AI Agents, Chatbots & Intelligent Automation",
    description: "Harness the power of artificial intelligence with custom AI agents, chatbots, voice assistants, and automation tools.",
    services: [
      { icon: Bot, title: "AI Agents", description: "Autonomous AI agents that can research, analyze data, make decisions, and execute tasks on your behalf." },
      { icon: BrainCircuit, title: "AI Chatbots", description: "Intelligent chatbots with natural language understanding for customer support, sales, and internal processes." },
      { icon: AudioLines, title: "AI Voice Assistants", description: "Custom voice assistants powered by AI for hands-free interaction and automated customer service." },
      { icon: Sparkles, title: "AI Automation Systems", description: "End-to-end AI automation pipelines that learn and improve over time to optimize your operations." },
      { icon: Wrench, title: "Custom AI Tools", description: "Bespoke AI solutions including document processing, image recognition, predictive analytics, and more." },
    ],
  },
  {
    id: "crm",
    label: "CRM & Funnels",
    title: "GoHighLevel CRM, Sales Funnels & Pipeline Automation",
    description: "Complete CRM setup, sales funnel optimization, and pipeline automation to convert more leads into customers.",
    services: [
      { icon: BarChart3, title: "GoHighLevel (GHL) Setup", description: "Full GoHighLevel implementation with custom dashboards, automations, and integrations for your business." },
      { icon: SlidersHorizontal, title: "Sales Funnels", description: "High-converting sales funnels with landing pages, upsells, downsells, and automated follow-up sequences." },
      { icon: GitBranch, title: "Pipeline Automation", description: "Automated sales pipelines that move leads through stages with triggers, tasks, and notifications." },
      { icon: Mail, title: "Email & SMS Sequences", description: "Multi-channel nurture sequences combining email and SMS for maximum engagement and conversion." },
      { icon: Video, title: "Webinar Automation", description: "Automated webinar funnels with registration, reminders, replay sequences, and post-webinar follow-ups." },
    ],
  },
];

const ServicesPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden" aria-label="Services hero">
      <div className="absolute inset-0">
        <img src={servicesHero} alt="Technology automation services background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      </div>
      <div className="container mx-auto relative z-10 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full mb-6">
          Our Services
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
          Complete <span className="gradient-text">Technology & Automation</span> Solutions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          From custom software development to AI-powered automation, we deliver end-to-end solutions that transform how you do business.
        </p>
        <Link to="/contact">
          <Button size="lg" className="gradient-bg text-primary-foreground font-semibold glow-border">
            Book a Service <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>

    {/* Service Categories */}
    {serviceCategories.map((cat) => (
      <section key={cat.id} id={cat.id} className="section-padding even:bg-card/30" aria-label={cat.title}>
        <div className="container mx-auto">
          <SectionHeading label={cat.label} title={cat.title} description={cat.description} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding" aria-label="Book a service">
      <div className="container mx-auto">
        <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-5" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Can't find exactly what you're looking for? We build custom solutions tailored to your unique requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-bg text-primary-foreground font-semibold glow-border">
                Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
