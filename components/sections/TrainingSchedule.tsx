'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { schedule } from '@/lib/schedule'

const dayColors: Record<string, string> = {
  Pirmadienis: 'bg-dojo-blue',
  Antradienis: 'bg-dojo-blue-light',
  Trečiadienis: 'bg-dojo-blue',
  Ketvirtadienis: 'bg-dojo-blue-light',
  Penktadienis: 'bg-dojo-blue-dark',
}

const dayOrder = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis']

export function TrainingSchedule() {
  // Group sessions by day
  const grouped = dayOrder.map((day) => ({
    day,
    sessions: schedule.filter((s) => s.day === day),
  }))

  return (
    <div className="space-y-3">
      {grouped.map((group, i) => (
        <motion.div
          key={group.day}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl bg-white border border-dojo-gray-200 hover:border-dojo-blue/30 hover:shadow-card transition-all"
        >
          <div
            className={`shrink-0 px-3 py-1.5 rounded-lg text-white text-xs font-bold uppercase tracking-wide self-start ${
              dayColors[group.day] || 'bg-dojo-gray-500'
            }`}
          >
            {group.day}
          </div>
          <div className="flex-1 min-w-0 space-y-2">
            {group.sessions.map((session) => (
              <div
                key={session.time}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <p className="font-semibold text-dojo-gray-900">{session.group}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-dojo-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {session.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {session.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
