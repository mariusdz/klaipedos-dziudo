'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, Phone, FileText, UserCheck, Trash2, Eye } from 'lucide-react'

const sections = [
  {
    icon: FileText,
    title: 'Kokius duomenis renkame',
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Vardą ir pavardę</li>
        <li>El. pašto adresą</li>
        <li>Telefono numerį</li>
        <li>Registracijos informaciją į treniruotes</li>
        <li>IP adresą ir slapukų informaciją</li>
      </ul>
    ),
  },
  {
    icon: Eye,
    title: 'Kam naudojami jūsų duomenys',
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Atsakyti į jūsų užklausas</li>
        <li>Administruoti treniruotes ir registracijas</li>
        <li>Siųsti svarbią informaciją apie klubo veiklą</li>
        <li>Gerinti svetainės veikimą</li>
      </ul>
    ),
  },
  {
    icon: Shield,
    title: 'Duomenų saugumas',
    content: (
      <p>
        Jūsų asmens duomenys yra saugomi saugiai ir nėra parduodami trečiosioms šalims.
        Prieigą prie duomenų turi tik įgalioti klubo darbuotojai.
      </p>
    ),
  },
  {
    icon: UserCheck,
    title: 'Jūsų teisės',
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Gauti informaciją apie savo duomenis</li>
        <li>Prašyti ištaisyti ar ištrinti duomenis</li>
        <li>Atšaukti sutikimą dėl duomenų tvarkymo</li>
        <li>Pateikti skundą Valstybinei duomenų apsaugos inspekcijai</li>
      </ul>
    ),
  },
  {
    icon: Trash2,
    title: 'Vaikų duomenų apsauga',
    content: (
      <p>
        Kadangi klubo veikloje dalyvauja nepilnamečiai, vaikų duomenys renkami tik gavus
        tėvų arba globėjų sutikimą. Tėvai ir globėjai turi teisę peržiūrėti, ištaisyti arba
        ištrinti vaiko duomenis, taip pat bet kada atšaukti sutikimą.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Privatumo politika</h1>
            <p className="text-body-lg text-white/80 max-w-2xl">
              Klaipėdos Dziudo Klubas gerbia jūsų privatumą ir saugo jūsų asmens duomenis
              pagal Bendrąjį duomenų apsaugos reglamentą (BDAR/GDPR).
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-dojo-gray-200 shadow-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-dojo-blue/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-5 h-5 text-dojo-blue" />
                  </div>
                  <h2 className="heading-3">{section.title}</h2>
                </div>
                <div className="prose-body">{section.content}</div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-dojo-blue/5 rounded-2xl p-6 md:p-8"
            >
              <h2 className="heading-3 mb-4">Kontaktai dėl duomenų apsaugos</h2>
              <div className="space-y-3">
                <a
                  href="mailto:klaipedosdziudo@gmail.com"
                  className="flex items-center gap-3 text-dojo-gray-700 hover:text-dojo-blue transition-colors"
                >
                  <Mail className="w-5 h-5 text-dojo-blue" />
                  klaipedosdziudo@gmail.com
                </a>
                <a
                  href="tel:+37060802482"
                  className="flex items-center gap-3 text-dojo-gray-700 hover:text-dojo-blue transition-colors"
                >
                  <Phone className="w-5 h-5 text-dojo-blue" />
                  +370 608 02482
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
