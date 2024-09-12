import filesystem from 'fs'
import  ERRORES from '../constants/error.js'


const crearTxt = async (nombre_archivo, texto) => {
    try {

        if (!nombre_archivo) {
            throw { detail: 'no hay nombre de archivo', name: 'Invalid_Argument' }
        }
        if (!texto) {
            throw { detail: 'no hay texto', name: 'txt_invalid' }
        }
        await filesystem.promises.writeFile('./logs/' + nombre_archivo + '.txt', texto, 'utf8')
        console.dir('archivo creado con exito!')
    }
    catch (error) {

        const errorCustom = ERRORES[error.name]
        if (errorCustom)
            errorCustom.action('index.js linea 18', error.detail)
            console.log(error)
        console.error('no se puede guardar el error')
        throw error
    }

}

const procesoX = async  () => {
    try{
        await crearTxt('log-1', 'pepe')
        await crearTxt('log-2', 'juan')
        /* console.log('accion super importante') */
    }
    catch(error){
        console.log('error en el proceso X')
    }


}

procesoX()