import mongoose from "mongoose";
import ENVIROMENT from "../config/enviroment.config.js";


console.log(ENVIROMENT.DB_URL)

mongoose.connect(ENVIROMENT.DB_URL)
.then(
    () => {
        console.log('Conexion exitosa con la DB!')
    }
)
.catch(
    (error) => {
        console.log('Error de conexion')
    }
)

export default mongoose