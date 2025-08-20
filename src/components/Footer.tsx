
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-cream/10"></div>

      <div className="container mx-auto px-4 text-center">
        <a 
          href="#home"
          className="inline-flex items-center justify-center w-10 h-10 border border-cream/30 rounded-full mb-8 hover:bg-cream/10 transition-colors text-cream"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>

        <div className="max-w-lg mx-auto mb-6">
          <div className="mb-4">
            <a href="#home" className="text-2xl font-playfair font-medium text-cream">
              Cepillo
            </a>
          </div>
          <p className="text-cream/60 mb-6 text-sm">
            Full-Stack Developer with expertise in HTML, CSS, JavaScript, PHP, MySQL, and Python.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <a href="#home" className="text-cream/70 hover:text-cream transition-colors text-sm">Home</a>
          <a href="#about" className="text-cream/70 hover:text-cream transition-colors text-sm">About</a>
          <a href="#skills" className="text-cream/70 hover:text-cream transition-colors text-sm">Skills</a>
          <a href="#contact" className="text-cream/70 hover:text-cream transition-colors text-sm">Contact</a>
        </div>
        
        <div className="border-t border-cream/10 pt-6">
          <p className="text-cream/50 text-sm">
            &copy; {new Date().getFullYear()} Alfred Emil Cepillo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
