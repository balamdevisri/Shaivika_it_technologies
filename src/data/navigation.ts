export interface NavLinkItem {
  label: string
  href: string
}

export interface ContactInfo {
  phone: string
  phoneDisplay: string
  email: string
  address: string
  addressShort: string
  whatsappUrl: string
  linkedinUrl: string
  instagramUrl: string
  parentEntity: string
  companyName: string
}

export const headerNavLinks: NavLinkItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const footerQuickLinks: NavLinkItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Featured Work', href: '#work' },
  { label: 'How We Work', href: '#process' },
  { label: 'Why Shaivika', href: '#about' },
  { label: 'FAQ & Inquiries', href: '#faq' },
]

export const companyContactDetails: ContactInfo = {
  companyName: 'Shaivika IT Technologies',
  parentEntity: 'Part of Shaivika Groups',
  phone: '+917981431094',
  phoneDisplay: '+91 7981431094',
  email: 'shaivikagroups@gmail.com',
  address: 'Kadapa, Andhra Pradesh, 516001, India',
  addressShort: 'Kadapa, Andhra Pradesh, India',
  whatsappUrl: 'https://wa.me/917981431094',
  linkedinUrl: 'https://www.linkedin.com/in/shaivika-groups-7823ab362',
  instagramUrl: 'https://www.instagram.com/shaivika_india',
}
