import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.supportstudio.tech';

  const routes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Note: For full dynamic implementation, you would query Supabase for services/case-studies
  // and map their result slugs into these route configurations.
  
  return [...routes];
}
