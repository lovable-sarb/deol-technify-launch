
-- Testimonials table (public can read, anyone can submit, admin approves)
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT,
  service TEXT,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved testimonials
CREATE POLICY "Anyone can read approved testimonials"
  ON public.testimonials FOR SELECT
  USING (approved = true);

-- Anyone can submit a testimonial
CREATE POLICY "Anyone can submit testimonials"
  ON public.testimonials FOR INSERT
  WITH CHECK (true);

-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'General',
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  author TEXT NOT NULL DEFAULT 'Deol Technify',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published blog posts
CREATE POLICY "Anyone can read published blog posts"
  ON public.blog_posts FOR SELECT
  USING (published = true);

-- Seed some initial testimonials (pre-approved)
INSERT INTO public.testimonials (name, role, company, service, text, rating, approved) VALUES
  ('Rajesh Kumar', 'CEO', 'GrowthScale Inc.', 'AI Solutions', 'Deol Technify transformed our entire sales pipeline with AI-powered automation. Revenue increased 40% in just 3 months. Their team is incredibly skilled and responsive.', 5, true),
  ('Priya Sharma', 'CTO', 'DataFlow Systems', 'Web & SaaS Development', 'Their SaaS development expertise is unmatched. They delivered our platform ahead of schedule with incredible quality. We''ve been working with them for over a year now.', 5, true),
  ('Emily Chen', 'Marketing Director', 'NexaHub', 'WhatsApp Automation', 'The WhatsApp and SMS automation setup they built generates leads on autopilot. Game-changing for our marketing team. ROI was visible within the first month.', 5, true),
  ('Michael Torres', 'Operations Manager', 'LogiTech Solutions', 'Automation & Integration', 'Their n8n and Zapier automation saved us 30+ hours per week. The workflows they built are robust and haven''t needed any maintenance.', 5, true),
  ('Sarah Williams', 'Founder', 'VoiceFirst AI', 'AI Voice Agents', 'The AI voice agent they built handles 80% of our customer calls. Our support costs dropped significantly while customer satisfaction improved.', 5, true),
  ('Amit Patel', 'E-Commerce Director', 'ShopWave', 'E-Commerce Stores', 'They built our Shopify Plus store with custom integrations. Sales increased 55% after launch. The checkout experience is seamless.', 5, true);

-- Seed blog posts
INSERT INTO public.blog_posts (slug, title, excerpt, content, category, image_url, published, author) VALUES
  ('ai-business-automation', 'How AI is Revolutionizing Business Automation in 2026', 'Discover how artificial intelligence is transforming the way businesses automate operations, from customer service to supply chain management.', 'Artificial intelligence has moved beyond buzzword status to become the backbone of modern business automation...', 'AI', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', true, 'Deol Technify'),
  ('benefits-workflow-automation', '10 Benefits of Workflow Automation for Growing Companies', 'Learn how workflow automation can save your team hours every week, reduce errors, and improve overall business efficiency.', 'Workflow automation is no longer a luxury—it''s a necessity for growing companies...', 'Automation', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', true, 'Deol Technify'),
  ('whatsapp-automation-sales', 'WhatsApp Automation: The Secret Weapon for Sales Teams', 'Explore how WhatsApp Business API automation can transform your sales process with automated responses, lead qualification, and follow-ups.', 'WhatsApp has over 2 billion users worldwide, making it the most popular messaging platform...', 'Communication', 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop', true, 'Deol Technify'),
  ('ai-agents-customer-support', 'AI Agents for Customer Support: A Complete Guide', 'How to implement AI-powered customer support agents that handle inquiries 24/7, escalate complex issues, and improve satisfaction scores.', 'Customer support is one of the most impactful areas where AI agents shine...', 'AI', 'https://images.unsplash.com/photo-1531746790095-e5993e641c17?w=600&h=400&fit=crop', true, 'Deol Technify'),
  ('saas-development-trends', 'SaaS Development Trends That Will Define 2026', 'From AI-native features to vertical SaaS, explore the top development trends shaping the future of software-as-a-service platforms.', 'The SaaS landscape continues to evolve rapidly...', 'Development', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', true, 'Deol Technify'),
  ('automation-reduces-costs', 'How Automation Reduces Operational Costs by Up to 60%', 'Real-world case studies showing how businesses have dramatically cut costs through intelligent process automation and AI implementation.', 'In today''s competitive business landscape, reducing operational costs while maintaining quality is crucial...', 'Automation', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop', true, 'Deol Technify');
