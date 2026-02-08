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
  ShoppingCart, Store, CreditCard, Package, Truck,
  Headphones, Radio, Volume2, Speech,
  Instagram, Share2, TrendingUp, Megaphone, Hash,
  Shield, Lock, Eye, Key, FileCheck,
  Database, Cloud, LineChart, PieChart, Activity,
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
    id: "ecommerce",
    label: "E-Commerce",
    title: "E-Commerce Stores & Online Selling Solutions",
    description: "Launch and scale your online store with custom e-commerce solutions, Shopify development, and complete selling systems.",
    services: [
      { icon: ShoppingCart, title: "Shopify Store Development", description: "Custom Shopify store setup with theme customization, app integrations, and conversion-optimized product pages." },
      { icon: Store, title: "WooCommerce & WordPress Stores", description: "Powerful WordPress e-commerce sites with WooCommerce for complete control over your online store." },
      { icon: Code, title: "Headless Commerce Solutions", description: "Modern headless e-commerce with React storefronts connected to Shopify, BigCommerce, or custom backends." },
      { icon: CreditCard, title: "Payment Gateway Integration", description: "Stripe, PayPal, Razorpay, and custom payment integrations for seamless and secure transactions worldwide." },
      { icon: Package, title: "Inventory & Order Management", description: "Automated inventory tracking, order processing, and fulfillment systems that scale with your business." },
      { icon: Truck, title: "Dropshipping Automation", description: "Complete dropshipping store setup with supplier integrations, auto-ordering, and profit tracking systems." },
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
    id: "whatsapp",
    label: "WhatsApp Solutions",
    title: "WhatsApp Business API & Marketing Automation",
    description: "Leverage WhatsApp's massive reach with automated messaging, chatbots, and complete business communication systems.",
    services: [
      { icon: MessageCircle, title: "WhatsApp Business API Setup", description: "Complete WhatsApp Business API integration with verified business profiles and official messaging capabilities." },
      { icon: Bot, title: "WhatsApp Chatbots", description: "AI-powered WhatsApp chatbots for 24/7 customer support, FAQs, appointment booking, and lead qualification." },
      { icon: Megaphone, title: "WhatsApp Marketing Campaigns", description: "Broadcast campaigns, promotional messages, and personalized marketing automation through WhatsApp." },
      { icon: ShoppingCart, title: "WhatsApp Commerce", description: "Complete WhatsApp shopping experience with product catalogs, cart management, and in-chat payments." },
      { icon: Workflow, title: "WhatsApp CRM Integration", description: "Connect WhatsApp to your CRM for unified customer conversations, lead tracking, and sales automation." },
      { icon: BarChart3, title: "WhatsApp Analytics & Reporting", description: "Comprehensive analytics on message delivery, engagement rates, and conversation metrics." },
    ],
  },
  {
    id: "voice",
    label: "Voice Agents",
    title: "AI Voice Agents & Conversational AI Systems",
    description: "Deploy intelligent voice agents powered by cutting-edge AI for customer service, sales, and automated phone interactions.",
    services: [
      { icon: Headphones, title: "AI Voice Agents (ElevenLabs)", description: "Human-like AI voice agents using ElevenLabs for natural conversations, customer support, and sales calls." },
      { icon: AudioLines, title: "Conversational AI Assistants", description: "Build voice-first AI assistants that understand context, handle complex queries, and provide personalized responses." },
      { icon: PhoneCall, title: "Automated Phone Systems", description: "IVR replacements with AI that naturally guides callers, schedules appointments, and handles inquiries." },
      { icon: Volume2, title: "Voice Cloning & Custom Voices", description: "Create custom AI voices for your brand or clone existing voices for consistent customer experiences." },
      { icon: Radio, title: "Outbound Voice Campaigns", description: "AI-powered outbound calling for appointment reminders, surveys, lead follow-ups, and collections." },
      { icon: Mic, title: "Speech-to-Text & Transcription", description: "Real-time transcription, call recording analysis, and meeting notes automation with AI accuracy." },
    ],
  },
  {
    id: "communication",
    label: "Communication Systems",
    title: "Twilio, SMS & Multi-Channel Communication",
    description: "Build powerful communication systems with automated messaging, voice bots, and multi-channel engagement.",
    services: [
      { icon: Phone, title: "Twilio Integrations", description: "Full Twilio implementation for voice, SMS, video, and WhatsApp communication in your applications." },
      { icon: MessageSquare, title: "SMS Automation", description: "Automated SMS campaigns, two-factor authentication, appointment reminders, and transactional messaging." },
      { icon: Video, title: "Video Calling Solutions", description: "WebRTC and Twilio Video integrations for telehealth, consultations, and real-time video communication." },
      { icon: PhoneCall, title: "Call Center Automation", description: "Cloud-based call center solutions with AI routing, queue management, and agent performance analytics." },
      { icon: Mail, title: "Omnichannel Messaging", description: "Unified messaging across SMS, email, WhatsApp, and social media from a single platform." },
    ],
  },
  {
    id: "social",
    label: "Social Media",
    title: "Social Media Automation & Marketing",
    description: "Automate your social media presence with AI-powered content, scheduling, engagement bots, and analytics.",
    services: [
      { icon: Instagram, title: "Instagram & Facebook Automation", description: "Automated posting, story scheduling, DM responses, and engagement automation for Meta platforms." },
      { icon: Hash, title: "TikTok & Short-Form Content", description: "TikTok automation, trend analysis, and short-form video content strategies that drive viral growth." },
      { icon: Share2, title: "Social Media Management Tools", description: "Custom social media dashboards for multi-platform posting, analytics, and team collaboration." },
      { icon: TrendingUp, title: "Influencer Campaign Automation", description: "Automated influencer outreach, campaign tracking, and ROI measurement systems." },
      { icon: Bot, title: "Social Media Chatbots", description: "AI chatbots for Facebook Messenger, Instagram DMs, and Twitter for automated customer engagement." },
    ],
  },
  {
    id: "ai",
    label: "AI Solutions",
    title: "AI Agents, Chatbots & Intelligent Automation",
    description: "Harness the power of artificial intelligence with custom AI agents, chatbots, voice assistants, and automation tools.",
    services: [
      { icon: Bot, title: "AI Agents & Copilots", description: "Autonomous AI agents that can research, analyze data, make decisions, and execute complex multi-step tasks." },
      { icon: BrainCircuit, title: "Custom GPT & LLM Solutions", description: "Fine-tuned language models, custom GPTs, and RAG systems tailored to your business knowledge base." },
      { icon: Sparkles, title: "AI Content Generation", description: "Automated content creation for blogs, social media, product descriptions, and marketing materials." },
      { icon: Eye, title: "Computer Vision & Image AI", description: "Image recognition, object detection, document processing, and visual AI for automation workflows." },
      { icon: Wrench, title: "AI Integration Services", description: "Integrate OpenAI, Claude, Gemini, and other AI models into your existing applications and workflows." },
      { icon: Activity, title: "Predictive Analytics", description: "AI-powered forecasting, demand prediction, and data-driven insights for strategic decision making." },
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
  {
    id: "data",
    label: "Data & Analytics",
    title: "Business Intelligence & Data Analytics Solutions",
    description: "Turn your data into actionable insights with custom dashboards, reporting systems, and analytics platforms.",
    services: [
      { icon: LineChart, title: "Custom Analytics Dashboards", description: "Real-time business dashboards with KPIs, metrics, and visualizations tailored to your needs." },
      { icon: Database, title: "Data Warehouse Solutions", description: "Centralized data warehouses that consolidate all your business data for unified analytics." },
      { icon: PieChart, title: "Reporting Automation", description: "Automated report generation and distribution for sales, marketing, finance, and operations." },
      { icon: Cloud, title: "Cloud Data Integration", description: "ETL pipelines connecting your tools to cloud platforms like BigQuery, Snowflake, and Redshift." },
    ],
  },
  {
    id: "security",
    label: "Security & Compliance",
    title: "Cybersecurity & Data Protection Solutions",
    description: "Protect your business with security audits, compliance implementation, and ongoing monitoring solutions.",
    services: [
      { icon: Shield, title: "Security Audits & Assessments", description: "Comprehensive security reviews identifying vulnerabilities in your applications and infrastructure." },
      { icon: Lock, title: "Authentication & Access Control", description: "SSO, MFA, RBAC, and secure authentication systems to protect your applications and data." },
      { icon: FileCheck, title: "Compliance Implementation", description: "GDPR, HIPAA, SOC 2, and PCI-DSS compliance setup with documentation and audit preparation." },
      { icon: Key, title: "API Security", description: "Secure API design, rate limiting, encryption, and protection against common attack vectors." },
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
          From e-commerce stores and WhatsApp automation to AI voice agents and custom software — we deliver cutting-edge solutions that transform how you do business.
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
