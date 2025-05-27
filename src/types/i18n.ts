import { getRequestConfig } from 'next-intl/server';

// Supported locales
const supportedLocales = ['en', 'tr'] as const;
type SupportedLocale = (typeof supportedLocales)[number]; // 'en' | 'tr'
const defaultLocale: SupportedLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is a supported string, fallback to defaultLocale if invalid
  const validLocale: SupportedLocale = supportedLocales.includes(
    locale as SupportedLocale
  )
    ? (locale as SupportedLocale)
    : defaultLocale;

  return {
    locale: validLocale, // Type is now guaranteed to be 'en' | 'tr'
    messages: (await import(`../../locales/${validLocale}.json`)).default,
  };
});
