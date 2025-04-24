import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Heart, AlertCircle, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{translations.about.title}</h1>
          <p className="text-xl text-primary-100">{translations.about.subtitle}</p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{translations.about.history.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {translations.about.history.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <span className="text-3xl font-bold text-primary-600 block">2015</span>
                  <span className="text-gray-600">Founded</span>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <span className="text-3xl font-bold text-primary-600 block">10+</span>
                  <span className="text-gray-600">Specialists</span>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <span className="text-3xl font-bold text-primary-600 block">5000+</span>
                  <span className="text-gray-600">Patients/Year</span>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <span className="text-3xl font-bold text-primary-600 block">10+</span>
                  <span className="text-gray-600">Services</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Medical facility" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{translations.about.mission.title}</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {translations.about.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">{translations.about.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {translations.about.values.excellence}
              </h3>
              <p className="text-gray-600">
                {translations.about.values.excellenceDesc}
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-green-100 text-green-600 rounded-full mb-4">
                <AlertCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {translations.about.values.integrity}
              </h3>
              <p className="text-gray-600">
                {translations.about.values.integrityDesc}
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-red-100 text-red-600 rounded-full mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {translations.about.values.compassion}
              </h3>
              <p className="text-gray-600">
                {translations.about.values.compassionDesc}
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-block p-4 bg-purple-100 text-purple-600 rounded-full mb-4">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {translations.about.values.innovation}
              </h3>
              <p className="text-gray-600">
                {translations.about.values.innovationDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{translations.about.team.title}</h2>
            <p className="text-gray-600 text-lg">{translations.about.team.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Dr. Kouamé Laurent" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Kouamé Laurent</h3>
                <p className="text-primary-600 mb-4">Chef de Service Radiologie</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{translations.about.team.experience}:</span>
                    <span className="font-medium">15 ans</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{translations.about.team.qualifications}:</span>
                    <span className="font-medium">MD, PhD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{translations.about.team.specialties}:</span>
                    <span className="font-medium">IRM, Scanner</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Dr. Adama Diallo" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Adama Diallo</h3>
                <p className="text-primary-600 mb-4">Radiologue Senior</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{translations.about.team.experience}:</span>
                    <span className="font-medium">12 ans</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{translations.about.team.qualifications}:</span>
                    <span className="font-medium">MD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{translations.about.team.specialties}:</span>
                    <span className="font-medium">Échographie, Mammographie</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Dr. Marie Koné" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Marie Koné</h3>
                <p className="text-primary-600 mb-4">Radiologue</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{translations.about.team.experience}:</span>
                    <span className="font-medium">8 ans</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{translations.about.team.qualifications}:</span>
                    <span className="font-medium">MD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{translations.about.team.specialties}:</span>
                    <span className="font-medium">Radiographie, Scanner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{translations.about.facility.title}</h2>
              <p className="text-gray-600 mb-6">
                {translations.about.facility.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.about.facility.equipment}
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.about.facility.comfort}
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.about.facility.accessibility}
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {translations.about.facility.parking}
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Medical facility reception" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="MRI equipment" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/7088498/pexels-photo-7088498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Waiting area" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4046996/pexels-photo-4046996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Medical staff" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;