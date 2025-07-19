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
    const url = 'https://www.google.com/maps/dir/-34.5707801,-58.4476247/Jano\'s+Caba,+Bartolom%C3%A9+Mitre,+Buenos+Aires/@-34.5805742,-58.4550156,13z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95bccb354b4691ef:0xba9a0b7730fb8527!2m2!1d-58.3844656!2d-34.60723?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D';
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
                      <div 
                        className="map-placeholder d-flex align-items-center justify-content-center"
                        style={{ 
                          height: '100%', 
                          backgroundColor: 'var(--color-background)',
                          border: '2px dashed var(--color-purple-light)',
                          borderRadius: 'var(--border-radius-md)'
                        }}
                      >
                        <div className="text-center">
                          <MapPin 
                            size={48} 
                            className="text-purple mb-3"
                            style={{ color: 'var(--color-purple-medium)' }}
                          />
                          <p className="font-sans text-teal mb-2">Mapa del evento</p>
                          <p className="font-sans text-gray" style={{ fontSize: '0.9rem' }}>
                            Haz clic en "¿Cómo llegar?" para ver la ubicación
                          </p>
                        </div>
                      </div>
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