const {crearTxt, leerTxt, crearJSON} = require('./utils/sistemaArchivos.js')
/* const { calcularPrecioConIva } = require('./utils/calculosVarios.js')  */
/* const { formatearPrecio } = require('./utils/formatos.js')  */

const persona = {
    nombre: 'pepe',
    edad: 21,
}

crearJSON('persona-1', persona)



/* const precio_vaso = 20 */

/* const formatear_precio = formatearPrecio(precio_vaso)

console.log(formatear_precio)
 */
/* 
const objeto_iva = calcularPrecioConIva(precio_vaso)
console.log(objeto_iva)
console.log('El iva del vaso es: $' + formatearprecio(precio_vaso))   */






/* crearTxt('archivo2.txt', 'woaw esto es node js 😎🚀') */
/* leerTxt('') */
let persona_1 = leerJSON('persona-1')
console.log(persona)



const { validarEmail, validarNumero, validarNombre } = require('./utils/validaciones');


let email_recibido = 'pepe@pepe';
console.log(validarEmail(email_recibido)); 

let numero_recibido = '1234';
console.log(validarNumero(numero_recibido));  


let nombre_recibido = 'Pepe';
console.log(validarNombre(nombre_recibido));   

