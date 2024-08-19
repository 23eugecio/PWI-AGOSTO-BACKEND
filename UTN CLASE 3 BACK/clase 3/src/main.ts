let nombre: string | null = 'pepe'
nombre = null

/* soy un avariable de JS ni mas ni menos  */
let datoRandom: any = 'hola'
/* evitar any, ultimo recurso */

console.log('hola ' + nombre)


/* sumar(a, b) devuelve a + b */

function sumar(a: number, b: number): number {
    return a + b
}

sumar(1, 2)

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


function calcularIva (iva : number) : number {
    return iva  * 21 / 100  
}

interface Iva {
    iva: number,
    total: number,
    base: number
}

const obtenerImpuestoIva = (iva : number) : Iva => {
    return {
        iva: iva * 21 / 100,
        total: iva + (iva * 21 / 100),
        base: iva
    }
}



/* crear una funcion que se llame crearPersonaje que recibira un nombre, una edad y una ciudad de origen y retornara
un objeto con el sig esquema:
{
    nombre: nombre,
    edad: edad,
    ciudadOrigen: ciudadOrigen,
    vida: 100,
    armadura: 0,
    ataque: 0,
    defensa: 0
}
 */


interface Personaje {
    nombre: string,
    edad: number,
    ciudadOrigen: string,
    vida: number,
    armadura: number,
    ataque: number,
    defensa: number

}
const crearPersonaje = (nombre: string, edad: number, ciudadOrigen: string) : 
Personaje => {
    return {
        nombre: nombre, 
        edad: edad, 
        ciudadOrigen: ciudadOrigen,
        vida: 100,
        armadura: 500,    
        ataque: 1000,   
        defensa: 500
    }  
}