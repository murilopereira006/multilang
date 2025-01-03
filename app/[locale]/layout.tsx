import { Locale, routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ClientThemeProvider } from '@/components/ThemeProvider';

import './globals.css';

const gulzar = localFont({
  src: '../../public/fonts/Gulzar/Gulzar-Regular.ttf',
  display: 'swap',
  variable: '--font-gulzar',
});

const modak = localFont({
  src: '../../public/fonts/Modak/Modak-Regular.ttf',
  display: 'swap',
  variable: '--font-modak',
});

const roboto = localFont({
  variable: '--font-roboto',
  src: [
    {
      path: '../../public/fonts/Roboto/Roboto-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

const poppins = localFont({
  variable: '--font-poppins',
  src: [
    {
      path: '../../public/fonts/Poppins/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${gulzar.variable} ${modak.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <body>
        <ClientThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <div className='h-screen py-20'>
              <Header />

              <main className='h-full px-20 py-10'>{children}</main>

              <Footer />
            </div>
          </NextIntlClientProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
