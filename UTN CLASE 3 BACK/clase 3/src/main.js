"use strict";
let nombre = 'pepe';
nombre = null;
/* soy un avariable de JS ni mas ni menos  */
let datoRandom = 'hola';
/* evitar any, ultimo recurso */
console.log('hola ' + nombre);
/* sumar(a, b) devuelve a + b */
function sumar(a, b) {
    return a + b;
}
sumar(1, 2);
/* cuando hay un ? al final de un parametro significa que ese valor es Opcional */
/* const saludar = (edad : number = 10, nombre?: string) =>{
    console.log('mi edad es ' + edad)
    if (nombre){
        return 'hola' + nombre
    }
    else{
        return "hola, no se tu nombre"
    }
}

console.log(saludar(9)) */
/* prompt('dime algo', 'hola') */
/*
interface Persona  {
    nombre: string,
    apellido: string,
    edad: number
}

const persona : Persona = {
    nombre: 'pepe',
    apellido: "suarez",
    edad: 10
}

const persona_2 : Persona = {
    nombre: 'pepe',
    apellido: "suarez",
    edad: 10
}

const saludarAPersona = (persona : Persona) : void  => {
    alert('hola' + persona.nombre)
}


saludarAPersona(persona_2) */
/* calcularIva que recibe un numero y devuelve un numero que sera el 21% del numero recibido

obtenerImpuestIva que recibira un numero y retornara un objeto, el objeto tendra el siguiente esquema:
{
    iva: 21% del numero recibido,
    total: numero recibido + iva,
    base: numero recibido */
function calcularIva(iva) {
    return iva * 21 / 100;
}
const obtenerImpuestoIva = (iva) => {
    return {
        iva: iva * 21 / 100,
        total: iva + (iva * 21 / 100),
        base: iva
    };
};
const crearPersonaje = (nombre, edad, ciudadOrigen) => {
    return {
        nombre: nombre,
        edad: edad,
        ciudadOrigen: ciudadOrigen,
        vida: 100,
        armadura: 500,
        ataque: 1000,
        defensa: 500
    };
};
