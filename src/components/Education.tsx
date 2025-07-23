import { Timeline } from '@/components/ui/timeline'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Award, GraduationCap, MapPin, Star, Trophy } from 'lucide-react'
import { motion } from "framer-motion";

export function Education() {
  const timelineData = [
    {
      title: "2021 - 2024",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Diploma in Computer Engineering</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-primary" />
                MIT College, Pune
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Pune, India
              </div>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Strong Fundamentals
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Developed a solid foundation in core programming, data structures, and software engineering principles through hands-on project-based learning.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Top Performer", "Capstone Project Completed"].map((achievement) => (
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
        </div>
      ),
    },

    {
      title: "2024 - 2027",
      content: (
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Bachelor of Engineering in Artificial Intelligence & Machine Learning
            </h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-primary" />
                Zeal College of Engineering, Pune
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Pune, India
              </div>
              <div className="bg-gradient-to-r from-success to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                CGPA: 8.5+
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Currently pursuing a specialized degree in AI and ML. Passionate about continuous learning and building intelligent, real-world applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["AI Enthusiast", "Frontend Freelancer (2025)", "Self-Learner"].map((achievement) => (
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
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Responsive Web Design</h4>
                <p className="text-xs text-muted-foreground">FreeCodeCamp Certified</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Frontend Libraries</h4>
                <p className="text-xs text-muted-foreground">FreeCodeCamp Certified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },

    
    {
      title: "Continuous Learning",
      content: (
        <div>
          <p className="mb-4 font-bold text-foreground text-xl">
            Constantly upgrading my skills through self-paced learning, building side projects, and staying current with tech trends.
          </p>
          <div className="mb-8">
            {[
              "Advanced React Patterns & Performance",
              "TypeScript & JavaScript Mastery",
              "Firebase & Supabase Integration",
              "3D Animations with Three.js",
              "AI/ML for Web Developers",
            ].map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-2 text-sm text-muted-foreground mb-2"
              >
                ✅ {topic}
              </div>
            ))}
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
                Always striving to grow through curiosity, exploration, and hands-on development.
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
  );
}
