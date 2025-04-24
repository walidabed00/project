import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Layout        from './components/Layout';
import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import ServicesPage  from './pages/ServicesPage';
import PrivacyPage   from './pages/PrivacyPage';
import ContactPage   from './pages/ContactPage';
import NotFoundPage  from './pages/NotFoundPage';

import { LanguageProvider } from './contexts/LanguageContext';

// ─────────────────────────────────────────────────────────
// TIP:  import.meta.env.BASE_URL === '/project/' after `vite build`
//       so you don’t have to hard-code the path:
const BASE = import.meta.env.BASE_URL;          // '/project/' in prod, '/' in dev
// ─────────────────────────────────────────────────────────

function App() {
  return (
    <LanguageProvider>
      <Router basename={BASE}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index          element={<HomePage />}     />
            <Route path="about"   element={<AboutPage />}    />
            <Route path="services"element={<ServicesPage />} />
            <Route path="privacy" element={<PrivacyPage />}  />
            <Route path="contact" element={<ContactPage />}  />
            <Route path="*"       element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
