import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Moon, Sun, Download, Menu, X,
  Home, User, Code, Briefcase, GraduationCap, Mail,
  Code2,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Tubelight Navbar Component
interface NavItem {
  name: string;
  id: string;
  icon: any;
}

interface TubelightNavProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (tabName: string, sectionId: string) => void;
  className?: string;
}

function TubelightNav({ items, activeTab, onTabChange, className }: TubelightNavProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-1 bg-background/20 border border-border/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;

        return (
          <button
            key={item.name}
            onClick={() => onTabChange(item.name, item.id)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
              "text-foreground/70 hover:text-primary",
              isActive && "text-primary",
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            <span className="md:hidden">
              <Icon size={18} strokeWidth={2.5} />
            </span>
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                  <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </button>
        );
      })}
    </div>
  );
}

// Main Navbar Component
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleTabChange = (tabName: string, sectionId: string) => {
    setActiveTab(tabName);
    scrollToSection(sectionId);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: "Home", id: "hero", icon: Home },
    { name: "About", id: "about", icon: User },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Services", id: "Services", icon: Code2 },
    { name: "Projects", id: "projects", icon: Briefcase },
    { name: "Education", id: "education", icon: GraduationCap },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <>
      {/* Main Navbar Container */}
      <nav
        className={`fixed overflow-hidden top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-primary mr-2 sm:mr-4 md:mr-40 bg-clip-text text-transparent flex-shrink-0">
              Portfolio
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-center tracking-wider">
              <TubelightNav
                items={navItems}
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="border-border hover:bg-secondary w-8 h-8 sm:w-auto sm:h-auto p-0 sm:px-3 sm:py-2"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium text-xs sm:text-sm px-2 sm:px-3"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = new URL('/src/assets/YogeshDumane_Resume.pdf', import.meta.url);
                  link.download = "YogeshDumane_Resume.pdf";
                  link.click();
                }}
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Tubelight Navigation */}
      <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6 px-4">
        <TubelightNav
          items={navItems}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>
    </>
  );
}