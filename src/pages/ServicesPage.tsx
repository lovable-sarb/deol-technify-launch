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

      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
      }

      .animate-fade-in {
        animation: fadeIn 1.2s ease-out forwards;
      }

      .services-hero-banner {
        position: relative;
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('${servicesHero}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .services-hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(15, 23, 42, 0.90) 0%,
          rgba(30, 41, 59, 0.85) 50%,
          rgba(15, 23, 42, 0.88) 100%
        );
      }

      .services-hero-overlay::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
      }

      .text-glow {
        text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
      }

      .service-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid rgba(226, 232, 240, 0.8);
      }

      .service-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        border-color: rgba(99, 102, 241, 0.3);
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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
    <section className="services-hero-banner">
      <div className="services-hero-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Our Services
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-glow animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <span className="text-white">Complete </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology & Automation
            </span>
            <span className="text-white"> Solutions</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            From e-commerce stores and WhatsApp automation to AI voice agents and custom software — we deliver cutting-edge solutions that transform how you do business.
          </p>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-primary text-white px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-all font-semibold"
              >
                Book a Service
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Service Categories */}
    {serviceCategories.map((cat, idx) => (
      <section
        key={cat.id}
        id={cat.id}
        className={`py-20 lg:py-24 ${idx % 2 === 0 ? 'bg-white' : 'gradient-bg'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
              <Code className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700 tracking-wide">
                {cat.label}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold heading-font text-gray-900">
              {cat.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {cat.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.services.map((service, i) => (
              <div key={i} className="service-card bg-white p-8 rounded-2xl">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA Section */}
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-white heading-font leading-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? We build custom solutions tailored to your unique requirements.
          </p>
          <div>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold"
              >
                Request a Quote
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;