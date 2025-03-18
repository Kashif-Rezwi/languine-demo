'use client'

import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <Theme accentColor="blue" grayColor="slate" radius="medium">
                {children}
            </Theme>
        </ThemeProvider>
    )
}
