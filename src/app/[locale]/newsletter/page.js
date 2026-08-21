import { prisma } from '@/lib/prisma';
import NewsletterClient from './NewsletterClient';

export async function generateMetadata(props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const articleId = searchParams?.id;
  const locale = params?.locale || 'id';

  if (!articleId) {
    return {
      title: 'News Hub - First HR Indonesia',
      description: 'Dapatkan berita dan wawasan terbaru seputar dunia HR.',
    };
  }

  // ponytail: lookup by old string id for backward compat, will switch to slug in Tahap 6
  const article = await prisma.news.findFirst({
    where: { OR: [{ slug: articleId }, { id: parseInt(articleId) || 0 }] },
  });

  if (!article) {
    return {
      title: 'News Hub - First HR Indonesia',
      description: 'Dapatkan berita dan wawasan terbaru seputar dunia HR.',
    };
  }

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
      url: `${domain}/${locale}/newsletter/${article.slug}`,
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

export default async function NewsletterPage({ params }) {
  const { locale } = await params;

  const newsData = await prisma.news.findMany({
    orderBy: { publishedAt: 'desc' },
  });

  // Serialize for client
  const serialized = newsData.map((n) => ({
    ...n,
    publishedAt: n.publishedAt.toISOString(),
    createdAt: n.createdAt.toISOString(),
    updatedAt: n.updatedAt.toISOString(),
  }));

  return <NewsletterClient newsData={serialized} />;
}
