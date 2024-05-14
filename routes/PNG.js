const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('PNG', { title: 'Convertir a PNG' });
    res.render('PNG', { subtitle: 'Convertir imagen' });
});

module.exports = router;