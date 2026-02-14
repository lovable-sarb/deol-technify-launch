import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import SectionHeading from "./SectionHeading";
import { Star, Quote, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string | null;
  service: string | null;
  text: string;
  rating: number;
}

const testimonialSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  role: z.string().trim().min(1, "Role is required").max(100),
  company: z.string().trim().max(100).optional(),
  service: z.string().trim().max(100).optional(),
  text: z.string().trim().min(10, "Please write at least 10 characters").max(500),
  rating: z.number().min(1).max(5),
});

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", company: "", service: "", text: "", rating: 5 });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = testimonialSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("testimonials").insert({
      name: form.name,
      role: form.role,
      company: form.company || null,
      service: form.service || null,
      text: form.text,
      rating: form.rating,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "Your testimonial has been submitted and will appear after review." });
    setForm({ name: "", role: "", company: "", service: "", text: "", rating: 5 });
    setShowForm(false);
  };

  const update = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section className="section-padding" aria-label="Client Testimonials">
      <div className="container mx-auto">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Businesses Worldwide"
          description="See what our clients say about working with Deol Technify."
        />

        {testimonials.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card-hover p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}{t.company ? `, ${t.company}` : ""}
                </p>
                {t.service && (
                  <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">
                    {t.service}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mb-12">Loading testimonials...</p>
        )}

        {/* Submit Testimonial */}
        <div className="text-center">
          {!showForm ? (
            <Button
              onClick={() => setShowForm(true)}
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/5 font-semibold"
            >
              Share Your Experience
            </Button>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 max-w-2xl mx-auto space-y-4 text-left">
              <h3 className="font-display text-lg font-semibold text-foreground text-center mb-2">Share Your Experience</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <Input placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} className="bg-secondary border-border" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Role *</label>
                  <Input placeholder="e.g. CEO, Developer" value={form.role} onChange={(e) => update("role", e.target.value)} className="bg-secondary border-border" />
                  {errors.role && <p className="text-xs text-destructive mt-1">{errors.role}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company</label>
                  <Input placeholder="Your company" value={form.company} onChange={(e) => update("company", e.target.value)} className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Service Used</label>
                  <Input placeholder="e.g. AI Solutions" value={form.service} onChange={(e) => update("service", e.target.value)} className="bg-secondary border-border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your Review *</label>
                <Textarea placeholder="Tell us about your experience..." rows={4} value={form.text} onChange={(e) => update("text", e.target.value)} className="bg-secondary border-border" />
                {errors.text && <p className="text-xs text-destructive mt-1">{errors.text}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((r) => (
                    <button key={r} type="button" onClick={() => update("rating", r)}>
                      <Star className={`w-6 h-6 transition-colors ${r <= form.rating ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button>
                <Button type="submit" disabled={submitting} className="gradient-bg text-primary-foreground font-semibold">
                  {submitting ? "Submitting..." : "Submit Review"} <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
