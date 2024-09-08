"use strict";
/* clase base Accion */
class Accion {
    constructor(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    mostrarDetalle() {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}`);
    }
}
/* clase derivada AccionInicioSession */
class AccionInicioSession extends Accion {
    constructor(id, descripcion, fecha, dispositivo_origen) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
    }
    mostrarDetalle() {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Dispositivo: ${this.dispositivo_origen}`);
    }
}
/* clase derivada AccionCierreSession */
class AccionCierreSession extends Accion {
    constructor(id, descripcion, fecha, dispositivo_origen, tiempo_de_session) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_session = tiempo_de_session;
    }
    mostrarDetalle() {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Dispositivo: ${this.dispositivo_origen}, Tiempo de sesión: ${this.tiempo_de_session} minutos`);
    }
}
