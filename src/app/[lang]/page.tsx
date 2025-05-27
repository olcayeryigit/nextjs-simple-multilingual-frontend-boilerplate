import HomePage from '@/components/home-page/HomePage';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const t = await getTranslations({
    locale: resolvedParams.lang,
    namespace: 'home',
  });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home({ params }: { params: { lang: string } }) {
  return <HomePage />;
}
