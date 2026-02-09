import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Sunshine Awning Company Logo"
    >
      {/* Sun Body */}
      <circle cx="50" cy="50" r="30" fill="#f59e0b" />
      
      {/* Sun Rays */}
      <path d="M50 8V15M50 85V92M8 50H15M85 50H92M20.3 20.3L25.3 25.3M74.7 74.7L79.7 79.7M20.3 79.7L25.3 74.7M74.7 20.3L79.7 25.3" 
            stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
            
      {/* Sunglasses Frame */}
      <path d="M26 42C26 38 30 38 36 38C42 38 45 42 45 42H55C55 42 58 38 64 38C70 38 74 38 74 42C74 52 64 54 64 54C58 54 55 48 55 48H45C45 48 42 54 36 54C30 54 26 52 26 42Z" fill="#111827" />
      
      {/* Sunglasses Arms */}
      <path d="M26 44H18M74 44H82" stroke="#111827" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Reflection on glasses */}
      <path d="M29 41L34 41M67 41L72 41" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      
      {/* Smile */}
      <path d="M38 68Q50 78 62 68" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};