import React from 'react';
import { Phone as PhoneIcon } from 'lucide-react';

const Phone: React.FC<React.ComponentProps<typeof PhoneIcon>> = (props) => {
  return <PhoneIcon {...props} />;
};

export default Phone;