import { NextIntlClientProvider } from 'next-intl';
import '@/styles/globals.css';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params; // params'ı await et

  const messages = (await import(`../../locales/${resolvedParams.lang}.json`))
    .default;

  return (
    <html lang={resolvedParams.lang}>
      <body>
        <NextIntlClientProvider
          locale={resolvedParams.lang}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
