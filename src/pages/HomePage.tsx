import React from 'react'
import { HeroSection } from '../components/sections/HeroSection'
import { ProofSection } from '../components/sections/ProofSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { WhyShaivikaSection } from '../components/sections/WhyShaivikaSection'
import { TestimonialsFAQSection } from '../components/sections/TestimonialsFAQSection'
import { ContactSection } from '../components/sections/ContactSection'

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Proof Strip */}
      <ProofSection />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Featured Work Section */}
      <ProjectsSection />

      {/* 5. How We Work / Process Section */}
      <ProcessSection />

      {/* 6. Why Shaivika Section */}
      <WhyShaivikaSection />

      {/* 7. Testimonials & FAQ Section */}
      <TestimonialsFAQSection />

      {/* 8. Final Contact CTA Section */}
      <ContactSection />
    </main>
  )
}
