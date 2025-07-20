import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

  const CountdownItem: React.FC<{ value: number; label: string; delay: number }> = ({ value, label, delay }) => (
    <Col xs={6} sm={3} className="mb-3">
      <div className="countdown-item" role="region" aria-label={`${value} ${label}`} data-aos="zoom-in" data-aos-delay={delay}>
        <div 
          className="countdown-value font-serif text-purple" 
          aria-live="polite"
          key={value}
        >
          {value.toString().padStart(2, '0')}
        </div>
        <div className="countdown-label font-sans text-teal">
          {label}
        </div>
      </div>
    </Col>
  );

  return (
    <section className="countdown-section py-5" aria-label="Contador regresivo para el casamiento">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center mb-5" data-aos="fade-down">
              <h3 className="countdown-title font-serif text-purple mb-3">
                Falta
              </h3>
              <div className="countdown-divider mx-auto mb-4"></div>
            </div>
            
            <Row className="justify-content-center">
              <CountdownItem value={countdown.days} label="días" delay={200} />
              <CountdownItem value={countdown.hours} label="horas" delay={400} />
              <CountdownItem value={countdown.minutes} label="min" delay={600} />
              <CountdownItem value={countdown.seconds} label="seg" delay={800} />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Countdown; 