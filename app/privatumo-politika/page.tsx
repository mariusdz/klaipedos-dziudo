import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privatumo politika',
  description: 'Klaipėdos Dziudo Klubo privatumo politika ir asmens duomenų apsauga pagal BDAR/GDPR.',
}

export { default } from './PrivacyPage'
