import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormData } from '../utils/extractFormData'




const ForgotPassword = () => {

    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        const form_HTML = e.target
        const form_Values = new FormData(form_HTML)
        const form_fields = {
            'email': ''
        }
        const form_values_object = extractFormData(form_fields, form_Values)
        fetch('http://localhost:3000/api/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' //Aca le indicamos al back que lo que enviamos es un JSON
            },
            body: JSON.stringify(form_values_object)
        })
            .then(
                (response) => {
                    console.log({ response })
                    return response.json()
                }
            )
            .then(
                (body) => {
                    console.log({ body })
                }
            )
            .catch(
                (error) => { console.error(error) }
            )
    }
    return (
        <div>
            <div>
                <h1>Olvidaste tu contraseña!!! </h1>
                <p>Enviaremos un mail a tu email de usuario para enviarte los pasos asi puedes restablecer tu contraseña!</p>
                <form onSubmit={handleSubmitLoginForm}>
                    <div>
                        <label htmlFor='email'>Ingrese su Email: </label>
                        <input name='email' id='email' placeholder='@gmail.com'></input>
                    </div>
                    <button type='Submit'>Enviar Email!</button>
                </form>
                <span>Si tienes cuenta, puedes ir a <Link to='/login'>Inicia seccion Aqui!</Link></span>
                <br/>
                <span>Si aun no tienes cuenta, puedes ir a <Link to='/register'>Registrate!</Link></span>
            </div>
        </div>
    )
}

export default ForgotPassword
