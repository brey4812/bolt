import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = 'h-screen',
}) => {
  return (
    <div
      className={`relative ${height} flex items-center justify-center`}
      style={{
        backgroundImage: `linear-gradient(rgba(3, 40, 32, 0.7), rgba(3, 40, 32, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 fade-in">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl mx-auto fade-in animation-delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};