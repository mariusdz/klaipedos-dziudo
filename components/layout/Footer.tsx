import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { SponsorsMarquee } from '@/components/sections/SponsorsMarquee'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dojo-gray-900 text-white">
      {/* Sponsors Section */}
      <div className="border-b border-white/10">
        <div className="container-default py-10">
          <SponsorsMarquee />
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-default py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/Klaipedos-Dziudo.svg"
                  alt="Klaipėdos Dziudo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold">Klaipėdos Dziudo</span>
            </Link>
            <p className="text-sm text-dojo-gray-400 leading-relaxed">
              Profesionalus dziudo klubas Klaipėdoje, ugdantis sportininkus visoms amžiaus grupėms nuo 1998 m.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dojo-gray-300 mb-4">
              Navigacija
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/judo" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Apie dziudo
                </Link>
              </li>
              <li>
                <Link href="/about/treneriai" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Treneriai
                </Link>
              </li>
              <li>
                <Link href="/about/veikla" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Klubo veikla
                </Link>
              </li>
              <li>
                <Link href="/galery" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Kontaktai
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dojo-gray-300 mb-4">
              Apie mus
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about/vadovas" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Vadovas
                </Link>
              </li>
              <li>
                <Link href="/about/parama" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Parama
                </Link>
              </li>
              <li>
                <Link href="/about/spaudoje" className="text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  Spaudoje
                </Link>
              </li>
              <li>
                <a
                  href="https://www.judo.lt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-dojo-gray-400 hover:text-white transition-colors"
                >
                  LDF
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dojo-gray-300 mb-4">
              Kontaktai
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+37060802482" className="inline-flex items-center gap-2 text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  +370 608 02482
                </a>
              </li>
              <li>
                <a href="mailto:klaipedosdziudo@gmail.com" className="inline-flex items-center gap-2 text-sm text-dojo-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  klaipedosdziudo@gmail.com
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2 text-sm text-dojo-gray-400">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  Klaipėda, Lietuva
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="border-t border-white/10">
        <div className="container-default py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dojo-gray-500">
            &copy; {currentYear} Klaipėdos Dziudo Klubas. Visos teisės saugomos.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/privatumo-politika" className="text-xs text-dojo-gray-500 hover:text-white transition-colors">
              Privatumo politika
            </Link>
            <span className="text-dojo-gray-700 hidden sm:inline">|</span>
            <Link href="/slapuku-politika" className="text-xs text-dojo-gray-500 hover:text-white transition-colors">
              Slapukų politika
            </Link>
            <span className="text-dojo-gray-700 hidden sm:inline">|</span>
            <Link href="/taisykles" className="text-xs text-dojo-gray-500 hover:text-white transition-colors">
              Taisyklės ir sąlygos
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
