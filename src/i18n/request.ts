import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './settings';

export default getRequestConfig(async ({ locale }) => {
    try {
        // More explicit error handling
        const messages = (await import(`../messages/${locale || defaultLocale}.json`)).default;

        return {
            locale: locale ?? defaultLocale,
            messages,
            timeZone: 'Asia/Kolkata',
        };
    } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
        // Fallback to empty messages rather than failing
        return {
            locale: locale ?? defaultLocale,
            messages: {},
            timeZone: 'Asia/Kolkata',
        };
    }
});
