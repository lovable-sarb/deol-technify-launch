import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const serviceOptions = [
  // Development
  "Web Application Development",
  "SaaS Platform Development",
  "Custom Software Development",
  "Mobile App Development",
  "API Development & Integrations",
  // E-Commerce
  "Shopify Store Development",
  "WooCommerce & WordPress Stores",
  "Headless Commerce Solutions",
  "Payment Gateway Integration",
  "Inventory & Order Management",
  "Dropshipping Automation",
  // Automation
  "Business Process Automation",
  "Workflow Automation",
  "CRM Automation",
  "Marketing Automation",
  "Lead Generation Automation",
  // Integration Tools
  "Zapier Automation",
  "n8n Automation",
  "Make (Integromat) Automation",
  "Custom Automation Scripts",
  // WhatsApp Solutions
  "WhatsApp Business API Setup",
  "WhatsApp Chatbots",
  "WhatsApp Marketing Campaigns",
  "WhatsApp Commerce",
  "WhatsApp CRM Integration",
  // Voice Agents
  "AI Voice Agents (ElevenLabs)",
  "Conversational AI Assistants",
  "Automated Phone Systems",
  "Voice Cloning & Custom Voices",
  "Outbound Voice Campaigns",
  "Speech-to-Text & Transcription",
  // Communication
  "Twilio Integrations",
  "SMS Automation",
  "Video Calling Solutions",
  "Call Center Automation",
  "Omnichannel Messaging",
  // Social Media
  "Instagram & Facebook Automation",
  "TikTok & Short-Form Content",
  "Social Media Management Tools",
  "Influencer Campaign Automation",
  "Social Media Chatbots",
  // AI Solutions
  "AI Agents & Copilots",
  "Custom GPT & LLM Solutions",
  "AI Content Generation",
  "Computer Vision & Image AI",
  "Predictive Analytics",
  // CRM & Funnels
  "GoHighLevel (GHL) Setup",
  "Sales Funnels",
  "Pipeline Automation",
  "Email & SMS Sequences",
  "Webinar Automation",
  // Data & Analytics
  "Custom Analytics Dashboards",
  "Data Warehouse Solutions",
  "Reporting Automation",
  "Cloud Data Integration",
  // Security
  "Security Audits & Assessments",
  "Authentication & Access Control",
  "Compliance Implementation (GDPR/HIPAA/SOC2)",
  "API Security",
  "Other",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Request Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
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

        .contact-hero-banner {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.95) 0%,
            rgba(118, 75, 162, 0.95) 100%
          );
        }

        .contact-hero-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
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

        .contact-info-card {
          background: white;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .form-card {
          background: white;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .form-input {
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
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

        .icon-wrapper {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          transition: all 0.3s ease;
        }

        .contact-info-card:hover .icon-wrapper {
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
        }

        .contact-info-card:hover .icon-wrapper svg {
          color: white;
        }
      `}</style>

      {/* Hero Section */}
      <section className="contact-hero-banner">
        <div className="contact-hero-overlay"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Contact Us
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-glow animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <span className="text-white">Book a Service or </span>
              <span className="text-white opacity-90">
                Request a Quote
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Fill out the form below and our team will get back to you within 24 hours with a custom proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contact@deoltechnify.com", href: "mailto:contact@deoltechnify.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: MapPin, label: "Address", value: "123 Tech Street, Innovation City, IC 10001", href: null },
              ].map(({ icon: Icon, label, value, href }, index) => (
                <div 
                  key={label} 
                  className="contact-info-card"
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl icon-wrapper flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-gray-600 hover:text-indigo-600 transition-colors break-words">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-600 break-words">{value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Response Badge */}
              <div 
                className="contact-info-card bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `0.3s`,
                  opacity: 0
                }}
              >
                <div className="text-center py-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold heading-font text-gray-900 mb-2">
                    24-Hour Response
                  </h3>
                  <p className="text-sm text-gray-600">
                    We typically respond to all inquiries within one business day
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div 
              className="lg:col-span-2"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `0.2s`,
                opacity: 0
              }}
            >
              <form onSubmit={handleSubmit} className="form-card p-8 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      value={form.name} 
                      onChange={(e) => update("name", e.target.value)} 
                      className="form-input bg-gray-50 border-gray-200 h-12"
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={form.email} 
                      onChange={(e) => update("email", e.target.value)} 
                      className="form-input bg-gray-50 border-gray-200 h-12"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      value={form.phone} 
                      onChange={(e) => update("phone", e.target.value)} 
                      className="form-input bg-gray-50 border-gray-200 h-12"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="form-input flex h-12 w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-red-600 mt-1.5">{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, timeline, and budget..." 
                    rows={6} 
                    value={form.message} 
                    onChange={(e) => update("message", e.target.value)} 
                    className="form-input bg-gray-50 border-gray-200 resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-primary text-white h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Request a Quote <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;