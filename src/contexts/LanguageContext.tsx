import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { enTranslations } from '../locales/en';
import { frTranslations } from '../locales/fr';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  translations: typeof enTranslations | typeof frTranslations;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Default to French as we're in Ivory Coast
  const [language, setLanguage] = useState<Language>('fr');
  const [translations, setTranslations] = useState(frTranslations);

  useEffect(() => {
    // Set translations based on language
    if (language === 'en') {
      setTranslations(enTranslations);
    } else {
      setTranslations(frTranslations);
    }

    // Update html lang attribute
    document.documentElement.lang = language;
    
    // Update page title if there's a data-default attribute
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.textContent = language === 'fr' 
        ? 'Centre Médical d\'Imagerie et Paramédical du Golf' 
        : 'Medical Imaging and Paramedical Center of Golf';
    }
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};