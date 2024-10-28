import nodemailer from 'nodemailer'
import ENVIROMENT from './enviroment.config.js'


/* logica de econfiguracion de nuestro email */


const transporter  = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: ENVIROMENT.GMAIL_USER,
        pass: ENVIROMENT.GMAIL_PASS
    }
})

export default transporter