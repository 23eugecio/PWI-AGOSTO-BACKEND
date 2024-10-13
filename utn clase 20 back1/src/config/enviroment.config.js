import dotenv from 'dotenv'


// va a leer el archivo env y guardar los valores en process.env
dotenv.config()


const ENVIROMENT = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET
}

export default ENVIROMENT