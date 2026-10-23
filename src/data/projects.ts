export interface ProjectItem {
  id: string
  title: string
  clientOrDomain: string
  category: string
  summary: string
  fullDescription: string
  technologies: string[]
  metrics?: { label: string; value: string }
  liveUrl?: string
  isPlaceholderNotice?: boolean
  imagePlaceholderAlt: string
  accentColor: string
}

export const projectsData: ProjectItem[] = [
  {
    id: 'mansparshcare-platform',
    title: 'Mansparshcare Telehealth & Clinical Portal',
    clientOrDomain: 'Mansparshcare (Tirupati)',
    category: 'Healthcare Web Platform',
    summary: 'A unified healthcare portal delivering online doctor consultation scheduling, patient records management, and responsive telemedicine services.',
    fullDescription: 'Architected with a mobile-first, secure interface to allow seamless patient bookings and clinical practitioner workflows.',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Cloud Hosting'],
    metrics: { label: 'Platform Availability', value: '99.9%' },
    liveUrl: 'https://mansparshcare.xyz/',
    isPlaceholderNotice: true,
    imagePlaceholderAlt: 'Healthcare patient portal dashboard interface preview',
    accentColor: '#0EA5E9',
  },
  {
    id: 'enterprise-bi-dashboard',
    title: 'Operations & Business Intelligence Dashboard',
    clientOrDomain: 'Enterprise Client Placeholder',
    category: 'Analytics & Dashboards',
    summary: 'Centralized analytics cockpit tracking operational KPIs, revenue velocity, team output, and automated Google Sheets data pipelines.',
    fullDescription: 'Custom-tailored dashboard delivering sub-second query rendering for high-volume operational metrics with role-based access.',
    technologies: ['TypeScript', 'Tailwind CSS', 'Chart Engine', 'PostgreSQL', 'WebSockets'],
    metrics: { label: 'Query Latency', value: '<250ms' },
    isPlaceholderNotice: true,
    imagePlaceholderAlt: 'Operations metrics and KPI analytics interface preview',
    accentColor: '#38BDF8',
  },
  {
    id: 'ai-lead-automation-crm',
    title: 'Intelligent Lead Orchestration & WhatsApp CRM',
    clientOrDomain: 'B2B Sales Operations Placeholder',
    category: 'AI Automations',
    summary: 'Automated inbound lead qualification pipeline integrated with WhatsApp Business API, automatic scheduling, and CRM synchronization.',
    fullDescription: 'Reduces manual response delays from hours to seconds with natural-language message routing and team lead assignment.',
    technologies: ['AI Agents', 'WhatsApp Cloud API', 'Webhooks', 'Next.js', 'Serverless'],
    metrics: { label: 'Response Time', value: 'Instant' },
    isPlaceholderNotice: true,
    imagePlaceholderAlt: 'Automated CRM lead flow and chat pipeline preview',
    accentColor: '#0284C7',
  },
]
