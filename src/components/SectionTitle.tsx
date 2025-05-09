import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-club-dark-green'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${
            light ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-20 bg-club-lime mt-4 ${
          center ? 'mx-auto' : ''
        }`}
      ></div>
    </div>
  );
};