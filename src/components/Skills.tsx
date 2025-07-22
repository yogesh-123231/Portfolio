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

        {/* Enhanced Certifications Preview */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-secondary/80 to-muted/80 backdrop-blur-sm rounded-full px-8 py-4 border border-border shadow-card">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <span className="text-muted-foreground font-medium">
              AWS Certified • Google Cloud Certified • Microsoft Azure Certified
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}