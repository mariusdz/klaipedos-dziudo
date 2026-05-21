'use client'

import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-dojo-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto px-6"
      >
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-dojo-blue/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-10 h-10 text-dojo-blue" />
          </div>
        </div>

        <h1 className="text-8xl font-bold text-dojo-blue mb-2">404</h1>
        <h2 className="heading-1 mb-4">Puslapis nerastas</h2>
        <p className="text-body text-dojo-gray-600 mb-8">
          Atsiprašome, bet puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">
            <Home className="w-4 h-4 mr-2" />
            Grįžti į pradžią
          </Button>
          <Button href="/contact" variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kontaktai
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
