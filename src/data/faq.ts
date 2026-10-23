export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export interface TestimonialPlaceholderItem {
  id: string
  clientName: string
  clientRole: string
  company: string
  location: string
  quote: string
  projectType: string
  isVerifiedReview: boolean
}

export const faqData: FAQItem[] = [
  {
    id: 'engagement-model',
    question: 'How do we begin a project with Shaivika IT Technologies?',
    answer: 'We start with an initial discovery call to examine your goals, workflows, and technical constraints. Within 48 to 72 hours, we deliver a structured project scope outlining deliverables, milestones, tech stack recommendations, and transparent cost estimates.',
  },
  {
    id: 'intellectual-property',
    question: 'Who retains the intellectual property and code ownership?',
    answer: 'You retain 100% full ownership of all source code, design assets, databases, and intellectual property once milestone deliverables are approved and completed. We deliver clean, documented Git repositories directly to your organization.',
  },
  {
    id: 'technology-stack',
    question: 'Which technologies and frameworks do you build with?',
    answer: 'Our core stack focuses on modern, industry-standard technologies: React, TypeScript, Next.js, Node.js, Python for AI/ML pipelines, Tailwind CSS, PostgreSQL, and leading cloud providers (AWS, Vercel, Supabase). We choose stable, maintainable stacks without unnecessary bloat.',
  },
  {
    id: 'post-launch-support',
    question: 'Do you provide ongoing maintenance and post-launch support?',
    answer: 'Yes. Every project includes an agreed post-launch warranty period for bug fixes and stability checks. We also offer dedicated ongoing SLA support packages for server monitoring, performance audits, feature enhancements, and security updates.',
  },
  {
    id: 'project-timeline',
    question: 'What is a typical timeline for custom software or AI automation?',
    answer: 'Project timelines vary based on scope: focused MVPs or AI automations generally take 2 to 4 weeks, whereas enterprise web applications and custom SaaS platforms typically take 6 to 12 weeks with bi-weekly sprint reviews.',
  },
]

/**
 * Reusable placeholder cards representing client feedback structure.
 * Note: These are structured demonstration layouts for verified reviews.
 */
export const testimonialPlaceholders: TestimonialPlaceholderItem[] = [
  {
    id: 't-1',
    clientName: 'B. Mounika',
    clientRole: 'Administrative Lead',
    company: 'Mansparshcare',
    location: 'Tirupati, AP',
    quote: 'Shaivika IT Technologies built an intuitive digital healthcare portal for our clinical team. The platform has significantly streamlined patient appointment workflows and telemedicine interactions.',
    projectType: 'Telehealth Web Platform',
    isVerifiedReview: true,
  },
  {
    id: 't-2',
    clientName: 'Client Partner Placeholder',
    clientRole: 'Operations Director',
    company: 'Logistics & Supply Enterprise',
    location: 'Hyderabad, India',
    quote: 'The automated WhatsApp lead interception system cut down our customer response time from hours to seconds. Our pipeline visibility improved noticeably within the first two weeks.',
    projectType: 'AI Lead Automation CRM',
    isVerifiedReview: false,
  },
  {
    id: 't-3',
    clientName: 'Client Partner Placeholder',
    clientRole: 'Founder & CEO',
    company: 'B2B SaaS Startup',
    location: 'Bangalore, India',
    quote: 'Clean TypeScript codebase, predictable sprint delivery, and zero fluff. The team understood our product requirements thoroughly and delivered ahead of our investor demo.',
    projectType: 'Multi-Tenant SaaS Portal',
    isVerifiedReview: false,
  },
]
