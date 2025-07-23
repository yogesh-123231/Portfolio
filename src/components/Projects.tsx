import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from "framer-motion";

// Import project images
import project1 from '@/assets/project1.png'
import project2 from '@/assets/project2.png'
import project3 from '@/assets/project3.png'


export function Projects() {
  const projects = [
   {
  title: 'Job Portal Web App',
  description: 'A full-featured job portal with authentication, job listings from Supabase, filtering, and job application flow for users.',
  image: project1,
  technologies: ['React', 'JavaScript','Supabase', 'Firebase Auth', 'Tailwind CSS'],
  liveUrl: 'https://job-portal24.netlify.app/', // replace with actual link
  githubUrl: 'https://github.com/yogesh-123231/Job-Portal'
},
{
  title: 'Payflow – Landing Page for Payment Gateway',
  description: 'Responsive and clean marketing landing page designed for a fictional payment gateway company, focused on modern UI and UX.',
  image: project2,
  technologies: ['React', 'Typescript' ,'Tailwind CSS', 'Framer Motion', 'Shadcn'],
  liveUrl: 'https://payflow-landing-page.netlify.app/', // replace with actual link
  githubUrl: 'https://github.com/yogesh-123231/PayFlow-Landing-Page'
},
{
  title: 'Real Estate Landing Page',
  description: 'Figma to Code - Visually appealing, modern landing page for a real estate service using Figma design and responsive layout.',
  image: project3,
  technologies: ['React','Framer motion','Web3Forms','JavaScript', 'Tailwind css'],
  liveUrl: 'https://ecoheaven-reality.netlify.app/', // replace with actual link
  githubUrl: 'https://github.com/yogesh-123231/EcoHeaven-Realty'
}

    
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
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
            Crafting <span className="bg-gradient-primary bg-clip-text text-transparent ">Digital
Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 text-black hover:bg-white"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-secondary hover:bg-muted transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3 py-1 text-xs border-border hover:bg-secondary "
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Demo
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-3 py-1 text-xs hover:bg-secondary"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="border-border bg-gradient-primary hover:bg-secondary hover:opacity-90 text-primary-foreground font-medium shadow-primary"
            onClick={() => window.open('https://github.com/yogesh-123231', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </motion.div>
    </section>
  )
}