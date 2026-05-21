'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { trainers } from '@/lib/data'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function TreneriaiPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Mūsų treneriai</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Susipažinkite su mūsų profesionalia trenerių komanda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative w-full aspect-[4/3] bg-dojo-gray-100">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="heading-3 mb-1">{trainer.name}</h2>
                    <p className="text-sm font-semibold text-dojo-blue mb-3">{trainer.role}</p>
                    <p className="text-body-sm text-dojo-gray-600">{trainer.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
