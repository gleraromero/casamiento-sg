import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import type { RSVPForm } from '../types';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPForm>({
    name: '',
    email: '',
    attending: true,
    guestCount: 1,
    comments: '',
    dietaryRestrictions: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'guestCount') {
      setFormData(prev => ({ ...prev, [name]: parseInt(value) || 1 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío al backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la llamada real al backend
      console.log('RSVP Data:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        attending: true,
        guestCount: 1,
        comments: '',
        dietaryRestrictions: '',
      });
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
                  src="/flores-header.png" 
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
                  ¿Asistes a la ceremonia?
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
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="font-serif text-purple">Nombre completo *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-purple-light"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="font-serif text-purple">Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-purple-light"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="font-serif text-purple">¿Asistirás al casamiento? *</Form.Label>
                        <div className="d-flex gap-3 mt-2">
                          <Form.Check
                            type="radio"
                            name="attending"
                            id="attending-yes"
                            checked={formData.attending}
                            onChange={() => setFormData(prev => ({ ...prev, attending: true }))}
                            label="¡Sí, confirmo!"
                            className="text-teal"
                          />
                          <Form.Check
                            type="radio"
                            name="attending"
                            id="attending-no"
                            checked={!formData.attending}
                            onChange={() => setFormData(prev => ({ ...prev, attending: false }))}
                            label="No puedo :("
                            className="text-teal"
                          />
                        </div>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="font-serif text-purple">Número de invitados</Form.Label>
                        <Form.Select
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          disabled={!formData.attending}
                          className="border-purple-light"
                        >
                          {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'persona' : 'personas'}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="font-serif text-purple">Restricciones alimentarias</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={handleInputChange}
                          placeholder="Ej: vegetariano, sin gluten, alergias..."
                          rows={3}
                          className="border-purple-light"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="font-serif text-purple">Comentarios adicionales</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="comments"
                          value={formData.comments}
                          onChange={handleInputChange}
                          placeholder="Cualquier comentario o mensaje especial..."
                          rows={3}
                          className="border-purple-light"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

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