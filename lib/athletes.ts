import athletesData from '@/content/athletes.json'

export interface Athlete {
  name: string
  category: string
  achievements: string[]
}

export const athletes: Athlete[] = athletesData
