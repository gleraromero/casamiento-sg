# 🎉 Sitio Web del Casamiento - Gonzalo & Sofía

Sitio web oficial de invitación para el casamiento de Gonzalo y Sofía, desarrollado con amor y dedicación.

## ✨ Características

- **Diseño elegante**: Paleta de colores morados y verde azulado
- **Responsive**: Optimizado para desktop, tablet y móvil
- **Accesible**: Cumple con estándares de accesibilidad web
- **Contador regresivo**: Tiempo restante hasta el casamiento
- **RSVP**: Sistema de confirmación de asistencia
- **Información completa**: Detalles del evento, dress code, regalos

## 🛠️ Tecnologías

- **React 19** con TypeScript
- **Vite** para build y desarrollo
- **React Bootstrap** para componentes UI
- **Lucide React** para iconos
- **CSS Variables** para diseño consistente

## 🚀 Desarrollo Local

### Prerrequisitos

- Node.js 20.19.0 (usar `nvm use` para cambiar versión)
- npm

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd casamiento-sg

# Instalar dependencias
npm install

# Configurar variables de entorno
cp env.example .env
# Editar .env con los valores correctos

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Verificar código

## 🌐 Deploy

### Railway

1. Conectar el repositorio a Railway
2. Configurar variables de entorno en Railway
3. Deploy automático en cada push a main

### Variables de Entorno Requeridas

```env
VITE_APP_TITLE=Casamiento Gonzalo & Sofía
VITE_WEDDING_DATE=2025-10-19T18:00:00
VITE_WEDDING_LOCATION=Salón de Fiestas Elegante
VITE_WEDDING_ADDRESS=Av. Principal 1234, Buenos Aires
VITE_WEDDING_LAT=-34.6037
VITE_WEDDING_LNG=-58.3816
VITE_RSVP_ENDPOINT=https://api.example.com/rsvp
VITE_CONTACT_PHONE=+54 11 1234-5678
VITE_CONTACT_EMAIL=casamiento@email.com
VITE_CONTACT_WHATSAPP=+54 11 1234-5678
```

## 📱 Secciones del Sitio

1. **Header** - Nombres y fecha del casamiento
2. **Countdown** - Contador regresivo
3. **Event Details** - Información del evento y mapa
4. **Dress Code** - Código de vestimenta
5. **Gifts** - Información sobre regalos
6. **RSVP** - Confirmación de asistencia
7. **Footer** - Información de contacto

## 🎨 Paleta de Colores

- **Morados**: `#C0B0D0`, `#A088B8`, `#8A6F9E`, `#9B80B0`
- **Verde azulado**: `#70A090`, `#609080`, `#507070`
- **Fondo**: `#F8F8F8` (blanco roto)
- **Grises**: Para contornos y texto secundario

## ♿ Accesibilidad

- ARIA labels en todos los componentes
- Navegación por teclado
- Contraste de colores optimizado
- Textos alternativos en iconos
- Estados de foco visibles

## 📄 Licencia

Este proyecto es privado y está desarrollado específicamente para el casamiento de Gonzalo y Sofía.

---

Desarrollado con ❤️ para nuestro día especial
