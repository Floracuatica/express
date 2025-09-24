# Portafolio con Express + Handlebars (hbs)

Aplicación de ejemplo que sirve un portafolio personal con rutas organizadas, vistas con parciales y contenido dinámico.

## Requisitos
- Node.js 18+

## Instalación
```bash
npm install
npm run dev   # o npm start
```
Abre http://localhost:3000

## Características
- Express con estructura de rutas (`/routes`)
- Handlebars (hbs) como motor de vistas
- Parciales (`header`, `footer`) y layout principal
- Helper personalizado `currentYear`
- Contenido dinámico (lista de proyectos desde `data/projects.js`)
- Archivos estáticos en `/public`
- Páginas: `/` (home), `/about`, `/projects`, `/projects/:id`
- Página 404 personalizada
