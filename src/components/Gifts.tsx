import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Gift, Heart, CreditCard } from 'lucide-react';

const Gifts: React.FC = () => {
  return (
    <section className="gifts-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center mb-5">
              <h3 className="font-serif text-purple mb-3" style={{ fontSize: '2rem' }}>
                Regalos
              </h3>
              <div className="divider mx-auto mb-4"></div>
              <p className="font-sans text-teal mb-4" style={{ fontSize: '1.1rem' }}>
                Si deseas regalarnos algo más que tu hermosa presencia...
              </p>
            </div>

            <Card className="gifts-card border-0 shadow-sm">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <Gift 
                    size={48} 
                    className="text-purple mb-3"
                    style={{ color: 'var(--color-purple-medium)' }}
                  />
                  <h4 className="font-serif text-purple mb-3" style={{ fontSize: '1.5rem' }}>
                    Tu presencia es nuestro mejor regalo
                  </h4>
                </div>

                <div className="gift-message text-center mb-5">
                  <p className="font-sans text-teal mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Lo que más nos importa es celebrar este momento con quienes queremos cerca. 
                    Tu presencia y tus ganas de compartir con nosotros ya son el mejor regalo.
                  </p>
                  <p className="font-sans text-teal mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Si aun así querés hacernos un mimo, podés ayudarnos con una transferencia: 
                    todo lo que juntemos va directo a nuestra luna de miel ✈️💜
                  </p>
                </div>

                <div className="bank-info">
                  <div className="text-center mb-4">
                    <CreditCard 
                      size={32} 
                      className="text-purple mb-2"
                      style={{ color: 'var(--color-purple-medium)' }}
                    />
                    <h5 className="font-serif text-purple mb-3">Información Bancaria</h5>
                  </div>

                  <Row className="g-4">
                    <Col md={6}>
                      <div className="bank-detail text-center">
                        <h5 className="font-serif text-purple mb-3" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                          💰 Cuenta en Pesos
                        </h5>
                        <div className="account-info">
                          <h6 className="font-serif text-purple mb-2">Alias</h6>
                          <p className="font-sans text-teal mb-3" style={{ fontSize: '1.1rem', fontWeight: '600', fontFamily: 'monospace' }}>
                            glr-bbva
                          </p>
                          <h6 className="font-serif text-purple mb-2">Número de Cuenta</h6>
                          <p className="font-sans text-teal mb-3" style={{ fontSize: '1rem', fontFamily: 'monospace' }}>
                            106-30454/5
                          </p>
                        </div>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="bank-detail text-center">
                        <h5 className="font-serif text-purple mb-3" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                          💵 Cuenta en Dólares
                        </h5>
                        <div className="account-info">
                          <h6 className="font-serif text-purple mb-2">Alias</h6>
                          <p className="font-sans text-teal mb-3" style={{ fontSize: '1.1rem', fontWeight: '600', fontFamily: 'monospace' }}>
                            glr.sch.bbva.usd
                          </p>
                          <h6 className="font-serif text-purple mb-2">Número de Cuenta</h6>
                          <p className="font-sans text-teal mb-3" style={{ fontSize: '1rem', fontFamily: 'monospace' }}>
                            317-714938/7
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="text-center mt-4 pt-4" style={{ borderTop: '1px solid var(--color-purple-light)' }}>
                    <h6 className="font-serif text-purple mb-2">Titulares</h6>
                    <p className="font-sans text-teal mb-0" style={{ fontSize: '1rem' }}>
                      Gonzalo Lera Romero y Sofía Chiavassa
                    </p>
                  </div>
                </div>

                <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid var(--color-purple-light)' }}>
                  <Heart 
                    size={24} 
                    className="text-purple mb-3"
                    style={{ color: 'var(--color-purple-medium)' }}
                    fill="var(--color-purple-medium)"
                  />
                  <p className="font-sans text-gray" style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                    "Gracias por ser parte de nuestra historia de amor"
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

export default Gifts; 