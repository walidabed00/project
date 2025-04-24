import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { translations } = useLanguage();
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{translations.privacy.title}</h1>
          <p className="text-xl text-primary-100">{translations.privacy.subtitle}</p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-gray-500 mb-4">{translations.privacy.lastUpdated}: {formattedDate}</p>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.intro}
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{translations.privacy.collection.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{translations.privacy.collection.personal}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.privacy.collection.personalDesc}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{translations.privacy.collection.medical}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.privacy.collection.medicalDesc}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{translations.privacy.collection.technical}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.privacy.collection.technicalDesc}
                </p>
              </div>
            </div>

            {/* Information Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{translations.privacy.use.title}</h2>
              
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.use.provide}
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.use.communicate}
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.use.improve}
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.use.comply}
                </li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{translations.privacy.sharing.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{translations.privacy.sharing.healthcare}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.privacy.sharing.healthcareDesc}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{translations.privacy.sharing.service}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.privacy.sharing.serviceDesc}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{translations.privacy.sharing.legal}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.privacy.sharing.legalDesc}
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{translations.privacy.rights.title}</h2>
              
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.rights.access}
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.rights.correction}
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.rights.deletion}
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.rights.restriction}
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.privacy.rights.portability}
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{translations.privacy.security.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.security.description}
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{translations.privacy.retention.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.retention.description}
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{translations.privacy.changes.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.changes.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{translations.privacy.contact.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {translations.privacy.contact.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                <div>
                  <p className="font-medium text-gray-800">Email:</p>
                  <p className="text-primary-600">privacy@cmipg.ci</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Téléphone:</p>
                  <p className="text-primary-600">+225 27 22 47 95 00</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Adresse:</p>
                  <p className="text-primary-600">Abidjan, Cocody Riviera Golf, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;