import { getNewsData } from '@/components/newsData';
import NewsletterClient from './NewsletterClient';

export async function generateMetadata(props) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const articleId = searchParams?.id;
  const locale = params?.locale || 'id';
  
  const newsData = getNewsData(locale);
  const article = newsData.find((item) => item.id === articleId);

  console.log("--> ID dari URL (Server):", articleId);
  console.log("--> Artikel Ditemukan?:", !!article);

  if (!article) {
    return {
      title: 'News Hub - First HR Indonesia',
      description: 'Dapatkan berita dan wawasan terbaru seputar dunia HR.',
    };
  }

  const domain = 'https://firsthrindonesia.com';
  const absoluteImageUrl = article.image.startsWith('http') 
    ? article.image 
    : `${domain}${article.image}`;

  return {
    title: article.title,
    description: article.description || article.title,
    openGraph: {
      title: article.title,
      description: article.description || article.title,
      url: `${domain}/${locale}/newsletter?id=${articleId}`,
      siteName: 'First HR Indonesia',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description || article.title,
      images: [absoluteImageUrl],
    },
  };
}

export default function NewsletterPage() {
  return <NewsletterClient />;
}