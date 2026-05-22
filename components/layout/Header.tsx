'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/data'
import { assetPath } from '@/lib/paths'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileAboutOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-elevated'
            : 'bg-white shadow-sm'
        )}
      >
        <div className="container-default">
          <div className="flex items-center justify-between h-[72px] md:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={assetPath('/images/Klaipedos-Dziudo.svg')}
                  alt="Klaipėdos Dziudo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden sm:block text-lg md:text-xl font-bold text-dojo-blue leading-tight">
                Klaipėdos<br className="hidden md:block" /> Dziudo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.children ? (
                    <DesktopDropdown
                      link={link}
                      isActive={isActive(link.href)}
                      pathname={pathname}
                    />
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'px-4 py-2 text-sm font-semibold rounded-lg transition-colors',
                        isActive(link.href)
                          ? 'text-dojo-blue bg-dojo-blue/5'
                          : 'text-dojo-gray-700 hover:text-dojo-blue hover:bg-dojo-gray-50'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-dojo-blue hover:bg-dojo-gray-50 transition-colors"
              aria-label={mobileMenuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu panel */}
          <div className="absolute top-[72px] left-0 right-0 bottom-0 bg-white overflow-y-auto shadow-2xl">
            <nav className="container-default py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <div className="border-b border-dojo-gray-100">
                      <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className={cn(
                          'flex items-center justify-between w-full py-3 text-base font-semibold',
                          isActive(link.href)
                            ? 'text-dojo-blue'
                            : 'text-dojo-gray-700'
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform duration-200',
                            mobileAboutOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-200',
                          mobileAboutOpen ? 'max-h-96 pb-3' : 'max-h-0'
                        )}
                      >
                        <div className="flex flex-col gap-1 pl-4 border-l-2 border-dojo-gray-100">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                'py-2 text-sm transition-colors',
                                pathname === child.href
                                  ? 'text-dojo-blue font-semibold'
                                  : 'text-dojo-gray-600 hover:text-dojo-blue'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block py-3 text-base font-semibold border-b border-dojo-gray-100 transition-colors',
                        isActive(link.href)
                          ? 'text-dojo-blue'
                          : 'text-dojo-gray-700 hover:text-dojo-blue'
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

/* Desktop dropdown with local hover state */
function DesktopDropdown({
  link,
  isActive,
  pathname,
}: {
  link: { label: string; href: string; children?: { label: string; href: string }[] }
  isActive: boolean
  pathname: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors',
          isActive
            ? 'text-dojo-blue bg-dojo-blue/5'
            : 'text-dojo-gray-700 hover:text-dojo-blue hover:bg-dojo-gray-50'
        )}
      >
        {link.label}
        <ChevronDown
          className={cn('w-4 h-4 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      <div
        className={cn(
          'absolute top-full left-0 pt-2 transition-all duration-200',
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <div className="bg-white rounded-xl shadow-card-hover border border-dojo-gray-100 py-2 min-w-[220px]">
          {link.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                'block px-4 py-2.5 text-sm transition-colors',
                pathname === child.href
                  ? 'text-dojo-blue bg-dojo-blue/5 font-semibold'
                  : 'text-dojo-gray-700 hover:text-dojo-blue hover:bg-dojo-gray-50'
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
