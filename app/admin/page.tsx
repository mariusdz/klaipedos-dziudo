'use client'

import { useState, useEffect } from 'react'
import { Lock, LogOut, Shield } from 'lucide-react'
import { verifyPassword } from '@/lib/admin-config'
import { AdminPanel } from '@/components/admin/AdminPanel'

export const dynamic = 'force-static'

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const session = sessionStorage.getItem('admin-auth')
    if (session === 'true') {
      setAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (verifyPassword(password)) {
      sessionStorage.setItem('admin-auth', 'true')
      setAuthenticated(true)
      setError('')
    } else {
      setError('Neteisingas slaptažodis')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin-auth')
    setAuthenticated(false)
    setPassword('')
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-card p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-dojo-blue/10 flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-dojo-blue" />
            </div>
            <h1 className="text-2xl font-bold text-dojo-blue">Turinio valdymas</h1>
            <p className="text-sm text-dojo-gray-500 mt-1">Įveskite slaptažodį</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-dojo-gray-700 mb-1.5">
                Slaptažodis
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dojo-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-dojo-gray-200 bg-white text-dojo-gray-900 focus:outline-none focus:ring-2 focus:ring-dojo-blue focus:border-transparent transition-all"
                  placeholder="••••••"
                  autoFocus
                />
              </div>
            </div>
            {error && (
              <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white bg-dojo-blue rounded-xl hover:bg-dojo-blue-light transition-colors"
            >
              Prisijungti
            </button>
          </form>

          <p className="text-xs text-dojo-gray-400 text-center mt-6">
            Numatytasis slaptažodis: <span className="font-mono">admin</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-dojo-gray-200 sticky top-0 z-50">
        <div className="container-default">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-dojo-blue" />
              <h1 className="text-lg font-bold text-dojo-blue">Klaipėdos Dziudo — Admin</h1>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-dojo-gray-700 bg-dojo-gray-100 rounded-lg hover:bg-dojo-gray-200 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Atsijungti
            </button>
          </div>
        </div>
      </header>

      <main className="container-default py-8">
        <AdminPanel />
      </main>
    </div>
  )
}
