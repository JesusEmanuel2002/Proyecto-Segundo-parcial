const imagenesModel = require('../models/imagenesModel');


async function agregarImagen(usuarioId, imagenId) {
    const resultado = await imagenesModel.agregarImagen(usuarioId, imagenId);
    return resultado;
}

async function obtenerImagen(usuarioId) {
    const imagen = imagenesModel.obtenerImagen(usuarioId);
    return imagen;
}

module.exports = {
    agregarImagen,
    obtenerImagen
};