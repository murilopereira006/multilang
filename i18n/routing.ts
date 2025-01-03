import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'pt', 'es', 'de', 'zh', 'ko', 'jp'],

  pathnames: {
    '/': '/',
    '/contact': {
      en: '/contact',
      fr: '/contact',
      pt: '/contato',
      es: '/contacto',
      de: '/kontakt',
      zh: '/contact',
      ko: '/contact',
      jp: '/contact',
    },
  },

  // Used when no locale matches
  defaultLocale: 'en',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
