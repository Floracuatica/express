const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de handlebars con layout y helpers
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  helpers: {
    currentYear: () => new Date().getFullYear(),
    upper: str => (str || '').toUpperCase()
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


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
