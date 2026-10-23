export interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  category: string
  iconName: 'Globe' | 'Cpu' | 'Layers' | 'BarChart3' | 'MessageSquareCode'
  deliverables: string[]
  badge?: string
  href?: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-mobile-development',
    title: 'Web & Mobile App Development',
    category: 'Engineering',
    iconName: 'Globe',
    shortDescription: 'High-performance, full-stack web and mobile platforms built with modern TypeScript, React, Next.js, and native/cross-platform frameworks.',
    longDescription: 'We build responsive, accessible, and resilient web applications that load quickly, scale effortlessly, and provide intuitive digital experiences for your users.',
    deliverables: [
      'Full-stack React & Next.js architectures',
      'Cross-platform iOS & Android apps',
      'API-first headless integrations',
      'Performance & SEO optimization',
    ],
    badge: 'Core Offering',
    href: '#contact',
  },
  {
    id: 'ai-automations',
    title: 'AI Automations & Workflows',
    category: 'Intelligent Systems',
    iconName: 'Cpu',
    shortDescription: 'Operational automation across WhatsApp, Telegram, internal CRM, lead interceptors, and automated communication agents.',
    longDescription: 'Automate repetitive workflows, reduce manual data entry, and connect your business pipelines with autonomous AI agents and structured webhook triggers.',
    deliverables: [
      'WhatsApp & Telegram business bots',
      'Lead qualification & routing bots',
      'HR & applicant tracking automation',
      'Webhook & multi-system syncing',
    ],
    badge: 'High Impact',
    href: '#contact',
  },
  {
    id: 'saas-platforms',
    title: 'SaaS Platform Engineering',
    category: 'Product Development',
    iconName: 'Layers',
    shortDescription: 'End-to-end multi-tenant software platforms engineered for scale, recurring subscriptions, security, and enterprise compliance.',
    longDescription: 'From initial MVP scoping to production-ready enterprise software, we engineer SaaS products with robust authentication, role-based access, and reliable database architectures.',
    deliverables: [
      'Multi-tenant architecture & RBAC',
      'Billing, invoicing & subscription cycles',
      'Self-service onboarding flows',
      'Scalable cloud infrastructure',
    ],
    badge: 'Enterprise',
    href: '#contact',
  },
  {
    id: 'analytical-dashboards',
    title: 'Analytical Dashboards & BI',
    category: 'Data & Analytics',
    iconName: 'BarChart3',
    shortDescription: 'Real-time data visualization platforms, custom business intelligence dashboards, and Google Sheets/CRM integrations for executive clarity.',
    longDescription: 'Turn fragmented company data into actionable intelligence. We design fast, responsive dashboards with live KPI monitors and exportable analytics.',
    deliverables: [
      'Interactive KPI & operational charts',
      'Real-time database & API synchronization',
      'Google Sheets & CRM bi-directional sync',
      'Role-tailored reporting views',
    ],
    href: '#contact',
  },
  {
    id: 'ai-chatbots',
    title: 'Custom AI Chatbot Builders',
    category: 'Conversational AI',
    iconName: 'MessageSquareCode',
    shortDescription: 'Trained conversational agents powered by custom knowledge bases, providing 24/7 customer support and automated lead capture.',
    longDescription: 'Deploy domain-trained chatbots that resolve customer queries, query product manuals, and escalate complex support tickets directly to human team members.',
    deliverables: [
      'Domain-grounded RAG architectures',
      'Omnichannel deployment (Web, WhatsApp)',
      'Multi-lingual response support',
      'Analytics on user queries & sentiment',
    ],
    href: '#contact',
  },
]
