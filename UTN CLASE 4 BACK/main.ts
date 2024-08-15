/* /* Tema pendienta de TypeScript */



/* const arrayEspecial : [string, number] = ['pepe', 15]

const mostrarEdad = (persona : [string, number]) : void => {
    console.log(persona[1])
}
 */

/* 
-datos primitivos
-funciones
-objetos literales
-objetos con interfaz
-arrays
-metodos avanzados de arrays?
*/


/* const nombres: string[] = ['pepe', 'juan', 'maria'];

const notas: number[] = [10, 7, 2]
 */


/* const producto_1: Producto = {
    nombre: 'tv Sony',
    id: 1,
    precio: 50000,
    descripcion: 'lorem',
    title: ''
} 
 */
/* producto_1.title = 'juan' /* esto esta MAL! */ 

/* interface Producto {
    nombre: string,
    id: number,
    precio: number,
    descripcion: string,
    title: string
} 

const lista_productos: Producto[] = [
    producto_1,
    {
        nombre: 'tv Noblex',
        id: 2,
        precio: 30,
        descripcion: 'todo',
        title: ''
    },
    {
        nombre: 'tv LG',
        id: 3,
        precio: 50,
        descripcion: 'la mejor',
        title: 'si'
    }
] */

/* 

forEach => void

map => array 

filter => array con el tipo de array original
Productos[] => filter() => Productos[]

find => elemento del array | undefined
Productos[] =>  find() => Producto | undefined
Item[] => find() => Item | undefined

findIndex => number | -1

*/


/* const tvNoblex: Producto | undefined = lista_productos.find(
        (producto : Producto) : boolean => {
            return producto.id === 2
        }
    )

console.log(tvNoblex) */


/* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 esten como true, pero los que sean mayores o iguales esten como false

[
    {precio: 10},
    {precio: 20},
    {precio: 41},
    {precio: 50}
]

return 

[
    true,
    true,
    false,
    false
]
*/

/* const lista_productos : Producto[] = [
    producto_1,
    {
        nombre: 'tv noblex',
        id: 2,
        precio: 30,
        descripcion: 'lorem',
        title: 'La mejor'
    },
    {
        nombre: 'tv LG',
        id: 3,
        precio: 50,
        descripcion: 'lorem',
        title: 'Si'
    }
] */

/* 
forEach => void

map => array

filter => array con el tipo de array original
Productos[] =>  filter() => Productos[]

find => elemento del array | undefined
Productos[] => find() => Producto | undefined
Item[] => find() => Item | undefined

findIndex => number 
 */

/* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 esten como true, pero los que sean mayores o iguales esten como false

[
    {precio: 10},
    {precio: 20},
    {precio: 41},
    {precio: 50}
]

return 

[
    true,
    true,
    false,
    false
]
*/
/* 
interface Producto {
    nombre: string;
    id: number;
    precio: number;
    descripcion: string;
    title: string;
}
const producto_1: Producto = {
    nombre: 'tv Samsung',
    id: 1,
    precio: 20,
    descripcion: 'lorem',
    title: 'Increíble'
};
const lista_productos: Producto[] = [
    producto_1,
    {
        nombre: 'tv Noblex',
        id: 2,
        precio: 30,
        descripcion: 'lorem',
        title: 'La mejor'
    },
    {
        nombre: 'tv LG',
        id: 3,
        precio: 50,
        descripcion: 'lorem',
        title: 'Si'
    }
];
const arrayBooleanos: boolean[] = lista_productos.map(producto => producto.precio < 40);
console.log(arrayBooleanos); 

 */
/* Aqui veremos POO en TypeScript */


/* class Personaje {
    nombre : string

    constructor(nombre: string){
        this.nombre = nombre 
    }
    comer(comida : string = 'lechuga') : string{
        return this.nombre + 'esta comiendo' + comida
    }
}

const personaje_principal : Personaje = new Personaje('pepe')
let mensaje : string = personaje_principal.comer('pollo frito')
document.write(mensaje) */





class Producto{
    nombre: string
    precio: number
    id: number
    constructor(nombre : string, precio : number, id : number){
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

let id_counter = 0
class ManejadorProductos {
    productos : Producto[]
    id: number

    constructor(){
        this.productos = []
        this.id = id_counter++
    }
    agregarProducto (producto : Producto) : Producto[]{
        this.productos.push(producto)
        return this.productos
    }
}

const manejadorProductos : ManejadorProductos = new ManejadorProductos()

console.log(manejadorProductos)