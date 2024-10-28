import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormdata } from '../utils/extractFormData'


const Login = () => {

    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        const form_HTML = e.target
        const form_Values = new FormData(form_HTML)
        const form_fields = {
            'email': '',
            'password': ''
        }
        const form_values_object = extractFormdata(form_fields, form_Values)
        fetch('http://localhost:3000/api/auth/login', {
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
                <h1>Inicia seccion: </h1>
                <form onSubmit={handleSubmitLoginForm}>
                    <div>
                        <label htmlFor='email'>Ingrese su Email: </label>
                        <input name='email' id='email' placeholder='@gmail.com'></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Ingrese su Contraseña: </label>
                        <input name='password' id='password' placeholder='Contraseña'></input>
                    </div>
                    <button type='Submit'>Inicia seccion!</button>
                </form>
                <span>Si aun no tienes cuenta, puedes ir a <Link to='/register'>Registrate!</Link></span>
                <br/>
                <span>Si has olvidado tu contraseña??? <Link to='/forgot-password'>Restablecer Contraseña!</Link></span>
            </div>
        </div>
    )
}

export default Login





