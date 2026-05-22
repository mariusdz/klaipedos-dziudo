'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Copy, Check, ExternalLink, Heart } from 'lucide-react'
import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { assetPath } from '@/lib/paths'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

function CopyableField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value.replace(/\s/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-dojo-gray-50 rounded-xl p-5">
      <p className="text-xs font-medium text-dojo-gray-500 uppercase tracking-wide mb-2">
        {label}
      </p>
      <div className="flex items-center justify-between gap-3">
        <code className="text-sm font-semibold text-dojo-blue break-all">{value}</code>
        <button
          onClick={handleCopy}
          className="shrink-0 p-2 rounded-lg bg-white hover:bg-dojo-blue/5 transition-colors"
          aria-label="Kopijuoti"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-dojo-gray-500" />
          )}
        </button>
      </div>
    </div>
  )
}

export default function ParamaPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Parama</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Auginkime Klaipėdos dziudo klubą kartu ir sudarykime vaikams geriausias sąlygas
              tobulėjimui.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr]">
                  {/* Logo Side */}
                  <div className="relative h-48 md:h-auto bg-dojo-gray-50 flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-[200px]">
                      <Image
                        src={assetPath('/images/Klaipedos-Dziudo.svg')}
                        alt="Klaipėdos Dziudo Klubas"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-5 h-5 text-red-500" />
                      <h2 className="heading-2">Klaipėdos Dziudo Klubas</h2>
                    </div>
                    <p className="text-body text-dojo-gray-700 mb-8">
                      Auginkime Klaipėdos dziudo klubą kartu ir sudarykime vaikams geriausias sąlygas
                      tobulėjimui. Jūsų parama padeda įsigyti įrangą, finansuoti keliones į varžybas
                      ir organizuoti stovyklas.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      <CopyableField label="1.2% GPM kodas" value="304722985" />
                      <CopyableField
                        label="Banko sąskaita"
                        value="LT 1473 0001 0153 7874 84"
                      />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="heading-3 mb-3">Kam bus panaudota parama:</h3>
                        <ul className="space-y-2">
                          {[
                            'Papildomos dziudo įrangos įsigijimui',
                            'Kelionėms į varžybas Lietuvoje ir užsienyje',
                            'Stovykloms, seminarams ir trenerių kvalifikacijos kėlimui',
                            'Renginių organizavimui',
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-body-sm">
                              <span className="w-5 h-5 rounded-full bg-dojo-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-dojo-blue" />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="heading-3 mb-3">Kaip skirti 1.2%:</h3>
                        <ol className="space-y-2">
                          {[
                            'Prisijunkite prie Mano VMI (EDS).',
                            'Pasirinkite paramos skyrimą iš sumokėto GPM.',
                            'Įveskite klubo kodą: 304722985.',
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-body-sm">
                              <span className="w-6 h-6 rounded-full bg-dojo-blue text-white text-xs font-bold flex items-center justify-center shrink-0">
                                {i + 1}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        href="https://www.vmi.lt/evmi/kam-ir-kokia-pajamu-mokescio-dalis-gali-buti-paskirta-"
                        external
                        variant="secondary"
                      >
                        Daugiau informacijos
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                      <Button href="/contact" variant="outline">
                        Susisiekti su klubo atstovu
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
