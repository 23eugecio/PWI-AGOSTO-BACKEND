import ENVIROMENT from "../config/enviroment.config.js"
import User from "../models/user.model.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../utils/mail.util.js"
import UserRepository from "../repositories/user.repository.js"





export const registerUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!email) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setMessage('Bad request')
                .setPayload(
                    {
                        detail: 'El email no es valido!'
                    }
                )
                .build()
            res.status(400).json(response)
        }
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
            },
            ENVIROMENT.JWT_SECRET, {
            expiresIn: '1d'
        }) //token de verificacion

        const url_verification = ` http://localhost:${ENVIROMENT.PORT}/api/auth/verify/${verificationToken}`
        await sendEmail({
            to: email,
            subject: 'Validad tu correo electronico',
            html: `
            <h1>Verificacion de correo electronico</h1>
            <p>Da Click en el boton de abajo para verificar!</p>
            <a 
                stile='background-color: 'black'; color: white; padding: 5px; border-radius: 5 px'
                href= "${url_verification}"
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
        console.error('error al registrar el usuario')
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
                    'detail': 'Falta enviar token'
                })
                .build()
            return res.json(response)
        }
        //verificamos la firma del token, debe ser la misma que mi clave secreta, eso asegura que este token sea emitido por mi servidor
        //Si fallara la lectura/verificacion/expiracion hara un throw
        // La constante tiene el payload de mi token
        const decoded = jwt.verify(verification_token, ENVIROMENT.JWT_SECRET)
        // busco al usuario por email
        const user = await User.findOne({ email: decoded.email })
        if (!user) {
            //logica de eror de not found
        }
        if (user.emailVerified) {
            //Logica de email ya verificado
        }
        // en caso de pasar las verificaciones
        user.emailVerified = true
        /* user.verificationToken = undefined */
        await user.save()

        const response = new ResponseBuilder()
            .setOk(true)
            .setMessage('Email verificado con exito')
            .setStatus(200)
            .setPayload({
                message: "Usuario validado"
            })
            .build()
        res.json(response)
    }
    catch (error) {
        console.error(error)
    }
}


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setMessage('Usuario no encontrado')
                .setPayload({
                    detail: 'El Email no esta registrado'
                })
                .build()
            return res.json(response)
        }
        if (!user.emailVerified) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(403)// error 403: el cliente no posee los permisos necesarios para cierto contenido / contenido prohibido para usuarios que no verificaron el email
                .setMessage('Email no verificado')
                .setPayload({
                    detail: 'Verifica tu correo electronico antes de iniciar seccion'
                })
                .build()
            return res.json(response)
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(401)
                .setMessage('Credenciales incorrectas')
                .setPayload({
                    detail: 'Contraseña Incorrecta'
                })
                .build()
            return res.json(response)
        }
        const token = jwt.sign({ email: user.email, id: user._id }, ENVIROMENT.JWT_SECRET, { expiresIn: '1d' })
        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200) // logeo existoso
            .setMessage('Login Existoso')
            .setPayload({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            })
            .build()
        return res.json(response)

    }
    catch (error) {
        const response = new ResponseBuilder()
            .setOk(false)
            .setStatus(500)
            .setMessage('Internal server error')
            .setPayload({
                detail: error.message
            })
            .build()
        return res.json(response)
    }

}

export const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body
        if (!email) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setMessage('Necesitas un Email válido')
                .setPayload({
                    detail: 'Falta enviar el email.'
                })
                .build();
            return res.status(400).json(response);
        }

        const user = await UserRepository.obtenerPorEmail(email);
        if (!user) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(404)
                .setMessage('Usuario no encontrado')
                .setPayload({
                    detail: 'El email no está registrado.'
                })
                .build()
            return res.status(404).json(response)
        }

        const resetToken = jwt.sign({ email: user.email }, ENVIROMENT.JWT_SECRET, {
            expiresIn: '1h' 
        });

        const resetUrl = `http://localhost:${ENVIROMENT.PORT}/api/auth/reset-password/${resetToken}`;
        
        // Sending email
        await sendEmail({
            to: user.email,
            subject: 'Restablecer contraseña',
            html: `
            <div>
                <h1>Has solicitado restablecer tu contraseña</h1>
                <p>Haz clic en el enlace de abajo para restablecer la contraseña:</p>
                <a href='${resetUrl}'>Restablecer</a>
            </div>
            `
        });

        const response = new ResponseBuilder()
            .setOk(true)
            .setStatus(200)
            .setMessage('Se envió el correo.')
            .setPayload({
                detail: 'Se envió un correo electrónico con las instrucciones para restablecer la contraseña.'
            })
            .build()

        return res.json(response);
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            status: 500,
            message: 'Internal server error',
        });
    }
};











/* const resultado = bcrypt.compareSync('pepe123','$2b$10$DquS0nhkfv.y7JVoIB8Et.m2grkP0P.sx9WpdoqivEt5YSzsyu1E.')
console.log({resultado}) */