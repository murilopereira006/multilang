import { JSX } from 'react';

import BR from '@/public/flags/br.svg';
import DE from '@/public/flags/de.svg';
import EN from '@/public/flags/en.svg';
import ES from '@/public/flags/es.svg';
import FR from '@/public/flags/fr.svg';
import JP from '@/public/flags/jp.svg';
import KO from '@/public/flags/ko.svg';
import ZH from '@/public/flags/zh.svg';

type flagType = {
  [key: string]: {
    name: string;
    flag: JSX.Element;
  };
};

export const Flags: flagType = {
  pt: {
    name: 'Português',
    flag: <BR />,
  },
  jp: {
    name: '日本語',
    flag: <JP />,
  },
  ko: {
    name: '한국어',
    flag: <KO />,
  },
  zh: {
    name: '中文',
    flag: <ZH />,
  },
  de: {
    name: 'Deutsch',
    flag: <DE />,
  },
  en: {
    name: 'English',
    flag: <EN />,
  },
  es: {
    name: 'Español',
    flag: <ES />,
  },
  fr: {
    name: 'Français',
    flag: <FR />,
  },
};
