import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fr', 'ja', 'bn'],
        defaultLocale: 'en',
        localeDetection: false,
    },
};

export default withNextIntl(nextConfig);
