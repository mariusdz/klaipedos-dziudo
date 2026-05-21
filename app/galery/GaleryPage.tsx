'use client'

import { motion } from 'framer-motion'
import { Construction, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function GaleryPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-dojo-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto px-6"
      >
        <div className="w-20 h-20 rounded-full bg-dojo-blue/10 flex items-center justify-center mx-auto mb-6">
          <Construction className="w-10 h-10 text-dojo-blue" />
        </div>
        <h1 className="heading-1 mb-4">Puslapis ruošiamas</h1>
        <p className="text-body text-dojo-gray-600 mb-8">
          Atsiprašome už nepatogumus. Galerijos puslapis šiuo metu kuriamas ir netrukus bus
          pasiekiamas. Čia galėsite peržiūrėti nuotraukas iš treniruočių, varžybų ir stovyklų.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/about/veikla">Klubo veikla</Button>
          <Button href="/contact" variant="outline">
            Susisiekti
          </Button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-dojo-gray-400">
          <Clock className="w-4 h-4" />
          <span>Numatomas atidarymas – netrukus</span>
        </div>
      </motion.div>
    </section>
  )
}
