// src/i18n/settings.ts
export const locales = ['en', 'fr', 'ja', 'bn'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];
