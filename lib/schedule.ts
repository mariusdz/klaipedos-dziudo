import scheduleData from '@/content/schedule.json'

export interface TrainingSession {
  day: string
  time: string
  group: string
  location: string
}

export const schedule: TrainingSession[] = scheduleData
