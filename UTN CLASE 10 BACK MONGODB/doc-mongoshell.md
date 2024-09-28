
## ACLARACION: cuando ponga <> no es HTML o algo que deban usar, simplemente reemplazen

Ejemplo:

use <nombre_base_datos> | Van a escribir: use db_clases


## Movernos a la base de datos que queremos usar

use <nombre_base_de_datos> 

## Crear una coleccion

db.createCollection("<nombre_coleccion>")

ejemplo:

db.createCollection("usuarios")

## Insertar en nuestra coleccion:

db.<nombre_coleccion_a_insertar>.insertOne(<objeto_de_insercion>)
db.<nombre_coleccion_a_insertar>.insertMany(<array_de_insercion>)

db.usuarios.insertOne({
    nombre: "Pepe",
    email: "pepe@gmail.com",
    rol: "usuario",
    password: "pepesito123",
    nro_telefono: "+54 911 23221323",
    direccion: "Argentina, BS AS",
    creado_en: new Date()
})

db.usuarios.insertMany(
    [
        {
            nombre: "Pepe",
            email: "pepe@gmail.com",
            rol: "usuario",
            password: "pepesito123",
            nro_telefono: "+54 911 23221323",
            direccion: "Argentina, BS AS",
            creado_en: new Date()
        },
        {
            nombre: "Pepe",
            email: "pepe@gmail.com",
            rol: "usuario",
            password: "pepesito123",
            nro_telefono: "+54 911 23221323",
            direccion: "Argentina, BS AS",
            creado_en: new Date()
        }
    ]
)

## Buscar elementos en nuestra DB:

db.usuarios.find({email: "pepe@gmail.com"})
db.usuarios.findOne({email: "pepe@gmail.com"})

## Eliminar un elemento en nuestra DB:

db.usuarios.deleteOne({_id: ObjectId("66d9ad9af76682ba5f5e9d9a")})

## Eliminar multiples elementos:

db.usuarios.deleteMany({_id: ObjectId("66d9ad9af76682ba5f5e9d9a")})


## Actualizar elementos: 

db.usuarios.updateOne(
    {
        _id: ObjectId("66d9ad9af76682ba5f5e9d9b")
    },
    {
        $set: {
            email: "pepesito@gmail",
            nro_telefono: "675465464",
            nombre: "pepesito",
            password: "pepesito123"
        }
    }
)