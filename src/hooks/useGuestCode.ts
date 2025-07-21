import { useState, useEffect } from 'react';
import { findGuestsByCode } from '../config/guestCodes';

interface Guest {
  name: string;
  attending: boolean;
  dietaryRestrictions: {
    anyFood: boolean;
    vegetarian: boolean;
    vegan: boolean;
    celiac: boolean;
  };
}

export const useGuestCode = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [guestCode, setGuestCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isValidCode, setIsValidCode] = useState<boolean | null>(null);

  useEffect(() => {
    // Obtener el código de invitado de la URL (tanto de path como de query params)
    const pathSegments = window.location.pathname.split('/');
    const codeFromPath = pathSegments[pathSegments.length - 1];
    
    // También buscar en query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromQuery = urlParams.get('code');
    
    // Usar el código del path o del query parameter
    const codeFromUrl = codeFromPath || codeFromQuery;
    
    if (codeFromUrl && codeFromUrl !== '') {
      try {
        // Buscar invitados por código
        const guestNames = findGuestsByCode(codeFromUrl);
        
        if (guestNames) {
          // Código válido
          const guestList = guestNames.map(name => ({
            name: name.trim(),
            attending: true,
            dietaryRestrictions: {
              anyFood: false,
              vegetarian: false,
              vegan: false,
              celiac: false
            }
          }));
          
          setGuests(guestList);
          setGuestCode(codeFromUrl.toUpperCase());
          setIsValidCode(true);
        } else {
          // Código no encontrado
          setIsValidCode(false);
          setGuests([]);
          setGuestCode('');
        }
      } catch (error) {
        console.error('Error buscando el código de invitado:', error);
        setIsValidCode(false);
        setGuests([]);
        setGuestCode('');
      }
    } else {
      // Si no hay código, no es válido
      setIsValidCode(false);
      setGuests([]);
      setGuestCode('');
    }
    
    setIsLoading(false);
  }, []);

  const validateAndSetCode = (code: string): boolean => {
    const guestNames = findGuestsByCode(code);
    
    if (guestNames) {
      const guestList = guestNames.map(name => ({
        name: name.trim(),
        attending: true,
        dietaryRestrictions: {
          anyFood: false,
          vegetarian: false,
          vegan: false,
          celiac: false
        }
      }));
      
      setGuests(guestList);
      setGuestCode(code.toUpperCase());
      setIsValidCode(true);
      
      // Actualizar la URL
      const newUrl = `${window.location.origin}/${code.toUpperCase()}`;
      window.history.pushState({}, '', newUrl);
      
      return true;
    } else {
      setIsValidCode(false);
      setGuests([]);
      setGuestCode('');
      return false;
    }
  };

  const updateGuestAttendance = (index: number, attending: boolean) => {
    setGuests(prev => prev.map((guest, i) => 
      i === index ? { ...guest, attending } : guest
    ));
  };

  const updateGuestDietaryRestrictions = (index: number, restrictions: {
    anyFood: boolean;
    vegetarian: boolean;
    vegan: boolean;
    celiac: boolean;
  }) => {
    setGuests(prev => prev.map((guest, i) => 
      i === index ? { ...guest, dietaryRestrictions: restrictions } : guest
    ));
  };

  const getAttendingCount = () => {
    return guests.filter(guest => guest.attending).length;
  };

  const getTotalCount = () => {
    return guests.length;
  };

  return {
    guests,
    guestCode,
    isLoading,
    isValidCode,
    validateAndSetCode,
    updateGuestAttendance,
    updateGuestDietaryRestrictions,
    getAttendingCount,
    getTotalCount
  };
}; 