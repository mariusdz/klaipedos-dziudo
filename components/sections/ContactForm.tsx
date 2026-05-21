'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)

    if (!form.consent) return

    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '', consent: false })
      setTouched(false)
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Žinutė išsiųsta!</h3>
        <p className="text-green-700 mb-6">
          Ačiū už jūsų žinutę. Susisieksime su jumis artimiausiu metu.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Siųsti dar vieną
        </Button>
      </div>
    )
  }

  const consentError = touched && !form.consent

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-dojo-gray-700 mb-1.5">
          Vardas ir pavardė *
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dojo-gray-200 bg-white text-dojo-gray-900 placeholder:text-dojo-gray-400 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all"
          placeholder="Jūsų vardas"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-dojo-gray-700 mb-1.5">
            El. paštas *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-dojo-gray-200 bg-white text-dojo-gray-900 placeholder:text-dojo-gray-400 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all"
            placeholder="vardas@pastas.lt"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-dojo-gray-700 mb-1.5">
            Telefonas
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-dojo-gray-200 bg-white text-dojo-gray-900 placeholder:text-dojo-gray-400 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all"
            placeholder="+370 600 00000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dojo-gray-700 mb-1.5">
          Žinutė *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-dojo-gray-200 bg-white text-dojo-gray-900 placeholder:text-dojo-gray-400 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all resize-y"
          placeholder="Jūsų klausimas ar žinutė..."
        />
      </div>

      {/* GDPR Consent */}
      <div className={cn('flex items-start gap-3 p-4 rounded-xl border transition-colors', consentError ? 'border-red-300 bg-red-50' : 'border-dojo-gray-200 bg-dojo-gray-50')}>        <input
          id="consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="w-5 h-5 rounded border-dojo-gray-300 text-dojo-blue focus:ring-dojo-blue mt-0.5 shrink-0 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-dojo-gray-700 cursor-pointer leading-relaxed">
          Sutinku, kad mano pateikti duomenys būtų tvarkomi pagal{' '}
          <Link href="/privatumo-politika" className="text-dojo-blue font-semibold hover:underline">
            privatumo politiką
          </Link>
          . *
        </label>
      </div>
      {consentError && (
        <p className="text-sm text-red-600 -mt-3">Būtina sutikti su privatumo politika.</p>
      )}

      <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Siunčiama...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Siųsti žinutę
          </>
        )}
      </Button>
    </form>
  )
}
