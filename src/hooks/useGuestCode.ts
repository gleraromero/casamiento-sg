import { useState, useEffect } from 'react';

interface Guest {
  name: string;
  attending: boolean;
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
        // Decodificar el base64
        const decodedString = atob(codeFromUrl);
        const guestNames = decodedString.split(';').filter(name => name.trim() !== '');
        
        // Crear array de invitados
        const guestList = guestNames.map(name => ({
          name: name.trim(),
          attending: false
        }));
        
        setGuests(guestList);
        setGuestCode(codeFromUrl);
      } catch (error) {
        console.error('Error decodificando el código de invitado:', error);
        // Si hay error, usar invitados de ejemplo
        setGuests([
          { name: 'Sofia Garcia', attending: false },
          { name: 'Gonzalo Rodriguez', attending: false },
          { name: 'Maria Lopez', attending: false },
          { name: 'Carlos Silva', attending: false }
        ]);
      }
    } else {
      // Si no hay código, usar invitados de ejemplo
      setGuests([
        { name: 'Sofia Garcia', attending: false },
        { name: 'Gonzalo Rodriguez', attending: false },
        { name: 'Maria Lopez', attending: false },
        { name: 'Carlos Silva', attending: false }
      ]);
    }
    
    setIsLoading(false);
  }, []);

  const updateGuestAttendance = (index: number, attending: boolean) => {
    setGuests(prev => prev.map((guest, i) => 
      i === index ? { ...guest, attending } : guest
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
    getAttendingCount,
    getTotalCount
  };
}; 