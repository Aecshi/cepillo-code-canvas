import React from 'react';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  initials?: string;
  className?: string;
  imageUrl?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  size = 'md', 
  initials = 'AC',
  className = '',
  imageUrl
}) => {
  // Size variants
  const sizeClasses = {
    sm: 'w-16 h-16 text-xl',
    md: 'w-24 h-24 text-2xl',
    lg: 'w-32 h-32 text-4xl',
    xl: 'w-40 h-40 text-5xl'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-light rounded-full blur opacity-30 animate-pulse"></div>
      
      {/* Border with gradient */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-forest to-forest-light p-1">
        {/* Dark inner circle with image or initials */}
        <div className="w-full h-full rounded-full bg-codeCanvas-dark flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={initials} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-forest to-forest-light font-title">
              {initials}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar; 