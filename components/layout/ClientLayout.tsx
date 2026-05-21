'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'
import { CookieBanner } from '@/components/sections/CookieBanner'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return (
      <div className="min-h-screen flex flex-col bg-dojo-gray-50 text-dojo-black">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-dojo-black antialiased">
      <Header />
      <div className="flex-1 pt-[72px] md:pt-[80px]">{children}</div>
      <Footer />
      <CookieBanner />
    </div>
  )
}
