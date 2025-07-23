import { motion } from 'framer-motion'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <motion.div 
         initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.1 }} // triggers when 30% is in view
  transition={{
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
  }} className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-orbitron tracking-wider">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Feature Section with Hover Effects */}
        <FeaturesSectionWithHoverEffects />

      </motion.div>
    </section>
  )
}