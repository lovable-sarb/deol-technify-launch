import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, Clock, User, Sparkles } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image_url: string | null;
  author: string;
  created_at: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, category, image_url, author, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (data) setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

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

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .blog-hero-banner {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.95) 0%,
            rgba(118, 75, 162, 0.95) 100%
          );
        }

        .blog-hero-overlay::before {
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

        .blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .blog-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog-card:hover .blog-image {
          transform: scale(1.08);
        }

        .category-badge {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #4f46e5;
          font-weight: 600;
        }

        .read-more-link {
          transition: gap 0.3s ease;
        }

        .blog-card:hover .read-more-link {
          gap: 0.75rem;
        }

        .loading-skeleton {
          background: linear-gradient(
            90deg,
            rgba(226, 232, 240, 0.4) 0%,
            rgba(226, 232, 240, 0.8) 50%,
            rgba(226, 232, 240, 0.4) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
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

      {/* Hero Section */}
      <section className="blog-hero-banner">
        <div className="blog-hero-overlay"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full section-badge mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Blog
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-glow animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <span className="text-white">Insights on </span>
              <span className="text-white opacity-90">
                Technology & Automation
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Expert articles on AI, automation, SaaS development, and digital transformation strategies for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 lg:py-28 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="blog-card">
                  <div className="aspect-video loading-skeleton"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 loading-skeleton rounded w-1/3"></div>
                    <div className="h-7 loading-skeleton rounded w-full"></div>
                    <div className="h-4 loading-skeleton rounded w-full"></div>
                    <div className="h-4 loading-skeleton rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold heading-font text-gray-900 mb-3">
                No posts yet
              </h3>
              <p className="text-lg text-gray-600">
                Check back soon for insights on technology and automation!
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link 
                  to={`/blog/${post.slug}`} 
                  key={post.id} 
                  className="block"
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <article className="blog-card h-full flex flex-col">
                    {post.image_url && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="blog-image w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="category-badge text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.created_at).toLocaleDateString("en-US", { 
                            month: "short", 
                            day: "numeric", 
                            year: "numeric" 
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="heading-font text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author & Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-2 text-xs text-gray-500">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="read-more-link inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;