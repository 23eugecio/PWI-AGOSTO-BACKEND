import { sendEmail } from "../utils/builders/mail.util.js"
import ENVIROMENT from "../config/enviroment.config.js"
import User from "../models/user.model.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"




export const registerUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existenUser = await User.findOne({ email: email })
        console.log({ existenUser })
        if (existenUser) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setMessage('Bad request')
                .setPayload(
                    {
                        detail: 'El email ya esta en uso!'
                    }
                )
                .build()
            res.status(400).json(response)
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = jwt.sign(
            {
                email: email
            }, ENVIROMENT.JWT_SECRET, {
            expiresIn: '1d'
        })
        //token de verificacion

        const url_verification = `http://localhost:${ENVIROMENT.PORT}/api/auth/verify/${verificationToken}`
        await sendEmail({
            to: email,
            subject: 'Valida tu correo electronico',
            html: `
            <h1>Verificacion de correo electronico</h1>
            <p>Da click en el boton de abajo para verificar</p>
            <a 
                style='background-color: 'black'; color: 'white'; padding: 5px; border-radius: 5px;'
                href="${url_verification}"
            >Click aqui</a>
            `
        })



        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken: verificationToken,
            emailVerified: false
        })
        //metodo para guardar el objeto en la DB 
        await newUser.save()

        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Created')
            .setPayload({})
            .build()
        return res.status(201).json(response)
    }
    catch (error) {
        console.error('error al registrar el usuario', error)
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Internal server error')
            .setPayload(
                {
                    detail: error.message
                }
            )
            .build()
        return res.status(500).json(response)
    }
}

export const verifyMailValidationTokenController = async (req, res) => {
    try {
        const { verification_token } = req.params
        if (!verification_token) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setPayload({
                    'detail': 'falta enviar token'
                })
                .build()
            return res.json(response)
        }
        //Verificamos la firma del token, debe ser la misma que la clave secreta, eso asegura que este token sea emitido por mi servidor.
        //Si fallara la lectura/verificacion/expiracion hara un throw
        //La constante decoded tiene el payload de mi token
        const decoded = jwt.verify(verification_token, ENVIROMENT.JWT_SECRET)
        //Busco el usuario de mi DB por email
        const user = await User.findOne({ email: decoded.email })
        if (!user) {
            //logica de error de not found
        }
        if (user.emailVerified) {
            //Logica de email ya verificado
        }
        // En caso de pasar la validaciones
        user.emailVerified = true
        /* user.verificationToken = undefined */

        await user.save()
        const response = new ResponseBuilder()
        .setOk(true)
        .setMessage('Email verificado con exito')
        .setStatus(200)
        .setPayload({
            message: "Usuario Validado"
        })
        .build()
        res.json(response)

    }
    catch (error) {
        console.error(error)
    }
}






/* let value = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhZXVnZW5pYWNpb3R0aThAZ21haWwuY29tIiwiaWF0IjoxNzI5MDAxNjQyLCJleHAiOjE3MjkwODgwNDJ9.iTvylogWBmsrfks7wkHZoQvNG1kCyaamvrZkV3TGbDQ', ENVIROMENT.JWT_SECRET)
console.log(value) */