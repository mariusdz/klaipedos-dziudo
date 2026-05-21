'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, BarChart3, Puzzle, ShieldCheck, ExternalLink } from 'lucide-react'

const cookieTypes = [
  {
    icon: ShieldCheck,
    title: 'Būtini slapukai',
    description:
      'Šie slapukai yra būtini svetainės veikimui ir negali būti išjungti. Jie paprastai nustatomi tik kaip reakcija į jūsų veiksmus, pavyzdžiui, nustatyti privatumo nuostatas arba prisijungti.',
  },
  {
    icon: BarChart3,
    title: 'Analitiniai slapukai',
    description:
      'Šie slapukai padeda mums suprasti, kaip lankytojai sąveikauja su svetaine, surinkdami anoniminę informaciją apie lankomumą ir naudojimo tendencijas.',
  },
  {
    icon: Puzzle,
    title: 'Funkciniai slapukai',
    description:
      'Šie slapukai leidžia svetainei įsiminti jūsų pasirinkimus (pvz., kalbos nustatymus) ir suteikti patobulintas funkcijas.',
  },
]

const thirdParties = [
  { name: 'Google Analytics', purpose: 'Lankomumo statistika' },
  { name: 'YouTube įskiepiai', purpose: 'Vaizdo įrašų rodymas' },
]

export default function CookiesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Slapukų politika</h1>
            <p className="text-body-lg text-white/80 max-w-2xl">
              Ši svetainė naudoja slapukus siekiant užtikrinti tinkamą veikimą ir geresnę
              vartotojo patirtį.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-dojo-gray-200 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-dojo-blue" />
                </div>
                <h2 className="heading-3">Kas yra slapukai?</h2>
              </div>
              <p className="prose-body">
                Slapukai yra maži tekstiniai failai, kurie saugomi jūsų įrenginyje (kompiuteryje,
                telefone ar planšetėje) kai lankotės svetainėje. Jie padeda svetainei atpažinti
                jūsų įrenginį ir įsiminti tam tikrą informaciją apie jūsų apsilankymą.
              </p>
            </motion.div>

            <div className="space-y-6">
              {cookieTypes.map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-dojo-gray-200 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0">
                      <type.icon className="w-5 h-5 text-dojo-blue" />
                    </div>
                    <h2 className="heading-3">{type.title}</h2>
                  </div>
                  <p className="prose-body">{type.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-dojo-gray-200 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-5 h-5 text-dojo-blue" />
                </div>
                <h2 className="heading-3">Trečiųjų šalių slapukai</h2>
              </div>
              <p className="prose-body mb-4">
                Kai kurios trečiųjų šalių paslaugos, naudojamos mūsų svetainėje, gali saugoti
                slapukus jūsų įrenginyje:
              </p>
              <ul className="space-y-2">
                {thirdParties.map((party) => (
                  <li
                    key={party.name}
                    className="flex items-start gap-3 p-3 rounded-lg bg-dojo-gray-50"
                  >
                    <span className="font-semibold text-dojo-gray-900">{party.name}</span>
                    <span className="text-dojo-gray-500">— {party.purpose}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-dojo-gray-200 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5 text-dojo-blue" />
                </div>
                <h2 className="heading-3">Kaip valdyti slapukus?</h2>
              </div>
              <div className="prose-body space-y-3">
                <p>
                  Naudodamiesi svetaine jūs galite sutikti su visais slapukais arba pasirinkti tik
                  būtinus slapukus. Bet kada galite pakeisti savo pasirinkimą slapukų baneryje
                  svetainės apačioje.
                </p>
                <p>
                  Taip pat naršyklės nustatymuose galite ištrinti esamus slapukus, blokuoti naujus
                  slapukus arba nustatyti įspėjimus prieš saugant slapukus. Atkreipiame dėmesį, kad
                  išjungus tam tikrus slapukus, svetainės funkcionalumas gali būti apribotas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
