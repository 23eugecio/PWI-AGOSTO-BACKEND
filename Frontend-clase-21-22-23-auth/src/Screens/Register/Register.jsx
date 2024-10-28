import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormdata } from '../utils/extractFormData'


const Register = () => {

    const handleSubmitRegisterForm = (event) => {
        event.preventDefault()
        const form_HTML = event.target
        const form_values = new FormData(form_HTML)
        const form_fields = {
            'name': '',
            'email': '',
            'password': ''
        }
        const form_values_object = extractFormdata(form_fields, form_values)
        fetch('http://localhost:5173/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'// Aca le indicamos al back que lo que le enviamos es un json
            },
            body: JSON.stringify(form_values_object)
        })
        .then(
            (responseHTTP) => {
                console.log({responseHTTP})
                return responseHTTP.json()
            }
        )
        .then(
            (body) => {
                console.log({body})
            }
        )
        .catch(
            (error) => {console.error(error)}
        )
    }
    return (
        <div>
            <h1>Registrate en Nuestra Web!</h1>
            <form onSubmit={handleSubmitRegisterForm}>
                <div>
                    <label htmlFor='name'>Ingrese su Nombre: </label>
                    <input name='name' id='name' placeholder='Escribe tu nombre'></input>
                </div>
                <div>
                    <label htmlFor='email'>Ingrese su Email: </label>
                    <input name='email' id='email' placeholder='@gmail.com'></input>
                </div>
                <div>
                    <label htmlFor='password'>Ingrese su Contraseña: </label>
                    <input name='password' id='password' placeholder='Contraseña'></input>
                </div>
                <button type='Submit'>Registrar</button>
            </form>
            <span>Si ya tienes cuenta, puedes ir a <Link to='/login'>Login!</Link></span>
        </div>
    )
}

export default Register
