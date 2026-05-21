'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Users,
  Trophy,
  Heart,
  Newspaper,
  UserCircle,
  Dumbbell,
  HandHelping,
  ChevronRight,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'

const aboutLinks = [
  {
    title: 'Vadovas',
    description: 'Susipažinkite su klubo vadovu Andriumi Mikėnu.',
    href: '/about/vadovas',
    icon: UserCircle,
    color: 'bg-dojo-blue',
  },
  {
    title: 'Veikla',
    description: 'Klubo istorija, tradicijos ir dziudo moralės kodeksas.',
    href: '/about/veikla',
    icon: Dumbbell,
    color: 'bg-dojo-blue-light',
  },
  {
    title: 'Treneriai',
    description: 'Profesionali trenerių komanda, rengianti čempionus.',
    href: '/about/treneriai',
    icon: Users,
    color: 'bg-dojo-blue-dark',
  },
  {
    title: 'Sportininkai',
    description: 'Mūsų sportininkų pasiekimai ir apdovanojimai.',
    href: '/about/sportininkai',
    icon: Trophy,
    color: 'bg-dojo-blue',
  },
  {
    title: 'Parama',
    description: 'Paremkite klubą – skirkite 1,2% GPM arba paaukokite.',
    href: '/about/parama',
    icon: Heart,
    color: 'bg-dojo-blue-light',
  },
  {
    title: 'Spaudoje',
    description: 'Straipsniai ir publikacijos apie klubo veiklą.',
    href: '/about/spaudoje',
    icon: Newspaper,
    color: 'bg-dojo-blue-dark',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Apie mus</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Klaipėdos dziudo klubas – tradicijos, profesionalumas ir bendruomenė nuo 1998 m.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <SectionHeader
            title="Sužinokite daugiau"
            subtitle="Pasirinkite temą, kurią norite išsamiau aptarti"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aboutLinks.map((item, i) => (
              <motion.div
                key={item.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={item.href} className="block h-full">
                  <Card bordered className="h-full p-6 group hover:border-dojo-blue/30">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="heading-3 mb-2 group-hover:text-dojo-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-dojo-gray-600 mb-4">{item.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-dojo-blue">
                      Skaityti daugiau
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
