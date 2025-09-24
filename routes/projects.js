const express = require('express');

module.exports = (projects) => {
  const router = express.Router();

  // /projects
  router.get('/', (req, res) => {
    res.render('projects', {
      title: 'Proyectos',
      projects
    });
  });

  // /projects/:id (detalle opcional)
  router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const project = projects.find(p => p.id === id);
    if (!project) {
      return res.status(404).render('404', { title: 'No encontrado', url: req.originalUrl });
    }
    res.render('project-detail', { title: project.name, project });
  });

  return router;
};
