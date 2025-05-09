import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 40, 32, 0.85), rgba(3, 40, 32, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">{subtitle}</p>
        <Link
          to={buttonLink}
          className="bg-club-lime hover:bg-club-gold text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 inline-block"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};