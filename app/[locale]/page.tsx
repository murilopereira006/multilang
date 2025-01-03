import type { Metadata } from 'next';

import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <div className=''>
      <h1 className='font-modak text-4xl'>{t('title')}</h1>
      <Link className='font-poppins text-xl' href='/contact'>
        {t('about')}
      </Link>
    </div>
  );
}
