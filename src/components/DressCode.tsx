import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Sparkles, Users } from 'lucide-react';

const DressCode: React.FC = () => {
  return (
    <section className="dress-code-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center mb-5">
              <h3 className="font-serif text-purple mb-3" style={{ fontSize: '2rem' }}>
                Dress Code
              </h3>
              <div className="divider mx-auto mb-4"></div>
              <p className="font-sans text-teal mb-4" style={{ fontSize: '1.1rem' }}>
                Una orientación para tu vestuario
              </p>
            </div>

            <Card className="dress-code-card border-0 shadow-sm">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <Sparkles 
                    size={48} 
                    className="text-purple mb-3"
                    style={{ color: 'var(--color-purple-medium)' }}
                  />
                  <h4 className="font-serif text-purple mb-3" style={{ fontSize: '1.5rem' }}>
                    Elegante Sport
                  </h4>
                </div>

                <Row className="g-4">
                  <Col md={6}>
                    <div className="dress-item">
                      <div className="d-flex align-items-center mb-3">
                        <Users 
                          size={24} 
                          className="text-purple me-3"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                        <h5 className="font-serif text-purple mb-0">Para Ellos</h5>
                      </div>
                      <ul className="font-sans text-teal" style={{ fontSize: '1rem', listStyle: 'none', paddingLeft: '0' }}>
                        <li className="mb-2">• Traje o blazer con pantalón</li>
                        <li className="mb-2">• Camisa de vestir</li>
                        <li className="mb-2">• Zapatos de vestir</li>
                        <li className="mb-2">• Corbata opcional</li>
                      </ul>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="dress-item">
                      <div className="d-flex align-items-center mb-3">
                        <Users 
                          size={24} 
                          className="text-purple me-3"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                        <h5 className="font-serif text-purple mb-0">Para Ellas</h5>
                      </div>
                      <ul className="font-sans text-teal" style={{ fontSize: '1rem', listStyle: 'none', paddingLeft: '0' }}>
                        <li className="mb-2">• Vestido cocktail</li>
                        <li className="mb-2">• Conjunto elegante</li>
                        <li className="mb-2">• Tacos o sandalias elegantes</li>
                        <li className="mb-2">• Accesorios sutiles</li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <div className="text-center mt-4 pt-4" style={{ borderTop: '1px solid var(--color-purple-light)' }}>
                  <p className="font-sans text-gray mb-3" style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                    "Lo más importante es que te sientas cómodo y elegante"
                  </p>
                  <p className="font-sans text-teal" style={{ fontSize: '0.9rem' }}>
                    Evitar: jeans, remeras casuales, zapatillas deportivas
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DressCode; 