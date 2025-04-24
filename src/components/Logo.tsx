import React from 'react';
import { Stethoscope } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'currentColor' }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full">
      <Stethoscope size={20} color={color} />
    </div>
  );
};

export default Logo;