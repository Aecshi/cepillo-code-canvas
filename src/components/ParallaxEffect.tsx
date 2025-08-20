import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxEffectProps {
  children: ReactNode;
  speed?: number; // Speed multiplier (negative values move in opposite direction)
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({
  children,
  speed = 0.1,
  className = '',
  direction = 'vertical'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const initialOffsetRef = useRef<number>(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = element.getBoundingClientRect().top + scrollPosition;
      
      if (!initialOffsetRef.current) {
        initialOffsetRef.current = elementPosition;
      }
      
      // Calculate the distance scrolled relative to the element
      const relativeScroll = scrollPosition - initialOffsetRef.current;
      
      // Apply the parallax effect
      if (direction === 'vertical') {
        element.style.transform = `translateY(${relativeScroll * speed}px)`;
      } else {
        element.style.transform = `translateX(${relativeScroll * speed}px)`;
      }
    };

    // Initial position
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxEffect; 