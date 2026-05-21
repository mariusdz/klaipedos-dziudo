import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Apie mus',
  description: 'Sužinokite daugiau apie Klaipėdos dziudo klubą, jo vadovą, trenerius, veiklą ir paramos galimybes.',
}

export { default } from './AboutPage'
