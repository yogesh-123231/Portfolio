'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  className?: string;
}

export const GradientCard = ({ 
  icon, 
  title, 
  description, 
  linkText = "Learn More",
  className = ""
}: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-[24px] overflow-hidden ${className}`}
      style={{
        width: "320px",
        height: "400px",
        transformStyle: "preserve-3d",
        backgroundColor: "hsl(var(--card))",
        boxShadow: "0 -10px 100px 10px hsl(var(--primary) / 0.15), 0 0 10px 0 hsl(var(--border))",
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, hsl(var(--background) / 0.08) 0%, transparent 40%, transparent 80%, hsl(var(--background) / 0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--card)) 70%)",
        }}
        animate={{
          z: -1
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, hsl(var(--primary) / 0.4) -10%, transparent 70%),
            radial-gradient(ellipse at bottom left, hsl(var(--accent) / 0.4) -10%, transparent 70%)
          `,
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 50%, transparent 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 4px hsl(var(--primary) / 0.6)"
            : "0 0 15px 3px hsl(var(--primary) / 0.4)",
          opacity: isHovered ? 1 : 0.9,
          z: 0.5
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative flex flex-col h-full p-8 z-40"
        animate={{
          z: 2
        }}
      >
        {/* Icon */}
        {icon && (
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-secondary/20 backdrop-blur-sm"
            animate={{
              boxShadow: isHovered
                ? "0 8px 16px -2px hsl(var(--primary) / 0.3)"
                : "0 6px 12px -2px hsl(var(--primary) / 0.2)",
              z: isHovered ? 10 : 5,
              y: isHovered ? -2 : 0,
              rotateX: isHovered ? -rotation.x * 0.5 : 0,
              rotateY: isHovered ? -rotation.y * 0.5 : 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            {icon}
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          className="mb-auto"
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <motion.h3
            className="text-2xl font-medium text-foreground mb-3"
            style={{
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
            animate={{
              textShadow: isHovered ? "0 2px 4px hsl(var(--foreground) / 0.2)" : "none",
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-sm mb-6 text-muted-foreground"
            style={{
              lineHeight: 1.5,
              fontWeight: 350,
            }}
            animate={{
              textShadow: isHovered ? "0 1px 2px hsl(var(--foreground) / 0.1)" : "none",
            }}
          >
            {description}
          </motion.p>

          {/* Learn More link */}
          <motion.a
            href="#"
            className="inline-flex items-center text-primary text-sm font-medium group"
            whileHover={{
              filter: "drop-shadow(0 0 5px hsl(var(--primary) / 0.5))"
            }}
          >
            {linkText}
            <motion.svg
              className="ml-1 w-4 h-4"
              width="8"
              height="8"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: isHovered ? 4 : 0
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};