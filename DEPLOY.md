# 🚀 Guía de Deploy - Sitio Web del Casamiento

## 📋 Checklist Pre-Deploy

- [x] ✅ Código compila sin errores
- [x] ✅ Linting pasa sin errores
- [x] ✅ Build de producción optimizado
- [x] ✅ Variables de entorno configuradas
- [x] ✅ Archivos de configuración Railway creados
- [x] ✅ Workflow de GitHub Actions configurado

## 🌐 Deploy Automático (Recomendado)

### 1. Conectar a Railway

1. Ir a [Railway.app](https://railway.app)
2. Crear cuenta o hacer login
3. Click en "New Project"
4. Seleccionar "Deploy from GitHub repo"
5. Conectar el repositorio `gleraromero/casamiento-sg`

### 2. Configurar Variables de Entorno

En Railway Dashboard > Variables:

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

### 3. Configurar GitHub Secrets (Opcional)

Para deploy automático con GitHub Actions:

1. Ir a GitHub > Settings > Secrets and variables > Actions
2. Agregar:
   - `RAILWAY_TOKEN`: Token de Railway
   - `RAILWAY_SERVICE`: ID del servicio

### 4. Deploy

El deploy se ejecutará automáticamente en cada push a `main`.

## 🔧 Deploy Manual

### Con Railway CLI

```bash
# Instalar CLI
npm install -g @railway/cli

# Login
railway login

# Conectar proyecto
railway link

# Deploy
railway up
```

### Con Docker (Alternativo)

```bash
# Build de imagen
docker build -t casamiento-sg .

# Ejecutar
docker run -p 3000:3000 casamiento-sg
```

## 📊 Monitoreo

### Logs
- Railway Dashboard > Deployments > View Logs
- CLI: `railway logs`

### Métricas
- Railway Dashboard > Metrics
- Performance y uptime

### Health Check
- URL: `https://your-app.railway.app/`
- Debe retornar 200 OK

## 🔄 Actualizaciones

### Automático
- Push a `main` = Deploy automático
- Pull Request = Deploy de preview

### Manual
```bash
git push origin main
# O
railway up
```

## 🚨 Troubleshooting

### Build Fails
1. Verificar Node.js 20.19.0
2. `npm ci` para instalar dependencias
3. `npm run build` localmente

### Variables de Entorno
1. Verificar en Railway Dashboard
2. Reiniciar servicio después de cambios

### Dominio Personalizado
1. Configurar DNS según Railway
2. Esperar propagación (hasta 24h)

## 📞 Soporte

- Railway Docs: https://docs.railway.app
- GitHub Issues: Para bugs del código
- Railway Support: Para problemas de infraestructura

---

**¡El sitio está listo para el casamiento! 🎉** 