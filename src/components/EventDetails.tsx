import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MapPin, Clock, Calendar, Navigation } from 'lucide-react';

const EventDetails: React.FC = () => {
  const eventInfo = {
    date: 'Sábado 4 de Octubre de 2025',
    time: '18:30 hs',
    location: 'Janos',
    address: 'Bartolomé Mitre 1265, entre Talcahuano y Libertad.',
    coordinates: { lat: -34.60723, lng: -58.3844656 }, // Janos - Bartolomé Mitre 1265
  };

  const handleDirections = () => {
    const destination = 'Janos,+Bartolom%C3%A9+Mitre+1265,+Buenos+Aires';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
  };

  return (
    <section className="event-details-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center mb-5">
              <h3 className="font-serif text-purple mb-3" style={{ fontSize: '2rem' }}>
                Detalles del Evento
              </h3>
              <div className="divider mx-auto mb-4"></div>
            </div>

            <Row className="g-4">
              {/* Información del evento */}
              <Col lg={6} md={12}>
                <Card className="event-info-card border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                    <div className="event-item mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <Calendar 
                          size={24} 
                          className="text-purple me-3"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                        <h5 className="font-serif text-purple mb-0">Día</h5>
                      </div>
                      <p className="font-sans text-teal ms-5 mb-0" style={{ fontSize: '1.1rem' }}>
                        {eventInfo.date}
                      </p>
                    </div>

                    <div className="event-item mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <Clock 
                          size={24} 
                          className="text-purple me-3"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                        <h5 className="font-serif text-purple mb-0">Hora</h5>
                      </div>
                      <p className="font-sans text-teal ms-5 mb-0" style={{ fontSize: '1.1rem' }}>
                        {eventInfo.time}
                      </p>
                    </div>

                    <div className="event-item mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <MapPin 
                          size={24} 
                          className="text-purple me-3"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                        <h5 className="font-serif text-purple mb-0">Lugar</h5>
                      </div>
                      <p className="font-sans text-teal ms-5 mb-0" style={{ fontSize: '1.1rem' }}>
                        {eventInfo.location}
                      </p>
                    </div>

                    <div className="event-item">
                      <p className="font-sans text-gray ms-5 mb-3" style={{ fontSize: '1rem' }}>
                        {eventInfo.address}
                      </p>
                      <button 
                        onClick={handleDirections}
                        className="btn btn-outline ms-5"
                        style={{ 
                          borderColor: 'var(--color-teal-medium)', 
                          color: 'var(--color-teal-medium)' 
                        }}
                      >
                        <Navigation size={16} className="me-2" />
                        ¿Cómo llegar?
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Mapa */}
              <Col lg={6} md={12}>
                <Card className="map-card border-0 shadow-sm h-100">
                  <Card.Body className="p-0">
                    <div className="map-container" style={{ height: '400px', position: 'relative' }}>
                      <iframe
                        src="https://maps.google.com/maps?q=Janos,Bartolomé+Mitre+1265,Buenos+Aires,Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Janos"
                      ></iframe>
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

export default EventDetails; 