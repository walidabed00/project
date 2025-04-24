import React from 'react';
import { Mail as MailIcon } from 'lucide-react';

const Mail: React.FC<React.ComponentProps<typeof MailIcon>> = (props) => {
  return <MailIcon {...props} />;
};

export default Mail;