import React from 'react';
import { Link } from 'react-router-dom';
import { ScanFace, CopyCheck, Scan, Activity, AlarmClock } from 'lucide-react';

interface ServiceCardProps {
  icon: 'mri' | 'ct' | 'xray' | 'ultrasound' | 'mammography';
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  const getIcon = () => {
    switch (icon) {
      case 'mri':
        return <ScanFace size={28} />;
      case 'ct':
        return <Scan size={28} />;
      case 'xray':
        return <CopyCheck size={28} />;
      case 'ultrasound':
        return <Activity size={28} />;
      case 'mammography':
        return <AlarmClock size={28} />;
      default:
        return <Scan size={28} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <Link 
        to={link} 
        className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center"
      >
        En savoir plus
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;