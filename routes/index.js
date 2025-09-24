const express = require('express');

module.exports = (projects) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('home', {
      title: 'Inicio',
      name: 'Rommy Solange Béjar Rivera',
      description: 'Traductora, desarrolladora en formación y creadora de mundos. Aquí comparto proyectos y poesía.',
      projects
    });
  });

  router.get('/about', (req, res) => {
    res.render('about', {
      title: 'Sobre mí',
      content: `Soy Rommy, estudiante de la palabra, el código y los pequeños detalles en el css.
      Estudio para enseñar con correcta precisión, y construyo un portafolio que une creatividad y tecnología.`
    });
  });

  return router;
};
