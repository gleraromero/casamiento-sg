import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header text-center" role="banner" aria-label="Encabezado principal del casamiento">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            {/* Flores decorativas */}
            <div className="header-flowers mb-4">
              <img 
                src="/flores-header.png" 
                alt="Flores decorativas" 
                className="header-flowers-img"
              />
            </div>
            
            {/* Título principal */}
            <h1 className="font-script text-purple mb-3" style={{ fontSize: '3.5rem' }}>
              ¡Nos casamos!
            </h1>
            
            {/* Nombres */}
            <div className="names-section mb-4">
              <h2 className="font-serif text-purple mb-2" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                Sofía
              </h2>
              <div className="heart-divider d-flex align-items-center justify-content-center mb-2">
                <div className="line flex-grow-1" style={{ height: '1px', backgroundColor: 'var(--color-purple-light)' }}></div>
                <Heart 
                  size={24} 
                  className="mx-3" 
                  style={{ color: 'var(--color-teal-medium)' }}
                  fill="var(--color-teal-medium)"
                />
                <div className="line flex-grow-1" style={{ height: '1px', backgroundColor: 'var(--color-purple-light)' }}></div>
              </div>
              <h2 className="font-serif text-purple" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                Gonzalo
              </h2>
            </div>
            
            {/* Fecha */}
            <div className="date-section pb-4">
              <p className="font-sans text-teal mb-1" style={{ fontSize: '1.1rem' }}>
                Sábado 4 de Octubre de 2025
              </p>
              <p className="font-sans text-teal" style={{ fontSize: '1.1rem' }}>
                18:30 hs
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header; 