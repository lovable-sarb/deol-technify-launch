import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, Eye, EyeOff, Save } from "lucide-react";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  slug: z.string().trim().min(1, "Slug is required").max(200).regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens only"),
  excerpt: z.string().trim().min(1, "Excerpt is required").max(500),
  content: z.string().trim().min(1, "Content is required"),
  category: z.string().trim().min(1, "Category is required").max(50),
  image_url: z.string().trim().max(500).optional(),
  author: z.string().trim().min(1, "Author is required").max(100),
});

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string | null;
  published: boolean;
  author: string;
  created_at: string;
}

const emptyForm = { title: "", slug: "", excerpt: "", content: "", category: "", image_url: "", author: "Deol Technify" };

const AdminBlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const { toast } = useToast();

  // Simple password protection (not production-grade, just basic admin gate)
  const ADMIN_PASS = "deoltechnify2026";

  const fetchPosts = async () => {
    // Use service-level read to get all posts including unpublished
    // Since RLS only allows published, we need a workaround for admin
    // For now, we read published ones and manage via direct insert/update
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    if (data) setPosts(data);
  };

  useEffect(() => {
    if (authenticated) fetchPosts();
  }, [authenticated]);

  if (!authenticated) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container mx-auto max-w-md">
            <SectionHeading title="Blog Admin" description="Enter admin password to manage blog posts." />
            <div className="glass-card p-6 space-y-4">
              <Input
                type="password"
                placeholder="Admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-secondary border-border"
              />
              <Button
                className="w-full gradient-bg text-primary-foreground font-semibold"
                onClick={() => {
                  if (password === ADMIN_PASS) setAuthenticated(true);
                  else toast({ title: "Wrong password", variant: "destructive" });
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = blogSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      content: form.content,
      category: form.category,
      image_url: form.image_url || null,
      author: form.author,
      published: true,
    };

    if (editing) {
      const { error } = await supabase.from("blog_posts").update(payload).eq("id", editing);
      if (error) toast({ title: "Error updating", description: error.message, variant: "destructive" });
      else toast({ title: "Post updated!" });
    } else {
      const { error } = await supabase.from("blog_posts").insert(payload);
      if (error) toast({ title: "Error creating", description: error.message, variant: "destructive" });
      else toast({ title: "Post created!" });
    }

    setSaving(false);
    setEditing(null);
    setForm(emptyForm);
    fetchPosts();
  };

  const startEdit = (post: BlogPost) => {
    setEditing(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image_url: post.image_url || "",
      author: post.author,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const togglePublish = async (post: BlogPost) => {
    await supabase.from("blog_posts").update({ published: !post.published }).eq("id", post.id);
    fetchPosts();
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    fetchPosts();
    toast({ title: "Post deleted" });
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    // Auto-generate slug from title
    if (field === "title") {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title={editing ? "Edit Blog Post" : "Create New Blog Post"} />

          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4 mb-12">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Title *</label>
                <Input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="Post title" className="bg-secondary border-border" />
                {errors.title && <p className="text-xs text-destructive mt-1">{errors.title}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Slug *</label>
                <Input value={form.slug} onChange={(e) => update("slug", e.target.value)} placeholder="post-slug" className="bg-secondary border-border" />
                {errors.slug && <p className="text-xs text-destructive mt-1">{errors.slug}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Category *</label>
                <Input value={form.category} onChange={(e) => update("category", e.target.value)} placeholder="e.g. AI, Automation" className="bg-secondary border-border" />
                {errors.category && <p className="text-xs text-destructive mt-1">{errors.category}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Author *</label>
                <Input value={form.author} onChange={(e) => update("author", e.target.value)} placeholder="Author name" className="bg-secondary border-border" />
                {errors.author && <p className="text-xs text-destructive mt-1">{errors.author}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Image URL</label>
              <Input value={form.image_url} onChange={(e) => update("image_url", e.target.value)} placeholder="https://..." className="bg-secondary border-border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Excerpt *</label>
              <Textarea value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} placeholder="Short summary..." rows={2} className="bg-secondary border-border" />
              {errors.excerpt && <p className="text-xs text-destructive mt-1">{errors.excerpt}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Content *</label>
              <Textarea value={form.content} onChange={(e) => update("content", e.target.value)} placeholder="Full blog post content..." rows={10} className="bg-secondary border-border" />
              {errors.content && <p className="text-xs text-destructive mt-1">{errors.content}</p>}
            </div>
            <div className="flex gap-3 justify-end">
              {editing && (
                <Button type="button" variant="ghost" onClick={() => { setEditing(null); setForm(emptyForm); }}>
                  Cancel
                </Button>
              )}
              <Button type="submit" disabled={saving} className="gradient-bg text-primary-foreground font-semibold">
                <Save className="mr-2 w-4 h-4" /> {saving ? "Saving..." : editing ? "Update Post" : "Publish Post"}
              </Button>
            </div>
          </form>

          {/* Existing Posts */}
          <h3 className="font-display text-xl font-bold text-foreground mb-4">All Posts ({posts.length})</h3>
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="glass-card p-4 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{post.title}</p>
                  <p className="text-xs text-muted-foreground">{post.category} · {post.author} · {new Date(post.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button size="sm" variant="ghost" onClick={() => togglePublish(post)} title={post.published ? "Unpublish" : "Publish"}>
                    {post.published ? <Eye className="w-4 h-4 text-primary" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => startEdit(post)}>
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => deletePost(post.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminBlogPage;
