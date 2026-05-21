'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Newspaper } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { pressArticles } from '@/lib/data'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function SpaudojePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Spaudoje</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Straipsniai ir publikacijos apie mūsų klubo pasiekimus bei veiklą.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {pressArticles.map((article, i) => (
              <motion.a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  bordered
                  className="h-full p-6 group hover:border-dojo-blue/30 relative"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center mb-4 group-hover:bg-dojo-blue/20 transition-colors">
                      <Newspaper className="w-5 h-5 text-dojo-blue" />
                    </div>
                    <h2 className="text-lg font-semibold text-dojo-gray-900 mb-4 leading-snug group-hover:text-dojo-blue transition-colors flex-1">
                      {article.title}
                    </h2>
                    <span className="inline-flex items-center text-sm font-medium text-dojo-blue">
                      Skaityti straipsnį
                      <ExternalLink className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
