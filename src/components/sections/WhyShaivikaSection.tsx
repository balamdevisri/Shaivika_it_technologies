import React from 'react'
import {
  Code,
  Workflow,
  Users,
  Check,
  Terminal,
} from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'

export const WhyShaivikaSection: React.FC = () => {
  const differentiators = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: 'Clean Architecture & 100% Code Ownership',
      subtitle: 'Zero vendor lock-in. You own every line of code, git commit, schema, and configuration.',
      description:
        'We write well-documented, idiomatic TypeScript and modular React components that any competent engineering team can inspect, run, and scale. We hand over the complete repository at every milestone.',
      bulletPoints: [
        'Full IP assignment upon milestone completion',
        'Standard modern tech stack (React, Node, TypeScript)',
        'Extensive README, setup docs & schema diagrams',
      ],
    },
    {
      icon: <Workflow className="w-6 h-6 text-cyan-400" />,
      title: 'Pragmatic, Outcome-Driven Automation',
      subtitle: 'AI and automated systems aligned with measurable operational efficiency.',
      description:
        'We do not build novelty tech for buzzwords. We engineer purposeful automations—connecting WhatsApp Business APIs, CRM pipelines, and intelligent chatbots to save real operational hours and accelerate customer response.',
      bulletPoints: [
        'Measurable reduction in manual handling time',
        'Custom webhooks, database triggers & event sync',
        'Domain-grounded responses with human escalation',
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: 'Direct Senior Engineering Collaboration',
      subtitle: 'No communication disconnect. Speak directly with developers building your product.',
      description:
        'You work with the actual software architects and engineers executing your sprint backlog. This eliminates misunderstandings, accelerates decision velocity, and ensures technical precision.',
      bulletPoints: [
        'Bi-weekly milestone sprint demos & reviews',
        'Transparent issue tracking and staging previews',
        'Dedicated post-launch warranty & SLA options',
      ],
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-950/80 border-t border-slate-900 scroll-mt-20">
      <Container>
        <SectionHeading
          badge="Why Shaivika"
          title={
            <span>
              Engineering Principles Built on{' '}
              <span className="text-cyan-400">Integrity &amp; Rigor</span>
            </span>
          }
          subtitle="Three verifiable reasons growing businesses choose Shaivika IT Technologies as their long-term digital engineering partner."
        />

        {/* 3 Core Differentiator Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-7 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {diff.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 mt-1">
                    {diff.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-6 mt-6 border-t border-slate-800/70 space-y-2.5">
                {diff.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Standards Callout Strip */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/30 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-200">Engineering Standard:</span>
            <span>TypeScript Strict Mode • Semantic HTML5 • Accessible Focus Indicators</span>
          </div>
          <div className="text-slate-500">
            Headquartered in Kadapa, AP • Remote Engagements Across India
          </div>
        </div>
      </Container>
    </section>
  )
}
