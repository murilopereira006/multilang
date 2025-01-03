'use client';

import { LocaleSwitcher } from '../LocaleSwitcher';
import { ThemeToggle } from '../ThemeToggle';

export const Header = () => {
  return (
    <header className='absolute top-0 flex w-full h-20 justify-end items-center gap-2 bg-slate-200 dark:bg-slate-900 px-20 py-4'>
      <ThemeToggle />
      <LocaleSwitcher />
    </header>
  );
};
