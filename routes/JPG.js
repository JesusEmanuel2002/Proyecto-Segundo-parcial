const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('JPG', { title: 'Convertir a JPG' });
    res.render('JPG', { subtitle: 'Convertir imagen' });
});

module.exports = router;