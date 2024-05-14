const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('WEBP', { title: 'Convertir a WEPB' });
    res.render('WEPB', { subtitle: 'Convertir imagen' });
});

module.exports = router;