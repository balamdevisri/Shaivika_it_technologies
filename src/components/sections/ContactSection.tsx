import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Info,
} from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { companyContactDetails } from '../../data/navigation'
import { servicesData } from '../../data/services'

interface FormData {
  fullName: string
  email: string
  service: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  service?: string
  message?: string
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    service: servicesData[0]?.title || 'Web & Mobile App Development',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submittedDraft, setSubmittedDraft] = useState<FormData | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email address.'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format.'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a primary service.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief summary of your project or requirements.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters to help us evaluate requirements.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Store validated draft locally — do not fake an API call
      setSubmittedDraft({ ...formData })
    }
  }

  const handleReset = () => {
    setSubmittedDraft(null)
    setFormData({
      fullName: '',
      email: '',
      service: servicesData[0]?.title || 'Web & Mobile App Development',
      message: '',
    })
    setErrors({})
  }

  // Construct direct WhatsApp message URL with validated draft data
  const getWhatsAppDraftUrl = () => {
    if (!submittedDraft) return companyContactDetails.whatsappUrl
    const text = encodeURIComponent(
      `Hello Shaivika IT Technologies Team,\n\nI would like to discuss a project:\n- Name: ${submittedDraft.fullName}\n- Email: ${submittedDraft.email}\n- Service: ${submittedDraft.service}\n- Scope: ${submittedDraft.message}`
    )
    return `https://wa.me/917981431094?text=${text}`
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950/90 border-t border-slate-900 scroll-mt-20">
      <Container>
        <SectionHeading
          badge="Direct Engagement"
          title={
            <span>
              Let's Discuss Your{' '}
              <span className="text-cyan-400">Next Digital Initiative</span>
            </span>
          }
          subtitle="Submit your project details below or connect directly through verified communication channels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Verified Office &amp; Communication Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Connect directly with our engineering and operations team for technical consultations, proposal requests, or architectural reviews.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${companyContactDetails.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-950/50 transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Phone / WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {companyContactDetails.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${companyContactDetails.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-950/50 transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Direct Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors break-all">
                      {companyContactDetails.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Regional Office</span>
                    <span className="text-sm font-semibold text-white">
                      {companyContactDetails.addressShort}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Kadapa, Andhra Pradesh, 516001, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Response Window</span>
                    <span className="text-sm font-semibold text-emerald-400">
                      Within 24-48 Business Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant Action */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-800/40 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-300 block">
                  Prefer Instant Messaging?
                </span>
                <span className="text-xs text-slate-400">
                  Chat directly with our technical team on WhatsApp.
                </span>
              </div>
              <Button
                href={companyContactDetails.whatsappUrl}
                target="_blank"
                variant="outline"
                size="sm"
                className="shrink-0 border-emerald-700/60 text-emerald-300 hover:bg-emerald-950/50"
                rightIcon={<MessageCircle className="w-4 h-4 text-emerald-400" />}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Right Column: Enquiry Form UI */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800/90 p-7 sm:p-9 shadow-xl relative">
              {submittedDraft ? (
                <div className="space-y-6 py-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Inquiry Draft Validated Successfully
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      Thank you, <strong className="text-white">{submittedDraft.fullName}</strong>. Your inquiry details for <strong className="text-cyan-300">{submittedDraft.service}</strong> have passed client-side validation.
                    </p>
                  </div>

                  {/* Explicit Notification that backend submission is in progress */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-3">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-300 mb-0.5">
                        Frontend Foundation Phase Notice:
                      </strong>
                      This redesign is currently in the approved frontend foundation phase. No mock network requests are faked. A production API submission endpoint will be wired up during backend integration.
                    </div>
                  </div>

                  {/* Immediate Direct Send via WhatsApp */}
                  <div className="space-y-3 pt-2">
                    <Button
                      href={getWhatsAppDraftUrl()}
                      target="_blank"
                      size="lg"
                      variant="primary"
                      className="w-full justify-center"
                      rightIcon={<MessageCircle className="w-4 h-4" />}
                    >
                      Transmit Details via WhatsApp Now
                    </Button>

                    <Button
                      type="button"
                      variant="secondary"
                      size="md"
                      className="w-full justify-center"
                      onClick={handleReset}
                    >
                      Edit or Submit Another Inquirer Draft
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      Project Specification &amp; Scoping Request
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete the fields below to schedule an initial architecture scoping session.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Ramesh Naidu"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Primary Service Required <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus:border-cyan-500 transition-colors"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Scope */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Project Overview &amp; Requirements <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your objectives, target audience, timeline, or current technical stack..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Form Transparency Notice */}
                  <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-1">
                    <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Client-side validation enabled. Direct endpoint will be linked upon API readiness.</span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full justify-center"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Validate &amp; Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
