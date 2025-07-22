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
    guests: ['Alejandro Fernandez', 'Carolina Paparatto']
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
    guests: ['Franco Castellacci', 'Invitado adicional']
  },
  {
    code: 'AC276',
    guests: ['Agustín Montero', 'Carolina Dalpiaz']
  },
  {
    code: 'MI367',
    guests: ['Mariana Lirusso', 'Invitado adicional']
  },
  {
    code: 'DM505',
    guests: ['Daniel Chiavassa', 'María José Matoso']
  },
  {
    code: 'CJ548',
    guests: ['Camila Chiavassa', 'Juan Gerra']
  },
  {
    code: 'GDL155',
    guests: ['Guido Accardo', 'Delfina Baravalle', 'Lupe Accardo']
  },
  {
    code: 'LA209',
    guests: ['Liliana Chiavassa', 'Ángel Scolieri']
  },
  {
    code: 'LA987',
    guests: ['Lorena Lirusso', 'Andrés Petrone']
  },
  {
    code: 'A344',
    guests: ['Amanda Cerruti']
  },
  {
    code: 'A228',
    guests: ['Aldana Flores']
  },
  {
    code: 'I576',
    guests: ['Ignacio Blazquez']
  },
  {
    code: 'F692',
    guests: ['Florencia Mariño']
  },
  {
    code: 'P465',
    guests: ['Paulina Aguirre']
  },
  {
    code: 'G536',
    guests: ['Gabriela Peralta']
  },
  {
    code: 'CP915',
    guests: ['Camila Franco', 'Persona invitada']
  },
  {
    code: 'B137',
    guests: ['Belén Martinez Aspesi']
  },
  {
    code: 'CC039',
    guests: ['Camila Benitez', 'Carlos']
  },
  {
    code: 'M354',
    guests: ['Micaela de Rosa']
  },
  {
    code: 'BG488',
    guests: ['Belén Servin', 'Gabriel Nava']
  },
  {
    code: 'DJ996',
    guests: ['Dafne Gonzalez', 'Javier Escalante']
  },
  {
    code: 'MT586',
    guests: ['Mathias Levis', 'Tamara Perez Olescovicz']
  },
  {
    code: 'RP844',
    guests: ['Rodrigo Vega', 'Persona invitada']
  },
  {
    code: 'LV381',
    guests: ['Lucas Francioni', 'Victoria']
  },
  {
    code: 'MP101',
    guests: ['María Candela Bertolucci', 'Persona invitada']
  },
  {
    code: 'EL935',
    guests: ['Eliana Paz', 'Lucas Meli']
  },
  {
    code: 'JD779',
    guests: ['Juduth Delvalle', 'Diego Ledesma']
  },
  {
    code: 'AN967',
    guests: ['Agustina López Lameiro', 'Nicolas Prystupa']
  },
  {
    code: 'SM304',
    guests: ['Sonia', 'Marcelo']
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