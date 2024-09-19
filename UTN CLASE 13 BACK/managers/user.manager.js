import ERRORES from "../constants/errors.js"
import Usuario from "../models/user.model.js"

/**
 * Crea un nuevo usuario en la base de datos.
 *
 * @param {string} nombre - Nombre del usuario.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} rol - Rol del usuario.
 * @param {string} password - Contraseña del usuario.
 * @param {string} telefono - Teléfono del usuario.
 * @param {string} direccion - Dirección del usuario.
 * @return {object} El usuario creado.
 */
const crearUsuario = async (nombre, email, rol, password, telefono, direccion) =>{
    try{
        const usuario = new Usuario({
            nombre, 
            email, 
            rol, 
            password, 
            telefono, 
            direccion
        })
        const resultado = await usuario.save()
        return resultado
    }
    catch(error){
        const customError = ERRORES[error.code]
        console.log(customError)
        console.log(error)
    }
}

const buscarUsuarioPorId = async (id) => {
    try{
        if(!id){
            throw {error: 'No recibi un id', code: 3}
        }
        const result = await Usuario.findById(id)
        return result
    }
    catch(error){
        throw error
    }
}

const actualizarUsuario = async (id, data) => {
    try{
        //findByIdAndUpdate
        //Recibe ID, objeto de cambios, objeto de opciones
        //id: id del elemento a actualizar
        //objeto de cambios: objeto con los cambios que queremos hacer en el documento
        //opciones: objeto de opciones de la actualizacion: ej: {new: true} hace que el metodo retorne el objeto ya actualizado en vez del objeto previo a la actualizacion
        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, data, {new: true})
        console.log(usuarioActualizado)
    }
    catch(error){
        console.log("ERROR", error)
    }
    
}

const eliminarUsuarioPorId = async (id) => {
    try{
        const resultado = await Usuario.findByIdAndDelete(id)
        console.log(resultado)
    }
    catch(error){
        console.error(error)
    }
}

/* actualizarUsuario('66e97b026aa53285a15f607d', {direccion: 'prueba 5', valor: 'prueba 4'})
 */

eliminarUsuarioPorId('66e97b026aa53285a15f607d')

export { crearUsuario, buscarUsuarioPorId }