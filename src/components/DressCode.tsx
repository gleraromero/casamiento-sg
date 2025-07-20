import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Sparkles, User, Users } from 'lucide-react';

const DressCode: React.FC = () => {
  return (
    <section className="dress-code-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center mb-5" data-aos="fade-down">
              <div className="dress-code-header mb-4">
                <Sparkles 
                  size={40} 
                  className="text-purple mb-3"
                  style={{ color: 'var(--color-purple-medium)' }}
                />
                <h3 className="font-serif text-purple mb-3" style={{ fontSize: '2.2rem' }}>
                  Dress Code
                </h3>
                <div className="divider mx-auto mb-3"></div>
                <p className="font-sans text-teal mb-0" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                  Elegante
                </p>
              </div>
            </div>

            <Row className="g-4">
              {/* Para Ellos */}
              <Col lg={6} md={12}>
                <Card className="dress-code-card border-0 shadow-lg h-100" data-aos="fade-right" data-aos-delay="100">
                  <Card.Body className="p-5">
                    <div className="dress-card-header text-center mb-4">
                      <div className="dress-icon-wrapper mb-3">
                        <User 
                          size={32} 
                          className="text-purple"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                      </div>
                      <h4 className="font-serif text-purple mb-2" style={{ fontSize: '1.4rem' }}>
                        Para Ellos
                      </h4>
                      <div className="dress-subtitle">
                        <p className="font-sans text-teal mb-0" style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                          Traje o blazer • Camisa de vestir • Zapatos de vestir • Corbata opcional
                        </p>
                      </div>
                    </div>


                    
                    {/* Imagen de ejemplo para ellos */}
                    <div className="dress-example-image mt-4">
                      <img 
                        src="/ejemplo-elegante-masculino.png" 
                        alt="Ejemplo de vestimenta elegante para hombres"
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          maxHeight: '300px',
                          objectFit: 'contain',
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Para Ellas */}
              <Col lg={6} md={12}>
                <Card className="dress-code-card border-0 shadow-lg h-100" data-aos="fade-left" data-aos-delay="200">
                  <Card.Body className="p-5">
                    <div className="dress-card-header text-center mb-4">
                      <div className="dress-icon-wrapper mb-3">
                        <Users 
                          size={32} 
                          className="text-purple"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                      </div>
                      <h4 className="font-serif text-purple mb-2" style={{ fontSize: '1.4rem' }}>
                        Para Ellas
                      </h4>
                      <div className="dress-subtitle">
                        <p className="font-sans text-teal mb-0" style={{ fontSize: '0.95rem', opacity: '0.8' }}>
                          Vestido cocktail • Conjunto elegante • Accesorios sutiles
                        </p>
                      </div>
                    </div>


                    
                    {/* Imagen de ejemplo para ellas */}
                    <div className="dress-example-image mt-4">
                      <img 
                        src="/ejemplo-elegante-femenino.png" 
                        alt="Ejemplo de vestimenta elegante para mujeres"
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          maxHeight: '300px',
                          objectFit: 'contain',
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>


          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DressCode; 