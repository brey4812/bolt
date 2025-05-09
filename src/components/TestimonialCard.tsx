import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  avatarUrl?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  avatarUrl,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
      <div className="flex-grow">
        <svg
          className="w-8 h-8 text-club-lime mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-600 italic mb-6">{quote}</p>
      </div>
      <div className="flex items-center">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-semibold text-club-dark-green">{author}</h4>
          {position && <p className="text-sm text-gray-500">{position}</p>}
        </div>
      </div>
    </div>
  );
};