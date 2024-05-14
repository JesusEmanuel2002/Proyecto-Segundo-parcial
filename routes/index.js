const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: req.user != null ? `Bienvenido ${req.user.nombre}` : 'Foto mat', user: req.user != null ? `${req.user.nombre}` : ''});
});

module.exports = router;