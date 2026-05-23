'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Trophy, Calendar, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { VideoBackground } from '@/components/ui/VideoBackground'
import { assetPath } from '@/lib/paths'
import { hero } from '@/lib/data'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const features = [
  {
    icon: Users,
    title: 'Visoms amžiaus grupėms',
    description: 'Treniruotės vaikams, jaunimui ir suaugusiems – nuo pradedančiųjų iki pažengusių.',
  },
  {
    icon: Trophy,
    title: 'Sportiniai pasiekimai',
    description: 'Mūsų sportininkai nuolatos užima prizines vietas Lietuvos ir tarptautinėse varžybose.',
  },
  {
    icon: Calendar,
    title: 'Reguliarios treniruotės',
    description: 'Treniruojamės kelis kartus per savaitę profesionalioje sporto salėje Klaipėdoje.',
  },
  {
    icon: Heart,
    title: 'Dziudo filosofija',
    description: 'Mokome ne tik technikos, bet ir pagarbos, drausmės bei tvirto charakterio.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10">
          <VideoBackground
            videoFile={hero.videoFile || undefined}
            videoUrl={hero.videoUrl || undefined}
            fallbackImage={hero.fallbackImage}
            title="Dziudo treniruotės"
          />
          <div className="absolute inset-0 bg-dojo-blue/60" />
        </div>

        {/* Hero Content */}
        <div className="container-default relative z-10 text-center text-white py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-display font-bold mb-6"
            >
              {hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-body-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto"
            >
              {hero.subtitle}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contact" size="lg">
                Prisijunk ir Tu!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/judo" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dojo-blue">
                Sužinok daugiau
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="page-section bg-dojo-gray-50">
        <div className="container-default">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-dojo-blue/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-dojo-blue" />
                </div>
                <h3 className="heading-3 mb-2">{feature.title}</h3>
                <p className="text-body-sm text-dojo-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="page-section">
        <div className="container-default">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-1 mb-6">Klaipėdos dziudo tradicijos</h2>
              <div className="space-y-4 text-body">
                <p>
                  Klaipėdos dziudo klubas – tai bendruomenė, vienijanti žmones, kuriems dziudo yra
                  ne tik sportas, bet ir gyvenimo būdas. Mūsų tikslas – populiarinti dziudo sportą,
                  ugdyti fizinį pasirengimą, discipliną ir pagarbą šiam kovos menus.
                </p>
                <p>
                  Klubas priklauso Lietuvos dziudo federacijai ir aktyviai dalyvauja jos veikloje.
                  Kasmet organizuojame tarptautinį dziudo turnyrą Klaipėdoje ir vasaros stovyklą
                  Šventojoje.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/about/veikla">Plačiau apie veiklą</Button>
                <Button href="/about/treneriai" variant="outline">
                  Mūsų treneriai
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated"
            >
              <Image
                src={assetPath('/images/dojo.png')}
                alt="Dziudo treniruotė"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-dojo-blue">
        <div className="container-default text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-heading-1 font-bold text-white mb-4">
              Pradėk savo dziudo kelią šiandien
            </h2>
            <p className="text-body-lg text-white/80 mb-8">
              Nesvarbu, ar esi visiškas pradedantysis, ar jau turi patirties – pas mus rassi savo
              vietą. Susisiek su mumis ir ateik į pirmąją treniruotę nemokamai.
            </p>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dojo-blue"
            >
              Susisiekti
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
