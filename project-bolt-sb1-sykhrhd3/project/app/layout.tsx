import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileNav } from '@/components/mobile-nav';
import { ChatBot } from '@/components/chat-bot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AgriConnect - Advanced Agricultural Marketplace',
  description: 'Connect farmers directly to markets with advanced analytics, logistics, and financial services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <MobileNav />
            <ChatBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}