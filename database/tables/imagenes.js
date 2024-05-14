const { obtenerConexion } = require('../conexion');

async function verificarImagenYaCovertidas(usuarioId, imagenId) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query(
            'SELECT * FROM imagen WHERE usuario_id = ? AND imagen_id = ?',
            [usuarioId, imagenId]
        );
        return results.length > 0;
    } finally {
        conexion.release();
    }
}

async function agregarImagen(usuarioId, imagenId) {
    const imagenEnCovertida = await verificarImagenYaCovertidas(usuarioId, imagenId);

    if (imagenEnCovertida) {
        await actualizarCantidad(imagenId);
    } else {
        const conexion = await obtenerConexion();
        try {
            await conexion.query(
                `INSERT INTO imagen (usuario_id, imagen_id) VALUES (?, ?)`,
                [usuarioId, imagenId]
            );
            console.log('Imagen convertida exitosamente');
        } finally {
            conexion.release();
        }
    }
}

async function actualizarCantidad(cantidad, usuarioId, imagenId) {
    if (cantidad < 1) {
        await quitarImagen(usuarioId, imagenId);
    } else {
        const conexion = await obtenerConexion();
        try {
            await conexion.query(
                `UPDATE imagen SET cantidad = ? WHERE usuario_id = ? AND imagen_id = ?`,
                [cantidad, usuarioId, imagenId]
            );
            console.log('Imagen convertidas guardadas actualizadas');
        } finally {
            conexion.release(); // Liberar la conexión al finalizar
        }
    }
}

module.exports = {
    agregarImagen,
    actualizarCantidad
};