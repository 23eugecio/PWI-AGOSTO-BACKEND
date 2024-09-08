/* clase base Accion */

class Accion {
    id: number;
    descripcion: string;
    fecha: Date;

    constructor(id: number, descripcion: string, fecha: Date) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

    mostrarDetalle(): void {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}`);
    }
}

/* clase derivada AccionInicioSession */

class AccionInicioSession extends Accion {
    dispositivo_origen: string;

    constructor(id: number, descripcion: string, fecha: Date, dispositivo_origen: string) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
    }

    mostrarDetalle(): void {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Dispositivo: ${this.dispositivo_origen}`);
    }
}

/* clase derivada AccionCierreSession */

class AccionCierreSession extends Accion {
    dispositivo_origen: string;
    tiempo_de_session: number;

    constructor(id: number, descripcion: string, fecha: Date, dispositivo_origen: string, tiempo_de_session: number) {
        super(id, descripcion, fecha);
        this.dispositivo_origen = dispositivo_origen;
        this.tiempo_de_session = tiempo_de_session;
    }

    mostrarDetalle(): void {
        console.log(`ID: ${this.id}, Descripción: ${this.descripcion}, Fecha: ${this.fecha}, Dispositivo: ${this.dispositivo_origen}, Tiempo de sesión: ${this.tiempo_de_session} minutos`);
    }
}

/* clase derivada Cambio */
class Cambio {
    id_cambio: number;
    valor_anterior: string;
    nuevo_valor: string;
    campo: string;

    constructor(id_cambio: number, valor_anterior: string, nuevo_valor: string, campo: string) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
        this.campo = campo;
    }

    mostrarCambio(): void {
        console.log(`ID: ${this.id_cambio}, Valor anterior: ${this.valor_anterior}, Nuevo valor: ${this.nuevo_valor}, Campo: ${this.campo}`);
    }
}

/* clase deribada AccionActualizacionPerfil */

class AccionActualizacionPerfil extends Accion {
    cambios: Cambio[];

    constructor(id: number, descripcion: string, fecha: Date, cambios: Cambio[]) {
        super(id, descripcion, fecha);
        this.cambios = cambios;
    }

    mostrarDetalle(): void {
        console.log(`ID: ${this.id}, Descripcion: ${this.descripcion}, Fecha: ${this.fecha}`);
        this.cambios.forEach((cambio) => cambio.mostrarCambio())
    }
}

/* clase deribada AccionCompra */

class AccionCompra extends Accion {
    productos: string[];
    total: number;

    constructor(id: number, descripcion: string, fecha: Date, productos: string[], total: number) {
        super(id, descripcion, fecha)
        this.productos = productos;
        this.total = total;
    }

    mostrarDetalle(): void {
        console.log(`ID: ${this.id}, Descripcion: ${this.descripcion}, Fecha: ${this.fecha}, Productos: ${this.productos.join(', ')}, Total: $${this.total}`);
    }
}

/* clase derivada AccionEnvioMensaje */

class AccionEnvioMensaje extends Accion {
    destinatario: string;
    mensaje: string;

    constructor(id: number, descripcion: string, fecha: Date, destinatario: string, mensaje: string) {
        super(id, descripcion, fecha);
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }

    mostrarDetalle(): void {
        console.log(`ID: ${this.id}, Descripcion: ${this.descripcion}, Fecha: ${this.fecha}, Destinatario: ${this.destinatario}, Mensaje: ${this.mensaje}`);

    }
}

/* clase Historial */

class Historial {
    acciones: Accion[] = [];

    agregarAccion(accion: Accion): void {
        this.acciones.push(accion);
    }

eliminarAccionPorID(id: number): void {
    this.acciones = this.acciones.filter(Accion => Accion.id !== id);
}

eliminarTodo(): void {
    this.acciones = [];
}

mostrarHistorial(): void {
    this.acciones.forEach(accion => accion.mostrarDetalle());
}
}

const inicioSesion = new AccionInicioSession(1, "Usuario inició sessión", new Date("2024-08-31T12:00:00Z"), "PC de Escritorio");
const cambios = [
    new Cambio(1, "correo@viejo.com", "correo@nuevo.com", "email"),
    new Cambio(2, "1234", "5678", "password")
];
const actualizacionPerfil = new AccionActualizacionPerfil(2, "Usuario actualizó su perfil", new Date("2024-08-31T12:05:00Z"), cambios);
const cierreSesion = new AccionCierreSession(3, "Usuario cerró sesión", new Date("2024-08-31T12:30:00Z"), "PC de Escritorio", 30);
const compra = new AccionCompra(4, "Usuario realizó una compra", new Date("2024-08-31T12:45:00Z"), ["Laptop", "Ratón"], 1500);
const envioMensaje = new AccionEnvioMensaje(5, "Usuario envió un mensaje", new Date("2024-08-31T13:00:00Z"), "admin@example.com", "Hola, necesito ayuda con mi cuenta.");

/* Crear el historial y agregar acciones */

const historial = new Historial();
historial.agregarAccion(inicioSesion);
historial.agregarAccion(actualizacionPerfil);
historial.agregarAccion(cierreSesion);
historial.agregarAccion(compra);
historial.agregarAccion(envioMensaje);

/* Mostrar el historial completo */

historial.mostrarHistorial();

/*  Eliminar una acción por ID */

historial.eliminarAccionPorID(3);

/*  Mostrar el historial después de la eliminación */

historial.mostrarHistorial();

/* Eliminar todo el historial */

historial.eliminarTodo();