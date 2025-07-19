import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { calculateCountdown } from '../utils/dateUtils';
import type { CountdownData } from '../types';

const Countdown: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(calculateCountdown());
    };

    // Actualizar inmediatamente
    updateCountdown();

    // Actualizar cada segundo
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <Col xs={6} sm={3} className="mb-3">
      <Card className="countdown-card text-center border-0 shadow-sm" role="region" aria-label={`${value} ${label}`}>
        <Card.Body className="py-3">
          <div 
            className="countdown-value font-serif text-purple" 
            style={{ fontSize: '2rem', fontWeight: 600 }}
            aria-live="polite"
          >
            {value.toString().padStart(2, '0')}
          </div>
          <div className="countdown-label font-sans text-teal" style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>
            {label}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <section className="countdown-section py-5" aria-label="Contador regresivo para el casamiento">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center mb-4">
              <h3 className="font-serif text-purple mb-2" style={{ fontSize: '1.8rem' }}>
                Falta
              </h3>
            </div>
            
            <Row className="justify-content-center">
              <CountdownItem value={countdown.days} label="días" />
              <CountdownItem value={countdown.hours} label="horas" />
              <CountdownItem value={countdown.minutes} label="min" />
              <CountdownItem value={countdown.seconds} label="seg" />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Countdown; 