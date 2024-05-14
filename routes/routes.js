const express = require('express');
const router = express.Router();

const index = require('./index');
const login = require('./login');
const registro = require('./registro');
const JPEG = require('./JPEG');
const JPG = require('./JPG');
const PNG = require('./PNG');
const SVG = require('./SVG');
const WEBP = require('./WEBP');
const imagenesConvertidas = require('./imagenes_convertidas');
const registarUsuario = require('./actualizar-cantidad');

router.use('/', index);
router.use('/login', login);
router.use('/registro', registro);
router.use('./JPEG', JPEG);
router.use('./JPG', JPG);
router.use('./SVG', SVG);
router.use('./WEBP', WEBP);
router.use('./PNG', PNG);
router.use('./imagenes_convertidas', imagenesConvertidas);
router.use('./registar-usuario', registarUsuario);


module.exports = router;