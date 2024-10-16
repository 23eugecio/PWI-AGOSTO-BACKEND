import ENVIROMENT from "./config/enviroment.config.js";
import express from "express";
import statusRouter from "./router/status.router.js";

import configDB from './db/config.js'
import authRouter from "./router/auth.router.js";
import transporter from "./config/transporter.config.js";

const app = express();
const PORT = ENVIROMENT.PORT || 3000 //puerto auxiliar para que el servidor se pueda levantar en el 3000

app.use(express.json())

app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)


/**
 * Send an email using the transporter
 * @param {string} html - The content of the email
 * @param {string} subject - The subject of the email
 * @param {string} to - The recipient of the email
 * @returns {Promise<void>}
 */

const sendEmail = async (options) => {
    try{
        let response = await transporter.sendMail(options)
    }
    catch(error){
        // para traquear mejor el error y arreglarlo
        console.error('error al enviar el mail:', error)
        //Para que la funcion que invoque a esta funcion tambien le salte el error
        throw error
    }

}
sendEmail(
    {html: 'Hola desde nodejs', 
    subject: 'probar',
    to: 'mariaeugeniaciotti8@gmail.com'
    })

app.listen(PORT, () => {
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})