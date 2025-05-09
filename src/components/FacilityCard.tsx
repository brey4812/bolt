import React from 'react';
import { Link } from 'react-router-dom';

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  description,
  image,
  link,
  delay = 0,
}) => {
  return (
    <div 
      className="card group h-full" 
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeIn 0.5s ease-in-out forwards',
        opacity: 0
      }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-club-dark-green to-transparent opacity-60"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-club-green font-medium hover:text-club-lime transition-colors"
        >
          Descubrir más
          <svg
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};