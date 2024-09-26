// son los que tendran las responsailidad de interactuar con la base de datos
//ejemplos:
//getProductById 
import { leerJson } from '../utils/jsonManager.util.js'
/* ventajas de repository:

Poner una capa logica sobra la obtencion de datos separado de la logica de negocio.

Si el dia de mañana por x motivo nos cambian la base de datos, entonces solo debemos modifiar la capa logica repository

*/

const getUserByName = (name) => {
    try{
        const usuarios =leerJson('usuarios')
        const usuario = usuarios.find(user => user.name === name) 
        return usuarioBuscado//busca el usuario por el nombre y devuelve el usuarios
    }
    catch(error){
        console.log(error)
    }
}

export default  { getUserByName }