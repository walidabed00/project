import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo color="white" />
              <div className="ml-3">
                <h3 className="font-bold text-lg leading-tight">
                  <span className="block">CENTRE MEDICAL D'IMAGERIE</span>
                  <span className="block text-sm text-primary-300">ET PARAMEDICAL DU GOLF</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              {translations.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">{translations.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">{translations.nav.home}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-300 transition-colors">{translations.nav.about}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">{translations.nav.services}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-300 transition-colors">{translations.nav.contact}</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary-300 transition-colors">{translations.nav.privacy}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">{translations.footer.services}</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">IRM</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">Scanner</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">Radiographie</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">Échographie</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">Mammographie</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-300">{translations.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">Abidjan, Cocody Riviera Golf, Côte d'Ivoire</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">+225 27 22 47 95 00</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">contact@cmipg.ci</span>
              </li>
              <li className="flex">
                <Clock size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>{translations.footer.openingHours}:</p>
                  <p>Lun - Ven: 8h00 - 18h00</p>
                  <p>Sam: 8h00 - 13h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CENTRE MEDICAL D'IMAGERIE ET PARAMEDICAL DU GOLF. {translations.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;