import React from 'react';

interface ScalysisLogoProps {
  className?: string;
  size?: number;
}

const ScalysisLogo: React.FC<ScalysisLogoProps> = ({ className = "", size = 32 }) => {
  return (
    <img 
      src="/scalysis-logo.svg"
      alt="Scalysis Logo"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default ScalysisLogo; 