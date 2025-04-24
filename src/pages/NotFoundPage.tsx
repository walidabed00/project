import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const NotFoundPage: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          {translations.notFound.title}
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-md mx-auto">
          {translations.notFound.message}
        </p>
        <Link 
          to="/" 
          className="mt-8 inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
        >
          {translations.notFound.button}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;