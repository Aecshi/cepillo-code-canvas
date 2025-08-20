import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Map, GraduationCap, Code2, Monitor, Award, Clock, Star, Cpu, LinkIcon } from 'lucide-react';
import Avatar from './Avatar';
import ParallaxEffect from './ParallaxEffect';
import { motion, useInView } from 'framer-motion';

const About = () => {
  // Create refs for scroll animations
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const terminalRef = useRef(null);
  const isTerminalInView = useInView(terminalRef, { once: true, amount: 0.3 });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const educationRef = useRef(null);
  const isEducationInView = useInView(educationRef, { once: true, amount: 0.3 });

  const profileRef = useRef(null);
  const isProfileInView = useInView(profileRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 relative">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 bg-black z-0">
        <ParallaxEffect speed={-0.05}>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-forest/20 rounded-full blur-[100px]"></div>
        </ParallaxEffect>
        <ParallaxEffect speed={-0.03}>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-forest-dark/10 rounded-full blur-[80px]"></div>
        </ParallaxEffect>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-light/20 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block font-title">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-forest-light">Me</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:w-full space-y-7">
            {/* Terminal-like card with parallax */}
            <ParallaxEffect speed={0.03}>
              <motion.div 
                ref={terminalRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isTerminalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden bg-codeCanvas-dark border border-forest/20 shadow-lg hover:shadow-forest/20 transition-all duration-300"
              >
                <div className="bg-codeCanvas-midnight px-4 py-2 flex items-center gap-2 border-b border-forest/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-forest-light"></div>
                </div>
                <div className="p-6">
                  <motion.pre 
                    className="font-mono text-sm text-cream/80"
                    initial={{ opacity: 0 }}
                    animate={isTerminalInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <code>
                      <span className="text-green-400">const</span> <span className="text-blue-400">aboutMe</span> <span className="text-white">=</span> <span className="text-yellow-400">{"{"}</span><br/>
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isTerminalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="block"
                      >
                        <span className="pl-4 text-teal-400">name</span><span className="text-white">:</span> <span className="text-amber-300">'Alfred Emil Cepillo'</span><span className="text-white">,</span>
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isTerminalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="block"
                      >
                        <span className="pl-4 text-teal-400">role</span><span className="text-white">:</span> <span className="text-amber-300">'Full-Stack Developer'</span><span className="text-white">,</span>
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isTerminalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="block"
                      >
                        <span className="pl-4 text-teal-400">passion</span><span className="text-white">:</span> <span className="text-amber-300">'Building stuff'</span><span className="text-white">,</span>
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isTerminalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        className="block"
                      >
                        <span className="pl-4 text-teal-400">education</span><span className="text-white">:</span> <span className="text-amber-300">'Bachelor of Science in Information Systems'</span>
                      </motion.span>
                      <span className="text-yellow-400">{"}"}</span><span className="text-white">;</span>
                    </code>
                  </motion.pre>
                </div>
              </motion.div>
            </ParallaxEffect>

            {/* Stats grid with parallax */}
            <div className="grid grid-cols-2 gap-4" ref={statsRef}>
              <ParallaxEffect speed={0.05}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-sm bg-codeCanvas-midnight/30 p-5 rounded-xl border border-forest/10 hover:border-forest/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/10 text-center"
                >
                  <Monitor className="mx-auto text-forest h-6 w-6 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Frontend</h3>
                  <p className="text-codeCanvas-muted text-sm">HTML, CSS, JS</p>
                </motion.div>
              </ParallaxEffect>
              
              <ParallaxEffect speed={0.07}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="backdrop-blur-sm bg-codeCanvas-midnight/30 p-5 rounded-xl border border-forest/10 hover:border-forest/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/10 text-center"
                >
                  <Cpu className="mx-auto text-forest h-6 w-6 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Backend</h3>
                  <p className="text-codeCanvas-muted text-sm">PHP, Python</p>
                </motion.div>
              </ParallaxEffect>
            </div>
            
            {/* Education card with parallax */}
            <ParallaxEffect speed={0.02}>
              <motion.div
                ref={educationRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isEducationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-sm bg-codeCanvas-midnight/30 p-6 rounded-xl border-l-4 border border-forest/30 hover:border-forest/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-forest/20 to-forest-dark/10 rounded-lg">
                    <GraduationCap className="text-forest-light h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-codeCanvas-muted text-sm">Bachelor of Science in Information Systems</p>
                  </div>
                </div>
                <p className="text-cream/70 text-sm mt-4">
                  Currently, I'm a third-year student at <a href="#" className="text-forest-light hover:underline">Clarendon College</a> in Roxas, Oriental Mindoro, Philippines.
                </p>
              </motion.div>
            </ParallaxEffect>
          </div>
          
          <div className="lg:w-full relative">
            <ParallaxEffect speed={0.04}>
              <motion.div 
                ref={profileRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isProfileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="group perspective-1000"
              >
                <div className="relative transform-style-3d transition-all duration-500 transform group-hover:-rotate-y-6">
                  <div className="backface-hidden bg-codeCanvas-midnight/30 p-10 rounded-2xl border border-forest/10 shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isProfileInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <Avatar 
                          size="lg" 
                          className="mx-auto" 
                          imageUrl="/images/pfp.jpg"
                        />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl font-semibold mt-6 mb-2 font-title"
                        initial={{ opacity: 0 }}
                        animate={isProfileInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        Alfred Emil Cepillo
                      </motion.h3>
                      <motion.p 
                        className="text-codeCanvas-muted mb-8"
                        initial={{ opacity: 0 }}
                        animate={isProfileInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        Full-Stack Developer
                      </motion.p>
                      
                      <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {["Web Development", "UI/UX Design", "Database Design"].map((skill, index) => (
                          <motion.span 
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isProfileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                            className="px-3 py-1.5 bg-forest/10 text-forest-light text-xs rounded-full border border-forest/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="max-w-md mx-auto p-5 backdrop-blur-sm bg-codeCanvas-dark/50 rounded-xl border border-forest/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isProfileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        <p className="text-codeCanvas-muted italic">
                          "Passionate about tech, still learning the ropes."
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-forest/5 to-forest-light/5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </ParallaxEffect>
            
            {/* Decorative elements with parallax */}
            <ParallaxEffect speed={-0.05} className="absolute w-full h-full top-6 -right-6 border-2 border-forest/10 rounded-2xl -z-10 opacity-30">
              <div className="w-full h-full"></div>
            </ParallaxEffect>
            <ParallaxEffect speed={-0.08} className="absolute -bottom-3 -right-3 w-20 h-20 bg-forest/30 rounded-full blur-2xl">
              <div className="w-full h-full"></div>
            </ParallaxEffect>
            <ParallaxEffect speed={-0.1} className="absolute -top-3 -left-3 w-20 h-20 bg-forest-dark/20 rounded-full blur-2xl">
              <div className="w-full h-full"></div>
            </ParallaxEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
