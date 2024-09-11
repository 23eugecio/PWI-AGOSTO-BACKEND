

/* 
Crear una funcion llamada calcularIva que reciba un precio y retorne un objeto con

recibe 100
{
    iva: 21,
    precio_original: 100,
    precio_final: 121
}
*/

/**
 * Calcula el precio con IVA (Impuesto al Valor Agregado) para un precio dado.
 *
 * @param {number} precio - El precio original sin IVA.
 * @return {Object} Un objeto que contiene el IVA, el precio original y el precio final.
 * @return {Object.iva} {number} El monto del IVA calculado.
 * @return {Object.precio_original} {number} El precio original sin IVA.
 * @return {Object.precio_final} {number} El precio final con IVA incluido.
 */
const calcularPrecioConIva = (precio) => {
    const iva = precio * 0.21
    const precio_final = precio + iva
    return {
        iva,
        precio_original: precio,
        precio_final
    }
}



module.exports = {
    calcularPrecioConIva: calcularPrecioConIva,
    nombre: 'pepito'
}