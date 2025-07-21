import React, { useState, useEffect } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './components/Layout';
import Header from './components/Header';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import CodeEntry from './components/CodeEntry';
import { useGuestCode } from './hooks/useGuestCode';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { isValidCode, isLoading, validateAndSetCode } = useGuestCode();

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      once: true,
      offset: 80,
      delay: 0
    });
  }, []);

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const handleCodeValid = (code: string) => {
    validateAndSetCode(code);
  };

  // Mostrar loading mientras se valida el código
  if (isLoading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-muted">Verificando código de invitado...</p>
        </div>
      </div>
    );
  }

  // Mostrar landing page si el código no es válido
  if (isValidCode === false) {
    return <CodeEntry onCodeValid={handleCodeValid} />;
  }

  // Mostrar contenido principal si el código es válido
  return (
    <>
      <Layout>
        <Header />
        <RSVP />
        <Countdown />
        <EventDetails />
        <DressCode />
        <Gifts showToast={handleShowToast} />
        <Footer />
      </Layout>

      {/* Toast global fijo */}
      <ToastContainer 
        position="bottom-end" 
        className="p-3"
        style={{ 
          position: 'fixed',
          zIndex: 9999,
          bottom: '20px',
          right: '20px'
        }}
      >
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)}
          delay={2500}
          autohide
          className="custom-toast"
        >
          <Toast.Body className="text-center py-2">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default App;
