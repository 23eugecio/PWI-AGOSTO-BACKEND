"use strict";
/* class Accion {
    id: number;
    description: string;
    date: number;
    constructor(id: number, description: string, date: number) {
        this.id = id;
        this.description = description;
        this.date = date;
    }
}

class AppHistory extends Accion{
    constructor(id: number, description: string, date: number) {
        super(id, description, date);
    }
}

class UserHistory {
    user: AppHistory[];
    id: number;
    constructor() {
        this.user = [];
        this.id = 0;
    }
}

class Action {
    user: AppHistory[];
    id: number;
    constructor(id: number, user: AppHistory[]) {
        this.id = id;
        this.user = user;
    }
    
    addNewAction(action: AppHistory) {
        this.user.push(action);
    }

    deleteActionById(id: number) {
        this.user = this.user.filter(action => action.id !== id);
    }

    deleteAllActions() {
        this.user = [];
    }

    showHistory() {
        console.log(this.user);
    }
}
 */
/* Mariana */
/* class Accion {
    id: number
    descripcion: string
    fecha: string

    constructor(
        id: number,
        descripcion: string,
        fecha: string
    ) {
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
    }
}

class Historial {
    acciones: Accion[]
    contadorId: number

    constructor() {
        this.acciones = []
        this.contadorId = 0
    }

    agregarAccion(descripcion: string, fecha: string): Accion[] {
        const nuevaAccion = new Accion(this.contadorId++, descripcion, fecha)
        this.acciones.push(nuevaAccion)
        return this.acciones
    }

    obtenerAccionPorId(id: number): Accion | undefined {
        return this.acciones.find((accion: Accion) => accion.id === id)
    }

    eliminarAccionPorId(id: number): Accion[] {
        this.acciones = this.acciones.filter((accion: Accion) => accion.id !== id)
        return this.acciones
    }

    eliminarTodo(): void {
        this.acciones = []
    }

    mostrarHistorial(): void {
        console.log('Historial de acciones: ')
        this.acciones.forEach(accion => {
            console.log(`Id: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`)
        })
    }
}


const historial = new Historial()
historial.agregarAccion('Inicio sesion', '26/08/2024')
historial.agregarAccion('Vio el perfil', '26/08/2024')
historial.agregarAccion('Cerro sesion', '26/08/2024')

historial.mostrarHistorial()

const obtenerAccion = historial.obtenerAccionPorId(1)
console.log(obtenerAccion)

historial.eliminarAccionPorId(1)
historial.mostrarHistorial()

historial.eliminarTodo()
historial.mostrarHistorial() */
/* CHAT GPT */
class Accion {
    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = new Date(); // La fecha se asigna automáticamente al crear la acción
    }
}
class Historial {
    constructor() {
        this.acciones = []; // Array para almacenar las acciones
    }
    // Método para agregar una nueva acción al historial
    agregarAccion(accion) {
        this.acciones.push(accion);
        console.log(`Acción agregada: ${accion.descripcion}`);
    }
    // Método para eliminar una acción por su ID
    eliminarAccionPorID(id) {
        const index = this.acciones.findIndex(accion => accion.id === id);
        if (index !== -1) {
            const accionEliminada = this.acciones.splice(index, 1)[0];
            console.log(`Acción eliminada: ${accionEliminada.descripcion}`);
        }
        else {
            console.log(`No se encontró la acción con ID: ${id}`);
        }
    }
    // Método para eliminar todas las acciones del historial
    eliminarTodo() {
        this.acciones = [];
        console.log("Se han eliminado todas las acciones del historial.");
    }
    // Método para mostrar todas las acciones en el historial
    mostrarHistorial() {
        if (this.acciones.length === 0) {
            console.log("El historial está vacío.");
        }
        else {
            console.log("Historial de acciones:");
            this.acciones.forEach(accion => {
                console.log(`ID: ${accion.id}, Descripción: ${accion.descripcion}, Fecha: ${accion.fecha}`);
            });
        }
    }
}
// Crear una instancia de la clase Historial
const miHistorial = new Historial();
// Crear algunas acciones
const accion1 = new Accion(1, "Usuario inició sesión");
const accion2 = new Accion(2, "Usuario subió un archivo");
const accion3 = new Accion(3, "Usuario cerró sesión");
// Agregar acciones al historial
miHistorial.agregarAccion(accion1);
miHistorial.agregarAccion(accion2);
miHistorial.agregarAccion(accion3);
// Mostrar el historial
miHistorial.mostrarHistorial();
// Eliminar una acción por su ID
miHistorial.eliminarAccionPorID(2);
// Mostrar el historial nuevamente
miHistorial.mostrarHistorial();
// Eliminar todo el historial
miHistorial.eliminarTodo();
// Mostrar el historial nuevamente
miHistorial.mostrarHistorial();
