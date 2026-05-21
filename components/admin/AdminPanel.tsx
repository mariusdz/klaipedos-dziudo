'use client'

import { useState, useCallback } from 'react'
import {
  Download,
  Plus,
  Trash2,
  GripVertical,
  Save,
  Users,
  Trophy,
  Newspaper,
  Heart,
  Calendar,
  BookOpen,
  Award,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import sponsorsData from '@/content/sponsors.json'
import trainersData from '@/content/trainers.json'
import athletesData from '@/content/athletes.json'
import pressArticlesData from '@/content/press-articles.json'
import scheduleData from '@/content/schedule.json'
import moralCodeData from '@/content/moral-code.json'

type TabKey = 'sponsors' | 'trainers' | 'athletes' | 'press' | 'schedule' | 'moral'

interface TabDef {
  key: TabKey
  label: string
  icon: React.ElementType
}

const tabs: TabDef[] = [
  { key: 'sponsors', label: 'Rėmėjai', icon: Heart },
  { key: 'trainers', label: 'Treneriai', icon: Users },
  { key: 'athletes', label: 'Sportininkai', icon: Trophy },
  { key: 'press', label: 'Spauda', icon: Newspaper },
  { key: 'schedule', label: 'Tvarkaraštis', icon: Calendar },
  { key: 'moral', label: 'Moralės kodeksas', icon: BookOpen },
]

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function downloadAll(
  data: Record<string, unknown>
) {
  Object.entries(data).forEach(([name, value]) => {
    downloadJson(`${name}.json`, value)
  })
}

/* ─── Generic list editor ─── */
function ListEditor({
  items,
  onChange,
  fields,
  addTemplate,
}: {
  items: any[]
  onChange: (items: any[]) => void
  fields: { key: string; label: string; type?: 'text' | 'textarea' | 'array' }[]
  addTemplate: () => any
}) {
  const updateItem = (index: number, key: string, value: any) => {
    const next = [...items]
    next[index] = { ...next[index], [key]: value }
    onChange(next)
  }

  const removeItem = (index: number) => {
    const next = [...items]
    next.splice(index, 1)
    onChange(next)
  }

  const moveItem = (index: number, direction: -1 | 1) => {
    const newIndex = index + direction
    if (newIndex < 0 || newIndex >= items.length) return
    const next = [...items]
    const [item] = next.splice(index, 1)
    next.splice(newIndex, 0, item)
    onChange(next)
  }

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-dojo-gray-200 p-4 md:p-5 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <div className="flex flex-col gap-1 pt-1">
              <button
                onClick={() => moveItem(i, -1)}
                disabled={i === 0}
                className="p-1 rounded hover:bg-dojo-gray-100 disabled:opacity-30 transition-colors"
                title="Aukštyn"
              >
                <GripVertical className="w-4 h-4 text-dojo-gray-400 -rotate-90" />
              </button>
              <button
                onClick={() => moveItem(i, 1)}
                disabled={i === items.length - 1}
                className="p-1 rounded hover:bg-dojo-gray-100 disabled:opacity-30 transition-colors"
                title="Žemyn"
              >
                <GripVertical className="w-4 h-4 text-dojo-gray-400 rotate-90" />
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div key={field.key} className={field.type === 'textarea' || field.type === 'array' ? 'md:col-span-2' : ''}>
                  <label className="block text-xs font-semibold text-dojo-gray-500 uppercase tracking-wide mb-1">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={item[field.key] || ''}
                      onChange={(e) => updateItem(i, field.key, e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-dojo-gray-200 bg-white text-sm text-dojo-gray-900 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all resize-y"
                    />
                  ) : field.type === 'array' ? (
                    <div className="space-y-2">
                      {(item[field.key] || []).map((val: string, j: number) => (
                        <div key={j} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={val}
                            onChange={(e) => {
                              const arr = [...item[field.key]]
                              arr[j] = e.target.value
                              updateItem(i, field.key, arr)
                            }}
                            className="flex-1 px-3 py-2 rounded-lg border border-dojo-gray-200 bg-white text-sm text-dojo-gray-900 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all"
                          />
                          <button
                            onClick={() => {
                              const arr = [...item[field.key]]
                              arr.splice(j, 1)
                              updateItem(i, field.key, arr)
                            }}
                            className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                            title="Pašalinti"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const arr = [...(item[field.key] || []), '']
                          updateItem(i, field.key, arr)
                        }}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-dojo-blue hover:text-dojo-blue-light transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Pridėti eilutę
                      </button>
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={item[field.key] || ''}
                      onChange={(e) => updateItem(i, field.key, e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-dojo-gray-200 bg-white text-sm text-dojo-gray-900 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => removeItem(i)}
              className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors shrink-0"
              title="Pašalinti"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={() => onChange([...items, addTemplate()])}
        className="w-full py-3 rounded-xl border-2 border-dashed border-dojo-gray-300 text-dojo-gray-500 font-semibold hover:border-dojo-blue hover:text-dojo-blue transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Pridėti naują
      </button>
    </div>
  )
}

/* ─── Main panel ─── */
export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<TabKey>('sponsors')

  const [sponsors, setSponsors] = useState(sponsorsData)
  const [trainers, setTrainers] = useState(trainersData)
  const [athletes, setAthletes] = useState(athletesData)
  const [press, setPress] = useState(pressArticlesData)
  const [schedule, setSchedule] = useState(scheduleData)
  const [moral, setMoral] = useState(moralCodeData)

  const handleDownloadAll = useCallback(() => {
    downloadAll({
      sponsors,
      trainers,
      athletes,
      'press-articles': press,
      schedule,
      'moral-code': moral,
    })
  }, [sponsors, trainers, athletes, press, schedule, moral])

  const renderEditor = () => {
    switch (activeTab) {
      case 'sponsors':
        return (
          <ListEditor
            items={sponsors}
            onChange={setSponsors}
            fields={[
              { key: 'name', label: 'Pavadinimas' },
              { key: 'logo', label: 'Logotipo kelias (pvz. /images/logo.png)' },
              { key: 'url', label: 'Svetainės URL' },
            ]}
            addTemplate={() => ({ name: '', logo: '', url: '' })}
          />
        )
      case 'trainers':
        return (
          <ListEditor
            items={trainers}
            onChange={setTrainers}
            fields={[
              { key: 'name', label: 'Vardas ir pavardė' },
              { key: 'role', label: 'Pareigos' },
              { key: 'image', label: 'Nuotraukos kelias' },
              { key: 'description', label: 'Aprašymas', type: 'textarea' },
            ]}
            addTemplate={() => ({ name: '', role: '', image: '/images/placeholder.svg', description: '' })}
          />
        )
      case 'athletes':
        return (
          <ListEditor
            items={athletes}
            onChange={setAthletes}
            fields={[
              { key: 'name', label: 'Vardas ir pavardė' },
              { key: 'category', label: 'Kategorija' },
              { key: 'achievements', label: 'Pasiekimai', type: 'array' },
            ]}
            addTemplate={() => ({ name: '', category: '', achievements: [''] })}
          />
        )
      case 'press':
        return (
          <ListEditor
            items={press}
            onChange={setPress}
            fields={[
              { key: 'title', label: 'Straipsnio pavadinimas' },
              { key: 'url', label: 'Nuoroda į straipsnį' },
            ]}
            addTemplate={() => ({ title: '', url: '' })}
          />
        )
      case 'schedule':
        return (
          <ListEditor
            items={schedule}
            onChange={setSchedule}
            fields={[
              { key: 'day', label: 'Diena' },
              { key: 'time', label: 'Laikas' },
              { key: 'group', label: 'Grupė' },
              { key: 'location', label: 'Vieta' },
            ]}
            addTemplate={() => ({ day: '', time: '', group: '', location: 'Klaipėdos Viesulo sporto centras' })}
          />
        )
      case 'moral':
        return (
          <ListEditor
            items={moral}
            onChange={setMoral}
            fields={[
              { key: 'title', label: 'Pavadinimas' },
              { key: 'subtitle', label: 'Japoniškas pavadinimas' },
              { key: 'description', label: 'Aprašymas', type: 'textarea' },
            ]}
            addTemplate={() => ({ title: '', subtitle: '', description: '' })}
          />
        )
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <aside className="lg:w-64 shrink-0">
        <nav className="bg-white rounded-xl border border-dojo-gray-200 shadow-sm overflow-hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors border-b border-dojo-gray-100 last:border-0',
                  activeTab === tab.key
                    ? 'bg-dojo-blue/5 text-dojo-blue'
                    : 'text-dojo-gray-700 hover:bg-dojo-gray-50'
                )}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            )
          })}
        </nav>

        <div className="mt-4 bg-dojo-blue/5 rounded-xl border border-dojo-blue/10 p-4">
          <h3 className="text-sm font-bold text-dojo-blue mb-2 flex items-center gap-2">
            <Save className="w-4 h-4" />
            Kaip išsaugoti?
          </h3>
          <p className="text-xs text-dojo-gray-600 leading-relaxed mb-3">
            Pakeitimai išsaugomi tik naršyklėje. Norėdami atnaujinti svetainę, atsisiųskite
            JSON failus ir pakeiskite juos projekte.
          </p>
          <button
            onClick={handleDownloadAll}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-dojo-blue rounded-lg hover:bg-dojo-blue-light transition-colors"
          >
            <Download className="w-4 h-4" />
            Atsisiųsti visus JSON
          </button>
        </div>
      </aside>

      {/* Main editor */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-dojo-gray-900">
            {tabs.find((t) => t.key === activeTab)?.label}
          </h2>
          <button
            onClick={() => {
              const tab = tabs.find((t) => t.key === activeTab)
              if (!tab) return
              const map: Record<TabKey, unknown> = {
                sponsors,
                trainers,
                athletes,
                press,
                schedule,
                moral,
              }
              downloadJson(`${tab.key}.json`, map[activeTab])
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-dojo-blue bg-white border border-dojo-gray-200 rounded-lg hover:bg-dojo-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Atsisiųsti šį JSON
          </button>
        </div>
        {renderEditor()}
      </div>
    </div>
  )
}
