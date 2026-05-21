'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { moralCode } from '@/lib/data'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function VeiklaPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Klubo veikla</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Trumpai apie mūsų klubo istoriją, veiklą ir tradicijas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="page-section">
        <div className="container-default">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8 md:p-12">
              <div className="space-y-4 prose-body">
                <p>
                  <strong>Klubas</strong> buvo įkurtas siekiant populiarinti dziudo sportą tarp
                  vaikų, jaunimo ir suaugusiųjų, ugdyti fizinį pasirengimą, discipliną bei pagarbą
                  šiai kovos meno tradicijai.
                </p>
                <p>
                  Šiuo metu treniruotės vyksta <strong>Klaipėdoje</strong>, kur sportininkai tobulina
                  techniką, stiprina ištvermę bei ruošiasi varžyboms.
                </p>
                <p>
                  Klubas priklauso <strong>Lietuvos dziudo federacijai</strong> ir aktyviai dalyvauja
                  jos veikloje. Mūsų sportininkai dažnai vyksta į turnyrus ir seminarus tiek{' '}
                  <strong>Lietuvoje</strong>, tiek <strong>užsienyje</strong>, kur semiasi naujos
                  patirties bei dalinasi žiniomis.
                </p>
                <p>
                  Kasmet klubas organizuoja jau tradicine tapusią{' '}
                  <strong>vasaros dziudo stovyklą Šventojoje</strong>, į kurią susirenka sportininkai
                  ir treneriai iš įvairių Lietuvos miestų. Tai ne tik treniruočių, bet ir bendrystės
                  bei poilsio laikas visai bendruomenei.
                </p>
                <p>
                  Rugsėjo mėnesį klubas rengia{' '}
                  <strong>
                    tarptautinį dziudo turnyrą – Klaipėdos miesto jaunių, jaunučių ir vaikų dziudo
                    čempionatą
                  </strong>
                  , kuris kasmet suburia sportininkus iš Lietuvos ir užsienio. Tai viena svarbiausių
                  metų sportinių švenčių, puoselėjanti dziudo dvasią ir vienijanti visus kovos meno
                  mylėtojus.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Moral Code */}
      <section className="page-section bg-dojo-gray-50">
        <div className="container-default">
          <SectionHeader
            title="Dziudo moralės kodeksas"
            subtitle="Dziudo – tai ne tik kovos menas, bet ir gyvenimo filosofija"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moralCode.map((item, i) => (
              <motion.div
                key={item.subtitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card bordered className="h-full p-6 hover:border-dojo-blue/30">
                  <h3 className="heading-3 mb-1">{item.title}</h3>
                  <p className="text-sm font-semibold text-dojo-blue mb-3">{item.subtitle}</p>
                  <p className="text-body-sm text-dojo-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
