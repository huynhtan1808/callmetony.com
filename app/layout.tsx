import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter as FontSans } from "next/font/google"
import Sidebar from '../components/sidebar';
import { Analytics } from '@vercel/analytics/react';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: 'Tony Huynh',
    template: '%s | Tony Huynh',
  },
  description: 'I am a software engineer, founder of One Pixel Media, a digital marketing agency specialising in design, development and branding.',
  openGraph: {
    title: 'Tony Huynh',
    description: 'I am a software engineer, founder of One Pixel Media, a digital marketing agency specialising in design, development and branding.',
    url: 'https://callmetony.com',
    siteName: 'Tony Huynh',
    images: [
      {
        url: 'https://callmetony.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'vi-VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Tony Huynh',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#101010]',
        fontSans.variable
      )}
    >
      <body className="antialiased max-w-[48rem] mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mx-auto">
        <Sidebar />
        <main className="md:max-w-[39rem] flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
