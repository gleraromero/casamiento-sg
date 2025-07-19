interface GuestList {
  code: string;
  guests: string[];
}

export const guestCodes: GuestList[] = [
  {
    code: 'ABC123',
    guests: ['Sofía García', 'Gonzalo Rodríguez']
  },
  {
    code: 'DEF456',
    guests: ['María López', 'Carlos Silva']
  },
  {
    code: 'GHI789',
    guests: ['Ana Martínez', 'Pedro González', 'Lucía Fernández']
  },
  {
    code: 'JKL012',
    guests: ['Roberto Díaz', 'Carmen Ruiz']
  },
  {
    code: 'MNO345',
    guests: ['Diego Morales', 'Valentina Herrera']
  },
  {
    code: 'PQR678',
    guests: ['Fernando Castro', 'Isabella Torres']
  },
  {
    code: 'STU901',
    guests: ['Miguel Vargas', 'Camila Jiménez']
  },
  {
    code: 'VWX234',
    guests: ['Alejandro Rojas', 'Daniela Mendoza']
  },
  {
    code: 'YZA567',
    guests: ['Gabriel Ortega', 'Natalia Vega']
  },
  {
    code: 'BCD890',
    guests: ['Ricardo Flores', 'Paula Romero']
  }
];

// Función para buscar invitados por código
export const findGuestsByCode = (code: string): string[] | null => {
  const guestList = guestCodes.find(list => list.code === code.toUpperCase());
  return guestList ? guestList.guests : null;
};



// Función para generar códigos únicos (para agregar más invitados)
export const generateUniqueCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code: string;
  
  do {
    code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (guestCodes.some(list => list.code === code));
  
  return code;
}; 