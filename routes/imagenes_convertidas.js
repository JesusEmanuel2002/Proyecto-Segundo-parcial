const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('imagenes_convertidas', { title: 'Imagenes corvertidas' });
});