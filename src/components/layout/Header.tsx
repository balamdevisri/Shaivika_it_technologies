import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { headerNavLinks } from '../../data/navigation'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
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

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 -m-1"
            aria-label="Shaivika IT Technologies Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2 group-hover:border-cyan-500/50 transition-colors shadow-inner">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                <path
                  d="M32 14H19C16.2386 14 14 16.2386 14 19C14 21.7614 16.2386 24 19 24H29C31.7614 24 34 26.2386 34 29C34 31.7614 31.7614 34 29 34H16"
                  stroke="#38BDF8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="33" cy="14" r="3" fill="#38BDF8" />
                <circle cx="15" cy="34" r="3" fill="#0EA5E9" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-none group-hover:text-cyan-300 transition-colors">
                SHAIVIKA
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5 leading-none">
                IT Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {headerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="#contact"
              size="sm"
              variant="primary"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Discuss a Project
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 top-[65px] z-40 bg-slate-950/95 backdrop-blur-xl md:hidden border-t border-slate-800/80 overflow-y-auto"
        >
          <Container className="py-6 flex flex-col justify-between min-h-[calc(100vh-65px)] pb-12">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {headerNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 rounded-xl transition-colors border border-transparent hover:border-slate-800"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-slate-800/80 space-y-4">
              <Button
                href="#contact"
                size="lg"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Discuss a Project
              </Button>
              <div className="text-center">
                <p className="text-xs text-slate-500">
                  Kadapa, Andhra Pradesh • shaivikagroups@gmail.com
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
