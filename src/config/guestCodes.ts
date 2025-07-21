interface GuestList {
  code: string;
  guests: string[];
}

export const guestCodes: GuestList[] = [
  {
    code: "GS1",
    guests: ["Gonzalo Lera Romero", "Sofia Chiavassa"]
  },
  {
    code: 'S126',
    guests: ['Sandra Cohen']
  },
  {
    code: 'J613',
    guests: ['José Lera Romero']
  },
  {
    code: 'LE342',
    guests: ['Leandro Lera Romero', 'Eli Mickevicius']
  },
  {
    code: 'A109',
    guests: ['Angela Cohen']
  },
  {
    code: 'JJ670',
    guests: ['Julieta Sedler', 'Jorge Galarce']
  },
  {
    code: 'NV534',
    guests: ['Nicolás Sedler', 'Vanina Colledanchise']
  },
  {
    code: 'L143',
    guests: ['Lucas Sedler']
  },
  {
    code: 'UM790',
    guests: ['Uriel Kutner', 'Micaela Fainboim']
  },
  {
    code: 'NJ949',
    guests: ['Nicolás Scherzer', 'Julia Wobken']
  },
  {
    code: 'AF442',
    guests: ['Adrián Borowicz', 'Florencia Gallardo']
  },
  {
    code: 'NK901',
    guests: ['Nicolas Wainer', 'Karen Ridelener']
  },
  {
    code: 'AC801',
    guests: ['Alejandro Fernandez', 'Carolina']
  },
  {
    code: 'JI247',
    guests: ['Jonathan Jusid', 'Invitado adicional']
  },
  {
    code: 'KL834',
    guests: ['Kevin Belter', 'Lorena Rodriguez']
  },
  {
    code: 'BV695',
    guests: ['Brian Kanelson', 'Valeria Tawil']
  },
  {
    code: 'JL836',
    guests: ['Juan José Miranda Bront', 'Laura']
  },
  {
    code: 'FA897',
    guests: ['Federico Pousa', 'Agustina Ciraco']
  },
  {
    code: 'BV382',
    guests: ['Brian Curcio', 'Veronica Coy']
  },
  {
    code: 'PD925',
    guests: ['Pablo Brusco', 'Daniela']
  },
  {
    code: 'JI772',
    guests: ['Juan Bautista Blasco', 'Invitado adicional']
  },
  {
    code: 'MI366',
    guests: ['Mauro Cipollone', 'Invitado adicional']
  },
  {
    code: 'AI593',
    guests: ['Agustín Bernardo', 'Invitado adicional']
  },
  {
    code: 'JI919',
    guests: ['Jonathan Moguilevsky', 'Invitado adicional']
  },
  {
    code: 'PI181',
    guests: ['Pablo Gotuzzo', 'Invitado adicional']
  },
  {
    code: 'FI346',
    guests: ['Franco Selleski', 'Invitado adicional']
  },
  {
    code: 'GI189',
    guests: ['Gonzalo Rizzo', 'Invitado adicional']
  },
  {
    code: 'GE269',
    guests: ['Gabriel Defagot', 'Eliana Galanternik']
  },
  {
    code: 'VI191',
    guests: ['Victor Wjugow', 'Invitado adicional']
  },
  {
    code: 'FI522',
    guests: ['Franco Castelacci', 'Invitado adicional']
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