// components/HomeContent.tsx
'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6">{t('title')}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl text-center">
        {t('description')}
      </p>
      <LanguageSwitcher />
    </main>
  );
}
