import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://callmetony.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/about', '/blog', '/workspace'].map(
    (route) => ({
      url: `https://callmetony.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
