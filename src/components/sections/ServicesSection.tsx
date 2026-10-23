import React from 'react'
import {
  Globe,
  Cpu,
  Layers,
  BarChart3,
  MessageSquareCode,
  ArrowUpRight,
  CheckCircle,
} from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { servicesData, type ServiceItem } from '../../data/services'

const iconMap = {
  Globe,
  Cpu,
  Layers,
  BarChart3,
  MessageSquareCode,
}

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          badge="Core Services"
          title={
            <span>
              Engineered For Scalability &amp;{' '}
              <span className="text-cyan-400">Business Impact</span>
            </span>
          }
          subtitle="Specialized technology capabilities designed for startups, expanding teams, and enterprise operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service: ServiceItem, index: number) => {
            const IconComponent = iconMap[service.iconName] || Globe
            const isFeatured = index === 0

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-slate-700/80' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <Badge variant="cyan" size="sm">
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      {service.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/70 mb-6">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-800/60">
                  <a
                    href={service.href || '#contact'}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
