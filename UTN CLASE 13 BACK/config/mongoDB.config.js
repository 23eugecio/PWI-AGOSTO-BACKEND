import mongoose from "mongoose";

const DB_URL = 'mongodb://localhost:27017'
const DB_NAME = 'APP_HOMEWORKING_UTN_TM'
const DB_CONNECTION_STRING = `${DB_URL}/${DB_NAME}`

mongoose.connect(DB_CONNECTION_STRING)

const database = mongoose.connection

database.once('open', () =>{
    console.log('Conexion exitosa con MONGO DB')
})

database.on('error', () =>{
    console.error('ERROR MONGO DB')
})

/* 
Estamos exportando a mongoose que ya esta conectado
y a database para poder interactuar con la DB
*/


export { mongoose, database }