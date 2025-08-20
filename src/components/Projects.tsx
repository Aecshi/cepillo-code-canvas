import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import ParallaxEffect from './ParallaxEffect';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';

// Updated projects data with actual projects
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React, TypeScript and TailwindCSS featuring a clean, modern design.",
    image: "/images/projects/portfolio.png",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "#",
    technologies: ["React", "TypeScript", "TailwindCSS"]
  },
  {
    title: "Emiliano Restaurant POS",
    description: "Point of Sale system for Emiliano Restaurant with order management, inventory tracking, and sales reporting features.",
    image: "/images/projects/emiliano.png",
    githubUrl: "https://github.com/yourusername/emiliano-pos",
    liveUrl: "#",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "BST Printing Inventory System",
    description: "Comprehensive inventory management system for BST Printing with stock tracking, supplier management, and automated reordering.",
    image: "/images/projects/bst.png",
    githubUrl: "https://github.com/yourusername/bst-inventory",
    liveUrl: "#",
    technologies: ["React", "Express", "PostgreSQL"]
  },
  {
    title: "Kapitan Cafe POS",
    description: "Modern POS system for Kapitan Cafe with menu management, table service tracking, and customer loyalty features.",
    image: "/images/projects/kapitan_cafe.png", 
    githubUrl: "https://github.com/yourusername/kapitan-pos",
    liveUrl: "#",
    technologies: ["React", "Firebase", "TailwindCSS"]
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create refs for scroll animations
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  
  // Create container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 bg-black z-0">
        <ParallaxEffect speed={-0.05}>
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-forest/20 rounded-full blur-[100px]"></div>
        </ParallaxEffect>
        <ParallaxEffect speed={-0.08}>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-forest-dark/10 rounded-full blur-[80px]"></div>
        </ParallaxEffect>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-light/30 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            title="Projects"
            subtitle="My Recent Work"
            description="Here are some of the projects I've worked on. Will be updated soon!"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-forest/10 bg-codeCanvas-midnight/60 backdrop-blur-sm hover:border-forest/40 transition-all duration-300",
                "flex flex-col"
              )}
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-codeCanvas-midnight to-transparent z-10 opacity-50 group-hover:opacity-30 transition-opacity"></div>
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <motion.div 
                className="p-6 flex flex-col flex-grow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2 text-forest-light">{project.title}</h3>
                <p className="text-codeCanvas-muted mb-4 text-sm flex-grow">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 