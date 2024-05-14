const imagenesDB = require('../database/tables/imagenes');

class imagen {
    constructor(id, nombre, imagen) {
      this.id = id;
      this.nombre = nombre;
      this.imagen = imagen;
    }
  }

async function agregarImagen(usuarioId, productoId, cantidad) {
    try {
        return await imagenesDB.agregarImagen(usuarioId, parseInt(productoId), cantidad);
    } catch(error) {
        console.error('Error a convertir la imagen', error);
        throw error;
    }
}

async function actualizarCantidad(cantidad, usuarioId, productoId) {
    try {
        return await imagenesDB.actualizarCantidad(cantidad, usuarioId, parseInt(productoId));
    } catch(error) {
        console.error('Error al agregar el producto al carrito:', error);
        throw error;
    }
}

module.exports = {
    agregarImagen,
    actualizarCantidad
  };