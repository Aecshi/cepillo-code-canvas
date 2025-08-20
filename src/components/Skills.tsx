import React, { useRef } from 'react';
import { Database, Globe } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Avatar from './Avatar';
import ParallaxEffect from './ParallaxEffect';

const Skills = () => {
  // Simplified skill categories
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Globe className="text-forest h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Backend",
      icon: <Database className="text-forest h-6 w-6" />,
      skills: ["PHP", "Python", "MySQL"]
    }
  ];
  
  // Define experiences array
  const experiences = [
    {
      name: 'Frontend Development',
      logo: '/images/react-logo.png',
      description: 'Creating responsive and visually appealing user interfaces with HTML, CSS and JavaScript'
    },
    {
      name: 'Backend Development',
      logo: '/images/node-logo.png',
      description: 'Building robust and scalable server-side applications with PHP and Python'
    },
    {
      name: 'Database Design',
      logo: '/images/database-logo.png',
      description: 'Designing efficient database schemas and optimizing MySQL queries'
    }
  ];

  // Create refs for scroll animations
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const codeRef = useRef(null);
  const isCodeInView = useInView(codeRef, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 bg-black z-0">
        <ParallaxEffect speed={-0.05}>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-forest/20 rounded-full blur-[100px]"></div>
        </ParallaxEffect>
        <ParallaxEffect speed={-0.07}>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-forest-dark/10 rounded-full blur-[80px]"></div>
        </ParallaxEffect>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-light/30 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-forest-light">Skills</span>
          </h2>
          <p className="text-lg text-codeCanvas-muted max-w-2xl mx-auto">
            Here are some of my Skills
          </p>
        </motion.div>

        {/* Skill Categories with parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });
            
            return (
              <ParallaxEffect key={index} speed={0.02 + (index * 0.01)}>
                <motion.div 
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="backdrop-blur-sm bg-codeCanvas-midnight/40 p-8 rounded-xl border border-forest/20 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-forest/10 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{category.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: isInView ? 0.3 + (idx * 0.1) : 0 }}
                        className="bg-codeCanvas-dark/50 py-3 px-4 rounded-lg border border-forest/10 hover:border-forest-light/30 hover:bg-codeCanvas-dark/70 transition-all duration-300"
                      >
                        <p className="text-cream text-base text-center">{skill}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </ParallaxEffect>
            );
          })}
        </div>

        {/* Development Focus Areas with parallax */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Development Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, amount: 0.2 });
              
              return (
                <ParallaxEffect key={index} speed={0.03 + (index * 0.01)}>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="bg-codeCanvas-midnight/50 backdrop-blur-sm p-6 rounded-xl border border-forest/20 shadow-lg group relative"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <Avatar size="sm" initials={experience.name.charAt(0)} />
                      <h4 className="text-lg font-medium text-cream">{experience.name}</h4>
                      <p className="text-sm text-codeCanvas-muted">{experience.description}</p>
                    </div>
                  </motion.div>
                </ParallaxEffect>
              );
            })}
          </div>
        </div>

        {/* Code section with parallax */}
        <ParallaxEffect speed={0.01}>
          <motion.div 
            ref={codeRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isCodeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-sm bg-codeCanvas-dark rounded-xl border border-forest/20 shadow-lg overflow-hidden"
          >
            <div className="bg-codeCanvas-midnight/80 px-4 py-2 flex items-center gap-2 border-b border-forest/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-forest-light"></div>
              <span className="text-xs text-codeCanvas-muted ml-2">skills.js</span>
            </div>
            <div className="p-5 font-mono text-sm">
              <div className="text-codeCanvas-muted">// Core skills</div>
              <div className="mt-2"><span className="text-green-400">const</span> <span className="text-blue-400">skills</span> <span className="text-white">= {`{`}</span></div>
              <div className="pl-6"><span className="text-purple-400">frontend</span>: <span className="text-amber-300">['HTML', 'CSS', 'JavaScript']</span><span className="text-white">,</span></div>
              <div className="pl-6"><span className="text-purple-400">backend</span>: <span className="text-amber-300">['PHP', 'Python', 'MySQL']</span></div>
              <div className="text-white">{`};`}</div>
            </div>
          </motion.div>
        </ParallaxEffect>
      </div>
    </section>
  );
};

export default Skills;
