import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true, amount: 0.1 }} // triggers when 30% is in view
  transition={{
    duration: 1.2,
    ease: [0.25, 0.46, 0.45, 0.94],
  }}
  className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a creative web developer with 1+ years of experience turning
            bold ideas into sleek, interactive digital experiences — from
            responsive UIs to 3D animations and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What began as a fascination with HTML & CSS has evolved into a
                passion for building immersive web experiences. From responsive
                layouts to animated interfaces and 3D visuals, I love turning
                ideas into elegant, user-focused designs using tools like React
                and modern UI frameworks. Driven by curiosity, I’m constantly
                exploring new ways to push the boundaries of front-end
                development.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bento Grid */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-card border-border hover:shadow-primary transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                24h
              </div>
              <div className="text-muted-foreground">Avg. Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-muted-foreground">Tools & Frameworks</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-muted-foreground">Personal Projects</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
