import { prisma } from '@/lib/prisma';

const domain = 'https://firsthrindonesia.com';
const locales = ['en', 'id'];

const staticRoutes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/business/assessment-tools', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/business-support', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/corporate-culture', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/hr-bootcamp', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/hse', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/humancapital-solutions', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/industrial-relations', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/lsp', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/business/payroll', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/join-us', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/newsletter', priority: 0.9, changeFrequency: 'daily' },
  { path: '/pricing', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/recruitment', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/tips-and-trick', priority: 0.6, changeFrequency: 'weekly' },
];

export default async function sitemap() {
  const entries = [];

  // Static pages, one entry per locale
  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${domain}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  // Dynamic news/newsletter article pages
  try {
    const articles = await prisma.news.findMany({
      select: { slug: true, updatedAt: true },
    });

    for (const locale of locales) {
      for (const article of articles) {
        entries.push({
          url: `${domain}/${locale}/newsletter/${article.slug}`,
          lastModified: article.updatedAt,
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    }
  } catch (error) {
    console.error('sitemap: failed to fetch news articles', error);
  }

  return entries;
}