import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Code, User, Send, Download, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';
import ParallaxEffect from './ParallaxEffect';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
  // Create refs for scroll animations
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  
  const codeWindowRef = useRef(null);
  const isCodeWindowInView = useInView(codeWindowRef, { once: true, amount: 0.3 });
  
  const buttonsRef = useRef(null);
  const isButtonsInView = useInView(buttonsRef, { once: true, amount: 0.3 });

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 bg-black z-0">
        <ParallaxEffect speed={-0.1}>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-forest/10 rounded-full blur-[150px]"></div>
        </ParallaxEffect>
        <ParallaxEffect speed={-0.05}>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-forest-dark/10 rounded-full blur-[80px]"></div>
        </ParallaxEffect>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="md:col-span-7 space-y-4">
            <motion.div 
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-6" 
                initial={{ opacity: 0, x: -20 }}
                animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-px w-10 bg-forest-light opacity-50"></div>
                <h3 className="text-forest-light font-mono text-sm tracking-wide">WELCOME TO MY PORTFOLIO</h3>
              </motion.div>

              <div>
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold font-title"
                  initial={{ opacity: 0 }}
                  animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Hello, I Am 
                </motion.h1>
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold font-title text-forest mb-4"
                  initial={{ opacity: 0 }}
                  animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Alfred Emil
                </motion.h1>
              </div>

              <motion.p 
                className="text-xl text-codeCanvas-muted mb-8"
                initial={{ opacity: 0 }}
                animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Full-Stack Developer
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                ref={buttonsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isButtonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button 
                  className="bg-gradient-to-r from-forest to-forest-light hover:from-forest-light hover:to-forest text-white"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex gap-2 items-center text-cream/50"
                initial={{ opacity: 0 }}
                animate={isButtonsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <ArrowDown className="animate-bounce h-4 w-4 text-forest-light" />
                <span className="text-sm">Scroll to explore</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Visual elements */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              {/* Code window with parallax */}
              <ParallaxEffect speed={0.03}>
                <motion.div 
                  className="relative z-20"
                  ref={codeWindowRef}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isCodeWindowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Decorative code window */}
                  <div className="bg-codeCanvas-dark rounded-xl overflow-hidden border border-forest/20 shadow-lg">
                    <div className="bg-codeCanvas-midnight px-4 py-2 flex items-center gap-2 border-b border-forest/10">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs text-codeCanvas-muted font-mono">developer.js</div>
                    </div>
                    <div className="p-5">
                      <motion.pre 
                        className="text-sm font-mono"
                        initial={{ opacity: 0 }}
                        animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        <code>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            className="block"
                          >
                            <span className="text-pink-500">class</span> <span className="text-yellow-300">Developer</span> <span className="text-white">{"{"}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                            className="block pl-4"
                          >
                            <span className="text-purple-400">constructor</span><span className="text-white">() {"{"}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.9 }}
                            className="block pl-8"
                          >
                            <span className="text-white">this.</span><span className="text-blue-400">name</span> <span className="text-white">= </span><span className="text-green-400">'Alfred Emil Cepillo'</span><span className="text-white">;</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.0 }}
                            className="block pl-8"
                          >
                            <span className="text-white">this.</span><span className="text-blue-400">skills</span> <span className="text-white">= [</span><span className="text-green-400">'Web'</span><span className="text-white">, </span><span className="text-green-400">'Frontend'</span><span className="text-white">, </span><span className="text-green-400">'Backend'</span><span className="text-white">];</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.1 }}
                            className="block pl-4"
                          >
                            <span className="text-white">{"}"}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.2 }}
                            className="block pl-4"
                          >
                            <span className="text-purple-400">createPortfolio</span><span className="text-white">() {"{"}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.3 }}
                            className="block pl-8"
                          >
                            <span className="text-orange-400">return</span> <span className="text-green-400">'Creative solutions'</span><span className="text-white">;</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.4 }}
                            className="block pl-4"
                          >
                            <span className="text-white">{"}"}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isCodeWindowInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: 1.5 }}
                            className="block"
                          >
                            <span className="text-white">{"}"}</span>
                          </motion.div>
                        </code>
                      </motion.pre>
                    </div>
                  </div>
                </motion.div>
              </ParallaxEffect>

              {/* Decorative elements with parallax */}
              <ParallaxEffect speed={-0.08} className="absolute -top-10 -right-10 w-20 h-20 bg-forest/40 rounded-full blur-3xl z-10">
                <div className="w-full h-full"></div>
              </ParallaxEffect>
              <ParallaxEffect speed={-0.06} className="absolute -bottom-5 -left-5 w-20 h-20 bg-forest-dark/30 rounded-full blur-2xl z-10">
                <div className="w-full h-full"></div>
              </ParallaxEffect>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
