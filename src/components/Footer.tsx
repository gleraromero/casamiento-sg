import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart } from 'lucide-react';

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
                Sofía & Gonzalo
              </h4>
              
              <p className="font-sans text-teal mb-0" style={{ fontSize: '1rem' }}>
                Gracias por ser parte de nuestro día especial
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 