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

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 0
    });
  }, []);

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

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
