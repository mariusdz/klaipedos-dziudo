'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const principles = [
  {
    title: 'Maksimalus efektyvumas, minimalios pastangos',
    subtitle: 'Seiryoku Zenyo',
    description:
      'Dziudo principas, skatinantis efektyviai naudoti jėgą ir techniką, siekiant geriausio rezultato su mažiausiomis pastangomis.',
  },
  {
    title: 'Abipusė gerovė ir pagarba',
    subtitle: 'Jita Kyoei',
    description:
      'Dziudo filosofija, kuri skatina abipusę pagalbą ir supratimą – tobulėdami patys, padedame tobulėti ir kitiems.',
  },
]

const techniques = [
  { name: 'Metimai', japanese: 'nage-waza', description: 'Technikos, kuriomis varžovas metamas ant žemės.' },
  { name: 'Smaugimai', japanese: 'shime-waza', description: 'Technikos, kuriomis varžovas verčiamas pasiduoti spaudžiant kaklą.' },
  { name: 'Rankų laužimai', japanese: 'kansetsu-waza', description: 'Technikos, kuriomis spaudžiama sąnariams.' },
  { name: 'Sulaikymai', japanese: 'osaekomi-waza', description: 'Technikos, kuriomis varžovas laikomas ant žemės.' },
]

const benefits = [
  'Fizinė sveikata – lavina jėgą, lankstumą, greitį, koordinaciją.',
  'Psichologinė stiprybė – ugdo kantrybę, savikontrolę.',
  'Drausmė ir pagarba – laikomasi etikos taisyklių.',
  'Savęs gynyba – suteikia praktinių įgūdžių apsiginti.',
  'Visapusiškas ugdymas – ne tik sportas, bet ir filosofija.',
]

export default function JudoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-display font-bold mb-6">
              Dziudo – niekada nesibaigiantis tobulėjimo kelias
            </h1>
            <p className="text-body-lg text-white/80 max-w-2xl">
              <strong>Dziudo</strong> (iš japonų k. <em>„švelnus kelias"</em>) – kovos menas, sportas
              ir filosofija, kilusi Japonijoje XIX a. pabaigoje. Jo tikslas – pasitelkiant techniką,
              svertą ir strategiją nugalėti varžovą, naudojant kuo mažiau fizinės jėgos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder & History */}
      <section className="page-section">
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-4 text-dojo-blue">Įkūrėjas</h2>
              <div className="space-y-4 prose-body">
                <p>
                  Dziudo įkūrėjas yra <strong>Džigoro Kano</strong> (Jigoro Kano, 1860–1938).
                  Jaunystėje jis domėjosi įvairiomis tradicinėmis japonų kovos meno formomis, tačiau
                  siekė sukurti metodą, kuris būtų ne tik efektyvus kovojant, bet ir ugdytų žmogaus
                  charakterį bei moralines vertybes.
                </p>
                <p>
                  1882 m. Kano įkūrė pirmąją dziudo mokyklą – <em>Kodokan</em> Tokijuje.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated"
            >
              <Image
                src="/images/jigoro-kano.png"
                alt="Džigoro Kano – dziudo įkūrėjas"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated order-2 md:order-1"
            >
              <Image
                src="/images/dojo.png"
                alt="Dojo Japonijoje"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="heading-2 mb-4 text-dojo-blue">Istorija</h2>
              <div className="space-y-4 prose-body">
                <p>
                  Iš pradžių dziudo buvo laikomas senojo japoniško džiudžitsu atmaina, bet dėl Kano
                  reformų jis tapo atskiru mokslu. Kano pašalino pavojingas technikas, sustiprino
                  treniruočių saugumą, sukūrė taisykles ir metodiką, leidžiančią treniruotis be
                  didelės rizikos.
                </p>
                <p>
                  XX a. dziudo paplito už Japonijos ribų – pirmiausia Europoje, vėliau Amerikoje.
                  1964 m. Tokijo olimpinėse žaidynėse dziudo tapo olimpine sporto šaka.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="page-section bg-dojo-gray-50">
        <div className="container-default">
          <SectionHeader
            title="Pagrindiniai principai"
            subtitle="Dziudo filosofija grindžiama dviejų pagrindinių principų deriniu"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.subtitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <h3 className="heading-3 mb-2">{principle.title}</h3>
                <p className="text-sm font-medium text-dojo-blue mb-3">{principle.subtitle}</p>
                <p className="text-body-sm text-dojo-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="page-section">
        <div className="container-default">
          <SectionHeader
            title="Pagrindinės technikos"
            subtitle="Dziudo technikų arsenalas yra platus ir įvairus"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((technique, i) => (
              <motion.div
                key={technique.japanese}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-dojo-gray-200 hover:border-dojo-blue/30 hover:shadow-card-hover transition-all duration-300"
              >
                <h3 className="heading-3 mb-1">{technique.name}</h3>
                <p className="text-sm font-medium text-dojo-blue mb-3">{technique.japanese}</p>
                <p className="text-body-sm text-dojo-gray-600">{technique.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="page-section bg-dojo-gray-50">
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-1 mb-6">Dziudo privalumai</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-dojo-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-dojo-blue" />
                    </span>
                    <span className="prose-body">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated"
            >
              <Image
                src="/kodokan.jpeg"
                alt="Kodokan dziudo mokykla"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
