const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('SVG', { title: 'Convertir a SVG' });
    res.render('SVG', { subtitle: 'Convertir imagen' });
});

module.exports = router;