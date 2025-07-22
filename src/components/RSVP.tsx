import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Send, CheckCircle, XCircle, Users, Edit3 } from 'lucide-react';
import { useGuestCode } from '../hooks/useGuestCode';
import alianzasImage from '../assets/alianzas.png';

interface SavedRSVP {
  guestCode: string;
  guests: Array<{
    name: string;
    attending: boolean;
    dietaryRestrictions: {
      anyFood: boolean;
      vegetarian: boolean;
      vegan: boolean;
      celiac: boolean;
    };
  }>;
  comments: string;
  attendingCount: number;
  totalCount: number;
  timestamp: string;
}

const RSVP: React.FC = () => {
  const { guests, guestCode, isLoading, updateGuestAttendance, updateGuestDietaryRestrictions, getAttendingCount, getTotalCount } = useGuestCode();
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedDietary, setExpandedDietary] = useState<number[]>([]);
  const [savedRSVP, setSavedRSVP] = useState<SavedRSVP | null>(null);
  const [showForm, setShowForm] = useState(true);

  // Verificar si ya se envió el RSVP al cargar el componente
  useEffect(() => {
    if (guestCode && !isLoading) {
      const saved = localStorage.getItem(`rsvp_${guestCode}`);
      if (saved) {
        try {
          const parsedRSVP = JSON.parse(saved) as SavedRSVP;
          setSavedRSVP(parsedRSVP);
          setShowForm(false);
        } catch (error) {
          console.error('Error parsing saved RSVP:', error);
          localStorage.removeItem(`rsvp_${guestCode}`);
        }
      }
    }
  }, [guestCode, isLoading]);

  const getDietaryText = (restrictions: {
    anyFood: boolean;
    vegetarian: boolean;
    vegan: boolean;
    celiac: boolean;
  }) => {
    const options = [];
    if (restrictions.vegetarian) options.push('Vegetariano');
    if (restrictions.vegan) options.push('Vegano');
    if (restrictions.celiac) options.push('Celíaco');
    
    if (options.length === 0) return 'Sin restricciones';
    if (options.length === 1) return options[0];
    return options.join(' + ');
  };

  const toggleDietaryExpansion = (guestIndex: number) => {
    setExpandedDietary(prev => 
      prev.includes(guestIndex) 
        ? prev.filter(index => index !== guestIndex)
        : [...prev, guestIndex]
    );
  };

  const handleChangeConfirmation = () => {
    setShowForm(true);
    setSavedRSVP(null);
    localStorage.removeItem(`rsvp_${guestCode}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Preparar datos para Google Sheets
      const rsvpData = {
        guestCode,
        guests: guests.map(guest => ({
          name: guest.name,
          attending: guest.attending,
          dietaryRestrictions: guest.dietaryRestrictions
        })),
        comments,
        attendingCount: getAttendingCount(),
        totalCount: getTotalCount(),
        timestamp: new Date().toISOString()
      };
      
      // Enviar a Google Apps Script
      await fetch('https://script.google.com/macros/s/AKfycbwPkZ0iOQ_abHz4yPtDED7qqcrKFXqPKGluHaC2GdXIwJZr70WssxXkMl1Mq_XbjD8I/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvpData),
        mode: 'no-cors' // Necesario para evitar errores CORS
      });

      // Con no-cors no podemos leer la respuesta, pero si llegamos aquí significa que se envió
      console.log('RSVP enviado exitosamente');
      
      // Guardar en localStorage
      localStorage.setItem(`rsvp_${guestCode}`, JSON.stringify(rsvpData));
      setSavedRSVP(rsvpData);
      setShowForm(false);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error al enviar RSVP:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rsvp-section py-5" aria-labelledby="rsvp-title">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="elegant-rsvp-modal">
              {/* Flores decorativas */}
              <div className="rsvp-flowers" data-aos="fade-down" data-aos-delay="100">
                <img 
                  src="/flores-asistencia.png" 
                  alt="Flores decorativas" 
                  className="rsvp-flowers-img"
                />
              </div>
              
              {/* Icono central - movido fuera del modal para mejor centrado */}
              <div className="rsvp-icon-container" data-aos="zoom-in" data-aos-delay="200">
                <div className="rsvp-icon-circle">
                  <img 
                    src={alianzasImage} 
                    alt="Alianzas" 
                    style={{ 
                      width: '24px', 
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>

              <div className="rsvp-content" data-aos="fade-up" data-aos-delay="300">
                {isLoading ? (
                  <div className="text-center py-4">
                    <div className="spinner-border text-purple" role="status"></div>
                    <p className="mt-2">Cargando invitados...</p>
                  </div>
                ) : savedRSVP && !showForm ? (
                  // Pantalla de confirmación enviada
                  <div className="rsvp-confirmation">
                    <h3 className="rsvp-title">
                      ¡Gracias por confirmar!
                    </h3>
                    
                    <Alert variant="success" className="mb-4" role="alert">
                      <CheckCircle size={20} className="me-2" />
                      Tu confirmación ha sido enviada exitosamente.
                    </Alert>

                    <div className="confirmation-details mb-4">
                      <h5 className="text-center mb-3">
                        <Users size={20} className="me-2" />
                        Resumen de tu confirmación
                      </h5>
                      
                      <div className="guests-summary">
                        {savedRSVP.guests.map((guest, index) => (
                          <div key={index} className="guest-summary-item mb-3">
                            <div className="guest-summary-name">
                              <strong>{guest.name}</strong>
                            </div>
                            <div className="guest-summary-status">
                              {guest.attending ? (
                                <span className="text-success">✅ Confirmado</span>
                              ) : (
                                <span className="text-danger">❌ No puede asistir</span>
                              )}
                            </div>
                            {guest.attending && (
                              <div className="guest-summary-dietary">
                                <small className="text-muted">
                                  Restricciones: {getDietaryText(guest.dietaryRestrictions)}
                                </small>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {savedRSVP.comments && (
                        <div className="comments-summary mt-3">
                          <strong>Comentarios:</strong>
                          <p className="text-muted mb-0">{savedRSVP.comments}</p>
                        </div>
                      )}

                      <div className="summary-stats mt-3 text-center">
                        <small className="text-muted">
                          Confirmados: {savedRSVP.attendingCount} de {savedRSVP.totalCount}
                        </small>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={handleChangeConfirmation}
                        variant="outline-primary"
                        className="change-confirmation-btn"
                      >
                        <Edit3 size={18} className="me-2" />
                        Quiero cambiar mi confirmación
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Formulario normal
                  <>
                    <h3 id="rsvp-title" className="rsvp-title">
                      {guests.length === 1 ? '¿Asistís a la ceremonia?' : '¿Asisten a la ceremonia?'}
                    </h3>
                    
                    {submitStatus === 'error' && (
                      <Alert variant="danger" className="mb-4" role="alert" aria-live="polite">
                        <XCircle size={20} className="me-2" aria-hidden="true" />
                        Hubo un error al enviar tu confirmación. Por favor intenta nuevamente.
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <div className="rsvp-form-simple">
                        {/* Lista de invitados */}
                        <div className="guests-list mb-4">
                          <h5 className="text-center mb-3">
                            <Users size={20} className="me-2" />
                            Confirmar asistencia por invitado
                          </h5>
                          {guests.map((guest, index) => (
                            <div key={index} className="guest-item mb-4">
                              <div className="guest-name">{guest.name}</div>
                              <div className="guest-options mb-3 d-flex flex-wrap gap-3">
                                <Form.Check
                                  type="radio"
                                  name={`guest-${index}`}
                                  id={`guest-${index}-yes`}
                                  checked={guest.attending}
                                  onChange={() => updateGuestAttendance(index, true)}
                                  label="¡Sí, confirmo!"
                                  className="rsvp-radio"
                                />
                                <Form.Check
                                  type="radio"
                                  name={`guest-${index}`}
                                  id={`guest-${index}-no`}
                                  checked={!guest.attending}
                                  onChange={() => updateGuestAttendance(index, false)}
                                  label="No puedo :("
                                  className="rsvp-radio"
                                />
                              </div>
                              
                              {/* Opciones de dieta - solo mostrar si confirma asistencia */}
                              {guest.attending && (
                                <div className="dietary-options">
                                  <div 
                                    className="dietary-toggle"
                                    onClick={() => toggleDietaryExpansion(index)}
                                  >
                                    <span className="dietary-toggle-text">
                                      {getDietaryText(guest.dietaryRestrictions)}
                                    </span>
                                    <span className={`dietary-toggle-arrow ${expandedDietary.includes(index) ? 'expanded' : ''}`}>
                                      ▼
                                    </span>
                                  </div>
                                  
                                  {expandedDietary.includes(index) && (
                                    <div className="dietary-checkboxes">
                                      <Form.Check
                                        type="checkbox"
                                        id={`diet-vegetarian-${index}`}
                                        checked={guest.dietaryRestrictions.vegetarian}
                                        onChange={(e) => {
                                          const newRestrictions = {
                                            ...guest.dietaryRestrictions,
                                            vegetarian: e.target.checked
                                          };
                                          updateGuestDietaryRestrictions(index, newRestrictions);
                                        }}
                                        label="Vegetariano"
                                        className="dietary-checkbox"
                                      />
                                      <Form.Check
                                        type="checkbox"
                                        id={`diet-vegan-${index}`}
                                        checked={guest.dietaryRestrictions.vegan}
                                        onChange={(e) => {
                                          const newRestrictions = {
                                            ...guest.dietaryRestrictions,
                                            vegan: e.target.checked
                                          };
                                          updateGuestDietaryRestrictions(index, newRestrictions);
                                        }}
                                        label="Vegano"
                                        className="dietary-checkbox"
                                      />
                                      <Form.Check
                                        type="checkbox"
                                        id={`diet-celiac-${index}`}
                                        checked={guest.dietaryRestrictions.celiac}
                                        onChange={(e) => {
                                          const newRestrictions = {
                                            ...guest.dietaryRestrictions,
                                            celiac: e.target.checked
                                          };
                                          updateGuestDietaryRestrictions(index, newRestrictions);
                                        }}
                                        label="Celíaco"
                                        className="dietary-checkbox"
                                      />
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Campo de comentarios */}
                        <div className="rsvp-inputs">
                          <Form.Group className="mb-4">
                            <Form.Label className="form-label mb-2" style={{ 
                              fontFamily: 'Playfair Display, serif',
                              color: 'var(--color-purple)',
                              fontSize: '1rem',
                              fontWeight: '500'
                            }}>
                              Comentarios adicionales
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              value={comments}
                              onChange={(e) => setComments(e.target.value)}
                              placeholder="Contanos si tenés alguna otra restricción alimentaria"
                              rows={3}
                              className="rsvp-input"
                              style={{
                                border: '2px solid #E0E0E0',
                                borderRadius: '8px',
                                backgroundColor: '#FAFAFA',
                                padding: '12px',
                                fontSize: '1rem',
                                fontFamily: 'var(--font-sans)',
                                resize: 'vertical',
                                minHeight: '80px'
                              }}
                            />
                          </Form.Group>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="rsvp-submit-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send size={18} className="me-2" />
                              Enviar
                            </>
                          )}
                        </Button>
                      </div>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RSVP; 