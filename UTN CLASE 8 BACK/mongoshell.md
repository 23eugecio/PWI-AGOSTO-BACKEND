


ACLARACION: CUANDO PONGA ASI NO ES HTML O ALGO QUE DEBA USAR, SIMPLEMENTE REMPLACEN, EJEMPL:



use <nombre_base_datos> | Van a escribir: use db_clases


Movernos a la base de datos que queremos usar:
nombre: <nombre_base_de_datos>


Crear una colecccion

db.createColletion("usuarios")

ejemplo:

db.APP_HOMEWORKING_UTN_TM.createCollection("usuarios")

## insertar en nuestra coleccion:

db.nombre_coleccion_a_inseetar.insertOne(<objeto-de_insercion>)

db.nombre_coleccion_a_inseetar.insertMany(<array_de_insercion>)

db.usuarios.insertOne({
    
    nombre: "pepe",
    email: "pepe@gmail.com",
    rol: "usuario",
    password: "pepesito123",
    nr_telefono: " +54 911 232536256",
    direccion: "Argentina, Bs As",
    creado_en: new date()
})

db.nombre_coleccion_a_inseetar.insertMany(
    [
        {
    nombre: "pepe",
    email: "pepe@gmail.com",
    rol: "usuario",
    password: "pepesito123",
    nr_telefono: " +54 911 232536256",
    direccion: "Argentina, Bs As",
    creado_en: new Date()
},
{
    nombre: "pepe",
    email: "pepe@gmail.com",
    rol: "usuario",
    password: "pepesito123",
    nr_telefono: " +54 911 232536256",
    direccion: "Argentina, Bs As",
    creado_en: new Date()
},
{
    nombre: "pepe",
    email: "pepe@gmail.com",
    rol: "usuario",
    password: "pepesito123",
    nr_telefono: " +54 911 232536256",
    direccion: "Argentina, Bs As",
    creado_en: new Date()
}
]
)

