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

  useEffect(() => {
    // Obtener el código de invitado de la URL
    const pathSegments = window.location.pathname.split('/');
    const codeFromUrl = pathSegments[pathSegments.length - 1];
    
    if (codeFromUrl && codeFromUrl !== '') {
      try {
        // Buscar invitados por código
        const guestNames = findGuestsByCode(codeFromUrl);
        
        if (guestNames) {
          // Crear array de invitados
          const guestList = guestNames.map(name => ({
            name: name.trim(),
            attending: false,
            dietaryRestrictions: {
              anyFood: true,
              vegetarian: false,
              vegan: false,
              celiac: false
            }
          }));
          
          setGuests(guestList);
          setGuestCode(codeFromUrl.toUpperCase());
        } else {
          // Código no encontrado, usar invitados de ejemplo
          setGuests([
            { 
              name: 'Sofia Garcia', 
              attending: false,
              dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
            },
            { 
              name: 'Gonzalo Rodriguez', 
              attending: false,
              dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
            },
            { 
              name: 'Maria Lopez', 
              attending: false,
              dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
            },
            { 
              name: 'Carlos Silva', 
              attending: false,
              dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
            }
          ]);
          setGuestCode('DEMO');
        }
      } catch (error) {
        console.error('Error buscando el código de invitado:', error);
        // Si hay error, usar invitados de ejemplo
        setGuests([
          { 
            name: 'Sofia Garcia', 
            attending: false,
            dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
          },
          { 
            name: 'Gonzalo Rodriguez', 
            attending: false,
            dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
          },
          { 
            name: 'Maria Lopez', 
            attending: false,
            dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
          },
          { 
            name: 'Carlos Silva', 
            attending: false,
            dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
          }
        ]);
        setGuestCode('ERROR');
      }
    } else {
      // Si no hay código, usar invitados de ejemplo
      setGuests([
        { 
          name: 'Sofia Garcia', 
          attending: false,
          dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
        },
        { 
          name: 'Gonzalo Rodriguez', 
          attending: false,
          dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
        },
        { 
          name: 'Maria Lopez', 
          attending: false,
          dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
        },
        { 
          name: 'Carlos Silva', 
          attending: false,
          dietaryRestrictions: { anyFood: true, vegetarian: false, vegan: false, celiac: false }
        }
      ]);
      setGuestCode('DEMO');
    }
    
    setIsLoading(false);
  }, []);

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
    updateGuestAttendance,
    updateGuestDietaryRestrictions,
    getAttendingCount,
    getTotalCount
  };
}; 