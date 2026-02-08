import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    slug: "ai-business-automation",
    title: "How AI is Revolutionizing Business Automation in 2026",
    excerpt: "Discover how artificial intelligence is transforming the way businesses automate operations, from customer service to supply chain management.",
    date: "Feb 5, 2026",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    slug: "benefits-workflow-automation",
    title: "10 Benefits of Workflow Automation for Growing Companies",
    excerpt: "Learn how workflow automation can save your team hours every week, reduce errors, and improve overall business efficiency.",
    date: "Jan 28, 2026",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    slug: "whatsapp-automation-sales",
    title: "WhatsApp Automation: The Secret Weapon for Sales Teams",
    excerpt: "Explore how WhatsApp Business API automation can transform your sales process with automated responses, lead qualification, and follow-ups.",
    date: "Jan 20, 2026",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
  },
  {
    slug: "ai-agents-customer-support",
    title: "AI Agents for Customer Support: A Complete Guide",
    excerpt: "How to implement AI-powered customer support agents that handle inquiries 24/7, escalate complex issues, and improve satisfaction scores.",
    date: "Jan 12, 2026",
    category: "AI",
    image: "https://images.unsplash.com/photo-1531746790095-e5993e641c17?w=600&h=400&fit=crop",
  },
  {
    slug: "saas-development-trends",
    title: "SaaS Development Trends That Will Define 2026",
    excerpt: "From AI-native features to vertical SaaS, explore the top development trends shaping the future of software-as-a-service platforms.",
    date: "Jan 5, 2026",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    slug: "automation-reduces-costs",
    title: "How Automation Reduces Operational Costs by Up to 60%",
    excerpt: "Real-world case studies showing how businesses have dramatically cut costs through intelligent process automation and AI implementation.",
    date: "Dec 28, 2025",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
];

const BlogPage = () => (
  <Layout>
    <section className="section-padding" aria-label="Blog hero">
      <div className="container mx-auto">
        <SectionHeading
          label="Blog"
          title="Insights on Technology & Automation"
          description="Expert articles on AI, automation, SaaS development, and digital transformation strategies for modern businesses."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-card-hover overflow-hidden group flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all cursor-pointer">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPage;
