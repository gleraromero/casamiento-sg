import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center" data-aos="fade-up">
              <div className="footer-heart mb-4" data-aos="zoom-in" data-aos-delay="100">
                <Heart 
                  size={32} 
                  className="text-purple"
                  style={{ color: 'var(--color-purple-medium)' }}
                  fill="var(--color-purple-medium)"
                />
              </div>
              
              <h4 className="font-serif text-purple mb-3" style={{ fontSize: '1.5rem' }} data-aos="fade-up" data-aos-delay="200">
                Sofía & Gonzalo
              </h4>
              
              <p className="font-sans text-teal mb-0" style={{ fontSize: '1rem' }} data-aos="fade-up" data-aos-delay="300">
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