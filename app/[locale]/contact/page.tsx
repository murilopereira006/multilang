import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('Contact');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href='/'>{t('about')}</Link>
    </div>
  );
}
