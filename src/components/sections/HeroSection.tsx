import React, { useState } from 'react'
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal,
  Activity,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai' | 'telemetry'>('architecture')

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden tech-grid-bg">
      {/* Restrained background ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="font-medium text-slate-200">
              Enterprise Engineering Studio
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-semibold">Shaivika IT Technologies</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Digital Products Built Around Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Business Goals
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            We architect and ship production-ready web platforms, intelligent AI automations, and custom SaaS software designed for enterprise scale and verifiable business outcomes.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Button
              href="#contact"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto shadow-lg shadow-cyan-500/20"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss a Project
            </Button>
            <Button
              href="#work"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              View Our Work
            </Button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Full IP &amp; Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Modern TypeScript &amp; React Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Direct Senior Engineering Delivery</span>
            </div>
          </div>
        </div>

        {/* Polished Software Visual / Interactive Product Mockup */}
        <div className="mt-14 sm:mt-18 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-sm">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
                  shaivika-core-platform v2.4.0
                </span>
              </div>

              {/* Mock Interface Tabs */}
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ai')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'ai'
                      ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI Automation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'telemetry'
                      ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Telemetry
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-mono">Cluster Active</span>
              </div>
            </div>

            {/* Mock Dashboard Body */}
            <div className="p-5 sm:p-8 bg-slate-950/60">
              {activeTab === 'architecture' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Card 1: Core Web Engine */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-800/60 text-cyan-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <Badge variant="cyan" size="sm">Active Sprints</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Full-Stack Web App</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        React 19, TypeScript, Server-Driven API Layer, Tailored UI Systems.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Render: 42ms</span>
                      <span className="text-emerald-400">Stable</span>
                    </div>
                  </div>

                  {/* Card 2: AI Workflows */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-800/60 text-blue-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <Badge variant="verified" size="sm">Automated</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">AI Routing Engine</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        WhatsApp API, Customer Lead Interceptor, Smart Webhooks.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Throughput: 1.4k/hr</span>
                      <span className="text-cyan-400">Live</span>
                    </div>
                  </div>

                  {/* Card 3: Enterprise Telemetry */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                        <Activity className="w-4 h-4" />
                      </div>
                      <Badge variant="slate" size="sm">SLA 99.9%</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Cloud Infrastructure</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Global CDN, Automated Failovers, Encrypted Environment Secrets.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Uptime: 99.98%</span>
                      <span className="text-emerald-400">Healthy</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-white">
                          Automated WhatsApp Lead Qualification Stream
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                        Event-Driven Webhook
                      </span>
                    </div>
                    <div className="space-y-2 font-mono text-xs text-slate-300 bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                      <div className="text-slate-500">// Real-time payload processed from inbound customer inquiry</div>
                      <div className="text-cyan-300">
                        &gt; [16:42:01] INBOUND: "Need custom CRM with GST invoice generator"
                      </div>
                      <div className="text-emerald-400">
                        &gt; [16:42:02] AI AGENT: Intent verified &rarr; Category: SaaS Platform &rarr; Priority: High
                      </div>
                      <div className="text-slate-400">
                        &gt; [16:42:02] ACTION: Notification dispatched to team + Lead recorded in CRM
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'telemetry' && (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs text-slate-300 space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      Platform Diagnostics
                    </span>
                    <span className="text-emerald-400">All checks passed</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                      <div className="text-slate-500 text-[10px]">API Latency</div>
                      <div className="text-white text-sm font-bold mt-0.5">18 ms</div>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                      <div className="text-slate-500 text-[10px]">Core Web Vitals</div>
                      <div className="text-emerald-400 text-sm font-bold mt-0.5">99/100</div>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                      <div className="text-slate-500 text-[10px]">Test Coverage</div>
                      <div className="text-white text-sm font-bold mt-0.5">94.2%</div>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                      <div className="text-slate-500 text-[10px]">Security Audit</div>
                      <div className="text-emerald-400 text-sm font-bold mt-0.5">A+ Rated</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
