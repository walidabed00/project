import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, translations } = useLanguage();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const headerClass = isScrolled 
    ? 'bg-white shadow-md text-gray-800' 
    : 'bg-transparent text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo />
          <div className="ml-3">
            <h1 className="font-bold text-lg md:text-xl leading-tight">
              <span className="block text-primary-600">CENTRE MEDICAL D'IMAGERIE</span>
              <span className="block text-sm md:text-base text-primary-500">ET PARAMEDICAL DU GOLF</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => `font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}
          >
            {translations.nav.home}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => `font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}
          >
            {translations.nav.about}
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => `font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}
          >
            {translations.nav.services}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : ''}`}
          >
            {translations.nav.contact}
          </NavLink>
          
          <div className="relative group">
            <button className="flex items-center font-medium hover:text-primary-500 transition-colors">
              <Globe size={16} className="mr-1" />
              {language === 'fr' ? 'Français' : 'English'}
              <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute right-0 w-36 mt-2 bg-white shadow-lg rounded-lg overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top">
              <button 
                onClick={() => changeLanguage('fr')}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'fr' ? 'bg-primary-50 text-primary-600' : ''}`}
              >
                Français
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'en' ? 'bg-primary-50 text-primary-600' : ''}`}
              >
                English
              </button>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full transition-colors"
          >
            {translations.nav.appointment}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white absolute w-full shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({isActive}) => `py-2 font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : 'text-gray-800'}`}
            onClick={closeMenu}
          >
            {translations.nav.home}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => `py-2 font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : 'text-gray-800'}`}
            onClick={closeMenu}
          >
            {translations.nav.about}
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => `py-2 font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : 'text-gray-800'}`}
            onClick={closeMenu}
          >
            {translations.nav.services}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => `py-2 font-medium hover:text-primary-500 transition-colors ${isActive ? 'text-primary-500' : 'text-gray-800'}`}
            onClick={closeMenu}
          >
            {translations.nav.contact}
          </NavLink>
          
          <div className="py-2 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">{translations.nav.selectLanguage}:</p>
            <button 
              onClick={() => {
                changeLanguage('fr');
                closeMenu();
              }}
              className={`block w-full text-left py-2 hover:bg-gray-100 ${language === 'fr' ? 'text-primary-600' : 'text-gray-800'}`}
            >
              Français
            </button>
            <button 
              onClick={() => {
                changeLanguage('en');
                closeMenu();
              }}
              className={`block w-full text-left py-2 hover:bg-gray-100 ${language === 'en' ? 'text-primary-600' : 'text-gray-800'}`}
            >
              English
            </button>
          </div>
          
          <Link 
            to="/contact" 
            className="bg-primary-600 hover:bg-primary-700 text-white text-center py-3 rounded-full transition-colors"
            onClick={closeMenu}
          >
            {translations.nav.appointment}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;