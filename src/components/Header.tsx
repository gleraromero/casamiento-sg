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
            
            {/* Imagen de los novios */}
            <div className="novios-image-container mb-4">
              <img 
                src="/novios.png" 
                alt="Sofía y Gonzalo" 
                className="novios-image"
              />
            </div>
            
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
            
            {/* Fecha estilizada */}
            <div className="styled-date-section pb-4">
              <div className="date-display">
                <div className="date-left">
                  <div className="decorative-line">
                    <div className="line"></div>
                    <div className="dot"></div>
                  </div>
                  <span className="day-name">Sábado</span>
                  <div className="decorative-line">
                    <div className="line"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                
                <div className="date-center">
                  <div className="month-abbr">OCT</div>
                  <div className="day-number">04</div>
                </div>
                
                <div className="date-right">
                  <div className="decorative-line">
                    <div className="dot"></div>
                    <div className="line"></div>
                  </div>
                  <span className="time">18:30</span>
                  <div className="decorative-line">
                    <div className="dot"></div>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header; 