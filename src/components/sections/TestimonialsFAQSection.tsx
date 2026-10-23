import React, { useState } from 'react'
import { ChevronDown, Star, MessageSquareQuote } from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { faqData, testimonialPlaceholders } from '../../data/faq'

export const TestimonialsFAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0]?.id || null)

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 relative scroll-mt-20">
      <Container>
        {/* Testimonials Header & Placeholders */}
        <div className="mb-20">
          <SectionHeading
            badge="Client Feedback Architecture"
            title={
              <span>
                Verified Perspectives &amp;{' '}
                <span className="text-cyan-400">Collaboration Impact</span>
              </span>
            }
            subtitle="Reusable testimonial card layouts prepared for verified client case feedback."
          />

          <div className="flex justify-center mb-8">
            <Badge variant="placeholder" size="md">
              Demonstration Layout • Only Genuine &amp; Authorized Reviews Displayed
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialPlaceholders.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Card Header: Stars & Verification */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    {item.isVerifiedReview ? (
                      <Badge variant="verified" size="sm">
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="placeholder" size="sm">
                        Layout Slot
                      </Badge>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <MessageSquareQuote className="w-8 h-8 text-slate-800 absolute -top-2 -left-2 -z-0 opacity-40 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic relative z-10">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-cyan-400 text-sm">
                    {item.clientName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.clientName}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {item.clientRole} • {item.company}
                    </p>
                    <span className="text-[10px] font-mono text-cyan-400/80">
                      {item.projectType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pt-16 border-t border-slate-900 max-w-4xl mx-auto">
          <SectionHeading
            badge="Frequently Asked Questions"
            title={
              <span>
                Clear Answers to{' '}
                <span className="text-cyan-400">Common Questions</span>
              </span>
            }
            subtitle="Transparent explanations regarding code ownership, sprint timelines, technology choices, and project onboarding."
          />

          <div className="space-y-4">
            {faqData.map((faq) => {
              const isOpen = openFaqId === faq.id

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/70 border-cyan-500/40'
                      : 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
