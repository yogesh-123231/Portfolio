import { motion } from 'framer-motion'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Feature Section with Hover Effects */}
        <FeaturesSectionWithHoverEffects />

      </div>
    </section>
  )
}