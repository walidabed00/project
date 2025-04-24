import React from 'react';
import { Clock as ClockIcon } from 'lucide-react';

const Clock: React.FC<React.ComponentProps<typeof ClockIcon>> = (props) => {
  return <ClockIcon {...props} />;
};

export default Clock;