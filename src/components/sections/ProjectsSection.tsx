import React from 'react'
import { ExternalLink, Layers, ArrowRight } from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { projectsData, type ProjectItem } from '../../data/projects'

export const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="py-20 lg:py-28 bg-slate-950/80 border-t border-slate-900 scroll-mt-20">
      <Container>
        <SectionHeading
          badge="Featured Work"
          title={
            <span>
              Production Systems &amp;{' '}
              <span className="text-cyan-400">Digital Solutions</span>
            </span>
          }
          subtitle="Reusable case study showcases demonstrating full-stack engineering, real-time analytics, and operational automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300"
            >
              {/* Project Visual / Graphic Preview Container */}
              <div className="relative h-48 sm:h-52 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
                {/* Background Pattern */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-10 tech-dot-bg pointer-events-none"
                />

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 border border-slate-800 text-cyan-300 backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.isPlaceholderNotice ? (
                    <Badge variant="placeholder" size="sm">
                      Demo Template
                    </Badge>
                  ) : (
                    <Badge variant="verified" size="sm">
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Stylized Visual Mockup Center */}
                <div className="relative z-10 my-auto text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 shadow-inner group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                    <Layers className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-2">
                    {project.clientOrDomain}
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                {project.metrics && (
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800/80">
                    <span>{project.metrics.label}</span>
                    <span className="font-mono font-semibold text-emerald-400">
                      {project.metrics.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Details Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <span>Request Case Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  )}

                  <span className="text-[10px] font-mono text-slate-600">
                    Production Build
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Have a digital product or automation pipeline to build?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              We review specifications and prepare detailed milestone scopes within 48 hours.
            </p>
          </div>
          <Button href="#contact" variant="primary" size="md">
            Start Project Discussion
          </Button>
        </div>
      </Container>
    </section>
  )
}
