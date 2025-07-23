import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

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
      className="max-h lg:max-h-screen bg-black/[0.96] relative overflow-hidden "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 relative z-10">
        <div className="flex flex-col lg:flex-row h-screen items-center">
          {/* Left content - Your original intro text */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94], // custom bezier easing for a smooth ease-out
            }}
            className="flex-1 p-4 sm:p-6 lg:p-8 relative z-10 flex flex-col justify-center order-2 lg:order-1 min-h-0 mt-4 lg:mt-0"
          >
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left max-w-none lg:max-w-2xl">
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-2 bg-neutral-900 rounded-full text-xs sm:text-sm font-medium text-white border border-border">
                  👋 Hey there, welcome!
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-orbitron">
                <span className="text-white">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                  Yogesh Dumane 
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground">
  <Typewriter
    words={['A Web Developer']}
    loop={0} // 0 = infinite loop
    cursor
    cursorStyle="_"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                I specialize in building fast, responsive, and beautiful websites using the latest tech—React, Tailwind, Animations, and 3D models.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start w-full ">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-primary text-sm sm:text-base w-full sm:w-auto"
                  onClick={scrollToProjects}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary text-sm sm:text-base w-full sm:w-auto"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Hire Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 pt-3 justify-center lg:justify-start">
                <a href="https://github.com/yogesh-123231" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/yogeshdumane/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>

                <a href="mailto:yogeshdumane987@gmail.com">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right content - 3D Spline Scene */}
          <div className="flex-1 relative animate-scale-in h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full order-1 lg:order-2 mb-6 lg:mb-0 flex-shrink-0">
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