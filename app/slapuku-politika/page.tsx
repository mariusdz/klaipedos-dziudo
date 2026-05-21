import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Slapukų politika',
  description: 'Informacija apie Klaipėdos Dziudo Klubo svetainėje naudojamus slapukus.',
}

export { default } from './CookiesPage'
