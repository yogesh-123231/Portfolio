import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GradientCard } from '@/components/ui/gradient-card'
import { motion, Variants } from 'framer-motion'
import { Code, Server, Cloud, Settings } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building modern, responsive user interfaces with cutting-edge technologies and frameworks.',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3'],
      icon: <Code className="h-6 w-6 text-white" />
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs with scalable architecture.',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB'],
      icon: <Server className="h-6 w-6 text-white" />
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications in cloud environments with modern DevOps practices.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Railway'],
      icon: <Cloud className="h-6 w-6 text-white" />
    },
    {
      title: 'Tools & Others',
      description: 'Utilizing essential development tools and technologies to streamline workflows.',
      skills: ['Git', 'Figma', 'VS Code', 'Postman', 'Jira', 'Linux'],
      icon: <Settings className="h-6 w-6 text-white" />
    }
  ]

  const proficiencyLevels = [
    { skill: 'React/TypeScript', level: 95, color: 'from-blue-500 to-blue-600' },
    { skill: 'Node.js', level: 90, color: 'from-green-500 to-green-600' },
    { skill: 'Python', level: 85, color: 'from-yellow-500 to-orange-600' },
    { skill: 'Cloud Technologies', level: 80, color: 'from-purple-500 to-purple-600' },
    { skill: 'UI/UX Design', level: 75, color: 'from-pink-500 to-pink-600' }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

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

        {/* Gradient Skills Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="flex justify-center"
            >
              <GradientCard
                icon={category.icon}
                title={category.title}
                description={category.description}
                linkText="Explore Skills"
                className="mx-auto"
              />
              
              {/* Skills badges below each card */}
              <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex flex-wrap gap-1 justify-center max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-xs bg-secondary/80 backdrop-blur-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Proficiency Levels */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl text-center text-card-foreground flex items-center justify-center gap-2">
                <span className="text-3xl">📊</span>
                Proficiency Levels
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              {proficiencyLevels.map((item, index) => (
                <motion.div 
                  key={item.skill} 
                  className="space-y-3"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground text-lg">{item.skill}</span>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.level}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <motion.div 
                        className={`h-3 rounded-full bg-gradient-to-r ${item.color} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

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