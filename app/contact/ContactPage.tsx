'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { ContactForm } from '@/components/sections/ContactForm'
import { TrainingSchedule } from '@/components/sections/TrainingSchedule'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefonas',
    value: '+370 608 02482',
    href: 'tel:+37060802482',
  },
  {
    icon: Mail,
    label: 'El. paštas',
    value: 'klaipedosdziudo@gmail.com',
    href: 'mailto:klaipedosdziudo@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Vieta',
    value: 'Klaipėda, Lietuva',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Treniruočių laikas',
    value: 'Pirmadienis–penktadienis',
    href: '#',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Kontaktai</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Susisiek su mumis ir pradėk savo dziudo kelią jau šiandien.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Card className="p-8 md:p-10">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md mb-6">
                    <Image
                      src="/images/andrius-mikenas.jpg"
                      alt="Andrius Mikėnas"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="heading-2 mb-1">Klubo vadovas</h2>
                  <p className="text-xl font-semibold text-dojo-blue">Andrius Mikėnas</p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-dojo-gray-50 hover:bg-dojo-blue/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0 group-hover:bg-dojo-blue/20 transition-colors">
                        <item.icon className="w-5 h-5 text-dojo-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-dojo-gray-500 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-dojo-gray-900 group-hover:text-dojo-blue transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-dojo-gray-200">
                  <p className="text-sm text-dojo-gray-500 text-center mb-4">
                    Sekite mus socialiniuose tinkluose
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-dojo-gray-100 flex items-center justify-center text-dojo-gray-600 hover:bg-dojo-blue hover:text-white transition-colors"
                      aria-label="Socialiniai tinklai"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-dojo-gray-100 flex items-center justify-center text-dojo-gray-600 hover:bg-dojo-blue hover:text-white transition-colors"
                      aria-label="Susisiekti"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>

              <div>
                <h2 className="heading-2 mb-6">Treniruočių tvarkaraštis</h2>
                <TrainingSchedule />
              </div>
            </motion.div>

            {/* Info + Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-2 mb-4">Kaip pradėti?</h2>
                <div className="space-y-4 prose-body">
                  <p>
                    Norint pradėti treniruotis pas mus, nereikia jokios specialios įrangos ar
                    ankstesnės patirties. Užtenka atvykti į treniruotę patogioje sportinėje aprangoje.
                  </p>
                  <p>
                    Pirmoji treniruotė nemokama – tai puiki proga susipažinti su treneriais,
                    bendraamžiais ir pajausti dziudo dvasią.
                  </p>
                </div>
              </div>

              <div className="bg-dojo-blue/5 rounded-2xl p-8">
                <blockquote className="text-lg italic text-dojo-gray-800 text-center">
                  „Be pralaimėjimo pergalė neturi skonio"
                  <div className="mt-3 text-sm font-semibold text-dojo-blue not-italic">
                    – A. Mikėnas
                  </div>
                </blockquote>
              </div>

              <div>
                <h3 className="heading-3 mb-4">Ko reikės treniruotei?</h3>
                <ul className="space-y-3">
                  {[
                    'Patogi sportinė apranga (kimono gausite klube)',
                    'Švari sportinė avalynė arba basomis',
                    'Gera nuotaika ir noras mokytis',
                    'Vandens buteliukas',
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
                <h2 className="heading-2 mb-6">Parašykite mums</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
