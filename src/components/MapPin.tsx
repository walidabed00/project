import React from 'react';
import { MapPin as MapPinIcon } from 'lucide-react';

const MapPin: React.FC<React.ComponentProps<typeof MapPinIcon>> = (props) => {
  return <MapPinIcon {...props} />;
};

export default MapPin;