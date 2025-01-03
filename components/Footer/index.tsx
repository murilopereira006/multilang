import { getTranslations } from 'next-intl/server';

export const Footer = async () => {
  const t = await getTranslations('Footer');
  return (
    <footer className='absolute bottom-0  w-full min-h-20 bg-slate-200 dark:bg-slate-900 px-20 py-4'>
      {t('footer')}
    </footer>
  );
};
