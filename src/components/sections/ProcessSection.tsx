import React from 'react'
import {
  Compass,
  FileText,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  Headphones,
} from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'

interface ProcessStep {
  step: string
  title: string
  icon: React.ReactNode
  description: string
  keyFocus: string
}

export const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Discover',
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      description: 'We analyze your business workflows, audience needs, technical constraints, and competitive benchmarks.',
      keyFocus: 'Requirements & Architecture Audit',
    },
    {
      step: '02',
      title: 'Scope',
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
      description: 'We formalize milestone deliverables, sprint schedules, API schemas, and transparent budget boundaries.',
      keyFocus: 'Fixed Milestones & Technical Spec',
    },
    {
      step: '03',
      title: 'Design',
      icon: <Palette className="w-5 h-5 text-cyan-400" />,
      description: 'We create clean design tokens, user journeys, responsive component mockups, and interaction states.',
      keyFocus: 'UI/UX & Interactive Prototypes',
    },
    {
      step: '04',
      title: 'Build',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      description: 'Engineered with clean TypeScript, modern component structures, scalable databases, and daily git commits.',
      keyFocus: 'Production-Grade Software Code',
    },
    {
      step: '05',
      title: 'Test',
      icon: <CheckCheck className="w-5 h-5 text-cyan-400" />,
      description: 'Rigorous cross-device testing, security vulnerability checks, responsive viewports, and WCAG accessibility.',
      keyFocus: 'QA, Security & Performance Audits',
    },
    {
      step: '06',
      title: 'Launch',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      description: 'Seamless zero-downtime production release, SSL configuration, CDN optimizations, and analytics tracking.',
      keyFocus: 'Production Cloud Deployment',
    },
    {
      step: '07',
      title: 'Support',
      icon: <Headphones className="w-5 h-5 text-cyan-400" />,
      description: 'Post-launch warranty, automated uptime monitoring, security patches, and ongoing milestone enhancements.',
      keyFocus: 'Dedicated Maintenance & SLA',
    },
  ]

  return (
    <section id="process" className="py-20 lg:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          badge="Execution Methodology"
          title={
            <span>
              How We Work: From Concept to{' '}
              <span className="text-cyan-400">Production</span>
            </span>
          }
          subtitle="A battle-tested 7-stage delivery lifecycle ensuring transparency, predictable timelines, and engineering excellence."
        />

        {/* 7-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const isLast = index === steps.length - 1

            return (
              <div
                key={item.step}
                className={`relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 ${
                  isLast ? 'md:col-span-2 lg:col-span-1 border-cyan-800/40 bg-slate-900/60' : ''
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-slate-700">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Focus Tag */}
                <div className="pt-4 mt-4 border-t border-slate-800/70">
                  <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                    {item.keyFocus}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
