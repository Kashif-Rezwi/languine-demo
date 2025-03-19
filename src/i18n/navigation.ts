// src/i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './settings';

export const { Link, redirect, usePathname, useRouter } =
    createNavigation({
        locales,
        defaultLocale,
        localePrefix: 'as-needed'
    });
