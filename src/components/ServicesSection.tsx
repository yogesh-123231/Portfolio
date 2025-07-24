import { motion } from 'framer-motion';
import { MonitorPlay, Paintbrush2, Smartphone, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'Custom Web Solutions',
    description: 'From high-converting landing pages to elegant portfolios and dynamic dashboards, I design and develop responsive, user-focused websites tailored to your needs.',
    icon: MonitorPlay,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    color: 'text-blue-500',
    features: [ 
    'Responsive Design',
    'Modern UI/UX',
    'Fast Loading & SEO Friendly',
    'Landing Pages, Portfolios & Dashboards'
  ,],
    deliveryTime: '5-7 days',
  },
  {
      title: 'From Figma to Functional Website',
      description: 'Transform your static Figma or Adobe XD designs into clean, production-ready code with pixel-perfect precision and responsiveness.',
      icon: Smartphone,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      color: 'text-emerald-500',
      features: ['Pixel-Perfect Implementation',
        'Clean, Maintainable Code',
        'Figma to React/Tailwind',
        'Responsive & Accessible'],
        deliveryTime: '6-8 days',
    },
    {
      title: '3D & Animation Websites',
      description: 'Immersive websites with cutting-edge 3D elements and smooth, eye-catching animations that captivate your audience.',
      icon: Paintbrush2,
      gradient: 'from-purple-500/20 to-pink-500/20',
      color: 'text-purple-500',
      features: ['3D Elements', 'Smooth Animations', 'Interactive UI', 'Dark Mode Toggle'],
      deliveryTime: '9-10 days',
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 200,
    },
  },
};

const shimmerVariants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="Services" className="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Premium Services</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold font-heading bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 leading-tight">
            What I Offer
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming your ideas into <span className="text-primary font-semibold">impactful digital experiences</span> with cutting-edge technology and creative design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Card Container */}
                <div className={`
                  relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 
                  shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden
                  ${isHovered ? 'bg-card/80 border-primary/30' : ''}
                `}>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      variants={shimmerVariants}
                      initial="initial"
                      animate={isHovered ? "animate" : "initial"}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    />
                  </div>
                  
                  {/* Gradient Background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 rounded-3xl
                  `} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="flex justify-center mb-6"
                    >
                      <div className={`
                        relative p-4 rounded-2xl bg-gradient-to-br from-card to-card/50 
                        border border-border/50 shadow-lg group-hover:shadow-glow transition-all duration-500
                      `}>
                        <Icon className={`h-8 w-8 ${service.color} transition-colors duration-300`} />
                        
                        {/* Icon Glow Effect */}
                        <div className={`
                          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                          transition-opacity duration-500 ${service.gradient}
                        `} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + featureIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className={`w-4 h-4 ${service.color} flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Timeline */}
                    <div className="flex justify-between items-center pt-4 border-t border-border/50">
                      <div>
                        <div className="text-sm text-muted-foreground">Timeline:</div>
                        <div className="text-sm font-semibold text-foreground">{service.deliveryTime}</div>
                      </div>
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        className="text-sm text-primary font-semibold cursor-pointer scroll-smooth"
                      >
                       Start Your Project →
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-full blur-xl`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA */}
        
      </div>
    </section>
  );
}