import mongoose from "mongoose";


const DB_URL = 'mongodb://localhost:27017'
const DB_NAME = 'APP_HOMEWORKING'
const DB_CONNECTION_STRING = `${DB_URL}/${DB_NAME}`

mongoose.connect(DB_CONNECTION_STRING)


const database = mongoose.connection

database.once('open', () =>{
    console.log('conexion exitosa con  MONGO DB')
})
database.on('error', () => {
    console.error('ERROR MONGO DB: ')
})

console.log('pepe')
/* estamos exportando a mongoose que ya esta conectado y database para interactuar */

export { mongoose, database }