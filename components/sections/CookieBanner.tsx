'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie-consent', type)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-dojo-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="container-default py-4 md:py-5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0 mt-0.5">
              <Cookie className="w-5 h-5 text-dojo-blue" />
            </div>
            <div>
              <p className="text-sm text-dojo-gray-700 leading-relaxed">
                Mes naudojame slapukus siekdami užtikrinti geriausią svetainės veikimą, analizuoti
                srautą ir pagerinti jūsų patirtį.{' '}
                <Link
                  href="/slapuku-politika"
                  className="text-dojo-blue font-semibold hover:underline"
                >
                  Sužinokite daugiau
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto">
            <Button
              size="sm"
              onClick={() => handleAccept('essential')}
              variant="outline"
            >
              Tik būtini
            </Button>
            <Button
              size="sm"
              onClick={() => handleAccept('all')}
            >
              Priimti visus
            </Button>
            <button
              onClick={() => setVisible(false)}
              className="p-2 rounded-lg text-dojo-gray-400 hover:text-dojo-gray-700 hover:bg-dojo-gray-100 transition-colors"
              aria-label="Uždaryti"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
