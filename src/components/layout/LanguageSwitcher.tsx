import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const t = useTranslations('languageSwitcher');
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
      className="
      p-3
      border
      border-gray-300
      rounded-md
      bg-white
      text-gray-900
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500
      transition
      duration-200
      ease-in-out
      shadow-sm
      hover:border-gray-400
    "
    >
      <option value="en">{t('languages.en')}</option>
      <option value="tr">{t('languages.tr')}</option>
    </select>
  );
}
