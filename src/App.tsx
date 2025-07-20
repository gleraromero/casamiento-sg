import React, { useState } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';
import { Check } from 'lucide-react';
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
          delay={3000}
          autohide
          bg="success"
          className="text-white"
        >
          <Toast.Header closeButton>
            <Check size={16} className="me-2" />
            <strong className="me-auto">¡Copiado!</strong>
          </Toast.Header>
          <Toast.Body>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default App;
