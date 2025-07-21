import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { findGuestsByCode } from '../config/guestCodes';

interface CodeEntryProps {
  onCodeValid: (code: string) => void;
}

const CodeEntry: React.FC<CodeEntryProps> = ({ onCodeValid }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!code.trim()) {
      setError('Por favor ingresa tu código de invitado');
      setIsLoading(false);
      return;
    }

    // Buscar invitados por código
    const guests = findGuestsByCode(code.trim());
    
    if (guests) {
      // Código válido
      onCodeValid(code.trim().toUpperCase());
    } else {
      // Código inválido
      setError('Código de invitado no válido. Por favor verifica e intenta nuevamente.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{ 
           background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
           fontFamily: 'Playfair Display, serif'
         }}>
      <Container className="text-center">
        <div className="bg-white rounded-lg shadow-lg p-5 mx-auto" style={{ maxWidth: '500px' }}>
          {/* Logo o imagen de los novios */}
          <div className="mb-4">
            <img 
              src="/novios.png" 
              alt="Sofia & Gonzalo" 
              className="img-fluid rounded-circle mb-3"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <h1 className="h2 text-dark mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sofia & Gonzalo
            </h1>
            <p className="text-muted mb-4">Te invitamos a nuestra boda</p>
          </div>

          {/* Formulario de código */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label className="h5 text-dark">
                Ingresa tu código de invitado
              </Form.Label>
              <Form.Control
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Ej: GS1"
                className="text-center h4 py-3"
                style={{ 
                  fontSize: '1.5rem',
                  letterSpacing: '2px',
                  fontFamily: 'monospace'
                }}
                maxLength={6}
                autoFocus
              />
              <Form.Text className="text-muted">
                El código se encuentra en tu invitación
              </Form.Text>
            </Form.Group>

            {error && (
              <Alert variant="danger" className="mb-4">
                {error}
              </Alert>
            )}

            <Button
              type="submit"
              variant="dark"
              size="lg"
              className="w-100 py-3"
              disabled={isLoading}
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem'
              }}
            >
              {isLoading ? 'Verificando...' : 'Continuar'}
            </Button>
          </Form>

          {/* Información adicional */}
          <div className="mt-4 pt-4 border-top">
            <p className="text-muted small mb-0">
              ¿No tienes tu código? Contacta a los novios
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CodeEntry; 