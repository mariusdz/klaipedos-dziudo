import sponsorsData from '@/content/sponsors.json'
import trainersData from '@/content/trainers.json'
import pressArticlesData from '@/content/press-articles.json'
import moralCodeData from '@/content/moral-code.json'

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

export const sponsors: Sponsor[] = sponsorsData
export const trainers: Trainer[] = trainersData
export const pressArticles: PressArticle[] = pressArticlesData
export const moralCode: MoralCode[] = moralCodeData

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
