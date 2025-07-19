# 🚀 Deploy Manual a Railway

## Instalación de Railway CLI

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login a Railway
railway login
```

## Deploy Manual

```bash
# Inicializar proyecto en Railway
railway init

# Conectar al proyecto existente
railway link

# Deploy
railway up

# Ver logs
railway logs

# Abrir en el navegador
railway open
```

## Variables de Entorno

Configurar en Railway Dashboard o con CLI:

```bash
railway variables set VITE_APP_TITLE="Casamiento Gonzalo & Sofía"
railway variables set VITE_WEDDING_DATE="2025-10-19T18:00:00"
railway variables set VITE_WEDDING_LOCATION="Salón de Fiestas Elegante"
railway variables set VITE_WEDDING_ADDRESS="Av. Principal 1234, Buenos Aires"
railway variables set VITE_WEDDING_LAT="-34.6037"
railway variables set VITE_WEDDING_LNG="-58.3816"
railway variables set VITE_RSVP_ENDPOINT="https://api.example.com/rsvp"
railway variables set VITE_CONTACT_PHONE="+54 11 1234-5678"
railway variables set VITE_CONTACT_EMAIL="casamiento@email.com"
railway variables set VITE_CONTACT_WHATSAPP="+54 11 1234-5678"
```

## Dominio Personalizado

1. Ir a Railway Dashboard
2. Seleccionar el proyecto
3. Ir a Settings > Domains
4. Agregar dominio personalizado
5. Configurar DNS según las instrucciones 