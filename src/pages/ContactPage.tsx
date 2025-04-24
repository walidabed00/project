import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{translations.contact.title}</h1>
          <p className="text-xl text-primary-100">{translations.contact.subtitle}</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {translations.contact.form.subject}
                </h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {translations.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {translations.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {translations.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {translations.contact.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {translations.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    {translations.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {translations.contact.info.title}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-primary-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{translations.contact.info.address}</h3>
                      <p className="text-gray-600">Abidjan, Cocody Riviera Golf,<br />Côte d'Ivoire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 text-primary-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{translations.contact.info.phone}</h3>
                      <p className="text-gray-600">+225 27 22 47 95 00</p>
                      <p className="text-gray-600">+225 07 07 47 95 00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 text-primary-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{translations.contact.info.email}</h3>
                      <p className="text-gray-600">contact@cmipg.ci</p>
                      <p className="text-gray-600">info@cmipg.ci</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-4 text-primary-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{translations.contact.info.hours}</h3>
                      <p className="text-gray-600">Lun - Ven: 8h00 - 18h00</p>
                      <p className="text-gray-600">Sam: 8h00 - 13h00</p>
                      <p className="text-gray-600">Dim: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-600 text-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">
                  {translations.contact.emergency.title}
                </h2>
                <p className="mb-6">
                  {translations.contact.emergency.description}
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Phone className="mr-3" size={20} />
                    <span className="font-semibold">+225 07 88 88 88 88</span>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-white font-medium mt-2 hover:text-primary-100 transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Emplacement</h2>
            <p className="text-gray-600 text-lg">Visitez notre centre moderne à Abidjan</p>
          </div>
          
          <div className="bg-white p-2 rounded-lg shadow-sm">
            {/* Placeholder for Google Maps - In a real project, use an actual Google Maps embed */}
            <div className="w-full h-96 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-600 text-center">
                Google Maps Embed<br />
                <span className="text-sm">Abidjan, Cocody Riviera Golf, Côte d'Ivoire</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {translations.contact.faq.title}
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {translations.contact.faq.q1}
                </h3>
                <p className="text-gray-600">
                  {translations.contact.faq.a1}
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {translations.contact.faq.q2}
                </h3>
                <p className="text-gray-600">
                  {translations.contact.faq.a2}
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {translations.contact.faq.q3}
                </h3>
                <p className="text-gray-600">
                  {translations.contact.faq.a3}
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {translations.contact.faq.q4}
                </h3>
                <p className="text-gray-600">
                  {translations.contact.faq.a4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;