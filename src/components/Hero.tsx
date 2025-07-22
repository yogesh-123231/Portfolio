import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-black/[0.96] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="flex h-screen items-center">
          {/* Left content - Your original intro text */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground border border-border">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                  Yogesh Dumane
                </span>
              </h1>

              <h2 className="text-2xl font-bold lg:text-3xl text-muted-foreground">
                Full Stack Developer
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I craft exceptional digital experiences with modern
                technologies. Passionate about creating scalable web
                applications that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-primary"
                  onClick={scrollToProjects}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right content - 3D Spline Scene */}
          <div className="flex-1 relative animate-scale-in h-[500px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-primary"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div> */}
    </section>
  );
}
