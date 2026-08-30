import { prisma } from '@/lib/prisma';
import HomeClient from './HomeClient';

export default async function Home({ params }) {
  const { locale } = await params;

  const [newsData, sponsors, testimonials] = await Promise.all([
    prisma.news.findMany({
      orderBy: { publishedAt: 'desc' },
      take: 4,
      select: {
        id: true, titleId: true, titleEn: true, slug: true,
        image: true, descriptionId: true, descriptionEn: true,
        publishedAt: true, featured: true,
      },
    }),
    prisma.sponsor.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
      select: { name: true, logo: true },
    }),
    prisma.wallOfCongratulations.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    }),
  ]);

  // Serialize dates for client
  const serializedNews = newsData.map(n => ({
    ...n,
    publishedAt: n.publishedAt.toISOString(),
  }));

  const serializedTestimonials = testimonials.map(t => ({
    ...t,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  }));

  return <HomeClient newsData={serializedNews} sponsors={sponsors} testimonials={serializedTestimonials} />;
}