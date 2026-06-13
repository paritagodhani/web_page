import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TechVision - Modern Web Development Solutions | Build the Future',
  description:
    'Enterprise-grade web development platform with 99.9% uptime, lightning-fast performance, and world-class support. Transform your ideas into reality.',
  keywords: 'web development, modern solutions, tech platform, SaaS, web services, scalable infrastructure',
  authors: [{ name: 'TechVision' }],
  creator: 'TechVision',
  publisher: 'TechVision',
  generator: 'v0.app',
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techvision.com',
    siteName: 'TechVision',
    title: 'TechVision - Modern Web Development Solutions',
    description:
      'Enterprise-grade web development platform with 99.9% uptime, lightning-fast performance, and world-class support.',
    images: [
      {
        url: 'https://techvision.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechVision - Modern Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechVision - Modern Web Development Solutions',
    description: 'Transform your ideas into reality with cutting-edge technology',
    images: ['https://techvision.com/twitter-image.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
