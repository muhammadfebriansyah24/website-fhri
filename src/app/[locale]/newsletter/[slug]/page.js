import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import ArticleClient from './ArticleClient';

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  const article = await prisma.news.findUnique({ where: { slug } });
  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  const title = locale === 'id' ? article.titleId : article.titleEn;
  const description = locale === 'id' ? article.descriptionId : article.descriptionEn;
  const domain = 'https://firsthrindonesia.com';
  const absoluteImageUrl = article.image.startsWith('http')
    ? article.image
    : `${domain}${article.image}`;

  return {
    title,
    description: description || title,
    openGraph: {
      title,
      description: description || title,
      url: `${domain}/${locale}/newsletter/${slug}`,
      siteName: 'First HR Indonesia',
      images: [{ url: absoluteImageUrl, width: 1200, height: 630, alt: title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description || title,
      images: [absoluteImageUrl],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { locale, slug } = await params;

  const article = await prisma.news.findUnique({ where: { slug } });
  if (!article) notFound();

  const serialized = {
    ...article,
    publishedAt: article.publishedAt.toISOString(),
    createdAt: article.createdAt.toISOString(),
    updatedAt: article.updatedAt.toISOString(),
  };

  return <ArticleClient article={serialized} />;
}
