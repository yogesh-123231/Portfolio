import { Timeline } from '@/components/ui/timeline'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Calendar, MapPin, Star, Trophy, GraduationCap } from 'lucide-react'

export function Education() {
  const timelineData = [
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Bachelor of Computer Science</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-primary" />
                University of Technology
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                San Francisco, CA
              </div>
              <div className="bg-gradient-to-r from-success to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                GPA: 3.9/4.0
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Specialized in Software Engineering and Web Development. Graduated Magna Cum Laude with a focus on modern web technologies and software architecture.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Dean\'s List', 'CS Society President', 'Hackathon Winner'].map((achievement) => (
                <Badge 
                  key={achievement}
                  variant="secondary"
                  className="text-xs bg-secondary/80 backdrop-blur-sm"
                >
                  <Trophy className="h-3 w-3 mr-1" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">AWS Certified</h4>
                <p className="text-xs text-muted-foreground">Solutions Architect</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Google Cloud</h4>
                <p className="text-xs text-muted-foreground">Professional Developer</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Microsoft Azure</h4>
                <p className="text-xs text-muted-foreground">Fundamentals</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Meta Frontend</h4>
                <p className="text-xs text-muted-foreground">Developer Certificate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Full Stack Web Development Bootcamp</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-primary" />
                Tech Academy
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Online
              </div>
              <div className="bg-gradient-to-r from-success to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Score: 98%
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Intensive 12-month program covering modern web development technologies including React, Node.js, databases, and cloud deployment.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Top 5% Graduate', 'Capstone Project Award'].map((achievement) => (
                <Badge 
                  key={achievement}
                  variant="secondary"
                  className="text-xs bg-secondary/80 backdrop-blur-sm"
                >
                  <Trophy className="h-3 w-3 mr-1" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              ✅ Full Stack JavaScript Development
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              ✅ React & Modern Frontend Frameworks
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              ✅ Node.js & Backend Development
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              ✅ Database Design & Management
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              ✅ Cloud Deployment & DevOps
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Continuous Learning",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            Always staying updated with the latest technologies and industry best practices
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              ✅ Advanced React Patterns & Performance
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              ✅ TypeScript & Modern JavaScript
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              ✅ Cloud Architecture & Microservices
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              ✅ AI/ML Integration in Web Development
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              ✅ Open Source Contributions
            </div>
          </div>
          
          <Card className="bg-gradient-to-r from-secondary/80 to-muted/80 backdrop-blur-sm border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-success to-emerald-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                <div className="text-lg font-semibold text-secondary-foreground">
                  Lifelong Learner
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Committed to continuous improvement and staying at the forefront of technology evolution
              </p>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <Timeline data={timelineData} />
    </section>
  )
}