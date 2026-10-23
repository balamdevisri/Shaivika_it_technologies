import React from 'react'
import { Container } from '../layout/Container'
import { Badge } from '../ui/Badge'
import { Shield, GitBranch, MapPin, Clock } from 'lucide-react'

export const ProofSection: React.FC = () => {
  const verifiedStats = [
    {
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      title: 'Kadapa & Pan-India',
      subtitle: 'Operational Hub in Andhra Pradesh with remote engineering nationwide',
    },
    {
      icon: <GitBranch className="w-5 h-5 text-cyan-400" />,
      title: 'Full Repository Transfer',
      subtitle: '100% code ownership, clean git history and enterprise documentation',
    },
    {
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      title: 'Zero Vendor Lock-in',
      subtitle: 'Standard TypeScript, open cloud architectures & reproducible builds',
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      title: 'Milestone Predictability',
      subtitle: 'Structured 2-week agile sprints with demonstrable working software',
    },
  ]

  const partnerSlots = [
    { name: 'Mansparshcare', type: 'Healthcare Platform', verified: true },
    { name: 'Regional Logistics', type: 'Fleet Tracking (Placeholder)', verified: false },
    { name: 'B2B Commerce Studio', type: 'Order Automation (Placeholder)', verified: false },
    { name: 'SaaS Invoicing Hub', type: 'GST Portal (Placeholder)', verified: false },
    { name: 'AI Voice & Lead Agent', type: 'Conversational Bot (Placeholder)', verified: false },
  ]

  return (
    <section className="py-12 border-y border-slate-900 bg-slate-950/60 relative">
      <Container>
        {/* Verified Technical Standards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {verifiedStats.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client & Partner Integration Strip */}
        <div className="pt-6 border-t border-slate-900/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Approved Client Deployments &amp; Technology Partners
            </span>
            <Badge variant="placeholder" size="sm">
              Section Ready for Authenticated Client Logos
            </Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partnerSlots.map((slot, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3.5 rounded-lg bg-slate-900/30 border border-slate-800/60 hover:border-slate-700/60 transition-colors text-center"
              >
                <span className="text-xs font-semibold text-slate-200">
                  {slot.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5 truncate max-w-full">
                  {slot.type}
                </span>
                {slot.verified ? (
                  <span className="mt-1 text-[9px] text-emerald-400 font-mono">
                    ✓ Verified Client
                  </span>
                ) : (
                  <span className="mt-1 text-[9px] text-slate-600 font-mono">
                    • Slot Placeholder
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
