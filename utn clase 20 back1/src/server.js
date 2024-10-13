import ENVIROMENT from "./config/enviroment.config.js";
import express from "express";
import statusRouter from "./router/status.router.js";




import configDB from './db/config.js'
import authRouter from "./router/auth.router.js";

const app = express();
const PORT = ENVIROMENT.PORT || 3000 //puerto auxiliar para que el servidor se pueda levantar en el 3000

app.use(express.json())

app.use('/api/status',statusRouter)
app.use('/api/auth', authRouter)

app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})