/* *Negocio:*
-Somos una empresa de Software (software factory) que se dedica a crear soluciones IT variadas
-Tenemos empleados del rubro IT

    *Tipos de empleados*
    *Project Manager
    *Developers
    *Disigners
    *Marketing

*Problema:*
Necesitamos crear un software que nos permita administrar el manejo de los empleados de la empresa

*Clase empleado:*
    *nombre
    *sueldo
    *fecha_de_contratacion
    *id_empleado
    *tipo: Project Manager, Developer, Disigner, Marketing

*Clase manejador empleados*
    *id_manejador
    *empleados (lista de empleados)

*metodos*
    *agregar_empleado
    *obtener_empleado_por_id
    *obtener_empleados_por_tipo */


/* interface Empleado {
    nombre: string,
    sueldo: number,
    fecha_de_contratacion: number,
    id_empleado: number,
    tipo: string */


interface Empleado {
    nombre: string,
    sueldo: number,
    fecha_de_contratacion: number,
    id_empleado: number,
    tipo: string
}
class Empleado {
    nombre: string;
    sueldo: number;
    fecha_de_contratacion: number;
    id_empleado: number;
    tipo: string
    constructor(nombre: string, sueldo: number, fecha_de_contratacion: number, id_empleado: number, tipo: string) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.id_empleado = id_empleado;
        this.tipo = tipo;
    }
}

class ManejadorEmpleados {
    empleados: Empleado[] = [];
    id_manejador: number;
    constructor(id_manejador: number) {
        this.id_manejador = id_manejador;
        this.empleados = [];
    }

    agregar_empleado(empleado: Empleado): number {
        this.empleados.push(empleado);
        return this.id_manejador;
    }

    obtener_empleados_por_id(id_empleado: number): Empleado | undefined {
        return this.empleados.find((empleado) => empleado.id_empleado === id_empleado);
    }

    obtener_empleados_por_tipo(tipo: string): Empleado[] {
        return this.empleados.filter((empleado) => empleado.tipo === tipo)
    }
}