import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

// Import project images
import project1 from '@/assets/project-1.jpg'
import project2 from '@/assets/project-2.jpg'
import project3 from '@/assets/project-3.jpg'
import project4 from '@/assets/project-4.jpg'

export function Projects() {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable reports.',
      image: project1,
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      liveUrl: 'https://dashboard-demo.com',
      githubUrl: 'https://github.com/johndoe/dashboard'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce platform with payment integration, inventory management, and responsive mobile design.',
      image: project2,
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/johndoe/ecommerce'
    },
    {
      title: 'Social Media App',
      description: 'Full-stack social media application with real-time messaging, post interactions, and user authentication.',
      image: project3,
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express.js'],
      liveUrl: 'https://social-demo.com',
      githubUrl: 'https://github.com/johndoe/social-app'
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative project management tool with kanban boards, team collaboration, and progress tracking.',
      image: project4,
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'Cloud Functions'],
      liveUrl: 'https://task-demo.com',
      githubUrl: 'https://github.com/johndoe/task-manager'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
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
                  className="px-3 py-1 text-xs border-border hover:bg-secondary"
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
            className="border-border hover:bg-secondary"
            onClick={() => window.open('https://github.com/johndoe', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}