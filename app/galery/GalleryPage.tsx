'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { SectionHeader } from '@/components/ui/SectionHeader'

const photos = [
  {
    src: '/images/andrius-mikenas.jpg',
    width: 800,
    height: 800,
    alt: 'Andrius Mikėnas – klubo vadovas',
  },
  {
    src: '/images/jonas-tilvikas.jpg',
    width: 800,
    height: 800,
    alt: 'Jonas Tilvikas – treneris',
  },
  {
    src: '/images/dojo.png',
    width: 1200,
    height: 800,
    alt: 'Dziudo treniruočių salė',
  },
  {
    src: '/kodokan.jpeg',
    width: 1200,
    height: 800,
    alt: 'Kodokan dziudo mokykla Japonijoje',
  },
  {
    src: '/images/jigoro-kano.png',
    width: 1000,
    height: 700,
    alt: 'Džigoro Kano – dziudo įkūrėjas',
  },
]

export default function GalleryPage() {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <section className="relative bg-gradient-to-br from-dojo-blue via-dojo-blue-light to-dojo-blue-dark text-white py-24 md:py-32">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display font-bold mb-4">Galerija</h1>
            <p className="text-body-lg text-white/80 max-w-xl">
              Akimirkos iš mūsų treniruočių, varžybų ir renginių.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PhotoAlbum
              photos={photos}
              layout="rows"
              targetRowHeight={300}
              spacing={8}
              padding={0}
              onClick={({ index: current }) => setIndex(current)}
            />
          </motion.div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
        index={index}
      />
    </>
  )
}
