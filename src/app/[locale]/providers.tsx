'use client'

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useEffect, useState } from 'react';

export function Providers({
    children,
    locale
}: {
    children: React.ReactNode;
    locale: string;
}) {
    const [messages, setMessages] = useState<Record<string, unknown>>({});
    useEffect(() => {
        const loadMessages = async () => {
            try {
                const msgs = await import(`../../messages/${locale}.json`);
                setMessages(msgs.default);
            } catch (error) {
                console.error("Failed to load messages", error);
                setMessages({}); // Set empty object as fallback
            }
        };

        loadMessages();
    }, [locale]);

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Asia/Kolkata" // Add timezone for India
        >
            <ThemeProvider attribute="class">
                <Theme accentColor="blue" grayColor="slate" radius="medium">
                    {children}
                </Theme>
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}
