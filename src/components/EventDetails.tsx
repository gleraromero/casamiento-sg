import React from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { MapPin, Clock, Calendar, Navigation, CalendarPlus } from 'lucide-react';

const EventDetails: React.FC = () => {
  const eventInfo = {
    title: 'Boda de Sofia & Gonzalo',
    date: 'Sábado 4 de Octubre de 2025',
    time: '18:30 hs',
    location: 'Janos',
    address: 'Bartolomé Mitre 1265, entre Talcahuano y Libertad.',
    coordinates: { lat: -34.60723, lng: -58.3844656 }, // Janos - Bartolomé Mitre 1265
    description: 'Te invitamos a celebrar nuestra boda. ¡Esperamos que puedas acompañarnos en este día tan especial!',
  };

  const handleDirections = () => {
    const destination = 'Janos,+Bartolom%C3%A9+Mitre+1265,+Buenos+Aires';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
  };

  const addToGoogleCalendar = () => {
    const startDate = '20251004T183000';
    const endDate = '20251004T230000';
    const eventTitle = encodeURIComponent(eventInfo.title);
    const eventLocation = encodeURIComponent(`${eventInfo.location}, ${eventInfo.address}`);
    const eventDescription = encodeURIComponent(eventInfo.description);
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${eventDescription}&location=${eventLocation}`;
    window.open(url, '_blank');
  };

  const addToAppleCalendar = () => {
    const startDate = '2025-10-04T18:30:00';
    const endDate = '2025-10-04T23:00:00';
    const eventTitle = encodeURIComponent(eventInfo.title);
    const eventLocation = encodeURIComponent(`${eventInfo.location}, ${eventInfo.address}`);
    const eventDescription = encodeURIComponent(eventInfo.description);
    
    const url = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${eventTitle}
DESCRIPTION:${eventDescription}
LOCATION:${eventLocation}
END:VEVENT
END:VCALENDAR`;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'boda-sofia-gonzalo.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addToOutlookCalendar = () => {
    const startDate = '2025-10-04T18:30:00';
    const endDate = '2025-10-04T23:00:00';
    const eventTitle = encodeURIComponent(eventInfo.title);
    const eventLocation = encodeURIComponent(`${eventInfo.location}, ${eventInfo.address}`);
    const eventDescription = encodeURIComponent(eventInfo.description);
    
    const url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${eventTitle}&startdt=${startDate}&enddt=${endDate}&body=${eventDescription}&location=${eventLocation}`;
    window.open(url, '_blank');
  };

  return (
    <section className="event-details-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center mb-5" data-aos="fade-down">
              <h3 className="font-serif text-purple mb-3" style={{ fontSize: '2rem' }}>
                Detalles del Evento
              </h3>
              <div className="divider mx-auto mb-4"></div>
            </div>

            <Row className="g-4">
              {/* Información del evento */}
              <Col lg={6} md={12}>
                <Card className="event-info-card border-0 shadow-sm h-100" data-aos="fade-right" data-aos-delay="100">
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

                    <div className="event-item mb-4">
                      <p className="font-sans text-gray ms-5 mb-3" style={{ fontSize: '1rem' }}>
                        {eventInfo.address}
                      </p>
                      <button 
                        onClick={handleDirections}
                        className="btn directions-btn ms-5"
                      >
                        <Navigation size={16} className="me-2" />
                        ¿Cómo llegar?
                      </button>
                    </div>

                    {/* Botones de calendario */}
                    <div className="event-item">
                      <div className="d-flex align-items-center mb-3">
                        <CalendarPlus 
                          size={24} 
                          className="text-purple me-3"
                          style={{ color: 'var(--color-purple-medium)' }}
                        />
                        <h5 className="font-serif text-purple mb-0">Agregar al calendario</h5>
                      </div>
                      <div className="ms-5">
                        <ButtonGroup vertical className="w-100">
                          <Button 
                            variant="outline-primary" 
                            onClick={addToGoogleCalendar}
                            className="mb-2"
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              borderColor: 'var(--color-purple-medium)',
                              color: 'var(--color-purple-medium)'
                            }}
                          >
                            📅 Google Calendar
                          </Button>
                          <Button 
                            variant="outline-primary" 
                            onClick={addToAppleCalendar}
                            className="mb-2"
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              borderColor: 'var(--color-purple-medium)',
                              color: 'var(--color-purple-medium)'
                            }}
                          >
                            🍎 Apple Calendar
                          </Button>
                          <Button 
                            variant="outline-primary" 
                            onClick={addToOutlookCalendar}
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              borderColor: 'var(--color-purple-medium)',
                              color: 'var(--color-purple-medium)'
                            }}
                          >
                            📧 Outlook Calendar
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Mapa */}
              <Col lg={6} md={12}>
                <Card className="map-card border-0 shadow-sm h-100" data-aos="fade-left" data-aos-delay="200">
                  <Card.Body className="p-0 h-100">
                    <div className="map-container h-100" style={{ position: 'relative' }}>
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