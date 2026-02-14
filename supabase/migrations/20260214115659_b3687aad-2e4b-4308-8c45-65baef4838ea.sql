
-- Allow all operations on blog_posts for now (admin managed via app-level password)
CREATE POLICY "Allow insert blog posts" ON public.blog_posts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update blog posts" ON public.blog_posts FOR UPDATE USING (true);
CREATE POLICY "Allow delete blog posts" ON public.blog_posts FOR DELETE USING (true);

-- Also allow reading all blog posts (admin needs unpublished too)
DROP POLICY "Anyone can read published blog posts" ON public.blog_posts;
CREATE POLICY "Anyone can read blog posts" ON public.blog_posts FOR SELECT USING (true);
