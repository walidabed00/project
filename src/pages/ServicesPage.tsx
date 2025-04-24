import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  const { translations } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: translations.services.all },
    { id: 'imaging', label: translations.services.imaging },
    { id: 'paramedical', label: translations.services.paramedical },
    { id: 'specialty', label: translations.services.specialty }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{translations.services.title}</h1>
          <p className="text-xl text-primary-100">{translations.services.subtitle}</p>
        </div>
      </div>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12 space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Imaging Services */}
            {(activeTab === 'all' || activeTab === 'imaging') && (
              <>
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
              </>
            )}

            {/* Paramedical Services */}
            {(activeTab === 'all' || activeTab === 'paramedical') && (
              <>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    Physiothérapie
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Traitements de rééducation et de réadaptation pour améliorer la mobilité et soulager la douleur.
                  </p>
                  <a 
                    href="#" 
                    className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    Soins Infirmiers
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Services de soins infirmiers spécialisés pour soutenir les patients avant et après les procédures d'imagerie.
                  </p>
                  <a 
                    href="#" 
                    className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    Consultations Diététiques
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Conseils nutritionnels personnalisés pour aider à la gestion des conditions médicales et à la préparation aux examens.
                  </p>
                  <a 
                    href="#" 
                    className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </>
            )}

            {/* Specialty Services */}
            {(activeTab === 'all' || activeTab === 'specialty') && (
              <>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    Imagerie Cardiaque
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Examens spécialisés pour évaluer la structure et la fonction du cœur et des vaisseaux sanguins.
                  </p>
                  <a 
                    href="#" 
                    className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    Imagerie Neurologique
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Examens avancés du cerveau et du système nerveux pour diagnostiquer les troubles neurologiques.
                  </p>
                  <a 
                    href="#" 
                    className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    Imagerie Oncologique
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Techniques d'imagerie spécifiques pour la détection, le staging et le suivi des cancers.
                  </p>
                  <a 
                    href="#" 
                    className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{translations.services.details.title}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations.services.details.procedure}</h3>
                <p className="text-gray-600">
                  Chaque procédure d'imagerie est réalisée par des techniciens qualifiés et interprétée par des radiologues expérimentés. Nos équipements modernes garantissent des images de haute qualité pour un diagnostic précis.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations.services.details.preparation}</h3>
                <p className="text-gray-600">
                  Les instructions de préparation sont fournies lors de la prise de rendez-vous. Certains examens peuvent nécessiter un jeûne, l'arrêt de certains médicaments ou d'autres préparations spécifiques.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations.services.details.duration}</h3>
                  <p className="text-gray-600">
                    La durée varie selon le type d'examen, généralement entre 15 minutes et 1 heure. Notre équipe vous informera du temps prévu pour votre procédure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations.services.details.results}</h3>
                  <p className="text-gray-600">
                    Les résultats sont généralement disponibles dans les 24 à 48 heures et sont envoyés directement à votre médecin référent. Des copies peuvent être fournies sur demande.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations.services.details.insurance}</h3>
                <p className="text-gray-600">
                  Nous acceptons la plupart des assurances médicales. Veuillez contacter notre service administratif pour vérifier la couverture spécifique de votre assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;