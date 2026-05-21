import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Sportininkai',
  description: 'Klaipėdos dziudo klubo sportininkų pasiekimai ir biografijos.',
}

export { default } from './SportininkaiPage'
