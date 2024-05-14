const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('JPEG', { title: 'Convertir a JPEG' });
});

module.exports = router;