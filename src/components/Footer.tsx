import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center">
              <div className="footer-heart mb-4">
                <Heart 
                  size={32} 
                  className="text-purple"
                  style={{ color: 'var(--color-purple-medium)' }}
                  fill="var(--color-purple-medium)"
                />
              </div>
              
              <h4 className="font-serif text-purple mb-3" style={{ fontSize: '1.5rem' }}>
                Gonzalo & Sofía
              </h4>
              
              <p className="font-sans text-teal mb-4" style={{ fontSize: '1rem' }}>
                Gracias por ser parte de nuestro día especial
              </p>
              
              <div className="contact-info mb-4">
                <Row className="justify-content-center g-3">
                  <Col md={4}>
                    <div className="contact-item">
                      <Phone 
                        size={20} 
                        className="text-purple me-2"
                        style={{ color: 'var(--color-purple-medium)' }}
                      />
                      <span className="font-sans text-teal">+54 11 1234-5678</span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="contact-item">
                      <Mail 
                        size={20} 
                        className="text-purple me-2"
                        style={{ color: 'var(--color-purple-medium)' }}
                      />
                      <span className="font-sans text-teal">casamiento@email.com</span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="contact-item">
                      <MessageCircle 
                        size={20} 
                        className="text-purple me-2"
                        style={{ color: 'var(--color-purple-medium)' }}
                      />
                      <span className="font-sans text-teal">WhatsApp</span>
                    </div>
                  </Col>
                </Row>
              </div>
              
              <div className="footer-divider mx-auto mb-4"></div>
              
              <p className="font-sans text-gray" style={{ fontSize: '0.9rem' }}>
                Desarrollado con ❤️ para nuestro casamiento
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 