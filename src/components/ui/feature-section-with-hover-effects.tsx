import { cn } from "@/lib/utils";
import {
  Terminal,
  Zap,
  DollarSign,
  Cloud,
  Route,
  HelpCircle,
  Settings,
  Heart,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive user interfaces with cutting-edge technologies and frameworks.",
      icon: <Terminal />,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3']
    },
    {
      title: "Backend Development",
      description:
        "Creating robust server-side applications and APIs with scalable architecture.",
      icon: <Zap />,
      technologies: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications in cloud environments with modern DevOps practices.",
      icon: <Cloud />,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Railway']
    },
    {
      title: "Tools & Others",
      description: "Utilizing essential development tools and technologies to streamline workflows.",
      icon: <Settings />,
      technologies: ['Git', 'Figma', 'VS Code', 'Postman', 'Jira', 'Linux']
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  technologies,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  technologies: string[];
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l border-border",
        index < 4 && "lg:border-b border-border"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 mb-4">
        {description}
      </p>
      
      {/* Technology badges */}
      <div className="relative z-10 px-10">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md group-hover/feature:bg-secondary/80 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};