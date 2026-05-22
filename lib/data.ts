import sponsorsData from '@/content/sponsors.json'
import trainersData from '@/content/trainers.json'
import pressArticlesData from '@/content/press-articles.json'
import moralCodeData from '@/content/moral-code.json'
import galleryData from '@/content/gallery.json'
import heroData from '@/content/hero.json'
import { assetPath } from './paths'

export interface Sponsor {
  name: string
  logo: string
  url: string
}

export interface Trainer {
  name: string
  role: string
  image: string
  description: string
}

export interface PressArticle {
  title: string
  url: string
}

export interface MoralCode {
  title: string
  subtitle: string
  description: string
}

export interface GalleryPhoto {
  src: string
  width: number
  height: number
  alt: string
}

export interface HeroConfig {
  videoUrl: string
  videoFile: string
  fallbackImage: string
  title: string
  subtitle: string
}

export const sponsors: Sponsor[] = sponsorsData.map((s) => ({ ...s, logo: assetPath(s.logo) }))
export const trainers: Trainer[] = trainersData.map((t) => ({ ...t, image: assetPath(t.image) }))
export const pressArticles: PressArticle[] = pressArticlesData
export const moralCode: MoralCode[] = moralCodeData
export const galleryPhotos: GalleryPhoto[] = galleryData.map((p) => ({ ...p, src: assetPath(p.src) }))
export const hero: HeroConfig = {
  ...heroData,
  fallbackImage: assetPath(heroData.fallbackImage),
}

export const navLinks = [
  { label: 'Dziudo', href: '/judo' },
  {
    label: 'Apie mus',
    href: '/about',
    children: [
      { label: 'Vadovas', href: '/about/vadovas' },
      { label: 'Veikla', href: '/about/veikla' },
      { label: 'Treneriai', href: '/about/treneriai' },
      { label: 'Sportininkai', href: '/about/sportininkai' },
      { label: 'Parama', href: '/about/parama' },
      { label: 'Spaudoje', href: '/about/spaudoje' },
    ],
  },
  { label: 'Kontaktai', href: '/contact' },
  { label: 'Galerija', href: '/galery' },
]
