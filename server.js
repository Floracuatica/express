const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

// Helpers de Handlebars
hbs.registerHelper('currentYear', function() {
  const now = new Date();
  return now.getFullYear();
});

hbs.registerHelper('upper', function(str) {
  return (str || '').toString().toUpperCase();
});

// Configuración de rutas y vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Datos
const projects = require('./data/projects');

// Rutas
const indexRouter = require('./routes/index')(projects);
const projectsRouter = require('./routes/projects')(projects);

app.use('/', indexRouter);
app.use('/projects', projectsRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Página no encontrada',
    url: req.originalUrl
  });
});

// Inicio
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
