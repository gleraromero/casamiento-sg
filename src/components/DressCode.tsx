import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Sparkles, User, Users, Heart, Award } from 'lucide-react';

const DressCode: React.FC = () => {
  return (
    <section className="dress-code-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center mb-5">
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
                <Card className="dress-code-card border-0 shadow-lg h-100">
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

                    <div className="dress-options">
                      <div className="dress-option mb-3">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Traje o blazer con pantalón
                        </span>
                      </div>
                      <div className="dress-option mb-3">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Camisa de vestir
                        </span>
                      </div>
                      <div className="dress-option mb-3">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Zapatos de vestir
                        </span>
                      </div>
                      <div className="dress-option">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Corbata opcional
                        </span>
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
                <Card className="dress-code-card border-0 shadow-lg h-100">
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
                          Vestido cocktail • Conjunto elegante • Tacos o sandalias elegantes • Accesorios sutiles
                        </p>
                      </div>
                    </div>

                    <div className="dress-options">
                      <div className="dress-option mb-3">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Vestido cocktail
                        </span>
                      </div>
                      <div className="dress-option mb-3">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Conjunto elegante
                        </span>
                      </div>
                      <div className="dress-option mb-3">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Tacos o sandalias elegantes
                        </span>
                      </div>
                      <div className="dress-option">
                        <span className="font-sans text-teal" style={{ fontSize: '1rem' }}>
                          Accesorios sutiles
                        </span>
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

            {/* Nota importante */}
            <Row className="justify-content-center mt-5">
              <Col lg={8} md={10}>
                <Card className="dress-note-card border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <Heart 
                        size={24} 
                        className="text-purple me-3"
                        style={{ color: 'var(--color-purple-medium)' }}
                      />
                      <h5 className="font-serif text-purple mb-0" style={{ fontSize: '1.2rem' }}>
                        Lo más importante
                      </h5>
                    </div>
                    <p className="font-sans text-teal mb-3" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                      "Que te sientas cómodo y elegante"
                    </p>
                    <div className="dress-avoid">
                      <Award 
                        size={20} 
                        className="text-purple me-2"
                        style={{ color: 'var(--color-purple-medium)' }}
                      />
                      <span className="font-sans text-gray" style={{ fontSize: '0.95rem' }}>
                        Evitar: jeans, remeras casuales, zapatillas deportivas
                      </span>
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