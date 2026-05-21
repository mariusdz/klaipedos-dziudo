'use client'

import { motion } from 'framer-motion'
import { Gavel, Ban, Copyright, AlertTriangle, FileWarning, Scale } from 'lucide-react'

const rules = [
  {
    icon: Gavel,
    title: 'Svetainės naudojimas',
    content: (
      <p>
        Naudodamiesi šia svetaine jūs sutinkate laikytis šių taisyklių. Svetainėje pateikiama
        informacija yra informacinio pobūdžio ir gali būti keičiama be išankstinio perspėjimo.
      </p>
    ),
  },
  {
    icon: Ban,
    title: 'Draudžiama veikla',
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Nenaudoti svetainės neteisėtai veiklai</li>
        <li>Nekopijuoti svetainės turinio be raštiško leidimo</li>
        <li>Netrikdyti svetainės veikimo ar bandyti gauti neleistiną prieigą</li>
        <li>Neplatinti kenkėjiško turinio ar virusų</li>
      </ul>
    ),
  },
  {
    icon: Copyright,
    title: 'Intelektinė nuosavybė',
    content: (
      <p>
        Visa svetainėje pateikta tekstinė, grafinė ir vaizdinė medžiaga yra Klaipėdos Dziudo
        Klubo nuosavybė (jei nenurodyta kitaip) ir yra saugoma autorių teisių. Draudžiama
        kopijuoti, platinti ar kitaip naudoti svetainės turinį be išankstinio raštiško sutikimo.
      </p>
    ),
  },
  {
    icon: AlertTriangle,
    title: 'Pokalbių ir komentarų taisyklės',
    content: (
      <p>
        Jei svetainėje yra galimybė palikti komentarus ar žinutes, draudžiama skelbti įžeidžiantį,
        diskriminuojantį, šmeižikišką ar neteisėtą turinį. Klubas pasilieka teisę pašalinti bet kokį
        netinkamą turinį be įspėjimo.
      </p>
    ),
  },
  {
    icon: FileWarning,
    title: 'Atleidimas nuo atsakomybės',
    content: (
      <p>
        Svetainėje pateikta informacija apie dziudo, treniruotes ir sveikatą yra bendro pobūdžio
        ir nėra laikoma medicinine konsultacija. Prieš pradedant sportinę veiklą rekomenduojame
        pasikonsultuoti su gydytoju. Klubas neatsako už traumas ar sveikatos sutrikimus, atsiradusius
        dėl netinkamo treniruočių atlikimo.
      </p>
    ),
  },
  {
    icon: Scale,
    title: 'Taisyklių keitimai',
    content: (
      <p>
        Klubas pasilieka teisę bet kada keisti šias taisykles, kainas, treniruočių grafiką ir
        kitą svetainėje pateikiamą informaciją be išankstinio perspėjimo. Patariame reguliariai
        tikrinti šį puslapį dėl atnaujinimų.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Taisyklės ir sąlygos</h1>
            <p className="text-body-lg text-white/80 max-w-2xl">
              Naudodamiesi šia svetaine jūs sutinkate laikytis žemiau pateiktų taisyklių ir sąlygų.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <div className="max-w-3xl mx-auto space-y-8">
            {rules.map((rule, i) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-dojo-gray-200 shadow-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0">
                    <rule.icon className="w-5 h-5 text-dojo-blue" />
                  </div>
                  <h2 className="heading-3">{rule.title}</h2>
                </div>
                <div className="prose-body">{rule.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
