// src/components/ui/footer.jsx

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border mx-10 py-6 text-muted-foreground text-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Yogesh Dumane. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a href="https://github.com/yogesh-123231" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/yogeshdumane/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 hover:text-white transition" />
          </a>
          <a href="mailto:yogeshdumane987@gmail.com">
            <Mail className="h-5 w-5 hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
