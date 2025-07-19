import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Send, CheckCircle, XCircle, Users } from 'lucide-react';
import { useGuestCode } from '../hooks/useGuestCode';

const RSVP: React.FC = () => {
  const { guests, guestCode, isLoading, updateGuestAttendance, updateGuestDietaryRestrictions, getAttendingCount, getTotalCount } = useGuestCode();
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedDietary, setExpandedDietary] = useState<number[]>([]);

  const getDietaryText = (restrictions: {
    anyFood: boolean;
    vegetarian: boolean;
    vegan: boolean;
    celiac: boolean;
  }) => {
    const options = [];
    if (restrictions.anyFood) options.push('Cualquier comida');
    if (restrictions.vegetarian) options.push('Vegetariano');
    if (restrictions.vegan) options.push('Vegano');
    if (restrictions.celiac) options.push('Celíaco');
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío al backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la llamada real al backend
      const rsvpData = {
        guestCode,
        guests,
        comments,
        attendingCount: getAttendingCount(),
        totalCount: getTotalCount()
      };
      
      console.log('RSVP Data:', rsvpData);
      
      setSubmitStatus('success');
    } catch {
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
              <div className="rsvp-flowers">
                <img 
                  src="/flores-asistencia.png" 
                  alt="Flores decorativas" 
                  className="rsvp-flowers-img"
                />
              </div>
              
              {/* Icono central */}
              <div className="rsvp-icon">
                <div className="rsvp-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="var(--color-teal-medium)"/>
                    <circle cx="12" cy="12" r="8" stroke="var(--color-teal-medium)" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
              </div>

              <div className="rsvp-content">
                <h3 id="rsvp-title" className="rsvp-title">
                  {guests.length === 1 ? '¿Asistís a la ceremonia?' : '¿Asisten a la ceremonia?'}
                </h3>
                {submitStatus === 'success' && (
                  <Alert variant="success" className="mb-4" role="alert" aria-live="polite">
                    <CheckCircle size={20} className="me-2" aria-hidden="true" />
                    ¡Gracias por confirmar tu asistencia! Te esperamos con mucha ilusión.
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert variant="danger" className="mb-4" role="alert" aria-live="polite">
                    <XCircle size={20} className="me-2" aria-hidden="true" />
                    Hubo un error al enviar tu confirmación. Por favor intenta nuevamente.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <div className="rsvp-form-simple">
                    {isLoading ? (
                      <div className="text-center py-4">
                        <div className="spinner-border text-purple" role="status"></div>
                        <p className="mt-2">Cargando invitados...</p>
                      </div>
                    ) : (
                      <>
                        {/* Lista de invitados */}
                        <div className="guests-list mb-4">
                          <h5 className="text-center mb-3">
                            <Users size={20} className="me-2" />
                            Confirmar asistencia por invitado
                          </h5>
                          {guests.map((guest, index) => (
                            <div key={index} className="guest-item mb-4">
                              <div className="guest-name">{guest.name}</div>
                              <div className="guest-options mb-3">
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
                                        id={`diet-any-${index}`}
                                        checked={guest.dietaryRestrictions.anyFood}
                                        onChange={(e) => {
                                          const newRestrictions = {
                                            ...guest.dietaryRestrictions,
                                            anyFood: e.target.checked,
                                            // Si selecciona "cualquier comida", deseleccionar las otras
                                            vegetarian: e.target.checked ? false : guest.dietaryRestrictions.vegetarian,
                                            vegan: e.target.checked ? false : guest.dietaryRestrictions.vegan,
                                            celiac: e.target.checked ? false : guest.dietaryRestrictions.celiac
                                          };
                                          updateGuestDietaryRestrictions(index, newRestrictions);
                                        }}
                                        label="Como cualquier cosa"
                                        className="dietary-checkbox"
                                      />
                                      <Form.Check
                                        type="checkbox"
                                        id={`diet-vegetarian-${index}`}
                                        checked={guest.dietaryRestrictions.vegetarian}
                                        onChange={(e) => {
                                          const newRestrictions = {
                                            ...guest.dietaryRestrictions,
                                            vegetarian: e.target.checked,
                                            // Si selecciona vegetariano, deseleccionar "cualquier comida"
                                            anyFood: e.target.checked ? false : guest.dietaryRestrictions.anyFood
                                          };
                                          
                                          // Si se deselecciona vegetariano y no hay otras opciones seleccionadas, seleccionar "cualquier comida"
                                          if (!e.target.checked && !newRestrictions.vegan && !newRestrictions.celiac) {
                                            newRestrictions.anyFood = true;
                                          }
                                          
                                          updateGuestDietaryRestrictions(index, newRestrictions);
                                        }}
                                        label="Soy vegetariano/a"
                                        className="dietary-checkbox"
                                      />
                                      <Form.Check
                                        type="checkbox"
                                        id={`diet-vegan-${index}`}
                                        checked={guest.dietaryRestrictions.vegan}
                                        onChange={(e) => {
                                          const newRestrictions = {
                                            ...guest.dietaryRestrictions,
                                            vegan: e.target.checked,
                                            // Si selecciona vegano, deseleccionar "cualquier comida"
                                            anyFood: e.target.checked ? false : guest.dietaryRestrictions.anyFood
                                          };
                                          
                                          // Si se deselecciona vegano y no hay otras opciones seleccionadas, seleccionar "cualquier comida"
                                          if (!e.target.checked && !newRestrictions.vegetarian && !newRestrictions.celiac) {
                                            newRestrictions.anyFood = true;
                                          }
                                          
                                          updateGuestDietaryRestrictions(index, newRestrictions);
                                        }}
                                        label="Soy vegano/a"
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
                                          
                                          // Si se deselecciona celíaco y no hay otras opciones seleccionadas, seleccionar "cualquier comida"
                                          if (!e.target.checked && !newRestrictions.vegetarian && !newRestrictions.vegan) {
                                            newRestrictions.anyFood = true;
                                          }
                                          
                                          updateGuestDietaryRestrictions(index, newRestrictions);
                                        }}
                                        label="Soy celíaco/a"
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
                            <Form.Control
                              as="textarea"
                              value={comments}
                              onChange={(e) => setComments(e.target.value)}
                              placeholder="Ingrese algún dato importante"
                              rows={2}
                              className="rsvp-input"
                            />
                          </Form.Group>
                        </div>
                      </>
                    )}
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RSVP; 