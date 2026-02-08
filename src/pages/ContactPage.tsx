import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
      <section className="section-padding" aria-label="Contact and booking">
        <div className="container mx-auto">
          <SectionHeading
            label="Contact Us"
            title="Book a Service or Request a Quote"
            description="Fill out the form below and our team will get back to you within 24 hours with a custom proposal."
          />

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contact@deoltechnify.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Address", value: "123 Tech Street, Innovation City, IC 10001" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass-card-hover p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 glass-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <Input id="name" placeholder="John Doe" value={form.name} onChange={(e) => update("name", e.target.value)} className="bg-secondary border-border" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} className="bg-secondary border-border" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="bg-secondary border-border" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Service</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" className="bg-card text-foreground">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-card text-foreground">{opt}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className="bg-secondary border-border" />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full gradient-bg text-primary-foreground font-semibold glow-border">
                Request a Quote <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
