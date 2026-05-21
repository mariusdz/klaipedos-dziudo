'use client'

import { motion } from 'framer-motion'
import { Medal, Trophy, Award } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { athletes } from '@/lib/athletes'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const medalIcons = [Trophy, Medal, Award]
const medalColors = ['text-yellow-500', 'text-gray-400', 'text-amber-600']

export default function SportininkaiPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Mūsų sportininkai</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Susipažinkite su mūsų klubo sportininkais ir jų pasiekimais.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <SectionHeader
            title="Sportininkų pasiekimai"
            subtitle="Mūsų dziudo atstovai nuolat siekia aukščiausių rezultatų Lietuvos ir tarptautinėse varžybose"
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {athletes.map((athlete, i) => (
              <motion.div
                key={athlete.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card bordered className="h-full p-6 hover:border-dojo-blue/30">
                  <div className="mb-4">
                    <h3 className="heading-3 mb-1">{athlete.name}</h3>
                    <p className="text-sm font-semibold text-dojo-blue">{athlete.category}</p>
                  </div>
                  <ul className="space-y-3">
                    {athlete.achievements.map((achievement, j) => {
                      const Icon = medalIcons[j % medalIcons.length]
                      const color = medalColors[j % medalColors.length]
                      return (
                        <li key={j} className="flex items-start gap-3 text-body-sm">
                          <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${color}`} />
                          <span className="text-dojo-gray-700">{achievement}</span>
                        </li>
                      )
                    })}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
