import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/sections/CookieBanner'
import { sportsOrganizationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: {
    default: 'Dziudo Klaipėda',
    template: '%s | Dziudo Klaipėda',
  },
  description:
    'Klaipėdos dziudo klubas – treniruotės vaikams, jaunimui ir suaugusiems. Profesionalūs treneriai, tradicijos ir modernus požiūris į dziudo meną.',
  keywords: [
    'dziudo',
    'klaipėda',
    'judo',
    'kovos menai',
    'sporto klubas',
    'treniruotės',
    'vaikų sportas',
  ],
  authors: [{ name: 'Klaipėdos Dziudo Klubas' }],
  metadataBase: new URL('https://klaipedosdziudo.lt'),
  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    siteName: 'Dziudo Klaipėda',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/images/Klaipedos-Dziudo.svg',
    apple: '/images/Klaipedos-Dziudo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sportsOrganizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-dojo-black antialiased">
        <Header />
        <div className="flex-1 pt-[72px] md:pt-[80px]">
          {children}
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
