import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, UserCheck, BadgeAlert, Calendar, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import AppointmentForm from '../components/AppointmentForm';

const HomePage: React.FC = () => {
  const { translations, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/80"></div>
          <img 
            src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Advanced medical imaging" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {translations.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {translations.home.hero.subtitle}
          </p>
          <Link 
            to="/contact" 
            className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3 rounded-full inline-flex items-center transition-all transform hover:scale-105"
          >
            {translations.home.hero.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#welcome" className="text-white opacity-80 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {translations.home.welcome.title}
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              {translations.home.welcome.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-block p-4 bg-primary-100 text-primary-600 rounded-full mb-4">
                <UserCheck size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {translations.home.welcome.quality}
              </h3>
              <p className="text-gray-600">
                {translations.home.welcome.qualityText}
              </p>
            </div>
            
            <div className="bg-primary-600 text-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center transform translate-y-4">
              <div className="inline-block p-4 bg-white text-primary-600 rounded-full mb-4">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {translations.home.welcome.experts}
              </h3>
              <p className="text-primary-100">
                {translations.home.welcome.expertsText}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-block p-4 bg-primary-100 text-primary-600 rounded-full mb-4">
                <BadgeAlert size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {translations.home.welcome.technology}
              </h3>
              <p className="text-gray-600">
                {translations.home.welcome.technologyText}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {translations.home.services.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {translations.home.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="mri"
              title={translations.home.services.mri}
              description={translations.home.services.mriDesc}
              link="/services"
            />
            <ServiceCard 
              icon="ct"
              title={translations.home.services.ct}
              description={translations.home.services.ctDesc}
              link="/services"
            />
            <ServiceCard 
              icon="xray"
              title={translations.home.services.xray}
              description={translations.home.services.xrayDesc}
              link="/services"
            />
            <ServiceCard 
              icon="ultrasound"
              title={translations.home.services.ultrasound}
              description={translations.home.services.ultrasoundDesc}
              link="/services"
            />
            <ServiceCard 
              icon="mammography"
              title={translations.home.services.mammography}
              description={translations.home.services.mammographyDesc}
              link="/services"
            />
            <div className="flex items-center justify-center p-8 bg-primary-50 rounded-lg border-2 border-dashed border-primary-200">
              <Link 
                to="/services" 
                className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors"
              >
                {translations.home.services.more}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Banner */}
      <section className="py-20 bg-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Medical technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {language === 'fr' ? 
              'Technologie de Pointe pour des Diagnostics Précis' : 
              'Cutting-Edge Technology for Accurate Diagnostics'}
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {language === 'fr' ? 
              'Notre centre est équipé des technologies d\'imagerie médicale les plus avancées pour garantir des diagnostics précis et fiables.' : 
              'Our center is equipped with the most advanced medical imaging technologies to ensure accurate and reliable diagnostics.'}
          </p>
          <Link 
            to="/about" 
            className="bg-white text-primary-700 hover:bg-gray-100 font-medium px-8 py-3 rounded-full inline-flex items-center transition-all"
          >
            {language === 'fr' ? 'En savoir plus' : 'Learn More'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {translations.home.testimonials.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {translations.home.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              content={language === 'fr' ? 
                "Le personnel était extrêmement professionnel et attentionné. Ils ont expliqué chaque étape de la procédure, ce qui a grandement réduit mon anxiété." : 
                "The staff was extremely professional and caring. They explained each step of the procedure, which greatly reduced my anxiety."}
              author={language === 'fr' ? "Marie Kouassi" : "Marie Kouassi"}
              role={language === 'fr' ? "Patiente" : "Patient"}
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300"
              rating={5}
            />
            <TestimonialCard 
              content={language === 'fr' ? 
                "Les installations sont modernes et impeccablement propres. J'ai obtenu mes résultats rapidement, ce qui a permis à mon médecin de commencer le traitement sans délai." : 
                "The facilities are modern and spotlessly clean. I received my results quickly, which allowed my doctor to start treatment without delay."}
              author={language === 'fr' ? "Paul Adou" : "Paul Adou"}
              role={language === 'fr' ? "Patient" : "Patient"}
              image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
              rating={5}
            />
            <TestimonialCard 
              content={language === 'fr' ? 
                "Je suis médecin et j'envoie régulièrement mes patients à ce centre. La qualité des images et des rapports est toujours excellente, ce qui facilite grandement mes diagnostics." : 
                "I am a doctor and regularly send my patients to this center. The quality of the images and reports is always excellent, which greatly facilitates my diagnoses."}
              author={language === 'fr' ? "Dr. Sylvie Koffi" : "Dr. Sylvie Koffi"}
              role={language === 'fr' ? "Médecin Référent" : "Referring Physician"}
              image="https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=300"
              rating={5}
            />
          </div>
        </div>
      </section>
      
      {/* Appointment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {translations.home.appointment.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {translations.home.appointment.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <AppointmentForm />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="mr-3 text-primary-600" size={24} />
                  {language === 'fr' ? 'Horaires de Service' : 'Service Hours'}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>{language === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}</span>
                    <span>8:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{language === 'fr' ? 'Samedi' : 'Saturday'}</span>
                    <span>8:00 - 13:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{language === 'fr' ? 'Dimanche' : 'Sunday'}</span>
                    <span>{language === 'fr' ? 'Fermé' : 'Closed'}</span>
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start bg-primary-50 p-5 rounded-lg border-l-4 border-primary-500">
                  <Phone className="mr-3 text-primary-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">{translations.home.appointment.call}</h4>
                    <p className="text-gray-600">+225 27 22 47 95 00</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-primary-50 p-5 rounded-lg border-l-4 border-primary-500">
                  <MapPin className="mr-3 text-primary-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">{translations.home.appointment.visit}</h4>
                    <p className="text-gray-600">Abidjan, Cocody Riviera Golf, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {translations.home.partners.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {translations.home.partners.subtitle}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Placeholder logos - would normally be real partner logos */}
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-400">Partner 1</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-400">Partner 2</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-400">Partner 3</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-400">Partner 4</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-400">Partner 5</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;