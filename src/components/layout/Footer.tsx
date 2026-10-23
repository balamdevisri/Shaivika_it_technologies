import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUp,
} from 'lucide-react'
import { Container } from './Container'
import { companyContactDetails, footerQuickLinks } from '../../data/navigation'
import { servicesData } from '../../data/services'

const CURRENT_YEAR = 2026

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-900">
          {/* Brand & Profile Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2">
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
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block leading-none">
                  SHAIVIKA
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                  IT Technologies
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Enterprise digital engineering, full-stack web applications, AI automations, and scalable SaaS platforms. Engineering precision built around genuine business outcomes.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-medium">
                {companyContactDetails.parentEntity}
              </span>
            </div>

            {/* Verified Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyContactDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shaivika Groups on LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26M7.86 18.5V10.13H5.07V18.5h2.79z" />
                </svg>
              </a>
              <a
                href={companyContactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shaivika India on Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={companyContactDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-cyan-300 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${companyContactDetails.phone}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-300 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{companyContactDetails.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyContactDetails.email}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-cyan-300 transition-colors group break-all"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{companyContactDetails.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{companyContactDetails.addressShort}</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Inquiries Open for New Sprints
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              &copy; {CURRENT_YEAR} Shaivika IT Technologies. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#privacy-policy-placeholder"
              onClick={(e) => {
                e.preventDefault()
                alert('Privacy Policy placeholder: Legal terms will be connected prior to public launch.')
              }}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms-placeholder"
              onClick={(e) => {
                e.preventDefault()
                alert('Terms of Service placeholder: Enterprise terms documentation will be linked here.')
              }}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
