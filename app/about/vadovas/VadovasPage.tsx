'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, Quote } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { assetPath } from '@/lib/paths'

export default function VadovasPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Klubo vadovas</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Susipažinkite su Klaipėkos dziudo klubo vadovu ir pagrindiniu treneriu.
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
                <div className="grid md:grid-cols-[320px_1fr]">
                  {/* Image Side */}
                  <div className="relative h-80 md:h-auto bg-dojo-gray-100">
                    <Image
                      src={assetPath('/images/andrius-mikenas.jpg')}
                      alt="Andrius Mikėnas"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-10">
                    <div className="mb-6">
                      <h2 className="heading-1 mb-2">Andrius Mikėnas</h2>
                      <p className="text-lg text-dojo-blue font-medium">
                        Klaipėdos dziudo klubo vadovas
                      </p>
                    </div>

                    <div className="space-y-4 prose-body mb-8">
                      <p>
                        Andrius Mikėnas – patyręs dziudo treneris ir sporto entuziastas, daugiau nei
                        20 metų gyvenantis dziudo filosofija.
                      </p>
                      <p>
                        Jis išugdė daugybę sportininkų, kurie sėkmingai dalyvavo tiek Lietuvos, tiek
                        tarptautinėse varžybose.
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      <a
                        href="tel:+37060802482"
                        className="flex items-center gap-3 text-sm text-dojo-gray-700 hover:text-dojo-blue transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">Tel.:</span> +370 608 02482
                      </a>
                      <a
                        href="mailto:klaipedosdziudo@gmail.com"
                        className="flex items-center gap-3 text-sm text-dojo-gray-700 hover:text-dojo-blue transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="font-medium">El. paštas:</span>{' '}
                        klaipedosdziudo@gmail.com
                      </a>
                    </div>

                    <div className="bg-dojo-blue/5 rounded-xl p-6">
                      <Quote className="w-8 h-8 text-dojo-blue/30 mb-2" />
                      <blockquote className="text-lg italic text-dojo-gray-800">
                        „Be pralaimėjimo pergalė neturi skonio"
                      </blockquote>
                      <p className="mt-2 text-sm font-semibold text-dojo-blue">– A. Mikėnas</p>
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
