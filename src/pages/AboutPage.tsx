import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";
import {
  ArrowRight, Target, Eye, Users, Building2, ShoppingCart, Briefcase,
  GraduationCap, Heart, Factory, Truck, Sparkles,
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

      .about-hero-banner {
        position: relative;
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('${aboutHero}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .about-hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(15, 23, 42, 0.88) 0%,
          rgba(30, 41, 59, 0.84) 50%,
          rgba(15, 23, 42, 0.86) 100%
        );
      }

      .about-hero-overlay::before {
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

      .glass-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .glass-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
      }

      .industry-card, .tech-card, .team-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid rgba(226, 232, 240, 0.8);
      }

      .industry-card:hover, .tech-card:hover, .team-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        border-color: rgba(99, 102, 241, 0.3);
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

      .team-avatar {
        background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
        transition: transform 0.3s ease;
      }

      .team-card:hover .team-avatar {
        transform: scale(1.1);
      }
    `}</style>

    {/* Hero Section with Background Image */}
    <section className="about-hero-banner">
      <div className="about-hero-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span className="text-sm font-semibold text-white tracking-wide">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-glow animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <span className="text-white">Powering Business Growth with </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Smart Technology
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Deol Technify is an advanced technology and automation company dedicated to building scalable, AI-powered solutions that help businesses operate faster and smarter.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="glass-card p-10 rounded-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold heading-font text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower businesses of all sizes with cutting-edge technology and intelligent automation — reducing manual effort, increasing efficiency, and unlocking new growth opportunities through AI-powered solutions.
            </p>
          </div>
          <div className="glass-card p-10 rounded-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold heading-font text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become the go-to technology partner for forward-thinking businesses worldwide, setting the standard for innovation in automation, AI integration, and custom software development.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="py-20 lg:py-24 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
            <Code className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700 tracking-wide">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold heading-font text-gray-900">
            Technologies We Work With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build solutions that last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div key={i} className="tech-card bg-white p-8 rounded-2xl text-center">
                <Icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-gray-700">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
            <Building2 className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700 tracking-wide">
              Industries
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold heading-font text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver tailored solutions across a wide range of industries.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div key={i} className="industry-card bg-white p-8 rounded-2xl text-center border">
                <Icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <p className="text-sm font-semibold text-gray-700">{ind.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 lg:py-24 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
            <Users className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700 tracking-wide">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold heading-font text-gray-900">
            Meet the Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A talented team of developers, automation engineers, and AI specialists.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="team-card bg-white p-8 rounded-2xl text-center">
              <div className="w-24 h-24 rounded-full team-avatar mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl heading-font shadow-lg">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-lg font-bold heading-font text-gray-900 mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

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
            Want to Work With Us?
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with technology and automation.
          </p>
          <div>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all font-semibold"
              >
                Get in Touch
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;