import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Galerija',
  description: 'Nuotraukos iš Klaipėdos dziudo klubo treniruočių, varžybų ir stovyklų.',
}

export { default } from './GalleryPage'
