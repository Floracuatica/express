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
      content: `Soy Rommy, amante de la palabra, el código y las hortensias.
      Estudio para enseñar con ternura y precisión, y construyo un portafolio que une creatividad y tecnología.`
    });
  });

  return router;
};
