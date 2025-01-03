'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Locale, routing, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';

import { Flags } from './flags';

export const LocaleSwitcher = () => {
  const locale: string = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleChangeLanguage = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChangeLanguage}>
      <SelectTrigger className='max-w-fit'>
        <SelectValue placeholder='Theme'>{Flags[locale].flag}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((curr, index) => (
          <SelectItem value={curr} key={curr + index}>
            <span className='flex gap-1 items-center'>
              {Flags[curr].flag} {Flags[curr].name}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
